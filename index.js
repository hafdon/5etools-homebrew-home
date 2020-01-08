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
let folders = [];
const write_location = `./build/hafdon_zorq.json`;
const FILTERSTRING = '__';

/**
 * Get a list of the folders in the src/ director
 * which are eligible to be included in the build JSON file
 *
 * If a folder needs to be excluded from this loop,
 * precede the filename with the FILTERSTRING above.
 * All folders which do not begin with this string
 * will end up as properties (keys) in our JSON build file.
 */
try {
    folders = fs.readdirSync('./src/').filter(e => !e.startsWith(FILTERSTRING));
} catch (e) {
    elog(e);
    process.exitCode = 1;
}

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
            .readdirSync(`./src/${folder}`)
            .filter(e => !e.startsWith(FILTERSTRING))
            .reduce((prev, e) => {
                prev.push(fs.readJSONSync(`./src/${folder}/${e}`));
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
 * Write the file to the build director
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
