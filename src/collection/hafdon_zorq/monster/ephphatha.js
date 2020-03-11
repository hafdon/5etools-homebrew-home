module.exports = {
    name: 'Ephphatha (The bear of holding)',
    source: 'z',
    size: 'L',
    type: 'celestial',
    alignment: ['N', 'E'],
    ac: [
        {
            ac: 17,
            from: ['natural armor'],
        },
    ],
    hp: {
        formula: '16d10 + 48',
        average: 136,
    },
    speed: {
        walk: 50,
    },
    str: 18,
    dex: 10,
    con: 17,
    int: 8,
    wis: 12,
    cha: 18,
    skill: {
        perception: '+9',
        athletics: '+12',
    },
    senses: ['darkvision 60 ft.', 'truesight 120 ft.'],
    passive: 19,
    resist: [
        'cold',
        'fire',
        'lightning',
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    immune: ['force', 'poison'],
    conditionImmune: ['poisoned'],
    languages: ['Abyssal', 'Infernal', 'telepathy 60 ft.'],
    cr: '9',
    trait: [
        {
            name: 'Dimensional Lock',
            entries: [
                "Other creatures can't teleport to or from a space within 60 feet of Ephphatha. Any attempt to do so is wasted.",
            ],
        },
        {
            name: 'Magic Resistance',
            entries: [
                'Ephphatha has advantage on saving throws against spells and other magical effects.',
            ],
        },
        {
            name: 'Magic Weapons',
            entries: ["Ephphatha's weapon attacks are magical."],
        },
        {
            name: 'Uncanny Senses',
            entries: [
                "Ephphatha can't be surprised while it isn't {@condition incapacitated}.",
            ],
        },
        {
            name: 'Radiation Cloud',
            entries: [
                "Ephphatha is surrounded by a 10-foot-radius sphere of radiation. When a creature enters the radiation's area for the first time on a turn or starts its turn there, that creature must make a {@dc 13} Constitution saving throw. The creature takes {@damage 5d8} poison damage on a failed save, or half as much damage on a successful one. On a failed save, it is also {@condition poisoned} until the end of Ephphatha's next turn.",
            ],
        },
        {
            name: 'Taste buds',
            entries: [
                "Ephphatha's taste buds are mostly in her mouth (though some are on her tongue).",
            ],
        },
        {
            name: 'Lightcloud',
            entries: [
                'Ephphatha radiates nonmagical sunlight in a 60-foot radius.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Ephphatha makes two attacks: one with its tongue or its bite and one with its claws. (Only her claw attack may be used as an opportunity attack.)',
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
                '{@atk rw} {@hit 7} to hit, range 30 ft., one target. {@h}17 ({@damage 2d12 + 4}) piercing damage. If the target is Medium or smaller, it is {@condition grappled} (escape {@dc 15}), pulled up to 30 feet toward the canoloth, and is {@condition restrained} until the grapple ends. The canoloth can grapple one target at a time with its tongue.',
            ],
        },
    ],
    environment: ['coastal', 'underdark', 'urban'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/609/canoloth.mp3',
    traitTags: ['Magic Resistance', 'Magic Weapons'],
    senseTags: ['D', 'U'],
    actionTags: ['Multiattack'],
    languageTags: ['AB', 'I', 'TP'],
    damageTags: ['P', 'S'],
    miscTags: ['MW', 'RW', 'AOE'],
    fluff: {
        name: 'Canoloth',
        source: 'MTF',
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
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MTF/Canoloth.jpg',
                },
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MTF/Canoloth.png?v=1.96.3',
    isNamedCreature: true,
    reaction: [
        {
            name: 'Shard Shed',
            entries: [
                "If Ephphatha sustains bludgeoning, slashing, or piercing damage from a nonmagical attack, she may use her reaction to shed a {@creature marlock|zorq} (based on 'the wretched'). A marlock shed in this way begins with hit points equal to the damage sustained. Its initiative is the same as Ephphatha's. Ephphatha can have only one marlock in existence at a time. An attempt to create a second marlock destroys the other marlock.",
            ],
        },
        {
            name: 'Shard Absorb',
            entries: [
                "Ephphatha can use a reaction to absorb a morlock within 5 feet of her. She regains hit points equal to one half of the morlock's hit points, rounded down, to a minimum of 1.",
            ],
        },
    ],
};
