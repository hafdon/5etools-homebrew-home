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

const buildObj = {};
const write_location = `./build/collection/hafdon_zorq.json`;
const FILTERSTRING = '__';

let folders = [];

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

const parent_dir = './src/collection/hafdon_zorq';

try {
    folders = fs
        .readdirSync(parent_dir)
        .filter(e => !e.startsWith(FILTERSTRING))
        .sort((a, b) => a.localeCompare(b));
} catch (e) {
    elog(e);
    process.exitCode = 1;
}

log({ folders });

/**
 * For each folder, get a list of contained files.
 * For each file, add its contents to an array
 * where the key is the folder name.
 *
 * Add that (key : string) : (value : Array{})
 * to our JSON object
 */
folders.forEach(folder => {
    try {
        buildObj[folder] = fs
            .readdirSync(`${parent_dir}/${folder}`)
            .filter(e => !e.startsWith(FILTERSTRING))
            .reduce((prev, e) => {
                let data = null;
                log(e);
                if (e.endsWith('.json')) {
                    data = fs.readJSONSync(`${parent_dir}/${folder}/${e}`);
                } else if (e.endsWith('.js')) {
                    try {
                        // have to back out a director because node > module.paths shows
                        // only node_modules as a end path
                        data = require(`../${parent_dir}/${folder}/${e}`);
                    } catch (e) {
                        elog({ 'Error trying to import js module': e });
                    }
                }
                // if (data && folder != '_meta') {
                //     data.uniqueId = crypto
                //         .createHash('sha256')
                //         .update(JSON.stringify(data))
                //         .digest('hex');
                // }
                if (Object.getOwnPropertyNames(data).includes('uniqueId')) {
                    delete data.uniqueId;
                }

                prev.push(data);
                return prev;
            }, []);
    } catch (e) {
        elog(`Unable to create build JSON object for folder ${folder}`);
        elog(e);
        process.exitCode = 1;
    }
});

log(Object.keys(buildObj));

/**
 * Write the file to the build directory
 */
try {
    fs.writeJSONSync(`${write_location}`, {
        ...buildObj,
    });
    log(`written to ${write_location}`);
} catch (e) {
    elog('Unable to write file.');
    elog(e);
    process.exitCode = 1;
}

process.exitCode = 0;
