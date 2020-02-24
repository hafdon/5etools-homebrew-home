module.exports = {
    name: 'Turkey',
    size: 'M',
    type: 'elemental',
    source: 'zorq',
    alignment: ['N'],
    ac: [
        {
            ac: 19,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 73,
        formula: '7d8 + 42',
    },
    speed: {
        walk: 20,
        burrow: 20,
    },
    str: 17,
    dex: 10,
    con: 22,
    int: 11,
    wis: 10,
    cha: 11,
    skill: {
        perception: '+6',
        stealth: '+3',
    },
    resist: [
        {
            resist: ['piercing'],
            note: "and slashing from nonmagical attacks that aren't adamantine",
        },
    ],
    senses: ['darkvision 60 ft.', 'tremorsense 60 ft.'],
    passive: 16,
    languages: ['Terran'],
    cr: '5',
    trait: [
        {
            type: 'inset',
            entries: [
                { name: 'Purpose', entries: [''] },
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: [''] },
                { name: 'The Whole Buffalo', entries: [''] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about:',
                    ],
                },
            ],
        },
        {
            name: 'Earth Glide',
            entries: [
                "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.",
            ],
        },
        {
            name: 'Stone Camouflage',
            entries: [
                'The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
            ],
        },
        {
            name: 'Treasure Sense',
            entries: [
                'The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The xorn makes three claw attacks and one bite attack.'],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}13 ({@damage 3d6 + 3}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage.',
            ],
        },
    ],
    page: 304,
    environment: ['underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/543/xorn.mp3',
    actionTags: ['Multiattack'],
    languageTags: ['T'],
    senseTags: ['D', 'T'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],
    srd: true,
    fluff: {
        name: 'Xorn',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Xorn.jpg',
                },
            },
        ],
        entries: [
            'Bizarre creatures native to the Elemental Plane of Earth, xorn sniff out gemstones and precious metals, then tunnel through earth and rock to consume those treasures. On the Material Plane, xorn must range far and wide through the Underdark to sustain themselves, becoming aggressive toward miners and treasure hunters when the valuable minerals of their diet are scarce.',
            "A xorn's unnatural origins are suggested by its unusually heavy body and the large, powerful mouth sitting atop its head. Its three long arms are each tipped with sharp talons, and its three large, stone-lidded eyes see in all directions.",
            {
                name: 'Elemental Travelers',
                type: 'entries',
                entries: [
                    "Possessed of the power of elemental earth, a xorn glides through stone and dirt as easily as a fish swims through water. It doesn't displace earth or stone when it moves, but merges with and flows through it, leaving no tunnel, hole, or hint of its passage.",
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Xorn.png?v=1.95.1',
};
