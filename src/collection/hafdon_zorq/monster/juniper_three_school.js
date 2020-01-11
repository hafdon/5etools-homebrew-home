module.exports = {
    name: 'Juniper Three School',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['any race'],
    },
    source: 'zorq',
    alignment: ['A'],
    ac: [
        11,
        {
            ac: 14,
            condition: 'with {@spell mage armor}',
            braces: true,
        },
    ],
    hp: {
        average: 49,
        formula: '11d8',
    },
    speed: {
        walk: 30,
    },
    str: 9,
    dex: 13,
    con: 11,
    int: 11,
    wis: 12,
    cha: 18,
    save: {
        wis: '+3',
        cha: '+6',
    },
    skill: {
        arcana: '+2',
        deception: '+6',
        nature: '+2',
        persuasion: '+6',
    },
    conditionImmune: ['charmed'],
    passive: 11,
    languages: ['any two languages (usually Sylvan)'],
    cr: '4',
    action: [
        {
            name: 'Dagger',
            entries: [
                '{@atk mw,rw} {@hit 3} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage.',
            ],
        },
    ],
    reaction: [
        {
            name: 'Misty Escape (Recharges after a Short or Long Rest)',
            entries: [
                'In response to taking damage, the warlock turns {@condition invisible} and teleports up to 60 feet to an unoccupied space it can see. It remains {@condition invisible} until the start of its next turn or until it attacks, makes a damage roll, or casts a spell.',
            ],
        },
    ],
    page: 219,
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The warlock's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save {@dc 15}), requiring no material components:",
            ],
            will: [
                '{@spell disguise self}',
                '{@spell mage armor} (self only)',
                '{@spell silent image}',
                '{@spell speak with animals}',
            ],
            daily: {
                '1': ['{@spell conjure fey}'],
            },
            ability: 'cha',
            type: 'spellcasting',
        },
        {
            name: 'Spellcasting',
            headerEntries: [
                'The warlock is an 11th-level spellcaster. Its spellcasting ability is Charisma (spell save {@dc 14}, {@hit 6} to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:',
            ],
            spells: {
                '0': {
                    spells: [
                        '{@spell dancing lights}',
                        '{@spell eldritch blast}',
                        '{@spell friends}',
                        '{@spell mage hand}',
                        '{@spell minor illusion}',
                        '{@spell prestidigitation}',
                        '{@spell vicious mockery}',
                    ],
                },
                '5': {
                    lower: 1,
                    slots: 3,
                    spells: [
                        '{@spell blink}',
                        '{@spell charm person}',
                        '{@spell dimension door}',
                        '{@spell dominate beast}',
                        '{@spell faerie fire}',
                        '{@spell fear}',
                        '{@spell hold monster}',
                        '{@spell misty step}',
                        '{@spell phantasmal force}',
                        '{@spell seeming}',
                        '{@spell sleep}',
                    ],
                },
            },
            ability: 'cha',
            type: 'spellcasting',
        },
    ],
    environment: ['arctic', 'forest', 'mountain', 'swamp', 'urban'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/520/warlock-of-the-archfey.mp3',
    languageTags: ['S', 'X'],
    spellcastingTags: ['I', 'CL'],
    damageTags: ['P'],
    miscTags: ['RW', 'MW', 'THW'],
    fluff: {
        name: 'Warlock of the Archfey',
        source: 'VGM',
        entries: [
            {
                type: 'entries',
                entries: [
                    'Warlocks of the archfey gain their powers through magical pacts forged with lords of the Feywild. These warlocks commonly associate with lesser fey creatures such as boggles, quicklings, redcaps, satyrs, and sprites.',
                ],
            },
            {
                type: 'entries',
                entries:
                    'Dead and burnt, she smells like sausage cooked with pine chips.',
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/VGM/Warlock of the Archfey.png?v=1.94.2',
};
