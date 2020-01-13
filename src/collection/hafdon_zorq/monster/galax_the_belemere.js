module.exports = {
    name: 'Galax Belle-mere',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['lizardfolk', 'belle-mere'],
    },
    source: 'zorq',
    alignment: ['L', 'G'],
    ac: [
        {
            ac: 16,
            from: ['{@item chain mail|phb}', '{@item shield|phb}'],
        },
    ],
    hp: {
        average: 26,
        formula: '2d10 + 16',
    },
    speed: {
        walk: 30,
        swim: 30,
    },
    str: 16,
    dex: 10,
    con: 14,
    int: 10,
    wis: 10,
    cha: 16,
    skill: {
        athletics: '+7',
        perception: '+2',
        survival: '+2',
        'animal handling': '+4',
        persuasion: '+5',
        religion: '+2',
    },
    passive: 12,
    languages: ['Common', 'Draconic', 'Salamander'],
    cr: '1',
    trait: [
        {
            name: 'Hold Breath',
            entries: ['Galax can hold her  breath for 15 minutes.'],
        },
        {
            name: 'Charge',
            entries: [
                'If Galax is mounted and moves at least 30 feet in a straight line toward a target and then hits it with a melee attack on the same turn, the target takes an extra 10 ({@dice 3d6}) damage.',
            ],
        },
        {
            name: 'Mounted Combatant',
            source: 'PHB',
            page: 168,
            entries: [
                "Galax is a dangerous foe to face while mounted. While she is mounted and isn't {@condition incapacitated}, she gains the following benefits:",
                {
                    type: 'list',
                    items: [
                        'She gains advantage on melee attack rolls against any unmounted creature that is smaller than her mount.',
                        'She can force an attack targeted at her mount to target her instead.',
                        'If her mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
                    ],
                },
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['Galax makes two melee attacks.'],
        },
        {
            name: 'Morningstar',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d8 + 2}) piercing damage.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage.',
            ],
        },
        {
            name: 'Lance',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 10 ft., one target. {@h}11 ({@damage 1d12 + 5}) piercing damage.',
            ],
        },
    ],
    damageTags: ['P'],
    miscTags: ['MW', 'RCH'],
    languageTags: ['C', 'DR'],
    traitTags: ['Hold Breath', 'Charge'],
    actionTags: ['Multiattack'],
    fluff: {
        entries: [
            {
                type: 'entries',
                entries: [
                    'Serving as an elite warrior of Bahamut ... and protecting lizardfolk',
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/GoS/Lizardfolk Scaleshield.png?v=1.94.4',
    shortName: 'Galax',
    isNamedCreature: true,
    isNpc: true,
    spellcasting: [
        {
            name: 'Spellcasting',
            ability: 'cha',
            headerEntries: [
                'Galax is a 3rd-level spellcaster.  Her spellcasting ability is Charisma (spell save {@dc 13}, {@hit 5} to hit with spell attacks). She regains her expended spell slots when she finishes a long rest. She knows the following paladin spells:',
            ],
            spells: {
                '1': {
                    spells: [
                        '{@spell bless|PHB}',
                        '{@spell compelled duel|PHB}',
                        '{@spell cure wounds|PHB}',
                        '{@spell detect evil and good|PHB}',
                    ],
                    slots: 3,
                },
            },
        },
    ],
};
