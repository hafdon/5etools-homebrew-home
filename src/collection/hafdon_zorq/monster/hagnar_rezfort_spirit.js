module.exports = {
    name: 'Hagnar Rezfort (spirit form)',
    shortName: 'Hagnar',
    isNamedCreature: true,
    isNpc: true,
    size: 'M',
    type: 'fiend',
    source: 'zorq',
    alignment: ['C', 'N'],
    ac: [13],
    hp: {
        formula: '4d8 + 10',
        average: 28,
    },
    speed: {
        walk: 30,
    },
    str: 12,
    dex: 17,
    con: 12,
    int: 10,
    wis: 7,
    cha: 1,
    save: {
        con: '+3',
    },
    skill: {
        stealth: '+7',
        athletics: '+3',
        perception: '+0',
    },
    conditionImmune: ['blinded'],
    senses: ['darkvision 120 ft.'],
    passive: 10,
    languages: ['Common'],
    cr: '1',
    trait: [
        {
            name: 'Trackless',
            entries: [
                "The spirit leaves no tracks to indicate where it has been or where it's headed.",
            ],
        },
    ],
    action: [
        {
            name: 'Claws',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d4 + 4}) slashing damage. If the spirit has advantage on the attack roll, the target also takes 10 ({@damage 3d6}) necrotic damage.',
            ],
        },
    ],
    environment: ['coastal', 'forest', 'swamp', 'underdark', 'urban'],
    languageTags: ['C'],
    senseTags: ['SD'],
    damageTags: ['S', 'N'],
    miscTags: ['MW'],
    spellcasting: [
        {
            name: 'Spellcasting',
            spells: {
                '0': {
                    spells: [
                        '{@spell infestation|XGE}',
                        '{@spell mind sliver|UASorcererAndWarlock}',
                        '{@spell thorn whip|PHB}',
                    ],
                },
            },
            ability: 'int',
        },
    ],
};
