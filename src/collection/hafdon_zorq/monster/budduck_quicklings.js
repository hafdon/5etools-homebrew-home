module.exports = {
    name: 'Quickling',
    size: 'T',
    type: 'fey',
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [16],
    hp: {
        average: 13,
        formula: '3d4 + 6',
    },
    speed: {
        walk: 120,
    },
    str: 4,
    dex: 25,
    con: 15,
    int: 10,
    wis: 12,
    cha: 7,
    skill: {
        acrobatics: '+9',
        perception: '+5',
        'sleight of hand': '+9',
        stealth: '+9',
    },
    senses: ['darkvision 60 ft.'],
    passive: 15,
    languages: ['Common', 'Sylvan'],
    cr: '2',
    trait: [
        {
            type: 'inset',
            name: '_',
            entries: [
                {
                    name: 'Purpose',
                    entries: [
                        "Tricks of that sort are hardly the limit of their artful malice, however. They don't commit outright murder, but quicklings can ruin lives in plenty of other ways: stealing an important letter, swiping coins collected for the poor, planting a stolen item in someone's bag. Quicklings enjoy causing suffering that transcends mere mis chief, especially when the blame for their actions falls on other creatures and creates discord.",
                        'Budduck using them alongside owls for mischievous things, including blackmail.',
                    ],
                },
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: ['Owls'] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about: how fast they are',
                    ],
                },
            ],
        },
        {
            name: 'Blurred Movement',
            entries: [
                'Attack rolls against the quickling have disadvantage unless the quickling is {@condition incapacitated} or {@condition restrained}.',
            ],
        },
        {
            name: 'Evasion',
            entries: [
                'If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The quickling makes three dagger attacks.'],
        },
        {
            name: 'Dagger',
            entries: [
                '{@atk mw,rw} {@hit 8} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}12 ({@damage 2d4 + 7}) piercing damage.',
            ],
        },
    ],
    page: 187,
    environment: ['forest'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/402/quickling.mp3',
    actionTags: ['Multiattack'],
    languageTags: ['C', 'S'],
    senseTags: ['D'],
    damageTags: ['P'],
    miscTags: ['RW', 'MW', 'THW'],
    fluff: {
        name: 'Quickling',
        source: 'VGM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/VGM/Quickling.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                entries: [
                    'Quicklings rocket through haunting, twisted forests where the unseelie fey hold sway, both in the Feywild and in the world. Racing faster than the eye can track, each appears as little more than a blurry wavering in the air.',
                    'A quickling is a small, slender fey, similar to a miniature elf with sharp, feral features. Its cold, cruel eyes gleam like jewels.',
                    {
                        name: 'Live Fast, Die Young',
                        entries: [
                            "Quicklings owe their existence-and their plight-to the Queen of Air and Darkness, the dread ruler of the Gloaming Court. Once a race of lazy and egotistical fey, the creatures that would become the quicklings were late in answering the queen's summons one time too many. To hasten their pace and teach them to mind her will, the queen shrank their stature and sped up their internal clocks. The queen's curse gave quicklings their amazing speed but also accelerated their passage through life-no quickling lives longer than fifteen years.",
                            'To other creatures, a quickling seems blindingly fast, vanishing into an indistinct blur as it moves. Its cruel laughter is a burst of rapid staccato sounds, its speech a shrill squeal. Only when a quickling deliberately slows down, which it prefers not to do, can other beings properly see, hear, and comprehend it. Never truly at rest, a "stationary" quickling constantly paces and shifts in place, as though it can\'t wait to be off again.',
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Too Fast for Words',
                        entries: [
                            " The mortal realm is a ponderous place to a quickling's eye: a hurricane creeps gradually across the sky, a torrent of rain drifts earthward like lazy snowflakes, lightning crawls in a meandering path from cloud to cloud. The slow and boring world seems to be populated by torpid creatures whose deep, mooing speech lacks meaning.",
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Mischief, Not Murder',
                        entries: [
                            " Quicklings have a capricious nature that goes well with their energy level: they think as fast as they run, and they are always up to something. A quickling spends most of its time perpetrating acts of mischief on slower creatures. One rarely passes up an opportunity to tie a person's bootlaces together, move the stool a creature is about to sit on, or unbuckle a saddle while no one's looking.",
                        ],
                        type: 'entries',
                    },
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/VGM/Quickling.png?v=1.94.13',
};
