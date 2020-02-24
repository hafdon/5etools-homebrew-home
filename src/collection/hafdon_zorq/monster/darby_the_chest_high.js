module.exports = {
    name: 'Darby the Chest High',
    source: 'zorq',
    isNpc: true,
    isNamedCharacter: true,

    size: 'H',
    type: { type: 'beast', tags: ['Monstrous Centipede'] },
    alignment: ['U'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 84,
        formula: '8d12 + 40',
    },
    speed: {
        walk: 40,
        climb: 40,
    },
    str: 21,
    dex: 16,
    con: 20,
    int: 1,
    wis: 8,
    cha: 3,
    senses: ['blindsight 30 ft.'],
    passive: 9,
    cr: '4',
    trait: [
        {
            name: 'Keen Smell',
            entries: [
                'The centipede has advantage on Wisdom (Perception) checks that rely on smell.',
            ],
        },
    ],
    action: [
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}12 ({@damage 2d6 + 5}) piercing damage, and the target must succeed on a {@dc 15} Constitution saving throw, taking 21 ({@damage 6d6}) poison damage on a failed save, or half as much damage on a successful one.',
            ],
        },
    ],
    traitTags: ['Keen Senses'],
    senseTags: ['B'],
    damageTags: ['P', 'I'],
    miscTags: ['MW'],
};
