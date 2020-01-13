/**
 * source: {@creature indentured spirit|ggr}
 */
module.exports = {
    name: 'Tobolux',
    size: 'T',
    type: { type: 'elemental', tags: ['spirit', 'genie'] },
    source: 'zorq',
    alignment: ['A'],
    ac: [11],
    hp: {
        average: 13,
        formula: '3d8',
    },
    speed: {
        walk: 0,
        fly: {
            number: 40,
            condition: '(hover)',
        },
        canHover: true,
    },
    str: 7,
    dex: 13,
    con: 10,
    int: 10,
    wis: 12,
    cha: 11,
    resist: [
        'acid',
        'fire',
        'lightning',
        'thunder',
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    immune: ['cold', 'necrotic', 'poison'],
    conditionImmune: [
        'charmed',
        'exhaustion',
        'frightened',
        'grappled',
        'paralyzed',
        'petrified',
        'poisoned',
        'prone',
        'restrained',
    ],
    passive: 11,
    languages: ['Common', 'Ignan'],
    cr: '1',
    trait: [
        {
            name: 'Incorporeal Movement',
            entries: [
                'The spirit can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object.',
            ],
        },
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Tobolux is a tiny genii spirit. She has the typical turqoise complexion, but on her face are simplified paisley patterns of bright white. She has dark-red hair and her eyes are nested within rose petal leaves which perpetually separate and fall, disappearing into dust before they touch the ground.',
                'Her eye petals are produced and shed perpetually.',
            ],
        },
    ],
    action: [],
    traitTags: ['Incorporeal Movement'],
    damageTags: ['N', 'O'],
    miscTags: ['MW'],
    languageTags: ['LF'],
};
