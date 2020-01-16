module.exports = {
    name: 'Toestealer',
    size: 'T',
    isNpc: true,
    type: 'fey',
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [13],
    hp: {
        average: 22,
        formula: '5d4 + 10',
    },
    speed: {
        walk: 20,
        climb: 10,
        swim: 10,
    },
    str: 10,
    dex: 16,
    con: 14,
    int: 12,
    wis: 9,
    cha: 12,
    skill: {
        stealth: '+5',
    },
    conditionImmune: ['poisoned'],
    senses: ['darkvision 120 ft.'],
    passive: 10,
    languages: ['Common'],
    cr: '1/2',
    trait: [
        {
            name: 'Magic Resistance',
            entries: [
                'The gremlin has advantage on saving throws against spells and other magical effects.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The goblin makes one claw attack and one bite attack.'],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 5} to hit, range 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) piercing damage.',
            ],
        },
        {
            name: 'Claws',
            entries: [
                '{@atk mw} {@hit 5} to hit, range 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) slashing damage.',
            ],
        },
        {
            name: 'Aura of Drunkenness',
            entries: [
                'A rum gremlin radiates an aura of drunkenness to a radius of 20 feet. Every creature that starts its turn in the aura must make a successful {@dc 12} Constitution saving throw against poison or be {@condition poisoned} for one hour. Creatures that have drunk any alcohol during the previous hour have disadvantage on the saving throw. While affected by this poison, a creature falls {@condition prone} if it tries to move more than half its speed during a turn.',
            ],
        },
    ],
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The gremlin's innate spellcasting ability is Charisma (spell save {@dc 11}). It can innately cast the following spells, requiring no material components:",
            ],
            will: ['{@spell prestidigitation}'],
            daily: {
                '3': ['{@spell hex}'],
            },
            ability: 'cha',
        },
    ],
    tokenUrl:
        'https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB%20(3pp)/Rum%20Gremlin.png',
    actionTags: ['Multiattack'],
    traitTags: ['Magic Resistance'],
    senseTags: ['SD'],
    languageTags: ['C'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],
    spellcastingTags: ['I'],
};
