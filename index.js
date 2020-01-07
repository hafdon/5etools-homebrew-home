const fs = require('fs-extra');
const { _meta } = fs.readJSONSync(`./src/_meta/_meta.json`);

console.log('starting');

const homebrew = {
    // key: folder name for giddy limit and locally
    // value: 5e.tools property name
    item: 'item',
    creature: 'monster',
    spell: 'spell',
    deity: 'deity',
};

const buildObj = {};

Object.entries(homebrew).forEach(([folder, prop]) => {
    try {
        const dir = `./src/${folder}`;

        const a = fs.readdirSync(dir);

        const elements = a.reduce((prev, e) => {
            prev.push(fs.readJSONSync(`${dir}/${e}`));
            return prev;
        }, []);

        buildObj[prop] = elements;
    } catch (e) {
        console.log(e);
    }
});
console.log({ spell: buildObj.spell });

try {
    fs.writeJSONSync(`./build/hafdon_zorq.json`, {
        ...buildObj,
        _meta,
    });
} catch (e) {
    console.log(e);
}
