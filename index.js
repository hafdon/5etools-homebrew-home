/**
 *
 * Build script for 5etools homebrew
 * to meet criteria for pull request to
 * github.com/TheGiddyLimit/homebrew
 *
 */

const fs = require('fs-extra');
const log = require('debug')('build');
const elog = log.extend('error');

log('starting');

const buildObj = {};
let folders = [];
const write_location = `./build/hafdon_zorq_test.json`;
const FILTERSTRING = '__';

try {
    folders = fs.readdirSync('./src/').filter(e => !e.startsWith(FILTERSTRING));
} catch (e) {
    elog(e);
}

folders.forEach(folder => {
    try {
        const dir = `./src/${folder}`;

        const a = fs.readdirSync(dir);

        const elements = a
            .filter(e => !e.startsWith(FILTERSTRING))
            .reduce((prev, e) => {
                prev.push(fs.readJSONSync(`${dir}/${e}`));
                return prev;
            }, []);

        buildObj[folder] = elements;
    } catch (e) {
        elog('Unable to create build JSON object.');
        elog(e);
    }
});

log(Object.keys(buildObj));

try {
    fs.writeJSONSync(`./build/hafdon_zorq_test.json`, {
        ...buildObj,
    });
    log(`written to ${write_location}`);
} catch (e) {
    elog('Unable to write file.');
    elog(e);
}
