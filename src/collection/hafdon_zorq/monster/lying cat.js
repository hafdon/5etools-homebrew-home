module.exports = {
    name: 'Lying Cat',
    size: 'T',
    type: { type: 'beast', tags: ['Tressym'] },
    source: 'zorq',
    alignment: ['C', 'N'],
    ac: [12],
    hp: {
        average: 5,
        formula: '2d4',
    },
    speed: {
        walk: 40,
        climb: 30,
        fly: 40,
    },
    str: 3,
    dex: 15,
    con: 10,
    int: 11,
    wis: 12,
    cha: 12,
    skill: {
        perception: '+5',
        stealth: '+4',
    },
    immune: ['poison'],
    conditionImmune: ['poisoned'],
    senses: ['darkvision 60 ft.'],
    passive: 15,
    languages: ['Common', 'Rodent'],
    cr: '0',
    trait: [
        {
            name: 'Detect Invisibility',
            entries: [
                "Within 60 feet of Lying Cat, magical invisibility fails to conceal anything from Lying Cat's sight",
            ],
        },
        {
            name: 'Keen Smell',
            entries: [
                'Lying Cat has advantage on Wisdom ({@skill Perception}) checks that rely on smell.',
            ],
        },
        {
            name: 'Poison Sense',
            entries: [
                'Lying Cat can detect whether a substance is poisonous by taste, touch, or smell.',
            ],
        },
        {
            name: 'Familiar',
            entries: [
                "With the DM's permission, a person who casts the find familiar spell can choose to conjure Lying Cat in stead of a normal cat.",
            ],
        },
    ],
    action: [
        {
            name: 'Claws',
            entries: [
                '{@atk mw} {@hit 0} to hit, reach 5 ft., one target. {@h}1 slashing damage.',
            ],
        },
    ],

    // familiar: true,
    isNpc: true,

    traitTags: ['Keen Senses'],
    languageTags: ['C', 'CS'],
    miscTags: ['MW'],
    senseTags: ['D'],
    damageTags: ['S'],
    fluff: {
        name: 'Lying Cat',
        source: 'BGDIA',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/BGDIA/Tressym.jpg',
                },
            },
        ],
        entries: [
            'Lying Cat is a mischievous winged cat as big as a house cat, with a wingspan of 3 feet.',
            'Thought to be the results of wizardly experimentation on house cats, Lying Cat are intelligent and have been known to form strong friendships with humanoids, particularly rangers and wizards. Lying Cat get along well with others of their kind, but they rarely lair or hunt together. They peacefully ignore bats, faerie dragons, and the like, but they hate stirges and evil flying monsters such as manticores. They also enjoy teasing dogs.',
            "Lying Cat feed on small rodents, birds, and insects, stalking and pouncing on prey much as normal cats do, but with the added advantage of flight. Lying Cat don't, however, attack nestlings or despoil eggs.",
            "Lying Cat mate with others of their kind, but they don't mate for life. Lying Cat can also mate with a normal cat, though only one out of every ten of their offspring will be Lying Cat; the others will be normal cats.",
            'Lying Cat have good memories, particularly when it comes to danger. For example, Lying Cat that sees a human use awand of lightningbolts remembers the danger of "sticks of wood held by humans" for the rest of its life. A lucky, healthy Lying Cat can live to be 20 years old.',
            "With the DM's permission, a person who casts the findfamiliar spellcan choose to conjure Lying Cat instead of a normal cat.",
        ],
    },
    tokenUrl: 'https://5e.tools/img/SKT/Tressym.png?v=1.94.8',
    // 	"tokenUrl": "https://5e.tools/img/BGDIA/Tressym.png?v=1.94.8"
};
