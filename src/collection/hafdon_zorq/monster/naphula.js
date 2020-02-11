module.exports = {
    name: 'Naphula',
    size: 'L',
    isNpc: true,
    isNamedCreature: true,
    type: {
        type: 'fiend',
        tags: [
            'devil',
            'ooze',
            'Intelligent Black Pudding',
            'lemure',
            'slithering tracker',
            'pronouns: they, them, theirs',
        ],
    },
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [14],
    hp: {
        average: 85,
        formula: '10d10 + 30',
    },

    speed: {
        walk: 30,
        climb: 30,
        swim: 30,
    },
    str: 16,
    dex: 19,
    con: 16,
    int: 14,
    wis: 14,
    cha: 11,
    skill: {
        stealth: '+8',
    },
    immune: ['acid', 'cold', 'lightning', 'slashing'],
    resist: [
        {
            resist: ['bludgeoning', 'piercing'],
            note: 'from nonmagical weapons',
        },
    ],
    vulnerable: ['cold', 'fire'],
    conditionImmune: [
        'blinded',
        'deafened',
        'exhaustion',
        'grappled',
        'paralyzed',
        'petrified',
        'prone',
        'restrained',
        'unconscious',
    ],
    senses: ['darkvision 120 ft.', 'blindsight 120 ft.'],

    passive: 12,
    languages: [
        "understands Infernal, Elvish, and Undercommon but can't speak",
    ],
    cr: '5',
    trait: [
        {
            type: 'inset',
            name: '_dossier',
            entries: [
                'NAF-yoo-luh',
                'Tactics: Naphula presents more of a puzzle than a challenge; once Naphula grapples a creature, it generally has to be the target of {@action Shove} or contested grapple checks, as it will pass damage through to the creature it is grappling.',

                'modest about:',
            ],
        },

        {
            name: "Devil's Sight",
            entries: [
                "Magical darkness doesn't impede the lemure's darkvision.",
            ],
        },
        {
            name: 'Hellish Rejuvenation',
            entries: [
                'Naphula comes back to life with all its hit points in {@dice 1d10} days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.',
            ],
        },
        {
            name: 'Amorphous',
            entries: [
                'Naphula can move through a space as narrow as 1 inch wide without squeezing.',
            ],
        },
        {
            name: 'Corrosive Form',
            entries: [
                'A creature that touches Naphula or hits it with a melee attack while within 5 feet of it takes 4 ({@damage 1d8}) acid damage.',
            ],
        },

        {
            name: 'Ambusher',
            entries: [
                'In the first round of a combat, Naphula has advantage on attack rolls against any creature it surprised.',
            ],
        },
        {
            name: 'Damage Transfer',
            entries: [
                'While grappling a creature, Naphula takes only half the damage dealt to it, and the creature it is grappling takes the other half.',
            ],
        },
        {
            name: 'False Appearance',
            entries: [
                'While Naphula remains motionless, it is indistinguishable from a puddle, unless an observer succeeds on a {@dc 18} Intelligence (Investigation) check.',
            ],
        },
        {
            name: 'Keen Tracker',
            entries: ['Naphula has advantage on Wisdom checks to track prey.'],
        },
        {
            name: 'Liquid Form',
            entries: [
                "Naphula can enter an enemy's space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing.",
            ],
        },
        {
            name: 'Spider Climb',
            entries: [
                'Naphula can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Haborim makes one pseudopod fist attack and one slam attack.',
            ],
        },
        {
            name: 'Pseudopod Fist',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage plus 18 ({@damage 4d8}) acid damage.',
            ],
        },
        {
            name: 'Slam',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) bludgeoning damage. A Large or smaller target that is hit must succeed on a {@dc 13} Dexterity saving throw or be {@condition grappled} (escape {@dc 13}). Until this grapple ends, the target is {@condition restrained} and unable to breathe unless it can breathe water. In addition, the {@condition grappled} target takes 16 ({@damage 3d10}) necrotic damage at the start of each of its turns. Naphula can grapple only one target at a time, and cannot use its Slam attack if it is grapping a creature.',
            ],
        },
    ],
};
