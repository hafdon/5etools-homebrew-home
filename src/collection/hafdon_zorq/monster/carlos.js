module.exports = {
    name: 'Carlos',
    source: 'zorq',
    shortName: 'Carlos',
    action: [
        {
            name: 'Warhammer',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@damage 1d8 + 3} bludgeoning damage, or {@damage 1d10 + 3} damage if used with both hands.',
            ],
        },
    ],
    alignment: ['L', 'G'],
    miscTags: ['MW'],
    damageTags: ['B'],
    languageTags: ['C', 'D'],
    senseTags: ['D'],
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['dwarf', 'pronouns: he, him, his'],
    },
    ac: [
        {
            ac: 15,
            from: [
                '{@item scale mail|phb} - disadvantage on Stealth (Dexterity) checks',
            ],
        },
    ],
    hp: {
        formula: '4d8 + 12',
        average: 36,
    },
    speed: 25,
    str: 14,
    dex: 12,
    con: 17,
    int: 15,
    wis: 20,
    cha: 12,
    skill: {
        insight: '+7',
        medicine: '+7',
        persuasion: '+3',
        religion: '+4',
    },
    passive: 15,
    languages: ['Common', 'Dwarvish'],
    trait: [
        /**
         * double-nest these entries so their header formatting is correct
         * TODO: this isn't working to do that
         */
        {
            type: 'section',
            name: '',
            entries: [
                {
                    type: 'entries',
                    entries: [
                        {
                            type: 'entries',
                            name: 'Dwarven Resilience',
                            entries: [
                                'Carlos has advantage on saving throws against poison, and has resistance against poison damage.',
                            ],
                        },
                        {
                            type: 'entries',
                            name: 'Speed',
                            entries: [
                                "Carlos's speed is not reduced by wearing heavy armor.",
                            ],
                        },
                        {
                            type: 'entries',
                            name: 'Stonecunning',
                            entries: [
                                'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
                            ],
                        },
                        {
                            type: 'entries',
                            name: 'Disciple of Life',
                            entries: [
                                "Starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Channel Divinity (1/rest)',
            type: 'section',
            entries: [
                {
                    type: 'entries',
                    name: 'Turn Undead',
                    entries: [
                        'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.',
                        "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash|phb} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the {@action Dodge|phb} action.",
                    ],
                },
                {
                    type: 'entries',
                    name: 'Harness Divine Power',
                    entries: [
                        'You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended 1st-level spell slot.',
                    ],
                },
                {
                    type: 'entries',
                    name: 'Preserve Life',
                    entries: [
                        'Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.',
                        "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
                    ],
                },
                {
                    type: 'entries',
                    name: 'These Rocks Look Great',
                    entries: [
                        "After {@creature Cora Gn'Tash|zorq} and {@creature Lum Gorebelly|zorq} carried out a similar spell to revitalize the bones of their murdered kin, {@deity Aule|zorq} granted you this feature. You always have {@spell These Rocks Look Great|zorq} prepared, and can use your Channel Divinity to cast it as an action, requiring no material components and without using a spell slot.",
                    ],
                },
            ],
        },
    ],

    senses: ['darkvision 60 ft.'],

    level: 4,
    save: {
        wis: '+7',
        cha: '+3',
    },
    resist: ['poison'],
    isNamedCreature: true,
    spellcasting: [
        {
            name: 'Spellcasting',
            headerEntries: [
                'Carlos is a 4th level spellcaster. His spellcasting ability is Wisdom. His spell save DC is 15. His spell attack bonus is +7. He can prepare 4 cantrips and 9 spells. ',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell light|PHB}',
                        '{@spell mending|PHB}',
                        '{@spell sacred flame|PHB}',
                        '{@spell spare the dying|PHB}',
                    ],
                },
                '1': {
                    spells: [
                        '{@spell command|PHB}',
                        '{@spell detect evil and good|PHB}',
                        '{@spell healing word|PHB}',
                    ],
                    slots: 4,
                },
                '2': {
                    spells: [
                        '{@spell calm emotions|PHB}',
                        '{@spell lesser restoration|PHB}',
                        '{@spell prayer of healing|PHB}',
                        '{@spell protection from poison|PHB}',
                        '{@spell spiritual weapon|PHB}',
                        '{@spell these rocks look great|zorq}',
                    ],
                    slots: 3,
                },
            },
            ability: 'wis',
        },
    ],
    fluff: {
        entries: [
            "Carlos's deity is {@deity Aule|zorq}. One of his rituals involves spinning in a circle with his warhammer held outstretched.",
        ],
    },
};
