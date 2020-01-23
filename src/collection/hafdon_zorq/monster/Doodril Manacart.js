module.exports = {
    name: 'Doodril Manacart',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['any race'],
    },
    source: 'zorq',
    alignment: ['A'],
    ac: [10],
    hp: {
        average: 4,
        formula: '1d8',
    },
    speed: {
        walk: 30,
    },
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    passive: 10,
    languages: ['any one language (usually Common)'],
    cr: '0',
    action: [
        {
            name: 'Club',
            entries: [
                '{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}2 ({@damage 1d4}) bludgeoning damage.',
            ],
        },
    ],
    environment: [
        'arctic',
        'coastal',
        'desert',
        'forest',
        'grassland',
        'hill',
        'urban',
    ],

    languageTags: ['C', 'X'],
    damageTags: ['B'],
    miscTags: ['MW'],
};
