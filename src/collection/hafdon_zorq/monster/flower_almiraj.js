module.exports =
    /**
source: forl
*/
    {
        source: 'zorq',
        name: 'Forl',
        /**
         *
         * (flower kind on Amber Ghost shore)
         *
         * these are teh 'flower folk' that are worried about baphomet
         * also similar flowers to ones in Tobolux's eyes -- not really a genie
         */
        size: 'S',
        type: 'beast',
        alignment: ['U'],
        ac: [
            {
                ac: 10,
                from: ['natural armor'],
            },
        ],
        hp: {
            average: 7,
            formula: '2d6',
        },
        speed: {
            walk: 50,
        },
        str: 2,
        dex: 12,
        con: 10,
        int: 2,
        wis: 14,
        cha: 10,
        skill: {
            perception: '+4',
            stealth: '+3',
        },
        senses: ['darkvision 30 ft.'],
        passive: 14,
        cr: '1/8',
        trait: [
            {
                name: 'Keen Senses',
                entries: [
                    'The forl has advantage on Wisdom ({@skill Perception}) checks that rely on hearing or sight.',
                ],
            },
        ],
        action: [
            {
                name: 'Horn',
                entries: [
                    '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}3 ({@damage 1d4 + 1}) piercing damage.',
                ],
            },
        ],
        page: 211,
        familiar: true,
        traitTags: ['Keen Senses'],
        senseTags: ['D'],
        damageTags: ['P'],
        miscTags: ['MW'],
        fluff: {
            name: 'forl',
            source: 'ToA',
            images: [
                {
                    type: 'image',
                    href: {
                        type: 'internal',
                        path: 'bestiary/ToA/forl.jpg',
                    },
                },
            ],
            entries: [
                {
                    type: 'entries',
                    entries: [
                        'a forl is a large, timid collection of petals in the shape of a rabbit with a 1-foot-long spiral horn emerging from its forehead, not unlike the horn of a unicorn. If driven to attack, it tries to spear enemies with its horn.',
                        "forl were brought to Chult long ago by merchants of the distant land of Zakhara. Skilled at evading predators, these creatures have flourished throughout the tropical peninsula. They live in earthen burrows and can be captured and domesticated. With the DM's permission, the find familiar spell can summon a forl.",
                    ],
                },
            ],
        },
    };
