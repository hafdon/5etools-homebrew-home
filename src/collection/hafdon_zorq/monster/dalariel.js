/**
 *  (Battleforce Angel template)
 */
module.exports = {
    name: 'Dalariel',
    size: 'M',
    type: { type: 'celestial', tags: ['pronouns: she, her, hers'] },
    source: 'zorq',
    alignment: ['L', 'G'],
    ac: [
        {
            ac: 18,
            from: ['{@item plate armor|phb}'],
        },
    ],
    hp: {
        average: 66,
        formula: '12d8 + 12',
    },
    speed: {
        walk: 30,
        fly: 90,
    },
    str: 16,
    dex: 12,
    con: 13,
    int: 11,
    wis: 17,
    cha: 18,
    save: {
        wis: '+6',
        cha: '+7',
    },
    skill: {
        investigation: '+3',
        perception: '+6',
    },
    resist: ['fire', 'radiant'],
    conditionImmune: ['charmed', 'exhaustion', 'frightened'],
    passive: 16,
    languages: ['all'],
    cr: '5',
    senses: ['darkvision 120 ft.', 'truesight 120 ft.'],
    trait: [
        {
            name: 'Flyby',
            entries: [
                "The angel doesn't provoke an opportunity attack when it flies out of an enemy's reach.",
            ],
        },
        {
            name: 'Magic Resistance',
            entries: [
                'The angel has advantage on saving throws against spells and other magical effects.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The angel makes two melee attacks. It also uses Battlefield Inspiration.',
            ],
        },
        {
            name: 'Longsword',
            entries: [
                "{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}7 ({@damage 1d8 + 3}) slashing damage, or 8 ({@damage 1d10 + 3}) slashing damage if used with two hands, plus 18 ({@damage 4d8}) radiant damage. If the target is within 5 feet of any of the angel's allies, the target takes an extra 2 ({@damage 1d4}) radiant damage.",
            ],
        },
        {
            name: 'Battlefield Inspiration',
            entries: [
                "The angel chooses up to three creatures it can see within 30 feet of it. Until the end of the angel's next turn, each target can add a {@dice d4} to its attack rolls and saving throws.",
            ],
        },
    ],
    traitTags: ['Flyby', 'Magic Resistance'],
    actionTags: ['Multiattack'],
    languageTags: ['XX'],
    senseTags: ['SD', 'U'],
    damageTags: ['S', 'R'],
    miscTags: ['MW'],
    fluff: {
        name: 'Battleforce Angel',
        source: 'GGR',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/GGR/Battleforce Angel.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                entries: [
                    "Battleforce angels are the radiant hosts that soar into combat, bathed in the light of Boros zeal. They lead companies of mortal soldiers from above or fly ahead of roc-mounted skyknights. They don't shy away from the blood, pain, and confusion of combat; rather, they immerse themselves in the shifting tides of battle. Only by wading into the battle can they fulfill their responsibility to carry out the commands of the warleaders by adapting their tactics to the shifting situation on the ground.",
                ],
            },
            {
                type: 'entries',
                name: 'Boros Angels',
                entries: [
                    'Angels of the Boros Legion view themselves as the embodiments of what their creator intended. They are fierce warriors devoted to justice and dedicated to protecting the weak against evil and oppression. They are commanders, advisors, strategists, and soldiers. Their presence in battle inspires the mortal soldiers of the legion with righteous zeal.',
                    "Most Boros soldiers assume that angels are paragons of goodness, wisdom, and mercy. The reality is that angels aren't immune to the temptations of corruption, and the necessities of political machination can compromise the best of them.",
                ],
            },
            {
                name: 'Warleaders',
                type: 'entries',
                entries: [
                    'The wisest, most visionary angels are responsible for forming and implementing the military strategy of the Boros Legion. Since they are immortal, their plans might span centuries, and they have been known to accept decades of losses as a reasonable cost for a more significant victory many years later. These warleaders have the statistics of planetars or solars (as presented in the Monster Manual), but their appearance is similar to other Boros angels.',
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/GGR/Battleforce Angel.png?v=1.94.8',
};
