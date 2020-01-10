/**
 * TODO: either convert Evard's black Tentacles to UUgeet flavor, or
 * add it as a legendary action with flavor
 */

module.exports = {
    name: 'Baron von Veen (Uugeet form)',
    size: 'L',
    type: 'monstrosity',
    source: 'zorq',
    alignment: ['L', 'NX', 'C', 'E'],
    ac: [
        {
            ac: 13,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 110,
        formula: '20d8 + 30',
    },
    speed: {
        walk: 30,
        swim: 45,
    },
    str: 16,
    dex: 12,
    con: 16,
    int: 18,
    wis: 15,
    cha: 8,
    skill: {
        perception: '+5',
        athletics: '+6',
    },
    resist: [
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    passive: 15,
    languages: ['Abyssal', 'Infernal', 'Primordial', 'Common'],
    cr: '6',
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
            name: 'Voice of the Baron (Recharges after a Short or Long Rest)',
            entries: [
                "Baron von Veen speaks through Uugeet with a thunderous voice audible within 300 feet. Creatures of Uugeet's choice that can hear the Baron's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a {@dc 14} Charisma saving throw or be {@condition frightened} for 1 minute. A {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
            ],
        },
    ],
    // page: null,
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Uugeet's spellcasting ability is Intelligence (spell save {@dc 13}, {@hit 5} to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
            ],
            will: [
                '{@spell command|phb}',
                '{@spell create or destroy water|phb}',
            ],
            daily: {
                '3e': [
                    '{@spell control water|phb}',
                    '{@spell darkness|phb}',
                    '{@spell water breathing|phb}',
                    '{@spell water walk|phb}',
                ],
                '1e': [
                    '{@spell call lightning|phb}',
                    "{@spell evard's black tentacles|PHB}",
                ],
            },
            ability: 'int',
            type: 'spellcasting',
        },
    ],
    environment: ['coastal', 'underwater'],
    // soundClip: null,
    traitTags: ['Amphibious'],
    languageTags: ['X'],
    spellcastingTags: ['I'],
    damageTags: ['T'],

    isNpc: true,
};
