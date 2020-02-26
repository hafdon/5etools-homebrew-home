const addIndex = function(arr) {
    // console.log(arr);
    let highest_index = arr.reduce((prev, { id = 0 }) => {
        return Math.max(prev, id);
    }, 0);

    arr = arr.map(el => {
        // if (typeof el === 'string' || el instanceof String) {
        //     el = { content: el };
        // }
        // if (el.name) {
        //     el.content = el.name;
        //     delete el.name;
        // }
        el.id = el.id ? el.id : ++highest_index;

        return el;
    });

    return arr;
};

const fs = require('fs-extra');

let output_array = addIndex(fs.readJSONSync('./db.json').title_occupation);

fs.writeJSONSync('output.json', output_array);

module.exports = addIndex;
