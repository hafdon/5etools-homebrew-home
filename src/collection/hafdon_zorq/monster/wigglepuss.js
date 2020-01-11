module.exports = {
    name: 'Wigglewut',
    size: 'L',
    type: 'beast',
    source: 'zorq',
    alignment: ['U'],
    ac: [13],
    hp: {
        average: 33,
        formula: '6d10',
    },
    speed: {
        walk: 10,
        fly: 60,
    },
    str: 15,
    dex: 16,
    con: 11,
    int: 6,
    wis: 12,
    cha: 2,
    senses: ['blindsight 60 ft.'],
    passive: 11,
    cr: '1',
    trait: [
        {
            name: 'Echolocation',
            entries: [
                "The bat can't use its blindsight while {@condition deafened}.",
            ],
        },
        {
            name: 'Keen Hearing',
            entries: [
                'The bat has advantage on Wisdom ({@skill Perception}) checks that rely on hearing.',
            ],
        },
    ],
    action: [
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one creature. {@h}12 ({@damage 3d6 + 2}) piercing damage.',
            ],
        },
    ],
    environment: ['forest', 'underdark'],
    traitTags: ['Keen Senses'],
    senseTags: ['B'],
    damageTags: ['P'],
    miscTags: ['MW'],
    srd: true,
    tokenUrl: 'https://5e.tools/img/MM/Giant Bat.png?v=1.94.8',
    isNpc: true,
    familiar: true,
    isNamedCreature: true,
    save: {
        dex: '+5',
    },
    skill: {
        athletics: '+4',
        survival: '+3',
        stealth: '+7',
        nature: '+2',
        acrobatics: '+7',
    },
};
