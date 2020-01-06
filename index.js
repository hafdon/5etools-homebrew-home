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

Object.entries(homebrew).forEach(([folder, prop]) => {
    try {
        const dir = `./src/${folder}`;
        const a = fs.readdirSync(dir);

        const elements = a
            .filter(
                e => !['hafdon; zorq.json'].includes(e) && !e.startsWith('_') // these are arrays
            )
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
