module.exports = {
    name: 'Georginia',
    size: 'M',
    type: {
        type: 'fiend',
        tags: ['yugoloth', 'canoloth'],
    },
    source: 'zorq',
    alignment: ['L', 'N'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 120,
        formula: '16d8 + 48',
    },
    speed: {
        walk: 50,
    },
    str: 18,
    dex: 10,
    con: 17,
    int: 5,
    wis: 17,
    cha: 12,
    skill: {
        investigation: '+3',
        perception: '+9',
    },
    resist: [
        'cold',
        'fire',
        'lightning',
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    immune: ['acid', 'poison'],
    conditionImmune: ['poisoned'],
    senses: ['darkvision 60 ft.', 'truesight 120 ft.'],
    passive: 19,
    languages: ['Abyssal', 'Infernal', 'telepathy 60 ft.'],
    cr: '8',
    trait: [
        {
            type: 'inset',
            entries: [
                { name: 'Purpose', entries: [''] },
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: ['Lunchasaurus'] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about:',
                    ],
                },
                {
                    name: 'The Whole Buffalo',
                    entries: [
                        "Dimensional Lock:  (something made from a canoloth that acts as ) Other creatures can't teleport to or from a space within 60 feet of Georginia. Any attempt to do so is wasted.",
                    ],
                },
            ],
        },
        {
            name: 'Dimensional Lock',
            entries: [
                "Other creatures can't teleport to or from a space within 60 feet of Georginia. Any attempt to do so is wasted.",
            ],
        },
        {
            name: 'Magic Resistance',
            entries: [
                'Georginia has advantage on saving throws against spells and other magical effects.',
            ],
        },
        {
            name: 'Magic Weapons',
            entries: ["Georginia's weapon attacks are magical."],
        },
        {
            name: 'Uncanny Senses',
            entries: [
                "Georginia can't be surprised while it isn't {@condition incapacitated}.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Georginia makes two attacks: one with its tongue or its bite and one with its claws.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}25 ({@damage 6d6 + 4}) piercing damage.',
            ],
        },
        {
            name: 'Claws',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d10 + 4}) slashing damage.',
            ],
        },
        {
            name: 'Tongue',
            entries: [
                '{@atk rw} {@hit 7} to hit, range 30 ft., one target. {@h}17 ({@damage 2d12 + 4}) piercing damage. If the target is Medium or smaller, it is {@condition grappled} (escape {@dc 15}), pulled up to 30 feet toward Georginia, and is {@condition restrained} until the grapple ends. Georginia can grapple one target at a time with its tongue.',
            ],
        },
    ],
    environment: ['coastal', 'underdark', 'urban'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/609/canoloth.mp3',
    traitTags: ['Magic Resistance', 'Magic Weapons'],
    actionTags: ['Multiattack'],
    languageTags: ['AB', 'I', 'TP'],
    senseTags: ['D', 'U'],
    damageTags: ['P', 'S'],
    miscTags: ['MW', 'RW'],
    fluff: {
        name: 'Canoloth',
        source: 'MTF',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MTF/Canoloth.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'quote',
                entries: [
                    'Canoloths are fundamentally lazy creatures. Given no reason to attack, they rarely rise to the bait.',
                ],
                by: 'Mordenkainen',
            },
            {
                type: 'entries',
                name: 'Canoloth',
                entries: [
                    'Canoloths prefer to enter into contracts to guard valuable treasures and important locations. They always do exactly as asked—never any more, never any less.',
                    'With senses sharp enough to pinpoint the locations of nearby invisible creatures, canoloths respond unfailingly to any threat to their charges. Furthermore, they emit a magical distortion field that prevents creatures close to them from teleporting.',
                    'Canoloths confront intruders with swift and terrible force, projecting long, spiny tongues to grab their foes and drag them close. What happens next depends on the contract. Unless instructed to kill, a canoloth merely holds onto its prisoner, but if given the order to do so, it tears its prey limb from limb.',
                ],
            },
            {
                type: 'entries',
                name: 'Yugoloths',
                entries: [
                    "Mercenaries that ply their trade throughout the Lower Planes and in other realms, yugoloths have a reputation for effectiveness that is matched only by their desire for ever more wealth. Although yugoloths aren't especially loyal and typically try to exploit every potential loophole in a contract, they undertake any task for which they are hired, no matter how despicable. Yugoloths come in a wide variety of forms, including those described in the {@filter Monster Manual|bestiary|source=mm|tag=yugoloth} and the six creatures presented {@filter here|bestiary|source=mtf|tag=yugoloth}.",
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MTF/Canoloth.png?v=1.95.0',
};
