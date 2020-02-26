module.exports = {
    name: 'Juvenile Snapping Turtle',
    source: 'zorq',
    size: 'M',
    type: 'beast',
    alignment: ['U'],
    ac: [
        {
            ac: 14,
            from: ['natural armor'],
        },
        {
            ac: 9,
            condition: 'while prone',
        },
    ],
    hp: {
        formula: '3d10 + 3',
        average: 19,
    },
    speed: {
        walk: 30,
        swim: 40,
    },
    str: 17,
    dex: 10,
    con: 12,
    int: 6,
    wis: 12,
    cha: 5,
    senses: ['darkvision 60 ft.'],
    passive: 11,
    cr: '1/2',
    trait: [
        {
            name: 'Amphibious',
            entries: ['The turtle can breathe air and water.'],
        },
        {
            name: 'Stable',
            entries: [
                'Whenever an effect knocks the turtle {@condition prone}, it can make a {@dc 10} Constitution saving throw to avoid being knocked {@condition prone}. A {@condition prone} turtle is upside down. To stand up, it must succeed on a {@dc 10} Dexterity check on its turn and then use all its movement for that turn.',
            ],
        },
    ],
    action: [
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d4 + 3}) slashing damage.',
            ],
        },
    ],
    traitTags: ['Amphibious'],
    senseTags: ['D'],
    damageTags: ['S'],
    miscTags: ['MW'],
    tokenUrl: 'https://5e.tools/img/ToA/Giant Snapping Turtle.png?v=1.99.1',
};
