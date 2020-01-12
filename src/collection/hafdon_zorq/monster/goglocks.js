/**
 * Reskinned Yeth Hound
 */

module.exports = {
    name: 'Goglocks',
    size: 'L',
    type: {
        type: 'fey',
        tags: ['Yeth hound'],
    },
    source: 'zorq',
    alignment: ['N', 'E'],
    ac: [
        {
            ac: 13,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 45,
        formula: '6d10 + 12',
    },
    speed: {
        walk: 40,
        fly: {
            number: 40,
            condition: '(hover)',
        },
        canHover: true,
    },
    str: 16,
    dex: 15,
    con: 14,
    int: 5,
    wis: 12,
    cha: 7,
    skill: {
        athletics: '+7',
        perception: '+5',
        stealth: '+4',
    },
    save: {
        str: '+5',
        dex: '+4',
    },
    resist: [
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    conditionImmune: ['charmed', 'exhaustion', 'frightened'],
    senses: ['darkvision 60 ft.'],
    passive: 15,
    languages: ['Common', 'Elvish', 'and Sylvan'],
    cr: '3',
    trait: [
        {
            name: 'Keen Hearing and Smell',
            entries: [
                'The yeth hound has advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell.',
            ],
        },
        {
            name: 'Sunlight Banishment',
            entries: [
                "If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can't affect or be affected by anything on the other plane. Once it is adjacent to its master or a pack mate that is on the Material Plane, a yeth hound in the Border Ethereal can return to the Material Plane as an action.",
            ],
        },
        {
            name: 'Telepathic Bond',
            entries: [
                'While the yeth hound is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically with each other.',
            ],
        },
    ],
    action: [
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) piercing damage, plus 13 ({@damage 3d6 + 3}) psychic damage if the target is {@condition frightened}.',
            ],
        },
        {
            name: 'Barkskin',
            entries: ['Goglocks can cast {@spell barkskin|phg} on itself '],
        },
        {
            name: 'Baleful Baying',
            entries: [
                "The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a {@dc 12} Wisdom saving throw or be {@condition frightened} until the end of the hound's next turn or until the hound is {@condition incapacitated}. A {@condition frightened} target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible, must finish the move before taking an action, and must take the most direct route, even if hazards lie that way. A target that successfully saves is immune to the baying of all yeth hounds for the next 24 hours.",
            ],
        },
    ],
    environment: ['forest', 'grassland', 'hill'],

    traitTags: ['Keen Senses'],
    languageTags: ['C', 'E', 'S'],
    senseTags: ['D'],
    damageTags: ['P', 'Y'],
    miscTags: ['MW'],
    fluff: {
        name: 'Goglocks',
        source: 'zorq',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/VGM/Yeth Hound.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                entries: [
                    '{@creature Munta|zorq} (one of Baphomet’s agents) tried to grant to {@creature Sigmurh|zorq} a boon but ended up bonding Goglocks as master to the {@creature Sigmurh|zorq}.',
                    'Yeth hounds fly in pursuit of their prey, often waiting until it is too exhausted to fight back. Only the threat of dawn drives the pack back into hiding.',
                    {
                        name: 'Minions of a Dark Master',
                        entries: [
                            'A pack of yeth hounds can be created by powerful fey such as the Queen of Air and Darkness. Once it is brought into existence, a pack must have a master, who is often someone the creator wishes to reward. The master can telepathically communicate with its yeth hounds to give them commands from afar. If the master of a pack is killed, the hounds seek and choose a new master, typically an individual of great evil such as a vampire, a necromancer, or a hag.',
                            "A yeth hound stands about 5 feet tall at the shoulder and weighs around 400 pounds. Often all that can be seen of one in the darkness is the red glow of its eyes against its night-black fur. The head of a yeth hound has a human-like face, held up by a neck more flexible than a dog's. The creature gives off an odor like smoke.",
                            'Those that stand their ground and fight back discover that mundane weapons partially pass through the hound as if it was made of fog, but magic weapons and silvered weapons can strike true.',
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Sound of Looming Death',
                        entries: [
                            'Yeth hounds make a ghastly baying sound that can be heard all around. Creatures that can see a hound when it bays are filled with supernatural fear and usually flee in terror. When a victim tries to run away, a hound delights in chasing after it and tormenting it before bringing the hunt to a close.',
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Foiled by Sunlight',
                        entries: [
                            "Yeth hounds can't stand sunlight. A pack never willingly prolongs a hunt beyond the night hours and always seeks to return to its dark den before the first rays of dawn. No amount of coercion by a pack's master can deter this behavior. If a yeth hound is exposed to natural sunlight, it fades away, vanishing into the Ethereal Plane, from where its master can retrieve it only after the sun has set.",
                        ],
                        type: 'entries',
                    },
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/VGM/Yeth Hound.png?v=1.94.8',

    isNpc: true,
    isNamedCreature: true,
    spellcasting: [
        {
            name: 'Spellcasting',
            daily: {
                '1e': ['{@spell barkskin|PHB}', '{@spell tree stride|PHB}'],
            },
        },
    ],
};
