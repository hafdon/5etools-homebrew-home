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

const convertToNpc = function(arr) {
    let index = 186;

    return arr.map(el => {
        let obj = {
            name: el[0],
            description: el[1],
            id: index++,
        };

        return obj;
    });
};

const convertTypeToTags = function(arr) {
    return arr.map(({ type = '', tags = [], ...rest }) => {
        return {
            tags: [...tags, ...type.split(' ')],
            ...rest,
        };
    });
};

// const { rows } = require('./marshbout npcs.js');

const fs = require('fs-extra');

let output_array = convertTypeToTags(fs.readJSONSync('./db.json').bible);
// let output_array = convertToNpc(rows);

fs.writeJSONSync('output.json', output_array);

module.exports = addIndex;
