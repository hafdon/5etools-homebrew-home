module.exports = {
    name: 'Calliope',
    source: 'zorq',
    size: 'H',
    type: 'monstrosity',
    alignment: ['N'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        formula: '17d20 + 51',
        average: 229,
    },
    speed: {
        walk: 30,
        fly: 100,
        canHover: false,
    },
    str: 19,
    dex: 14,
    con: 16,
    int: 9,
    wis: 14,
    cha: 10,
    save: {
        str: '+8',
        dex: '+6',
        wis: '+6',
        con: '+7',
    },
    skill: {
        perception: '+6',
        athletics: '+12',
        stealth: '+10',
        acrobatics: '+10',
        intimidation: '+8',
        survival: '+10',
    },
    senses: ['darkvision 60 ft.'],
    passive: 16,
    languages: [
        "understands Abyssal and Infernal (as a Succubus), Common and Elvish, but can't speak",
    ],
    trait: [
        {
            name: 'Flyby',
            entries: [
                "Calliope doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
            ],
        },
        {
            name: 'Keen Sight and Smell',
            entries: [
                'Calliope has advantage on Wisdom (Perception) checks that rely on sight or smell.',
            ],
        },
        {
            name: 'Legendary Resistance (3/Day)',
            entries: [
                'If Calliope fails a saving throw, it can choose to succeed instead.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Calliope makes two attacks: one with its gore and one with its talons.',
            ],
        },
        {
            name: 'Gore',
            entries: [
                '{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d6 + 5}) piercing damage.',
            ],
        },
        {
            name: 'Talons',
            entries: [
                '{@atk mw} {@hit 9} to hit, reach 5 ft., one target. {@h}16 ({@damage 2d10 + 5}) slashing damage.',
            ],
        },
        {
            name: 'Warp Shadow',
            entries: [
                "Calliope chooses up to three creatures within 60 feet of it that it can see. Each creature must succeed on a {@dc 15} Wisdom saving throw or become cursed. While cursed, whenever the creature makes an attack roll, an ability check, or a saving throw, it must roll a {@dice d4} and subtract that number from the roll. A cursed creature can repeat this saving throw at the end of each of its turns, ending the effect on itself with a success. A creature that succeeds on this saving throw is immune to this peryton's Warp Shadow for 24 hours.",
            ],
        },
    ],
    legendary: [
        {
            name: 'Detect',
            entries: ['Calliope makes a Wisdom (Perception) check.'],
        },
        {
            name: 'Talons Attack',
            entries: ['Calliope makes one attack with its talons.'],
        },
        {
            name: 'Dive Attack (Costs 2 Actions)',
            entries: [
                'Calliope moves up to its speed toward one target of its choosing. It then makes a gore attack that deals an extra 9 ({@damage 2d8}) piercing damage on a hit.',
            ],
        },
    ],
    traitTags: ['Flyby', 'Keen Senses', 'Legendary Resistances'],
    senseTags: ['D'],
    actionTags: ['Multiattack'],
    languageTags: ['C', 'CS', 'E'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],

    tokenUrl: 'https://5e.tools/img/GoS/Monstrous Peryton.png?v=1.101.4',
    conditionImmune: ['charmed', 'frightened'],
};
