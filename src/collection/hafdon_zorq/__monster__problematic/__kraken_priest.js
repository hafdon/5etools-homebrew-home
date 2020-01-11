module.exports = {
    name: 'Kraken Priest',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['any race'],
    },
    source: 'VGM',
    alignment: ['L', 'NX', 'C', 'E'],
    ac: [10],
    hp: {
        average: 75,
        formula: '10d8 + 30',
    },
    speed: {
        walk: 30,
        swim: 30,
    },
    str: 12,
    dex: 10,
    con: 16,
    int: 10,
    wis: 15,
    cha: 14,
    skill: {
        perception: '+5',
    },
    resist: [
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    passive: 15,
    languages: ['any two languages'],
    cr: '5',
    trait: [
        {
            name: 'Amphibious',
            entries: ['The priest can breathe air and water.'],
        },
    ],
    action: [
        {
            name: 'Thunderous Touch',
            entries: [
                '{@atk ms} {@hit 5} to hit, reach 5 ft., one creature. {@h}27 ({@damage 5d10}) thunder damage.',
            ],
        },
        {
            name: 'Voice of the Kraken (Recharges after a Short or Long Rest)',
            entries: [
                "A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a {@dc 14} Charisma saving throw or be {@condition frightened} for 1 minute. A {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
            ],
        },
    ],
    page: 215,
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The priest's spellcasting ability is Wisdom (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
            ],
            will: ['{@spell command}', '{@spell create or destroy water}'],
            daily: {
                '3e': [
                    '{@spell control water}',
                    '{@spell darkness}',
                    '{@spell water breathing}',
                    '{@spell water walk}',
                ],
                '1e': [
                    '{@spell call lightning}',
                    "{@spell Evard's black tentacles}",
                ],
            },
            ability: 'wis',
            type: 'spellcasting',
        },
    ],
    environment: ['coastal', 'underwater'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/303/kraken-priest.mp3',
    traitTags: ['Amphibious'],
    languageTags: ['X'],
    spellcastingTags: ['I'],
    damageTags: ['T'],
    otherSources: [
        {
            source: 'GoS',
        },
        {
            source: 'DIP',
        },
        {
            source: 'SLW',
        },
        {
            source: 'LR',
        },
    ],
};
