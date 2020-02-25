module.exports = {
    name: 'The Sneeze',
    source: 'zorq',
    vehicleType: 'SHIP',
    size: 'M',
    dimensions: ['5 ft.', '5 ft.'],

    // creature capacity (crew)
    capCrew: 1,

    // cargo capacity (in tons)
    capCargo: 0.01,

    // travel pace per day
    pace: 3,
    str: 8,
    dex: 10,
    con: 8,
    int: 0,
    wis: 0,
    cha: 0,
    immune: ['poison', 'psychic'],
    conditionImmune: [
        'blinded',
        'charmed',
        'deafened',
        'exhaustion',
        'frightened',
        'incapacitated',
        'paralyzed',
        'petrified',
        'poisoned',
        'prone',
        'stunned',
        'unconscious',
    ],
    hull: {
        // armor class
        ac: 10,
        // hit points
        hp: 35,
        // damage threshold
        dt: 0,

        // mishap threshold
        mt: 0,
    },
    // CONTROL AND MOVEMENT:
    movement: [
        {
            name: 'Oars',
            isControl: true,
            ac: 12,
            hp: 15,
            locomotion: [
                {
                    mode: 'water',
                    entries: [
                        "oars, speed 15 ft. Move up to its speed, with one 120-degree turn. Without oars, the coracle's speed is 0.",
                    ],
                },
            ],
        },
    ],
    other: [
        {
            name: 'Actions',
            entries: ['On its turn, the coracle can move using its oars.'],
        },
    ],
};
