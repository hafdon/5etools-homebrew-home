/**
 * Based on {@creature Junior Priestess of Lolth}
 */
module.exports = {
    name: 'Zilla',
    source: 'zorq',
    alignment: ['N'],
    languageTags: ['X', 'E'],
    senseTags: ['SD'],
    traitTags: ['Fey Ancestry', 'Sunlight Sensitivity'],
    spellcastingTags: ['CC', 'I'],
    size: 'M',
    type: {
        type: 'humanoid',
        tags: [
            'elf',
            'drow',
            'pronouns--she, her, hers',
            'cleric',
            '{@title indagator|zorq}',
        ],
    },
    ac: [
        {
            ac: 13,
            from: ['{@item chain shirt|phb}'],
        },
    ],
    hp: {
        average: 27,
        formula: '5d8 + 5',
    },
    speed: {
        walk: 30,
    },
    str: 10,
    dex: 10,
    con: 12,
    int: 13,
    wis: 16,
    cha: 13,
    skill: {
        medicine: '+7',
        persuasion: '+3',
        religion: '+5',
        perception: '+5',
    },
    passive: 13,
    languages: ['Undercommon', 'Common', 'Elvish'],
    cr: '2',
    trait: [
        {
            name: 'Divine Eminence',
            entries: [
                'As a bonus action, Zilla can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 ({@damage 3d6}) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If Zilla expends a spell slot of 2nd level or higher, the extra damage increases by {@dice 1d6} for each level above 1st.',
            ],
        },
        '{@$fey ancestry|zorq}',
        {
            name: 'Sunlight Sensitivity',
            entries: [
                'While in sunlight, Zilla has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight.',
            ],
        },
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Zilla is 5 feet tall, pale, with a strong, triangular face and precise features. She has short, side-swept jet-black hair and disengaged grey eyes. She wears a tailored grey pea-coat buttoned up to her neck, and thick cotton slacks. Her boots are a deep brown and utilitarian, and at least three sizes larger than one would expect. She carries a slim leather tome about the size of a placemat.',
                'For a celebrity feel-alike, think Robert Patrick?',
            ],
        },
    ],
    action: [
        {
            name: 'Mace',
            entries: [
                '{@atk mw} {@hit 2} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d6}) bludgeoning damage.',
            ],
        },
    ],
    spellcasting: [
        {
            name: 'Spellcasting',
            headerEntries: [
                'Zilla is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell save {@dc 13}, {@hit 5} to hit with spell attacks). Zilla has the following cleric spells prepared:',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell light}',
                        '{@spell sacred flame}',
                        '{@spell thaumaturgy}',
                    ],
                },
                '1': {
                    slots: 4,
                    spells: [
                        '{@spell cure wounds}',
                        '{@spell guiding bolt}',
                        '{@spell sanctuary}',
                    ],
                },
                '2': {
                    slots: 3,
                    spells: [
                        '{@spell lesser restoration}',
                        '{@spell spiritual weapon}',
                    ],
                },
                '3': {
                    slots: 2,
                    spells: [
                        '{@spell dispel magic}',
                        '{@spell spirit guardians}',
                    ],
                },
            },
            ability: 'wis',
        },
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Zilla's innate spellcasting ability is Charisma (spell save {@dc 11}). Zilla can innately cast the following spells, requiring no material components:",
            ],
            will: ['{@spell dancing lights}'],
            daily: {
                '1e': ['{@spell darkness}', '{@spell faerie fire}'],
            },
            ability: 'cha',
        },
    ],
    damageTags: ['B', 'R'],
    miscTags: ['MW'],
    senses: ['darkvision 120 ft.'],
    shortName: 'Zilla',
};
