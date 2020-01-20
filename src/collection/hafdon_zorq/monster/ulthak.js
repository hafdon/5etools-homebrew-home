// this is stone giant thane
// but try some of the earth elementals
module.exports = {
    name: 'Ulthak',
    source: 'zorq',
    size: 'H',
    type: { type: 'elemental', tags: ['Stone Giant Thane'] },
    alignment: ['N'],
    ac: [
        {
            ac: 18,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 195,
        formula: '17d12 + 85',
    },
    speed: {
        walk: 40,
    },
    str: 25,
    dex: 15,
    con: 20,
    int: 10,
    wis: 17,
    cha: 14,
    save: {
        dex: '+7',
        con: '+10',
        wis: '+8',
        cha: '+7',
    },
    skill: {
        athletics: '+12',
        perception: '+8',
    },
    passive: 18,
    languages: ['Giant'],
    cr: '13',
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The giant's innate spellcasting ability is Wisdom (spell save {@dc 16}). The giant can innately cast the following spells, without providing material components:",
            ],
            daily: {
                '3e': [
                    '{@spell erupting earth|XGE}',
                    '{@spell meld into stone}',
                    '{@spell stone shape}',
                ],
                '1e': [
                    '{@spell bones of the earth|XGE}',
                    '{@spell stoneskin}',
                    '{@spell wall of stone}',
                ],
            },
            ability: 'wis',
            type: 'spellcasting',
        },
    ],
    trait: [
        {
            name: 'Stone Camouflage',
            entries: [
                'The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The giant makes two maul attacks.'],
        },
        {
            name: 'Maul',
            entries: [
                "{@atk mw} {@hit 12} to hit, reach 10 ft., one target. {@h}26 ({@damage 3d12 + 7}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 20} Strength saving throw or be knocked {@condition prone}. If a target's saving throw fails by 5 or more, the creature is also {@condition stunned} until the end of its next turn.",
            ],
        },
        {
            name: 'Rock',
            entries: [
                '{@atk rw} {@hit 12} to hit, range 60/240 ft., one target. {@h}29 ({@damage 4d10 + 7}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 20} Strength saving throw or be knocked {@condition prone}.',
            ],
        },
    ],
    reaction: [
        {
            name: 'Rock Catching',
            entries: [
                'If a rock or similar object is hurled at the giant, the giant can, with a successful {@dc 10} Dexterity saving throw, catch the missile and take no bludgeoning damage from it.',
            ],
        },
    ],
    legendary: [
        {
            name: 'Move',
            entries: ['The giant moves up to half its speed.'],
        },
        {
            name: 'Direct Ally (Costs 2 Actions)',
            entries: [
                'The giant targets one ally it can see within 30 feet of it. If the target can see and hear the giant, the target can use its reaction to move up to half its speed and make one weapon attack.',
            ],
        },
        {
            name: 'Maul (Costs 2 Actions)',
            entries: ['The giant makes a maul attack.'],
        },
        {
            name: 'Cast a Spell (Costs 3 Actions)',
            entries: [
                'The giant casts a spell from its list of innate spells, using a spell slot as normal.',
            ],
        },
    ],
    actionTags: ['Multiattack'],
    languageTags: ['GI'],
    damageTags: ['B'],
    spellcastingTags: ['I'],
    miscTags: ['MW', 'RCH', 'RW'],
};

// young gold dragon
// module.exports = {
//     name: 'Ulthak',
//     size: 'L',
//     type: 'elemental',
//     source: 'zorq',
//     isNamedCreature: true,
//     isNpc: true,
//     alignment: ['L', 'G'],
//     ac: [
//         {
//             ac: 18,
//             from: ['natural armor'],
//         },
//     ],
//     hp: {
//         average: 178,
//         formula: '17d10 + 85',
//     },
//     speed: {
//         walk: 40,
//         fly: 80,
//         burrow: 40,
//     },
//     str: 23,
//     dex: 14,
//     con: 21,
//     int: 16,
//     wis: 13,
//     cha: 20,
//     save: {
//         dex: '+6',
//         con: '+9',
//         wis: '+5',
//         cha: '+9',
//     },
//     skill: {
//         insight: '+5',
//         perception: '+9',
//         persuasion: '+9',
//         stealth: '+6',
//         athletics: '+14',
//     },
//     immune: ['psychic', 'radiant'],
//     senses: ['blindsight 30 ft.', 'darkvision 120 ft.'],
//     passive: 19,
//     languages: ['Common', 'Elemental'],
//     cr: '10',
//     trait: [
//         {
//             type: 'inset',
//             entries: [
//                 {
//                     name: 'Appearance and Mannerisms',
//                     entries: [
//                         '',
//                         'self-conscious of: ',
//                         'wants to be (thought of as): ',
//                         'modest about:',
//                     ],
//                 },
//                 {
//                     name: 'Purpose',
//                     entries: [
//                         'Some kind of elemental seeing over the red gold alloy',
//                     ],
//                 },
//                 { name: 'Background', entries: [''] },
//             ],
//         },
//     ],
//     action: [
//         {
//             name: 'Multiattack',
//             entries: [
//                 'Ulthak makes three attacks: one with its bite and two with its claws.',
//             ],
//         },
//         {
//             name: 'Bite',
//             entries: [
//                 '{@atk mw} {@hit 10} to hit, reach 10 ft., one target. {@h}17 ({@damage 2d10 + 6}) piercing damage.',
//             ],
//         },
//         {
//             name: 'Claw',
//             entries: [
//                 '{@atk mw} {@hit 10} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d6 + 6}) slashing damage.',
//             ],
//         },
//         {
//             name: 'Breath Weapons {@recharge 5}',
//             entries: [
//                 'Ulthak uses one of the following breath weapons.',
//                 {
//                     type: 'list',
//                     style: 'list-hang-notitle',
//                     items: [
//                         {
//                             type: 'item',
//                             name: 'Fire Breath.',
//                             entry:
//                                 'Ulthak exhales fire in a 30-foot cone. Each creature in that area must make a {@dc 17} Dexterity saving throw, taking 55 ({@damage 10d10}) fire damage on a failed save, or half as much damage on a successful one.',
//                         },
//                         {
//                             type: 'item',
//                             name: 'Weakening Breath.',
//                             entry:
//                                 'Ulthak exhales gas in a 30-foot cone. Each creature in that area must succeed on a {@dc 17} Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
//     environment: ['hill', 'mountain', 'underdark'],
//     dragonCastingColor: 'O',
//     actionTags: ['Multiattack'],
//     languageTags: ['C'],
//     senseTags: ['B', 'SD'],
//     damageTags: ['P', 'S', 'F'],
//     miscTags: ['MW', 'RCH', 'AOE'],
//     srd: true,
//     conditionImmune: ['petrified'],
// };
