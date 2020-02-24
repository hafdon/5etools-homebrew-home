const fs = require('fs-extra');

const file = require('/Users/starkat/rpg/dnd5e/_Marshbout/_home/homebrew_json/5etools_pc/src/collection/hafdon_zorq/monster/samai.js');
const write_location = './output.json';

console.log(file);

fs.writeJSONSync(write_location, {
    ...file,
});
