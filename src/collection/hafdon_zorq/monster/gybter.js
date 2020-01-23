module.exports = {
    name: 'Gybter',
    size: 'L',
    isNpc: true,
    isNamedCreature: true,
    type: {
        type: 'fiend',
        tags: ['demon', 'barlgura'],
    },
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [
        {
            ac: 15,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 68,
        formula: '8d10 + 24',
    },
    speed: {
        walk: 40,
        climb: 40,
    },
    str: 18,
    dex: 15,
    con: 16,
    int: 7,
    wis: 14,
    cha: 9,
    save: {
        dex: '+5',
        con: '+6',
    },
    skill: {
        perception: '+5',
        stealth: '+5',
    },
    resist: ['cold', 'fire', 'lightning'],
    immune: ['poison'],
    conditionImmune: ['poisoned'],
    senses: ['blindsight 30 ft.', 'darkvision 120 ft.'],
    passive: 15,
    languages: ['Abyssal', 'telepathy 120 ft.'],
    cr: '5',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Mortal enemy of {@creature Graal|zorq}? Or her sister lost at separation?!',
                'self-conscious of: ',
                'wants to be (thought of as): ',
                'modest about:',
            ],
        },
        // { type: 'inset', name: 'Purpose', entries: [''] },
        // { type: 'inset', name: 'Background', entries: [''] },
        {
            name: 'Reckless',
            entries: [
                'At the start of its turn, Gybter can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.',
            ],
        },
        {
            name: 'Running Leap',
            entries: [
                "Gybter's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Gybter makes three attacks: one with its bite and two with its fists.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) piercing damage.',
            ],
        },
        {
            name: 'Fist',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}9 ({@damage 1d10 + 4}) bludgeoning damage.',
            ],
        },
    ],

    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Gybter's spellcasting ability is Wisdom (spell save {@dc 13}). Gybter can innately cast the following spells, requiring no material components:",
            ],
            daily: {
                '1e': ['{@spell entangle}', '{@spell phantasmal force}'],
                '2e': [
                    '{@spell disguise self}',
                    '{@spell invisibility} (self only)',
                ],
            },
            ability: 'wis',
        },
    ],

    traitTags: ['Reckless'],
    actionTags: ['Multiattack'],
    languageTags: ['AB', 'TP'],
    senseTags: ['B', 'SD'],
    spellcastingTags: ['I'],
    damageTags: ['P', 'B'],
    miscTags: ['MW'],
    fluff: {
        name: 'Barlgura',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Barlgura.jpg',
                },
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Barlgura.png?v=1.94.13',
};
