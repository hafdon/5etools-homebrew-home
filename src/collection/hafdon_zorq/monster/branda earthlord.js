module.exports = {
    source: 'zorq',
    name: 'Branda Earthlord',
    isNpc: true,
    isNamedCreature: true,

    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['dwarf', '{@title mythomane|zorq}'],
    },
    alignment: ['A'],
    ac: [
        {
            ac: 16,
            from: ['{@item chain mail|phb}'],
        },
    ],
    hp: {
        formula: '4d8 + 15',
        average: 33,
    },
    speed: {
        walk: 25,
    },
    str: 18,
    dex: 13,
    con: 17,
    int: 12,
    wis: 14,
    cha: 11,
    skill: {
        perception: '+4',
        stealth: '+3',
        athletics: '+6',
        'animal handling': '+4',
    },
    resist: ['poison'],
    senses: ['darkvision 60 ft.'],
    passive: 14,
    languages: ['Common', 'Dwarvish'],
    cr: '1',
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The dwarf's innate spellcasting ability is Wisdom. Their Spell Save DC is 12 and their Spellcasting Ability Modifier is +4. They can innately cast the following spells, requiring no material components:",
            ],
            daily: {
                '1e': [
                    '{@spell healing word|PHB} (level 2)',
                    "{@spell hunter's mark}",
                    '{@spell jump}',
                    '{@spell pass without trace}',
                    '{@spell speak with animals}',
                    '{@spell speak with plants}',
                    '{@spell these rocks look great|0}',
                ],
            },
            ability: 'wis',
        },
    ],
    trait: [
        {
            type: 'inset',
            entries: [
                { name: 'Purpose', entries: [''] },
                {
                    name: 'Background',
                    entries: [
                        'One of four dwarf spirits; older sisters of {@creature soul rock|zorq}',
                    ],
                },
                { name: 'Aliases', entries: [''] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about:',
                    ],
                },
            ],
        },

        {
            name: 'Dwarven Resilience',
            entries: [
                'The dwarf has advantage on saving throws against poison.',
            ],
        },
        '{@$siege monster|zorq}',
        '{@$magic resistance|zorq}',
    ],
    action: [
        {
            name: 'Handaxe',
            entries: [
                '{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}13 ({@damage 1d12 + 6}) slashing damage.',
            ],
        },
    ],
    languageTags: ['C', 'D'],
    senseTags: ['D'],
    spellcastingTags: ['I'],
    damageTags: ['S'],
    miscTags: ['MW'],
    fluff: {
        name: 'Albino Dwarf Spirit Warrior',
        source: 'ToA',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/ToA/Albino Dwarf.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                entries: [
                    "The albino dwarves of Chult were driven from their subterranean homes by volcanic activity, and those who didn't seek refuge in Port Nyanzaru adapted to living in the jungle. They make armor out of dinosaur hide; shape weapons out of dinosaur bones, flint, and wood; and craft ornate jewelry out of bones, feathers, tusks, and stone beads. Albino dwarves haven't forgotten how to forge metal, but they seldom have the means to do so.",
                ],
            },
            {
                type: 'entries',
                name: 'Albino Dwarf Spirit Warriors',
                entries: [
                    'An albino dwarf can become so attuned to the land of Chult that a benevolent nature spirit takes notice and bestows a powerful charm on the dwarf, granting it innate spellcasting abilities. These dwarf spirit warriors dedicate themselves to preserving the natural beauty of Chult and battling unnatural threats. An albino dwarf spirit warrior has the statistics of an albino dwarf warrior, except it has a challenge rating of 1 (200 XP) and gains an Innate Spellcasting feature.',
                ],
            },
        ],
    },
    tokenUrl:
        'https://5e.tools/img/ToA/Albino Dwarf Spirit Warrior.png?v=1.94.4',
    save: {
        str: '+6',
        con: '+5',
    },
};
