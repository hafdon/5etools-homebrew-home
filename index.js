const fs = require('fs-extra');
const { version } = fs.readJSONSync(`./package.json`);
const { _meta } = fs.readJSONSync(`./_meta/_meta.json`);

console.log({ version });

console.log({ _meta });
_meta.sources[0].version = version;
_meta.dateUpdated = Date.now();

fs.writeJSONSync(`./_meta/_meta.json`, { _meta });

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
