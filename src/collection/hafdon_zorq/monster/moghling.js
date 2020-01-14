module.exports = {
    name: 'moghling',
    size: 'S',
    type: 'monstrosity',
    source: 'zorq',
    alignment: ['U'],
    ac: [11],
    hp: {
        average: 22,
        formula: '5d6 + 5',
    },
    speed: {
        walk: 10,
        fly: 30,
    },
    str: 16,
    dex: 12,
    con: 13,
    int: 2,
    wis: 10,
    cha: 5,
    skill: {
        stealth: '+3',
    },
    senses: ['blindsight 60 ft.'],
    passive: 10,
    cr: '1/2',
    trait: [
        {
            name: 'Echolocation',
            entries: [
                "The moghling can't use its blindsight while {@condition deafened}.",
            ],
        },
        {
            name: 'False Appearance',
            entries: [
                'While the moghling remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.',
            ],
        },
    ],
    action: [
        {
            name: 'Crush',
            entries: [
                "{@atk mw} {@hit 5} to hit, reach 5 ft., one creature. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage, and the moghling attaches to the target. If the target is Medium or smaller and the moghling has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also {@condition blinded} and unable to breathe while the moghling is attached in this way.",
                "While attached to the target, the moghling can attack no other creature except the target but has advantage on its attack rolls. The moghling's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.",
                'A creature can detach the moghling by making a successful {@dc 13} Strength check as an action. On its turn, the moghling can detach itself from the target by using 5 feet of movement.',
            ],
        },
        {
            name: 'Darkness Aura (1/Day)',
            entries: [
                "A 15-foot radius of magical darkness extends out from the moghling, moves with it, and spreads around corners. The darkness lasts as long as the moghling maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.",
            ],
        },
    ],

    environment: ['underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/114/moghling.mp3',
    traitTags: ['False Appearance'],
    senseTags: ['B'],
    damageTags: ['B'],
    miscTags: ['MW', 'AOE'],

    fluff: {
        name: 'moghling',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/moghling.jpg',
                },
            },
        ],
        entries: [
            'A moghling clings to cavern ceilings, remaining perfectly still as it waits for creatures to pass beneath it. From a distance, it can pass itself off as a stalactite or a lump of stone. Then it drops from the ceiling and unfurls, surrounding itself with magical darkness as it engulfs and crushes its prey.',
            'moghlings are found throughout the Underdark, but they are equally common on the Shadowfell. Thriving in that dark realm, they fill an ecological niche similar to bats on the Material Plane. Intelligent creatures of the Shadowfell sometimes train moghlings as guardians or companions.',
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/moghling.png?v=1.94.8',
};
