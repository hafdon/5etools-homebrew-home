const fs = require('fs-extra');
const db_filename = './db.json';
const { log } = require('./log.js');

let db = fs.readJSONSync(db_filename);
fs.writeJSONSync(`./bak.d/db_${Date.now()}.bak`, db);

prop_name = 'clock';
let extra_tags = [];

let { [prop_name]: _, ...rest } = db;

const highestId = n => n.reduce((prev, { id = 0 }) => Math.max(prev, id), 0);
let startId = 1;

// let { array } = fs.readJSONSync('./ankidb.json');
// let startId = highestId(lexeme) + 1;
// console.log(startId);
// console.log(lexeme);

// console.log(Object.getOwnPropertyNames(array));

// so have done 0-9 from ankidb

// array = array.slice(0, 10);
// array = array.map(({ id = 0, word, inner }) => ({
//     id: startId++,
//     headword: word,
//     definitions: inner,
// }));

_ = _.sort((a, b) => a.name.localeCompare(b.name)).map(
    ({ name, tags, id, prep, ...rest }) => ({
        name: String(name).trim(),
        id: startId++,
        tags: [...tags, ...extra_tags],
        prep: prep === true ? true : false,
        ...rest,
    })
);

log({ [prop_name]: _ });
db[prop_name] = _;

fs.writeJSONSync(db_filename, db);
