module.exports = {
    name: 'Karnish (Elemental Locus Form)',
    size: 'G',
    type: { type: 'elemental', tags: ['elemental locus'] },
    source: 'zorq',
    alignment: ['N'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 290,
        formula: '20d20 + 80',
    },
    speed: {
        walk: 5,
    },
    str: 28,
    dex: 1,
    con: 18,
    int: 10,
    wis: 11,
    cha: 11,
    save: {
        int: '+6',
        wis: '+6',
        cha: '+6',
    },
    skill: {
        nature: '+6',
        perception: '+6',
    },
    resist: ['bludgeoning', 'piercing', 'slashing'],
    immune: [
        'acid',
        'cold',
        'fire',
        'lightning',
        'poison',
        'thunder',
        {
            immune: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical weapons',
        },
    ],
    conditionImmune: [
        'charmed',
        'exhaustion',
        'frightened',
        'paralyzed',
        'petrified',
        'poisoned',
        'unconscious',
    ],
    senses: ['darkvision 120 ft.', 'tremorsense 120 ft.'],
    passive: 16,
    languages: ['Primordial'],
    cr: '17',
    trait: [
        {
            name: 'Magic Resistance',
            entries: [
                'The elemental locus has advantage on saving throws against spells and other magical effects.',
            ],
        },
        {
            name: 'Immortal',
            entries: [
                "The elemental locus does not age and does not die when it drops to 0 hit points. If the elemental locus drops to 0 hit points, it falls into a quiescent state for 25 weeks before returning to activity with full hit points. Its spawned elementals continue fighting whatever enemies attacked the elemental locus; if no enemies are present, they defend the locus's area.",
            ],
        },
        {
            name: 'Massive',
            entries: [
                "The elemental locus is larger than most Gargantuan creatures, occupying a space of 60 by 60 feet. Its movement is not affected by difficult terrain or by Huge or smaller creatures. Other creatures can enter and move through the elemental locus's space, but they must make a successful {@dc 20} Strength (Athletics) check after each 10 feet of movement. Failure indicates they fall {@condition prone} and can move no farther that turn.",
            ],
        },
        {
            name: 'Spawn Elementals',
            entries: [
                "As a bonus action, the elemental locus loses 82 hit points and spawns an air, earth, fire, or water elemental to serve it. Spawned elementals answer to their creator's will and are not fully independent. The types of elementals the locus can spawn depend on the terrain it embodies; for example, an elemental locus of the desert can spawn earth, fire, and air elementals, but not water.",
            ],
        },
        {
            name: 'Siege Monster',
            entries: [
                'The elemental locus deals double damage to objects and structures.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The elemental locus makes two slam attacks.'],
        },
        {
            name: 'Slam',
            entries: [
                '{@atk mw} {@hit 15} to hit, reach 15 ft., one target. {@h}36 ({@damage 6d8 + 9}) bludgeoning damage. If the target is a creature, it must succeed on a {@dc 23} Strength saving throw or be knocked {@condition prone}.',
            ],
        },
    ],
    page: 169,
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Elemental%20Locus.png',
    actionTags: ['Multiattack'],
    traitTags: ['Magic Resistance', 'Siege Monster'],
    senseTags: ['SD', 'T'],
    languageTags: ['P'],
    damageTags: ['B'],
    miscTags: ['MW', 'RCH'],
};
