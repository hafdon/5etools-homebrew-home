module.exports = {
    name: 'Joan',
    source: 'zorq',
    shortName: 'Joan',
    isNamedCreature: true,
    action: [
        {
            name: 'Lightning Breath (2/rest)',
            entries: [
                'Each creature in the area of the exhalation (5 by 30 ft. line) must make a {@dc 10} Dexterity saving throw. A creature takes {@h}11 ({@damage 3d6}) lightning damage on a failed save ({@h}13 ({@damage 3d6 + 2}) if you are raging), and half as much damage on a successful save',
            ],
        },
        {
            name: 'Trident',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d8 + 5}) piercing damage ({@h}12 ({@damage 1d8 + 7} )if raging).',
            ],
        },
    ],
    alignment: ['C', 'N'],
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['dragonborn', 'pronouns--she, her, hers'],
    },
    ac: [
        {
            ac: 15,
            from: ['{@item chain shirt|phb}'],
        },
    ],
    hp: {
        formula: '4d12 + 0',
        average: 33,
    },
    speed: 30,
    str: 20,
    dex: 14,
    con: 10,
    int: 9,
    wis: 10,
    cha: 11,
    skill: {
        gearhead: '+2',
        'animal handling': '+2',
        athletics: '+7',
        intimidation: '+2',
        stealth: '+4',
    },
    passive: 10,
    languages: ['Common', 'Draconic'],
    trait: [
        {
            type: 'section',
            name: '_dossier',

            entries: [
                {
                    type: 'entries',
                    name: 'Items',
                    entries: ['{@item multicolored stone disc|zorq}'],
                },
                {
                    type: 'entries',
                    name: 'Danger Sense',
                    entries: [
                        "You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
                    ],
                },
                {
                    type: 'entries',
                    name: 'Reckless Attack',
                    entries: [
                        'When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.',
                    ],
                },
                {
                    type: 'entries',
                    name: 'Spirit Seeker',
                    entries: [
                        'You gain the ability to cast the {@spell beast sense} and {@spell speak with animals} spells, but only as rituals,',
                    ],
                },
                {
                    type: 'entries',
                    name: 'Three School',
                    entries: [
                        'You are now The Mask of Three School, along with {@creature Ethel Three School|zorq} and {@creature Stump Three School|zorq}.',
                    ],
                },
                {
                    type: 'entries',
                    name: 'Rage (3/Long Rest)',
                    entries: [
                        'On your turn, you can enter a rage as a bonus action.',
                        "While raging, you gain the following benefits if you aren't wearing heavy armor:",
                        {
                            type: 'list',
                            items: [
                                'You have advantage on Strength checks and Strength saving throws.',
                                'When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll.',
                                '{@bold Totem Spirit: Bear}. You have resistance to all damage except psychic damage.',
                            ],
                        },
                        "Your rage lasts for 1 minute. It ends early if you are knocked {@condition unconscious} or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
                    ],
                },
            ],
        },
    ],

    level: 4,
    save: {
        str: '+7',
        con: '+2',
    },
    resist: ['lightning'],
};
