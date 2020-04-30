module.exports = {
    name: 'Jumps',
    size: 'M',
    type: {
        type: 'beast',
        tags: ['dogmole', 'wrinklemole', 'pronouns--he, him, his'],
    },
    source: 'zorq',
    isNpc: true,
    isNamedCreature: true,
    alignment: ['N'],
    ac: [
        {
            ac: 14,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 71,
        formula: '11d8 + 22',
    },
    speed: {
        walk: 30,
        burrow: 10,
        swim: 10,
    },
    str: 14,
    dex: 20,
    con: 12,
    int: 6,
    wis: 12,
    cha: 18,
    save: {
        dex: '+7',
        cha: '+6',
    },
    skill: {
        acrobatics: '+9',
        persuasion: '+8',
        stealth: '+9',
        survival: '+3',
    },
    senses: ['blindsight 30 ft.'],
    passive: 13,
    cr: '1',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Little pug face, little mole body, little rabbit teeth.',
                'self-conscious of: ',
                'wants to be (thought of as): ',
                'modest about:',
            ],
        },
        { type: 'inset', name: 'Purpose', entries: [''] },
        { type: 'inset', name: 'Background', entries: [''] },
        {
            name: 'Burrow',
            entries: [
                'Jumps cannot burrow into solid rock, but he can move through softer material like soil or loose rubble, leaving a usable tunnel 5 feet in diameter.',
            ],
        },
        {
            name: 'Wormkiller Rage',
            entries: [
                'Wrinklemole packs are famed for their battles against monsters in the dark caverns of the world. If Jumps draws blood against vermin, a purple worm, or other underground invertebrates, he gains a +4 boost to its Strength and Constitution, but suffers a −2 penalty to its AC. The wormkiller rage lasts for 3 rounds. It cannot end the rage voluntarily while the creatures that sent it into a rage still lives.',
            ],
        },
        {
            name: 'Binkies',
            entries: [
                "Jumps was named for his ability to jump. Jumps's long jump is up to 40 feet and his high jump is up to 20 feet when he has a running start.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['Jumps makes one claw attack and one bite attack.'],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}12 ({@damage 3d6 + 2}) slashing damage.',
            ],
        },
    ],
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Dogmole.png',
    actionTags: ['Multiattack'],
    senseTags: ['B'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],
};
