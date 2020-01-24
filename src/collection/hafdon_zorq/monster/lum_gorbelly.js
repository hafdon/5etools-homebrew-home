module.exports = {
    name: 'Lum Gorbelly',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['gnoll', 'gnoll Fang of Yeenoghu'],
    },
    source: 'MM',
    alignment: ['N'],
    ac: [
        {
            ac: 14,
            from: ['{@item hide armor|phb}'],
        },
    ],
    hp: {
        average: 65,
        formula: '10d8 + 20',
    },
    speed: {
        walk: 30,
    },
    str: 17,
    dex: 15,
    con: 15,
    int: 10,
    wis: 11,
    cha: 13,
    save: {
        con: '+4',
        wis: '+2',
        cha: '+3',
    },
    senses: ['darkvision 60 ft.'],
    passive: 10,
    languages: ['Abyssal', 'Gnoll'],
    cr: '4',
    trait: [
        {
            type: 'inset',
            entries: [
                { name: 'Purpose', entries: [''] },
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: [''] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'Heavy coat with white skullcap. Scar across face splits left nostril and left ear missing. Compressed lips, wide-set green eyes. Soft gentle paws.',
                        'self-conscious of: (balding, soft gentle paws, narrow lips, doglike features)',
                        'want to or important to be seen as (in touch with nature, a deep thinker and careful consider-er)',
                        'modest about:',
                        "quotes ( -- no, i wear the skullcap for religious reasons! -- my lips aren't thin, i'm just deep in thought -- )",
                    ],
                },
            ],
        },
        {
            name: 'Rampage',
            entries: [
                'When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The gnoll makes three attacks: one with its bite and two with its claws.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}6 ({@damage 1d6 + 3}) piercing damage, and the target must succeed on a {@dc 12} Constitution saving throw or take 7 ({@damage 2d6}) poison damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) slashing damage.',
            ],
        },
    ],

    environment: ['desert', 'forest', 'grassland', 'hill'],

    traitTags: ['Rampage'],
    actionTags: ['Multiattack'],
    languageTags: ['AB', 'OTH'],
    senseTags: ['D'],
    damageTags: ['P', 'I', 'S'],
    miscTags: ['MW'],
};
