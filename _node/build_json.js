/**
 *
 * Build script for 5etools homebrew
 * to meet criteria for pull request to
 * github.com/TheGiddyLimit/homebrew
 *
 */

const fs = require('fs-extra');
const CONFIG = require('../.config.js');
const { REMOVE_CANTRIPS } = CONFIG;

// Loggers
const log = require('debug')('build');
// const traitExpandLog = log.extend('trait:expand');
const traitExpandLog = () => {};
const elog = log.extend('error');
const configlog = log.extend('config');

log('starting');

// const FILTERSTRING = '__';
const FILTERARRAY = ['__', '$', '.'];

/**
 * Get a list of the folders in the src/ director
 * which are eligible to be included in the build JSON file
 *
 * If a folder needs to be excluded from this loop,
 * precede the filename with the FILTERSTRING above.
 * All folders which do not begin with this string
 * will end up as properties (keys) in our JSON build file.
 *
 * Sort folder names so as to have '_meta' appear first
 * (and hopefully go to top of JSON output file
 *  to accord with GiddyLimit style )
 */

const read_dir = './src';
const write_dir = './build';
let giddy_parent_folders = [],
    file_array = [];
const blankObjects = [],
    wrongSource = [],
    uniqueId = [],
    spellcastersWrong = {
        ability: [],
        type: [],
        deletingCantrips: [],
    },
    noResist = [],
    noImmune = [];

wrongSourceFoldersCheck = ['hafdon_zorq'];
noTraitNames = [];
/**
 * opens a file (either .json or .js) and returns object of file contents
 *
 * @param {*} filename
 * @returns Object file contents as a javascript object
 */
function getData(filename) {
    let data = null;
    if (filename.endsWith('.json')) {
        data = fs.readJSONSync(filename);
    } else if (filename.endsWith('.js')) {
        try {
            // have to back out a director because node > module.paths shows
            // only node_modules as a end path
            data = require(`../${filename}`);
        } catch (e) {
            elog({ 'Error trying to import js module': e, filename });
        }
    }
    return data;
}

function checkForTraitNames(traitElement, filename) {
    if (traitElement) {
        let props = Object.getOwnPropertyNames(traitElement);

        if (props.includes('entries')) {
            // check for nested recursively
            traitElement.entries = traitElement.entries.map(el =>
                checkForTraitNames(el, filename)
            );

            if (!props.includes('name')) {
                noTraitNames.push(filename);
                traitElement.name = '_';
            }
        }
    }
    return traitElement;
}

// Get Giddy parent-level folders
try {
    giddy_parent_folders = fs
        .readdirSync(read_dir)
        // .filter(e => !e.startsWith(FILTERSTRING))
        .filter(e => !FILTERARRAY.some(s => e.startsWith(s)))
        .sort((a, b) => a.localeCompare(b));
} catch (e) {
    elog(e);
    process.exitCode = 1;
}

log({ giddy_parent_folders });

// get what will be the file names in the giddy parent-level folders
// and whta are our second-level folders
// inside the giddy parent folders

try {
    file_array = giddy_parent_folders.reduce((prev, curr) => {
        let sub_dirs = fs
            .readdirSync(`${read_dir}/${curr}`)
            // .filter(e => !e.startsWith(FILTERSTRING));
            .filter(e => !FILTERARRAY.some(s => e.startsWith(s)));
        sub_dirs.forEach(s => {
            prev.push(`${curr}/${s}`);
        });

        return prev;
    }, []);
} catch (e) {
    elog(e);
    process.exitCode = 1;
}

log({ file_array });
/**
 * For each folder, get a list of contained files.
 * For each file, add its contents to an array
 * where the key is the folder name.
 *
 * Add that (key : string) : (value : Array{})
 * to our JSON object
 */

