const convert = function(arr) {
    let tags = ['location', 'faction'],
        id = 435;

    return arr.map(({ name }) => ({
        name,
        tags,
        id: id++,
    }));
};

const fs = require('fs-extra');

let output_array = convert(require('./input.js'));
// let output_array = convertToNpc(rows);

fs.writeJSONSync('output.json', output_array);
