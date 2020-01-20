module.exports = {
    name: 'Nevlim',
    size: 'G',
    type: {
        type: 'celestial',
        tags: ['Dragon Turtle', 'ulimara harbinger', 'dragon'],
    },
    pronunciation: 'nev-LEEM',
    source: 'MM',
    alignment: ['N'],
    ac: [
        {
            ac: 20,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 341,
        formula: '22d20 + 110',
    },
    speed: {
        walk: 20,
        swim: 40,
    },
    str: 25,
    dex: 10,
    con: 20,
    int: 10,
    wis: 12,
    cha: 12,
    save: {
        dex: '+6',
        con: '+11',
        wis: '+7',
    },
    resist: ['fire'],
    senses: ['darkvision 120 ft.'],
    passive: 11,
    languages: ['Aquan', 'Draconic', 'telepathy'],
    cr: '17',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Gargantuan, tetrapod body, huge head with beak, beautiful rich pink coral growing out of its body, between flippers and feet, huge chunky tail, a "horseshoe head" growing off tail?, face like seal with beak, perfetly clear water. like having a blue whale in front of you.',
                'Inside mouth: like globe of fire in space -- in its mouth; incredible conical teeth and huge tusks. little globe of fire comes out.',
                'self-conscious of: ',
                'wants to be (thought of as): ',
                'modest about:',
            ],
        },
        { type: 'inset', name: 'Purpose', entries: [''] },
        { type: 'inset', name: 'Background', entries: [''] },
        '{@$trait amphibious|zorq}',
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 13} to hit, reach 15 ft., one target. {@h}26 ({@damage 3d12 + 7}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 13} to hit, reach 10 ft., one target. {@h}16 ({@damage 2d8 + 7}) slashing damage.',
            ],
        },
        {
            name: 'Tail',
            entries: [
                '{@atk mw} {@hit 13} to hit, reach 15 ft., one target. {@h}26 ({@damage 3d12 + 7}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 20} Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked {@condition prone}.',
            ],
        },
        {
            name: 'Steam Breath {@recharge 5}',
            entries: [
                "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a {@dc 18} Constitution saving throw, taking 52 ({@damage 15d6}) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
            ],
        },
    ],

    environment: ['coastal', 'underwater'],

    traitTags: ['Amphibious'],
    actionTags: ['Multiattack'],
    languageTags: ['AQ', 'DR'],
    senseTags: ['SD'],
    damageTags: ['P', 'S', 'B', 'F'],
    miscTags: ['MW', 'RCH', 'AOE'],
};
