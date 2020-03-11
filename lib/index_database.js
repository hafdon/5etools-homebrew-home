const fs = require('fs-extra');
const db_filename = './db.json';
const { log } = require('./log.js');

let db = fs.readJSONSync(db_filename);
fs.writeJSONSync(`./bak.d/db_${Date.now()}.bak`, db);

props = [
    { name: 'clock', tags: [], name_key: 'name' },
    { name: 'prep', tags: [], name_key: 'name' },
    { name: 'bible', tags: [], name_key: 'short description' },
    { name: 'faction', tags: [], name_key: 'name' },
    { name: 'location', tags: [], name_key: 'name' },
    { name: 'monster', tags: [], name_key: 'name' },
    { name: 'npc', tags: [], name_key: 'name' },
    { name: 'position', tags: [], name_key: 'name' },
    { name: 'description', tags: [], name_key: 'content' },
    { name: 'lexeme', tags: [], name_key: 'headword' },
    { name: 'work', tags: [], name_key: 'title' },
];

// don't need for now
// 'randoms', 'recap', 'transcript'

for (let i = 0; i < props.length; i++) {
    let { [props[i].name]: _ } = db;

    // const highestId = n =>
    //     n.reduce((prev, { id = 0 }) => Math.max(prev, id), 0);
    let startId = 1;

    _ = _.sort((a, b) =>
        a[props[i].name_key].localeCompare(b[props[i].name_key])
    ).map(
        ({ [props[i].name_key]: name_key, tags = [], id, prep, ...rest }) => ({
            [name_key]: String([name_key]).trim(),
            id: startId++,
            tags: [...tags, ...props[i].tags],
            prep: prep === true ? true : false,
            ...rest,
        })
    );

    // log({ [prop_name]: _ });
    db[props[i].name] = _;
}

delete db['[object Object]'];

fs.writeJSONSync(db_filename, db);
