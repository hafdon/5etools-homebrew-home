/**
 *
 * Build script for 5etools homebrew
 * to meet criteria for pull request to
 * github.com/TheGiddyLimit/homebrew
 *
 */

const fs = require('fs-extra');

// Loggers
const log = require('debug')('build');
const elog = log.extend('error');

log('starting');

const FILTERSTRING = '__';

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

// Get Giddy parent-level folders
try {
    giddy_parent_folders = fs
        .readdirSync(read_dir)
        .filter(e => !e.startsWith(FILTERSTRING))
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
            .filter(e => !e.startsWith(FILTERSTRING));
        sub_dirs.forEach(s => {
            prev.push(`${curr}/${s}`);
        });

        return prev;
    }, []);
} catch (e) {
    elog(e);
    process.exitCode = 1;
}

console.log({ file_array });
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
            .filter(e => !e.startsWith(FILTERSTRING))
            .sort((a, b) => a.localeCompare(b));

        console.log({ folder_array });

        buildObj = folder_array.reduce((prev, curr) => {
            console.log({
                folder,
                read_dir,
                curr,
                prev,
                all: `${read_dir}/${folder}/${curr}`,
            });
            prev[curr] = fs
                .readdirSync(`${read_dir}/${folder}/${curr}`)
                .filter(e => !e.startsWith(FILTERSTRING))
                .reduce((prev, e) => {
                    let data = null;
                    log({ e });
                    if (e.endsWith('.json')) {
                        data = fs.readJSONSync(
                            `${read_dir}/${folder}/${curr}/${e}`
                        );
                    } else if (e.endsWith('.js')) {
                        try {
                            // have to back out a director because node > module.paths shows
                            // only node_modules as a end path
                            data = require(`../${read_dir}/${folder}/${curr}/${e}`);
                        } catch (e) {
                            elog({ 'Error trying to import js module': e });
                        }
                    }

                    if (Object.getOwnPropertyNames(data).includes('uniqueId')) {
                        delete data.uniqueId;
                    }
                    if (e.startsWith('_meta')) {
                        data.dateUpdated = +(Date.now() / 1000).toFixed(0);
                        prev._meta = data;
                    } else {
                        prev.push(data);
                    }

                    return prev;
                }, []);
            return prev;
        }, {});

        log(Object.keys(buildObj));
        /**
         * Write the file to the build directory
         */
        const write_location = `${write_dir}/${folder}.json`;
        fs.writeJSONSync(write_location, {
            ...buildObj,
        });
        log(`written to ${write_location}`);
    } catch (e) {
        elog(`Unable to create build JSON object for folder ${folder}`);
        elog(e);
        process.exitCode = 1;
    }
});

process.exitCode = 0;
