module.exports = {
    name: 'Phoenix Molvraki',
    source: 'zorq',
    short: 'Phoenix M.',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: [
            'kalashtar',
            'mystic',
            'order of the immortal',
            'pronouns: they, their, theirs',
        ],
    },
    alignment: ['A'],
    ac: [
        {
            ac: 13,
            condition: '(Immortal Durability)',
        },
    ],
    hp: {
        formula: '6d8 + 0',
        average: 27,
    },
    speed: {
        walk: 30,
    },
    str: 10,
    dex: 16,
    con: 10,
    int: 12,
    wis: 18,
    cha: 16,
    skill: {
        acrobatics: '+6',
        insight: '+7',
        persuasion: '+9',
        perception: '+7',
        nature: '+4',
    },
    passive: 17,
    resist: ['psychic'],
    languages: ['Common', 'telepathy 20 ft.'],
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                '5 feet 8 inches; 122 pounds',
                'They are obsessed with conspiracy theories.',
                'Puts their name before the {@creature quori|erlw} name.',
            ],
        },
        {
            type: 'inset',
            name: 'Purpose',
            entries: [
                'Everything {@creature Paros|zorq} wants to be. However, they refuse to recognize the power of reading and only learn through psionics. Furthermore, their dedication to learning comes at the cost of ... ',
            ],
        },
        {
            name: 'Dual Mind',
            entries: ['The kalashtar has advantage on Wisdom saving throws.'],
        },
        {
            type: 'entries',
            name: 'Severed from Dreams',
            entries: [
                "Kalashtar sleep, but they don't connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like {@spell dream}, but not to spells and other magical effects that put you to sleep, like {@spell sleep}.",
            ],
        },
        {
            name: 'Proficiencies',
            entries: [
                {
                    name: 'armor',
                    entries: ['light armor'],
                },
                {
                    name: 'tools',
                    entries: ['none'],
                },
                {
                    name: 'weapons',
                    entries: ['simple weapons'],
                },
            ],
        },
    ],
    action: [
        {
            name: 'Dagger',
            entries: [
                '{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage.',
            ],
        },
        {
            name: 'Mind Thrust',
            entries: [
                'The kalashtar targets a creature it can see within 30 feet of it. The target must succeed on a {@dc 13 } Wisdom saving throw or take 10 ({@damage 2d10}) psychic damage.',
            ],
        },
        {
            name: 'Spear',
            entries: [
                '{@atk mw,rw} {@hit 5} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}6 ({@damage 1d6 + 3}) piercing damage in melee, or {@h}6 ({@damage 1d6 + 3})  piercing damage at range, or 7 ({@damage 1d8 + 3}) piercing damage if used with both hands.',
            ],
        },
    ],
    languageTags: ['C', 'TP'],
    damageTags: ['P', 'Y'],
    miscTags: ['RW', 'MW', 'THW'],
    fluff: {
        name: 'Kalashtar',
        source: 'ERLW',
        entries: [
            'The kalashtar have bonded with good-aligned quori spirits, which communicate with their hosts through dreams and visions. Descended from monks who offered their bodies as sanctuaries to those quori escaping the evil of Dal Quor, the kalashtar now fight to herald in a new age of light and balance.',
        ],
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/ERLW/Kalashtar.png',
                },
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/ERLW/Kalashtar.png?v=1.94.8',
    save: {
        int: '+4',
        wis: '+7',
    },
};
