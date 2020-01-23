module.exports = {
    name: 'Fezziwig Hornswoggle',
    size: 'M',
    short: 'Fez',
    type: {
        type: 'humanoid',
        tags: ['halfling'],
    },
    source: 'zorq',
    alignment: ['L', 'G'],
    ac: [
        {
            ac: 16,
            from: ['{@item chain mail|phb}'],
        },
    ],
    hp: {
        average: 30,
        formula: '4d8 + 12',
    },
    speed: {
        walk: 30,
    },
    str: 16,
    dex: 11,
    con: 16,
    int: 11,
    wis: 10,
    cha: 13,
    skill: {
        athletics: '+5',
        intimidation: '+3',
    },
    passive: 10,
    languages: ['any one language (usually Common)'],
    cr: '3',
    trait: ['{@$sea legs|zorq}'],
    action: [
        {
            name: 'Multiattack',
            entries: ['The first mate makes two attacks with its longsword.'],
        },
        {
            name: 'Longsword',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}12 ({@damage 2d8 + 3}) slashing damage, or 14 ({@damage 2d10 + 3}) slashing damage if used with two hands. If the target is a creature, the first mate can choose to deal no damage with the attack to disarm the target. The target must succeed on a {@dc 14} Strength saving throw or drop one item it is holding on the ground.',
            ],
        },
    ],
    damageTags: ['S'],
    miscTags: ['MW'],
    languageTags: ['C', 'X'],
    actionTags: ['Multiattack'],
    tokenUrl: 'https://5e.tools/img/GoS/Pirate First Mate.png?v=1.94.8',
};
