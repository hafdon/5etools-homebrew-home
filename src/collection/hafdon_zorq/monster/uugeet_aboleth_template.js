/**
 *
 * Aboleth template
 */

module.exports = {
    name: 'Uugeet',
    source: 'zorq',
    isNpc: true,
    isNamedCharacter: true,

    size: 'L',
    type: 'aberration',

    alignment: ['L', 'E'],
    ac: [
        {
            ac: 17,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 135,
        formula: '18d10 + 36',
    },
    speed: {
        walk: 10,
        swim: 40,
    },
    str: 21,
    dex: 9,
    con: 15,
    int: 18,
    wis: 15,
    cha: 18,
    save: {
        con: '+6',
        int: '+8',
        wis: '+6',
    },
    skill: {
        history: '+12',
        perception: '+10',
    },
    senses: ['darkvision 120 ft.'],
    passive: 20,
    languages: ['Deep Speech', 'telepathy 120 ft.'],
    cr: '10',
    trait: [
        {
            name: 'Amphibious',
            entries: ['The aboleth can breathe air and water.'],
        },
        {
            name: 'Mucous Cloud',
            entries: [
                'While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a {@dc 14} Constitution saving throw. On a failure, the creature is diseased for {@dice 1d4} hours. The diseased creature can breathe only underwater.',
            ],
        },
        '{@$trait probing telepathy|zorq}',
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The aboleth makes three tentacle attacks.'],
        },
        {
            name: 'Tentacle',
            entries: [
                "{@atk mw} {@hit 9} to hit, reach 10 ft., one target. {@h}12 ({@damage 2d6 + 5}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 14} Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 ({@damage 1d12}) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
            ],
        },
        {
            name: 'Tail',
            entries: [
                '{@atk mw} {@hit 9} to hit, reach 10 ft., one target. {@h}15 ({@damage 3d6 + 5}) bludgeoning damage.',
            ],
        },
        {
            name: 'Enslave (3/Day)',
            entries: [
                "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a {@dc 14} Wisdom saving throw or be magically {@condition charmed} by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The {@condition charmed} target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.",
                'Whenever the {@condition charmed} target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.',
            ],
        },
    ],
    legendaryGroup: {
        name: 'Aboleth',
        source: 'MM',
    },
    legendary: [
        {
            name: 'Detect',
            entries: [
                'The aboleth makes a Wisdom ({@skill Perception}) check.',
            ],
        },
        {
            name: 'Tail Swipe',
            entries: ['The aboleth makes one tail attack.'],
        },
        {
            name: 'Psychic Drain (Costs 2 Actions)',
            entries: [
                'One creature {@condition charmed} by the aboleth takes 10 ({@damage 3d6}) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.',
            ],
        },
    ],
    page: 13,
    environment: ['underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/10/aboleth.mp3',
    traitTags: ['Amphibious'],
    actionTags: ['Multiattack', 'Tentacles'],
    languageTags: ['DS', 'TP'],
    senseTags: ['SD'],
    damageTags: ['B', 'A', 'Y'],
    miscTags: ['MW', 'RCH'],
    srd: true,
    fluff: {
        name: 'Aboleth',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Aboleth.jpg',
                },
            },
        ],
        entries: [
            "Before the coming of the gods, aboleths lurked in primordial oceans and underground lakes. They reached out with their minds and seized control of the burgeoning life-forms of the mortal realm, making those creatures their slaves. Their dominance made them like gods. Then the true gods appeared, smashing the aboleths' empire and freeing their slaves. Aboleths have never forgotten.",
            {
                name: 'Eternal Memories',
                type: 'entries',
                entries: [
                    'Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds.',
                    "Aboleths' minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and intricately across eons. Few creatures can conceive of the extent of an aboleth's plan.",
                    {
                        name: 'Gods in the Lake',
                        entries: [
                            " Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the Elemental Plane of Water. In these domains and the lands that adjoin them, aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, aboleths add the knowledge and experiences of their prey to their eternal memories. Aboleths use their telepathic powers to read the minds of creatures and know their desires. An aboleth uses this knowledge to gain a creature's loyalty, promising to fulfill such wants in exchange for obedience. Within its lair, the aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards.",
                        ],
                        type: 'entries',
                    },
                ],
            },
            {
                name: 'Enemies of the Gods',
                type: 'entries',
                entries: [
                    "The aboleths' fall from power is written in stark clarity on their flawless memories, for aboleths never truly die. If an aboleth's body is destroyed, its spirit returns to the Elemental Plane of Water, where a new body coalesces for it over days or months.",
                    'Ultimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and to prepare their plans for perfect execution.',
                ],
            },
            {
                type: 'entries',
                name: "An Aboleth's Lair",
                entries: [
                    'Aboleths lair in subterranean lakes or the rocky depths of the ocean, often surrounded by the ruins of an ancient, fallen aboleth city. An aboleth spends most of its existence underwater, surfacing occasionally to treat with visitors or deranged worshipers.',
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Aboleth.png?v=1.95.1',
};
