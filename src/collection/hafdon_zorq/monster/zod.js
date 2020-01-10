module.exports = {
    name: 'Zod',
    size: 'S',
    type: {
        type: 'humanoid',
        tags: ['kobold'],
    },
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [12],
    hp: {
        average: 8,
        formula: '2d6 +2',
    },
    speed: {
        walk: 30,
    },
    str: 7,
    dex: 15,
    con: 9,
    int: 8,
    wis: 7,
    cha: 8,
    senses: ['darkvision 60 ft.'],
    passive: 8,
    languages: ['Common', 'Draconic'],
    cr: '1/8',
    trait: [
        {
            name: 'Sunlight Sensitivity',
            entries: [
                'While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight.',
            ],
        },
        {
            name: 'Pack Tactics',
            entries: [
                "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}.",
            ],
        },
    ],
    action: [
        {
            name: 'Dagger',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}4 ({@damage 1d4 + 2}) piercing damage.',
            ],
        },
        {
            name: 'Sling',
            entries: [
                '{@atk rw} {@hit 4} to hit, range 30/120 ft., one target. {@h}4 ({@damage 1d4 + 2}) bludgeoning damage.',
            ],
        },
    ],
    environment: [
        'arctic',
        'coastal',
        'desert',
        'forest',
        'hill',
        'mountain',
        'swamp',
        'underdark',
        'urban',
    ],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/301/kobold.mp3',
    traitTags: ['Sunlight Sensitivity', 'Pack Tactics'],
    languageTags: ['C', 'DR'],
    senseTags: ['D'],
    damageTags: ['P', 'B'],
    miscTags: ['MW', 'RW', 'RNG'],
    srd: true,
    fluff: {
        name: 'Kobold',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Kobold.jpg',
                },
            },
        ],
        entries: [
            "Kobolds are craven reptilian humanoids that worship evil dragons as demigods and serve them as minions and toadies. Kobolds inhabit dragons' lairs when they can but more commonly infest dungeons, gathering treasures and trinkets to add to their own tiny hoards.",
            {
                name: 'Strength in Numbers',
                entries: [
                    ' Kobolds are egg-laying creatures. They mature quickly and can live to be "great wyrms" more than a century old. However, many kobolds perish before they reach the end of their first decade. Physically weak, they are easy prey for predators. This vulnerability forces them to band together. Their superior numbers can win battles against powerful adversaries, but often with massive casualties on the kobold side.',
                ],
                type: 'entries',
            },
            {
                name: 'Tunnelers and Builders',
                type: 'entries',
                entries: [
                    'Kobolds make up for their physical ineptitude with a cleverness for trap making and tunneling. Their lairs consist of low tunnels through which they move easily but which hinder larger humanoids. Kobolds also riddle their lairs with traps. The most insidious kobold traps make use of natural hazards and other creatures. A trip wire might connect to a spring-loaded trap that hurls clay pots of flesh-eating green slime or flings crates of venomous giant centipedes at intruders.',
                ],
            },
            {
                name: 'The Lost God',
                type: 'entries',
                entries: [
                    "In addition to the dragons they revere, kobolds worship a lesser god named Kurtulmak. Legends speak of how Kurtulmak served as Tiamat's vassal in the Nine Hells until Garl Glittergold, the god of gnomes, stole a trinket from the Dragon Queen's hoard. Tiamat sent Kurtulmak to retrieve the trinket, but Garl Glittergold played a trick on him, collapsing the earth and trapping the kobold god in an underground maze for eternity. For this reason, kobolds hate gnomes and pranks of any kind. Kurtulmak's most devoted worshipers dedicate themselves to finding and releasing their lost god from his prison-maze.",
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Kobold.png?v=1.94.4',
};
