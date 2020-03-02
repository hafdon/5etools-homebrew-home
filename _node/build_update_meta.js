const fs = require('fs-extra');
const { version } = fs.readJSONSync(`./package.json`);
const { _meta } = fs.readJSONSync(`./src/_meta/_meta.json`);

try {
    // eslint-disable-next-line no-console
    console.log({ version });

    // eslint-disable-next-line no-console
    console.log({ _meta });
    _meta.sources[0].version = version;

    // they don't need miliseconds
    _meta.dateUpdated = +(Date.now() / 1000).toFixed(0);

    fs.writeJSONSync(`./src/_meta/_meta.json`, { _meta });
} catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
}
