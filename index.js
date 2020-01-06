const fs = require('fs-extra');
const { version } = require('./package.json');
// const { _meta } = fs.readJSONSync(`./_meta/_meta.json`);
const { _meta } = require('./_meta/_meta.json');
_meta.sources.version = version;

console.log('starting');

const homebrew = {
    // key: folder name for giddy limit and locally
    // value: 5e.tools property name
    item: 'item',
    creature: 'monster',
    spell: 'spell',
};

Object.entries(homebrew).forEach(([folder, prop]) => {
    try {
        const dir = `./${folder}`;
        const a = fs.readdirSync(dir);

        const elements = a
            .filter(e => !['hafdon; zorq.json'].includes(e))
            .reduce((prev, e) => {
                prev.push(fs.readJSONSync(`${dir}/${e}`));
                return prev;
            }, []);

        fs.writeJSONSync(`${dir}/hafdon; zorq.json`, {
            [prop]: elements,
            _meta,
        });
    } catch (e) {
        console.log(e);
    }
});
