const fs = require('fs');

// let a = fs.readFileSync('./All Decks.js');
let a = fs.readFileSync('./All Decks.js');

a = String(a).replace(/\\/g, '|')
a = String(a).replace(/\\/g, '|')
a = String(a).replace(/\s+/g, ' ');
a = String(a).replace(/<span>/gim, ' ');
a = String(a).replace(/<span.+?>/gim, ' ');
a = String(a).replace(/<\/span>/gim, ' ');
// a = String(a).replace(/<br>\s*?<br>/gim, '<br>');
// a = String(a).replace(/<br>\s*?<br>/gim, '<br>');
// a = String(a).replace(/<br>\s*?<br>/gim, '<br>');
a = String(a).replace(/<\/br>/gim, '');
a = String(a).replace(/<br>/gim, '');
a = String(a).replace(/<\/div>/gim, '');
a = String(a).replace(/<div>/gim, '');
a = String(a).replace(/<b>/gim, '');
a = String(a).replace(/<\/b>/gim, '');
a = String(a).replace(/&nbsp;/gim, '');
a = String(a).replace(/“/gim, "'");
a = String(a).replace(/”/gim, "'");
a = String(a).replace(/\s+/g, ' ');
a = String(a).replace(/\s+/g, ' ');
a = String(a).replace(/<div.+?>/gim, ' ');
a = String(a).replace(/\[/g, '|');
a = String(a).replace(/\]/g, '|');
// a = String(a).replace('module.exports = |', '{"words": [')




// console.log()
// console.log()
// console.log(String(a).substring(0, 260));
// console.log()

a = String(a).replace('module.exports = |', 'module.exports = { "array" : [')
a = String(a).replace(/\s+/g, ' ');
// a = String(a).slice(0, 7133815) + String(a).slice(7133820)
a = a.substring(0, a.length - 4)
a = a + '"}]}'






try {


    console.log("\n\n", a.length)
    console.log("\n\n", `'${String(a).substring(0, 40)}'`)
    console.log("\n\n", `'${String(a).substring(14030230)}'`)
    // console.log("\n\n", String(a).substring(7133818, 7133819));
    fs.writeFileSync('alldecks_out.js', String(a))

    console.log()
    console.log()
    // let b = JSON.parse(String(a))
    // let b = fs.readFileSync('alldecks_out.js')
    // let c = JSON.parse(b)
    let { array } = require('./alldecks_out.js')

    let i = 1;
    array = array.map(({ ...rest }) => ({
        id: i++,
        ...rest
    }))


    // fs.writeFileSync('./ankidb.js', JSON.stringify(c.array[0]))
    fs.writeFileSync('./ankidb.json', JSON.stringify({ array }))

    console.log('\n\n', array[0])





    // const m = require('./alldecks_out_notab.js');
} catch (e) {
    console.log(e);
}