file_array.forEach(folder => {
    try {
        let buildObj = {};

        let folder_array = fs
            .readdirSync(`${read_dir}/${folder}`)
            // .filter(e => !e.startsWith(FILTERSTRING))
            .filter(e => !FILTERARRAY.some(s => e.startsWith(s)))
            .sort((a, b) => a.localeCompare(b));

        buildObj = folder_array.reduce((prev, curr) => {
            prev[curr] = fs
                .readdirSync(`${read_dir}/${folder}/${curr}`)
                // .filter(e => !e.startsWith(FILTERSTRING))
                .filter(e => !FILTERARRAY.some(s => e.startsWith(s)))
                .reduce((prev_inner, e) => {
                    const filename = `${read_dir}/${folder}/${curr}/${e}`;
                    let data = getData(filename);

                    // break early if the object in the file doesn't have any properties
                    // (i.e. it's a blank object)
                    // this happens by accident
                    try {
                        if (data === undefined || data === null) {
                            elog(new Error(`getData(${filename}) is ${data}`));
                            return prev_inner;
                        } else if (!Object.getOwnPropertyNames(data).length) {
                            blankObjects.push(filename);
                            return prev_inner;
                        } else {
                            // set source to 'zorq' if it's the right file
                            if (
                                wrongSourceFoldersCheck.includes(
                                    folder.split('/')[1]
                                ) &&
                                curr !== '_meta' &&
                                (!data.source || data.source !== 'zorq')
                            ) {
                                wrongSource.push(filename);
                                data.source = 'zorq';
                            }

                            // delete uniqueId property
                            // (this is only used for makebrew)
                            if (
                                Object.getOwnPropertyNames(data).includes(
                                    'uniqueId'
                                )
                            ) {
                                uniqueId.push(filename);
                                delete data.uniqueId;
                            }

                            // if we're supposed to build the table
                            // that is, introduce random indices
                            // and a 1dx
                            if (
                                curr === 'table' &&
                                data.type &&
                                data.type === 'build'
                            ) {
                                data.colLabels.unshift(`1d${data.rows.length}`);
                                data.rows = data.rows.map((r, i) => {
                                    r.unshift('' + (i + 1));
                                    return r;
                                });
                                data.rows = data.rows.sort((a, b) => {
                                    return a[1].localeCompare(b[1]);
                                });
                                delete data.type;
                            }

                            if (curr === 'monster') {
                                // spellcasting elements should have an 'ability' prop
                                // (this only affects the roll20 script build)
                                if (data.spellcasting) {
                                    data.spellcasting = data.spellcasting
                                        .map(v => {
                                            if (!v.ability) {
                                                spellcastersWrong.ability.push(
                                                    filename
                                                );
                                            }
                                            if (
                                                v.type &&
                                                v.type === 'spellcasting'
                                            ) {
                                                spellcastersWrong.type.push(
                                                    filename
                                                );
                                                delete v.type;
                                            }
                                            if (
                                                REMOVE_CANTRIPS &&
                                                v.spells &&
                                                v.spells['0']
                                            ) {
                                                spellcastersWrong.deletingCantrips.push(
                                                    filename
                                                );
                                                delete v.spells['0'];

                                                // if that deletes all the spells,
                                                // then get rid of the whole array
                                                let keys = Object.getOwnPropertyNames(
                                                    v.spells
                                                );

                                                if (keys.length === 0) {
                                                    v = null;
                                                }
                                            }
                                            return v;
                                        })
                                        .filter(el => el !== null);
                                }
                                /**
                                 *  converting {@title} tags into traits
                                 * */

                                if (
                                    data.type &&
                                    data.type.tags &&
                                    data.type.tags.length
                                ) {
                                    //remove title tags
                                    data.type.tags = data.type.tags.reduce(
                                        (prev_inner_2, curr) => {
                                            // if there's a title in the tags
                                            if (curr.startsWith('{@title')) {
                                                // prettier-ignore
                                                let rgx = new RegExp(/{@title (.+?)[|}]/,'gm');
                                                let filename = rgx.exec(curr);

                                                // TODO : index the titles section so I have a name linked to a filename
                                                // so the filenames don't have to be kept in a certain format
                                                filename = filename[1].trim();

                                                if (!data.trait) {
                                                    data.trait = [];
                                                }

                                                traitEntry = getData(
                                                    `${read_dir}/${folder}/.title/${filename}.js`
                                                );

                                                traitEntry.name =
                                                    traitEntry.name +
                                                    ` (${traitEntry.type})`;
                                                delete traitEntry.source;
                                                delete traitEntry.type;
                                                data.trait.push(traitEntry);
                                            } else {
                                                prev_inner_2.push(curr);
                                            }

                                            return prev_inner_2;
                                        },
                                        []
                                    );
                                    // add as traits
                                }
                                /**
                                 * Converting expanding trait tags into entries
                                 */
                                if (data.trait && data.trait.length) {
                                    data.trait = data.trait.reduce(
                                        (prev_inner_2, curr) => {
                                            // prettier-ignore
                                            let rgp_is_expand = new RegExp(/^{@\$.*[|}]*.*}$/);
                                            // prettier-ignore
                                            let rgp_grab_trait = new RegExp(/\$(.+?)[|}]/);

                                            // prettier-ignore
                                            let rgp_is_expand_with_trait = new RegExp(/^{@\$trait.*[|}]*.*}$/);
                                            // prettier-ignore
                                            let rgp_grab_trait_with_trait = new RegExp(/{@\$trait (.+?)[|}]/);

                                            if (
                                                (typeof curr === 'string' ||
                                                    curr instanceof String) &&
                                                (rgp_is_expand.test(curr) ||
                                                    rgp_is_expand_with_trait.test(
                                                        curr
                                                    ))
                                            ) {
                                                let trait_name = '';

                                                if (rgp_is_expand.test(curr)) {
                                                    trait_name = rgp_grab_trait
                                                        .exec(curr)[1]
                                                        .trim();
                                                } else if (
                                                    rgp_is_expand_with_trait.test(
                                                        curr
                                                    )
                                                ) {
                                                    trait_name = rgp_grab_trait_with_trait
                                                        .exec(curr)[1]
                                                        .trim();
                                                }

                                                traitExpandLog({ trait_name });
                                                let filename = trait_name
                                                    .toLowerCase()
                                                    .replace('trait ', '');

                                                let { name, entries } = getData(
                                                    `${read_dir}/${folder}/.trait/${filename}.js`
                                                );

                                                // TODO: convert general trait text to specific monster text
                                                // todo: this should actually be nested, too, and go as deep as needed
                                                entries = entries.map(v => {
                                                    let replace_result = v.replace(
                                                        // /{@\$creaturename\..+?}/g,
                                                        // this one won't capture the .xx
                                                        /{@\$creaturename.*?}/g,
                                                        data.short
                                                            ? data.short
                                                            : data.name
                                                    );
                                                    traitExpandLog({
                                                        v,
                                                        replace_result,
                                                    });
                                                    return replace_result
                                                        ? replace_result
                                                        : v;
                                                });
                                                traitExpandLog({ entries });
                                                prev_inner_2.push({
                                                    name,
                                                    entries,
                                                });
                                            } else {
                                                prev_inner_2.push(curr);
                                            }

                                            return prev_inner_2;
                                        },
                                        []
                                    );

                                    data.trait = data.trait.map(el =>
                                        checkForTraitNames(el, filename)
                                    );
                                }
                            }

                            // if it's the _meta file
                            // update the date and add _meta object as a top-level prop
                            if (e.startsWith('_meta')) {
                                data.dateUpdated = +(Date.now() / 1000).toFixed(
                                    0
                                );
                                prev_inner = data;
                            } else {
                                prev_inner.push(data);
                            }

                            return prev_inner;
                        }
                    } catch (e) {
                        elog({ message: 'Error on getOwnPropertyNames', e });
                    }
                }, []);
            return prev;
        }, {});

        const write_location = `${write_dir}/${folder}.json`;
        log({
            message: `Writing to ... ${write_location}`,
            object: Object.keys(buildObj).reduce((prev_3, curr) => {
                prev_3[curr] = buildObj[curr].length;
                return prev_3;
            }, {}),
        });

        /**
         * Write the file to the build directory
         */

        fs.writeJSONSync(write_location, {
            ...buildObj,
        });
    } catch (e) {
        elog(`Unable to create build JSON object for folder ${folder}`);
        elog(e);
        process.exitCode = 1;
    }
});

if (blankObjects.length) {
    log(
        '\nWARNING: blank objects (not written to output file)!!\n\n',
        blankObjects
    );
}
if (wrongSource.length) {
    log(
        '\nWARNING: the following files have the wrong source property (changed in output file)!!\n\n',
        wrongSource
    );
}
if (uniqueId.length) {
    log(
        '\nWARNING: the following files still have a uniqueId prop (changed in output file)!!\n\n',
        uniqueId
    );
}
if (
    spellcastersWrong.ability.length ||
    spellcastersWrong.type.length ||
    spellcastersWrong.deletingCantrips.length
) {
    log(
        "\nWARNING: the following creatures don't have the ability prop in their spellcasting prop !!\n\n",
        spellcastersWrong.ability
    );
    log('and these have a type when they shouldnt', spellcastersWrong.type);
    log('and these cantrips were deleted', spellcastersWrong.deletingCantrips);
}

if (noTraitNames.length) {
    log({
        message:
            "WARNING: the following files don't have names for all trait objects !! hey have been given temporary names of '_' ",
        noTraitNames,
    });
}

configlog({ ...CONFIG });

process.exitCode = 0;
