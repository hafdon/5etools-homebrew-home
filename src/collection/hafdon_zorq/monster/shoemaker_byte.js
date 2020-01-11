module.exports = {
    name: 'Shoemaker Byte',
    size: 'L',
    type: {
        type: 'fey',
        tags: ['pronouns: she, her, hers'],
    },
    source: 'zorq',
    alignment: ['N', 'G'],
    ac: [
        {
            ac: 13,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 135,
        formula: '18d8 + 54',
    },
    speed: {
        walk: 40,
        climb: 30,
    },
    str: 19,
    dex: 10,
    con: 17,
    int: 13,
    wis: 12,
    cha: 12,
    skill: {
        perception: '+7',
        athletics: '+10',
        nature: '+7',
        stealth: '+6',
        survival: '+7',
    },
    immune: [
        {
            immune: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    passive: 17,
    languages: ['Common', 'Ursine'],
    cr: '5',
    trait: [
        {
            name: 'Keen Smell',
            entries: [
                'Shoemaker Byte has advantage on Wisdom ({@skill Perception}) checks that rely on smell.',
            ],
        },
        {
            name: 'Helm of Culpability',
            entries: [
                'Shoemaker Byte wears an iron kettle hat. Any attempt to remove the helm suffers a -5 penalty.',
            ],
        },
        {
            name: 'Labyrinthine Recall',
            entries: [
                'Shoemaker Byte can perfectly recall any path she has traveled.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Byte makes two melee attacks, choosing from claw, bite, or greataxe attacks. ',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}15 ({@damage 2d10 + 4}) piercing damage. ',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) slashing damage. If the target is Large or smaller it must succeed on a {@dc 14} Strength saving throw or be knocked {@condition prone}.',
            ],
        },
        {
            name: 'Greataxe',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}10 ({@damage 1d12 + 4}) slashing damage.',
            ],
        },
    ],
    environment: ['arctic', 'forest', 'hill'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/527/werebear.mp3',
    traitTags: ['Keen Senses'],
    actionTags: ['Multiattack'],
    languageTags: ['C'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],
    srd: true,
    tokenUrl: 'https://5e.tools/img/MM/Werebear.png?v=1.94.8',
    isNamedCreature: true,
    isNpc: true,
    legendaryActions: 1,
    legendaryHeader: [
        'As long as Shoemaker Byte is wearing her helmet, and on initiative count 20 (losing all ties) Byte can take 1 legendary action, choosing from the options below. Only one legendary action can be used at a time. Byte regains spent legendary actions at the start of her turn.',
    ],
    legendary: [
        {
            name: 'Instill Guilt',
            entries: [
                'Shoemaker Byte stares penetratingly at a creature and issues a euphonic growl. The creature has to make a {@dc 14} Wisdom saving throw or spend their next turn extinguishing any visible flames or, if nothing is burning, rendering the area as incommodious to combustion as possible. At the end of their turn, if they have speed greater than 0, they must lie {@condition prone} on the ground and roll about.',
            ],
        },
        {
            name: 'Bite Attack',
            entries: ['Shoemaker Byte makes a melee attack with her bite.'],
        },
        {
            name: 'Dirty Claws',
            entries: [
                'Shoemaker Byte casts the {@spell mold earth|xge} cantrip.',
            ],
        },
    ],
    fluff: {
        entries: [
            'Shoemaker Byte is a legit bear. She has paws capable of dextrous object manipulation as well as claw-type enmurderment. She stands 11 ft. tall at the shoulder and weighs half a ton. She {@bold hates} forest fires.',
        ],
    },
};
