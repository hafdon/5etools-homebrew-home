module.exports = {
    name: 'Zarachiel (Gloucous form)',
    size: 'L',
    type: {
        type: 'ooze',
        tags: ['celestial', 'pronouns--they, them, theirs'],
    },
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [
        {
            ac: 13,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 63,
        formula: '14d6 + 14',
    },
    speed: {
        walk: 20,
        climb: 20,
    },
    str: 16,
    dex: 8,
    con: 14,
    int: 10,
    wis: 10,
    cha: 4,
    resist: [
        {
            resist: ['piercing', 'slashing'],
            note: 'from nonmagical weapons',
        },
    ],
    immune: ['bludgeoning', 'acid', 'lightning'],
    conditionImmune: [
        'blinded',
        'charmed',
        'deafened',
        'exhaustion',
        'frightened',
        'prone',
    ],
    senses: ['blindsight 90 ft. (blind beyond this radius)'],
    passive: 12,
    languages: [
        'Common',
        'Zorbh',
        'knows the same languages as a creature it dominates',
    ],
    cr: '3',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'In glaucous form, Zarachiel is a 9-foot tall greyish-black ooze with tiny silver eyes. Its outer layer flows like a fondue fountain. It does not spell great.',
                'self-conscious of: ',
                'wants to be (thought of as): ',
                'modest about:',
            ],
        },
        // { type: 'inset', name: 'Purpose', entries: [''] },
        // { type: 'inset', name: 'Background', entries: [''] },
        {
            name: 'Amorphous',
            entries: [
                'Zarachiel can move through a space as narrow as 1 inch wide without squeezing.',
            ],
        },
        {
            name: "Season's Change",
            entries: [
                'If Zarachiel (or its host) takes at least 10 fire damage, it also gains the effect of the {spell haste|phb} spell until the end of its next turn. If it takes at least 10 cold damage, it gains the effect of the {@slow|phb} spell until the end of its next turn.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['Zarachiel makes two slam attacks.'],
        },
        {
            name: 'Slam',
            entries: [
                '{@atk mw} {@hit 3} to hit, reach 10 ft., one target. {@h}10 ({@damage 2d8 + 1}) bludgeoning damage. If both attacks hit a Medium or smaller target, the target is {@condition grappled} (escape {@dc 11}), and Zarachiel uses Soul Sap on it as a bonus action.',
            ],
        },
        {
            name: 'Soul Sap',
            entries: [
                "Zarachiel slides down the throat of a sleeping, helpless, or {@condition grappled} living creature of Medium size or smaller. Once inside, Zarachiel takes control of its host, as per the {@spell dominate monster|phb} spell (Wisdom {@dc 11} negates). While dominated, the host gains blindsight 90 feet. The host drips blood from its ears, nose, eyes, or from a wound that resembles the injury done to Zarachiel's tree (1 damage/Hour). Damage inflicted on the host has no effect on Zarachiel. If the host dies or is reduced to 0 hit points, Zarachiel must leave the body within one hour.",
            ],
        },
    ],
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Sap%20Demon.png',
    actionTags: ['Multiattack'],
    traitTags: ['Amorphous'],
    senseTags: ['B'],
    damageTags: ['B'],
    miscTags: ['MW'],
};
