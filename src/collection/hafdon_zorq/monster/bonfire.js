module.exports = {
    name: 'Bonfire',
    size: 'L',
    type: { type: 'beast', tags: ['pronouns--she, her, hers'] },
    source: 'zorq',
    alignment: ['N'],
    ac: [
        {
            ac: 14,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 44,
        formula: '8d10',
    },
    speed: {
        walk: 45,
    },
    str: 16,
    dex: 8,
    con: 11,
    int: 14,
    wis: 8,
    cha: 14,
    resist: [
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    vulnerable: ['cold'],
    immune: ['fire'],
    senses: ['darkvision 60 ft.'],
    passive: 8,
    languages: ['Salamander', 'Common'],
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Bonfire is the size and general appearance of a rough-skinned newt, scaled to 4 feet at the shoulder and 20 feet long. She has carrot-colored skin with marigold spots. She has large, wideset, bulging deep red eyes. If she opens her mouth one can spot a row of sharp, nearly translucent vomerine teeth on the upper jaw and homodont dentary teeth on the lower jaw.',
            ],
        },
        {
            type: 'entries',
            name: 'Heated Body',
            entries: [
                'A creature that touches Bonfire or hits it with a melee attack while within 5 feet of it takes 2 ({@damage 1d4}) fire damage.',
            ],
        },
    ],
    action: [
        {
            name: 'Tail',
            type: 'entries',
            entries: [
                "{@atk mw} {@hit 4} to hit, reach 10 ft., one target. {@h}2 ({@damage 1d4}) bludgeoning damage plus 2 ({@damage 1d4}) fire damage, and the target is {@condition grappled} (escape {@dc 12}). Until this grapple ends, the target is {@condition restrained}, Bonfire can automatically hit the target with its tail, and Bonfire can't make tail attacks against other targets.",
            ],
        },
    ],

    environment: ['underdark'],

    languageTags: ['C'],
    senseTags: ['D'],
    damageTags: ['B', 'F'],
    miscTags: ['MW', 'RCH'],

    skill: {
        athletics: '+7',
    },
    spellcasting: [
        {
            name: 'Spellcasting',
            headerEntries: [
                'Bonfire is 1st-level spellcaster. Her spellcasting ability is Intelligence (spell save {@dc} 12, {@h 4} to hit with spell attacks). She has the following wizard spells prepared:',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell fire bolt|PHB}, {@spell create bonfire|xge}',
                    ],
                },
                '1': {
                    spells: ['{@spell hellish rebuke|phb}'],
                },
            },
            ability: 'int',
        },
    ],
};
