const util = require('util');

const log = function(myObject) {
    console.log(util.inspect(myObject, false, null, true /* enable colors */));
};

module.exports = { log };
