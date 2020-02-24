module.exports = {
    name: 'Oubriidhe (Shoggoth Form)',
    size: 'H',
    isNpc: true,
    isNamedCreature: true,
    type: { type: 'aberration', tags: ['Shoggoth', 'gibbering mouther'] },
    source: 'zorq',
    alignment: ['C', 'N'],
    ac: [
        {
            ac: 18,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 387,
        formula: '25d12 + 225',
    },
    speed: {
        walk: 50,
        climb: 30,
        swim: 30,
    },
    str: 26,
    dex: 14,
    con: 28,
    int: 12,
    wis: 16,
    cha: 13,
    skill: {
        perception: '+9',
    },
    resist: ['fire', 'bludgeoning', 'piercing'],
    immune: ['cold', 'thunder', 'slashing'],
    conditionImmune: ['blinded', 'deafened', 'prone', 'stunned', 'unconscious'],
    senses: ['darkvision 120 ft.', 'tremorsense 60 ft.'],
    passive: 19,
    languages: ['Void Speech'],
    cr: '19',
    trait: [
        {
            name: 'Anaerobic',
            entries: [
                "A shoggoth doesn't need oxygen to live. It can exist with equal comfort at the bottom of the ocean or in the vacuum of outer space.",
            ],
        },
        {
            name: 'Absorb Flesh',
            entries: [
                "The body of a creature that dies while {@condition grappled} by a shoggoth is completely absorbed into the shoggoth's mass. No portion of it remains to be used in raise dead, reincarnate, and comparable spells that require touching the dead person's body.",
            ],
        },
        {
            name: 'Amorphous',
            entries: [
                "A shoggoth can move through a space as small as 1 foot wide. It must spend 1 extra foot of movement for every foot it moves through a space smaller than itself, but it isn't subject to any other penalties for squeezing.",
            ],
        },
        {
            name: 'Hideous Piping',
            entries: [
                'The fluting noises made by a shoggoth are otherworldly and mind-shattering. A creature that can hear this cacophony at the start of its turn and is within 120 feet of a shoggoth must succeed on a {@dc 15} Wisdom saving throw or be confused (as the spell confusion) for {@dice 1d4} rounds. Creatures that roll a natural 20 on this saving throw become immune to the Hideous Piping for 24 hours. Otherwise, characters who meet the conditions must repeat the saving throw every round.',
            ],
        },
        {
            name: 'Keen Senses',
            entries: [
                'A shoggoth has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
            ],
        },
        {
            name: 'Rolling Charge',
            entries: [
                "If the shoggoth moves at least 20 feet straight toward a creature and hits it with a slam attack on the same turn, that creature must succeed on a {@dc 20} Dexterity saving throw or be knocked {@condition prone}. If the creature is knocked {@condition prone}, the shoggoth immediately moves into the creature's space as a bonus action and crushes the creature beneath its bulk. The crushed creature can't breathe, is {@condition restrained}, and takes 11 ({@damage 2d10}) bludgeoning damage at the start of each of the shoggoth's turns. A crushed creature remains in its space and does not move with the shoggoth. A crushed creature can escape by using an action and making a successful {@dc 19} Strength check. On a success, the creature crawls into an empty space within 5 feet of the shoggoth.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                "The shoggoth makes 3 ({@dice 1d4 + 1}) slam attacks. (If you wish, reroll the number of attacks at the start of each of the shoggoth's turns.)",
            ],
        },
        {
            name: 'Slam',
            entries: [
                '{@atk mw} {@hit 14} to hit, reach 15 ft., one target. {@h}30 ({@damage 4d10 + 8}) bludgeoning damage, and the target is {@condition grappled} (escape {@dc 18}) and {@condition restrained}. The shoggoth can grapple any number of creatures simultaneously, and this has no effect on its number of attacks.',
            ],
        },
    ],
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Shoggoth.png',
    actionTags: ['Multiattack'],
    traitTags: ['Amorphous', 'Keen Senses'],
    senseTags: ['SD', 'T'],
    damageTags: ['B'],
    miscTags: ['MW', 'RCH'],
};
