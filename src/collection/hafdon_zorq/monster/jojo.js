module.exports = {
    name: 'Jojo',
    size: 'L',
    isNpc: true,
    isNamedCreature: true,
    type: {
        type: 'monstrosity',
        tags: ['Dogmole Juggernaut', 'adult wrinklemole'],
    },
    source: 'zorq',
    alignment: ['N'],
    ac: [
        {
            ac: 15,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 126,
        formula: '12d10 + 60',
    },
    speed: {
        walk: 30,
        burrow: 10,
        swim: 10,
    },
    str: 21,
    dex: 14,
    con: 20,
    int: 8,
    wis: 10,
    cha: 18,
    save: {
        con: '+11',
        str: '+8',
    },
    skill: {
        athletics: '+8',
        intimidation: '+10',
        stealth: '+5',
        survival: '+6',
        acrobatics: '+8',
    },
    senses: ['blindsight 30 ft.'],
    passive: 10,
    cr: '5',
    trait: [
        {
            name: 'Burrow',
            entries: [
                'Dogmole juggernauts cannot burrow into solid rock, but they can move through softer material like soil or loose rubble, leaving a usable tunnel 10 ft. in diameter.',
            ],
        },
        {
            name: 'Ferocity (1/Day)',
            entries: [
                "When the dogmole juggernaut is reduced to 0 hit points, it doesn't die until the end of its next turn.",
            ],
        },
        {
            name: 'Powerful Build',
            entries: [
                'A dogmole juggernaut is treated as one size larger if doing so is advantageous to it (such as during grapple checks, pushing attempts, and tripping attempts, but not for the purposes of squeezing or AC). It gains advantage against magical pushing attempts such as {@spell gust of wind|zorq} or {@spell repelling blast|zorq}.',
            ],
        },
        {
            name: 'Wormkiller Rage',
            entries: [
                'Wild dogmole juggernaut packs are famed for their battles against the monsters of the dark caverns of the world. If a dogmole juggernaut draws blood against vermin, purple worms, or other underground invertebrate, it gains a +4 bonus to Strength and Constitution but suffers a −2 penalty to AC. The wormkiller rage lasts for a number of rounds equal to 1 + its Constitution modifier (minimum 1 round). It cannot end the rage voluntarily while the creatures that sent it into a rage still live.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The dogmole juggernaut makes one claw attack and one bite attack.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}11 ({@damage 1d12 + 5}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 8} to hit, reach 5 ft., one target. {@h}19 ({@damage 4d6 + 5}) slashing damage.',
            ],
        },
    ],
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Dogmole%20Juggernaut.png',
    actionTags: ['Multiattack'],
    senseTags: ['B'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],
};
