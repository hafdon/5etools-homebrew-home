module.exports = {
    name: 'Zarachiel',
    size: 'L',
    type: {
        type: 'celestial',
        tags: ['ooze'],
    },
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [
        {
            ac: 12,
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
    str: 12,
    dex: 4,
    con: 12,
    int: 10,
    wis: 14,
    cha: 10,
    resist: [
        {
            resist: ['piercing'],
            note: 'and slashing from nonmagical weapons',
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
        'none in its natural form; knows the same languages as a creature it dominates',
    ],
    cr: '3',
    trait: [
        {
            name: 'Amorphous',
            entries: [
                'The sap demon can move through a space as narrow as 1 inch wide without squeezing.',
            ],
        },
        {
            name: "Season's Change",
            entries: [
                'If a sap demon (or its host) takes at least 10 fire damage, it also gains the effect of a haste spell until the end of its next turn. If it takes at least 10 cold damage, it gains the effect of a slow spell until the end of its next turn.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The sap demon makes two slam attacks.'],
        },
        {
            name: 'Slam',
            entries: [
                '{@atk mw} {@hit 3} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d8 + 1}) bludgeoning damage. If both attacks hit a Medium or smaller target, the target is {@condition grappled} (escape {@dc 11}), and the sap demon uses Soul Sap on it as a bonus action.',
            ],
        },
        {
            name: 'Soul Sap',
            entries: [
                "The sap demon slides down the throat of a sleeping, helpless, or {@condition grappled} living creature of Medium size or smaller. Once inside, the sap demon takes control of its host, as per the dominate monster spell (Wisdom {@dc 11} negates). While dominated, the host gains blindsight 90 feet. The host drips blood from its ears, nose, eyes, or from a wound that resembles the injury done to the sap demon's tree (1 damage/Hour). Damage inflicted on the host has no effect on the sap demon. If the host dies or is reduced to 0 hit points, the sap demon must leave the body within one hour.",
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
