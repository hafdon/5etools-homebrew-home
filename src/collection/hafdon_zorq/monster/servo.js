module.exports = {
    source: 'zorq',

    name: 'Servo',
    size: 'T',
    type: 'construct',
    alignment: ['U'],
    ac: [
        {
            ac: 11,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 10,
        formula: '3d4 + 3',
    },
    speed: {
        walk: 20,
    },
    str: 4,
    dex: 11,
    con: 12,
    int: 3,
    wis: 10,
    cha: 7,
    immune: ['poison'],
    conditionImmune: ['charmed', 'poisoned'],
    passive: 10,
    cr: '0',
    action: [
        // {
        //     name: 'Claw',
        //     entries: [
        //         '{@atk mw} {@hit 0} to hit, reach 5 ft., one target. {@h}1 slashing damage.',
        //     ],
        // },
    ],
    miscTags: ['MW'],
    damageTags: ['S'],
};
