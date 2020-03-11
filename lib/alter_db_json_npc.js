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

let npcs = fs.readJSONSync('./db.json').npc;

let i = 0;
npcs = npcs.map(({ claimed = false, ...rest }) => {
    if (claimed !== false && claimed !== true) {
        if (claimed === null) {
            // eslint-disable-next-line no-console
            console.log({ claimed, ...rest });
            // eslint-disable-next-line no-console

            console.log('claimed is null');
            claimed = false;
        }
        // eslint-disable-next-line no-console
        console.log({ claimed, ...rest });
        i++;
    }

    return { claimed, ...rest };
});

fs.writeJSONSync('output.json', npcs);

module.exports = addIndex;
