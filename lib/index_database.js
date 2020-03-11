const fs = require('fs-extra');
const db_filename = './db.json';
const { log } = require('./log.js');

let db = fs.readJSONSync(db_filename);
fs.writeJSONSync(`./bak.d/db_${Date.now()}.bak`, db);

props = [
    { name: 'clock', tags: [] },
    { name: 'prep', tags: [] },
];

for (let i = 0; i < props.length; i++) {
    let { [props[i].name]: _ } = db;

    // const highestId = n =>
    //     n.reduce((prev, { id = 0 }) => Math.max(prev, id), 0);
    let startId = 1;

    _ = _.sort((a, b) => a.name.localeCompare(b.name)).map(
        ({ name, tags, id, prep, ...rest }) => ({
            name: String(name).trim(),
            id: startId++,
            tags: [...tags, ...props[i].tags],
            prep: prep === true ? true : false,
            ...rest,
        })
    );

    // log({ [prop_name]: _ });
    db[props[i]] = _;
}

fs.writeJSONSync(db_filename, db);
