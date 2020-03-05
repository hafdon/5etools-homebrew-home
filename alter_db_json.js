const fs = require('fs-extra');
const db_filename = './db.json';

let db = fs.readJSONSync(db_filename);
fs.writeJSONSync('./db.bak', db);

let lexeme = db.lexeme;

const highestId = n => n.reduce((prev, { id = 0 }) => Math.max(prev, id), 0);

let { array } = fs.readJSONSync('./ankidb.json');
let startId = highestId(lexeme) + 1;
console.log(startId);

// console.log(Object.getOwnPropertyNames(array));

array = array.map(({ id = 0, ...rest }) => ({
    id: startId++,
    ...rest,
}));

db.lexeme = array;

fs.writeJSONSync(db_filename, db);
