module.exports = {
    source: 'zorq',
    name: 'Gardweard Sister(s)',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['dwarf'],
    },
    alignment: ['A'],
    ac: [
        {
            ac: 14,
            from: ['{@item chain mail|phb}'],
        },
    ],
    hp: {
        average: 47,
        formula: '5d8 + 25',
    },
    speed: {
        walk: 25,
    },
    str: 13,
    dex: 17,
    con: 21,
    int: 12,
    wis: 14,
    cha: 11,
    skill: {
        perception: '+4',
        stealth: '+5',
        survival: '+4',
    },
    resist: ['poison'],
    senses: ['darkvision 60 ft.'],
    passive: 14,
    languages: ['Common', 'Dwarvish'],
    cr: '4',
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The dwarf's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no material components:",
            ],
            daily: {
                '1e': [
                    "{@spell hunter's mark}",
                    '{@spell jump}',
                    '{@spell pass without trace}',
                    '{@spell speak with animals}',
                    '{@spell speak with plants}',
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
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: ['slime dot org', 'slimort'] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'Sleek metal helmets and massive warhammers. About 5 1/2 feet tall and 200 pounds. Hair is short, almost brosse under the helmet, and a deep red, but they have mullets that fade to a blonde umbre. Tight, collarbone-length beards of the same coloration. Braiding style differs between them.',
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
        {
            name: 'Happy to Teach',
            entries: [
                "The Earthlord Sisters can teach someone with weapon proficiency how to recall a thrown weapon by using a reaction. What this costs (gold, time, feat/skill replacement) is up to the DM's discretion.",
            ],
        },
        {
            name: 'Goldkiller',
            entries: [
                'Martial Bludgeoning Weapons',
                '{@dice 1d8} bludgeoning - sundering (1), versatile ({@dice 1d10})',
                'Sundering (1). The weapon has qualities that crush or pierce armor, making it more effective against targets that employ such defenses. When you attack a target wearing armor components with the Hard property, or natural armor and its armor AC is 15 or more, you gain a bonus to the attack roll equal to the value in parenthesis.',
                'Versatile. This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack.',
            ],
        },
    ],
    action: [
        {
            name: 'Warhammer',
            entries: [
                '{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}10 ({@damage 2d6 + 3}) slashing damage.',
            ],
        },
    ],
    page: 210,
    languageTags: ['C', 'D'],
    senseTags: ['D'],
    spellcastingTags: ['I'],
    damageTags: ['S'],
    miscTags: ['RW', 'MW'],
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
        'https://5e.tools/img/ToA/Albino Dwarf Spirit Warrior.png?v=1.94.13',
    reaction: [
        {
            name: 'Hammerang',
            entries: ['Hammer comes back if thrown.'],
        },
    ],
};
