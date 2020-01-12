module.exports = {
    name: 'Zod',
    size: 'S',
    type: {
        type: 'humanoid',
        tags: ['kobold'],
    },
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [12],
    hp: {
        average: 8,
        formula: '2d6 +2',
    },
    speed: {
        walk: 30,
    },
    str: 7,
    dex: 15,
    con: 9,
    int: 8,
    wis: 7,
    cha: 8,
    senses: ['darkvision 60 ft.'],
    passive: 8,
    languages: ['Common', 'Draconic'],
    cr: '1/8',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                '',
                'self-conscious of: ',
                'wants to be (thought of as): ',
                'modest about:',
            ],
        },
        { type: 'inset', name: 'Purpose', entries: [''] },
        { type: 'inset', name: 'Background', entries: [''] },
        {
            name: 'Sunlight Sensitivity',
            entries: [
                'While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight.',
            ],
        },
        {
            name: 'Pack Tactics',
            entries: [
                "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}.",
            ],
        },
    ],
    action: [
        {
            name: 'Dagger',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage.',
            ],
        },
        {
            name: 'Sling',
            entries: [
                '{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage.',
            ],
        },
    ],
    environment: [
        'arctic',
        'coastal',
        'desert',
        'forest',
        'hill',
        'mountain',
        'swamp',
        'underdark',
        'urban',
    ],

    traitTags: ['Sunlight Sensitivity', 'Pack Tactics'],
    languageTags: ['C', 'DR'],
    senseTags: ['D'],
    damageTags: ['P', 'B'],
    miscTags: ['MW', 'RW', 'RNG'],

    tokenUrl: 'https://5e.tools/img/MM/Kobold.png?v=1.94.4',
};
