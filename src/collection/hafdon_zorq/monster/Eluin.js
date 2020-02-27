module.exports = {
    name: 'Eluin',
    source: 'zorq',
    size: 'L',
    type: {
        type: 'humanoid',
        tags: ['merrow shaman'],
    },
    alignment: ['C'],
    ac: [13],
    hp: {
        average: 102,
        formula: '12d10 + 36',
    },
    speed: {
        walk: 30,
        swim: 50,
    },
    str: 18,
    dex: 10,
    con: 16,
    int: 8,
    wis: 16,
    cha: 9,
    skill: {
        perception: '+4',
        religion: '+4',
        athletics: '+7',
        survival: '+6',
        nature: '+2',
        stealth: '+3',
        'animal handling': '+6',
    },
    senses: ['darkvision 60 ft.'],
    passive: 14,
    languages: ['Aquan', 'Common'],
    cr: '5',
    spellcasting: [
        {
            name: 'Spellcasting',
            headerEntries: [
                'The selshamurinn is an 8th-level spellcaster. Its spellcasting ability is Wisdom (spell save {@dc 14}, {@hit 6} to hit with spell attacks). It has the following druid spells prepared:',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell druidcraft}',
                        '{@spell poison spray}',
                        '{@spell shape water|XGE}',
                        '{@spell thunderclap|XGE}',
                    ],
                },
                '1': {
                    slots: 4,
                    spells: [
                        '{@spell bane}',
                        '{@spell entangle}',
                        '{@spell thunderwave}',
                    ],
                },
                '2': {
                    slots: 3,
                    spells: [
                        '{@spell blindness/deafness}',
                        '{@spell hold person}',
                        '{@spell moonbeam}',
                    ],
                },
                '3': {
                    slots: 3,
                    spells: [
                        '{@spell call lightning}',
                        '{@spell tidal wave|XGE}',
                        '{@spell wall of water|XGE}',
                    ],
                },
                '4': {
                    slots: 2,
                    spells: [
                        '{@spell control water}',
                        '{@spell watery sphere|XGE}',
                    ],
                },
            },
            ability: 'wis',
        },
    ],
    trait: [
        {
            name: 'Hold Breath',
            entries: ['The selshamurinn can hold its breath for 2 hours.'],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The selshamurinn makes two attacks: one with its bite and one with its tail.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage.',
            ],
        },
        {
            name: 'Tail',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d4 + 4}) bludgeoning damage.',
            ],
        },
    ],
    traitTags: ['Hold Breath'],
    senseTags: ['D'],
    actionTags: ['Multiattack'],
    languageTags: ['AQ', 'C'],
    damageTags: ['P', 'B'],
    spellcastingTags: ['CD'],
    miscTags: ['MW'],
};
