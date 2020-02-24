module.exports = {
    name: 'Canoloth',
    source: 'zorq',
    size: 'M',
    type: {
        type: 'fiend',
        tags: ['yugoloth'],
    },
    alignment: ['N', 'E'],
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
    immune: ['acid', 'force', 'poison'],
    conditionImmune: ['poisoned'],
    languages: ['Abyssal', 'Infernal', 'telepathy 60 ft.'],
    cr: '8',
    trait: [
        {
            name: 'Dimensional Lock',
            entries: [
                "Other creatures can't teleport to or from a space within 60 feet of the canoloth. Any attempt to do so is wasted.",
            ],
        },
        {
            name: 'Magic Resistance',
            entries: [
                'The canoloth has advantage on saving throws against spells and other magical effects.',
            ],
        },
        {
            name: 'Magic Weapons',
            entries: ["The canoloth's weapon attacks are magical."],
        },
        {
            name: 'Uncanny Senses',
            entries: [
                "The canoloth can't be surprised while it isn't {@condition incapacitated}.",
            ],
        },
        {
            name: 'Misc.',
            entries: [
                '- Evil telepathy effect.',
                '- Poison (carlos)',
                '- information / spells (drav)',
                '- fez',
                '- flick: no force damage; portal sense messed up',
                '- paros',
            ],
        },
        {
            name: 'Bringer of Plagues (1/Day)',
            entries: [
                'As a bonus action, the oinoloth blights the area within 30 feet of it. The blight lasts for 24 hours. While blighted, all normal plants in the area wither and die, and the number of hit points restored by a spell to a creature in that area is halved.',
                "Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a {@dc 16} Constitution saving throw. On a successful save, the creature is immune to the oinoloth's Bringer of Plagues for the next 24 hours. On a failed save, the creature takes 14 ({@damage 4d6}) necrotic damage and is {@condition poisoned}.",
                "The {@condition poisoned} creature can't regain hit points. After every 24 hours that elapse, the {@condition poisoned} creature can repeat the saving throw. On a failed save, the creature's hit point maximum is reduced by 5 ({@dice 1d10}). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The canoloth makes two attacks: one with its tongue or its bite and one with its claws.',
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
        {
            name: 'Life Leech',
            entries: [
                'The yagnoloth touches one {@condition incapacitated} creature within 15 feet of it. The target takes 36 ({@damage 7d8 + 4}) necrotic damage, and the yagnoloth gains temporary hit points equal to half the damage dealt. The target must succeed on a {@dc 16} Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest, and the target dies if its hit point maximum is reduced to 0.',
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
    damageTags: ['P', 'S', 'N'],
    miscTags: ['MW', 'RW'],
    tokenUrl: 'https://5e.tools/img/MTF/Canoloth.png?v=1.96.3',
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            daily: {
                '1e': ['{@spell globe of invulnerability|PHB} (at level 6)'],
            },
            type: 'spellcasting',
        },
    ],
    spellcastingTags: ['I'],
};
