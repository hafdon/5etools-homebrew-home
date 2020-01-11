module.exports = {
    name: 'These Rocks Look Great',
    level: 2,
    school: 'E',
    time: [
        {
            number: 1,
            unit: 'action',
        },
    ],
    range: {
        type: 'point',
        distance: {
            type: 'touch',
        },
    },
    duration: [
        {
            type: 'timed',
            duration: {
                type: 'minute',
                amount: 10,
                upTo: true,
            },
        },
    ],
    classes: {
        fromClassList: [
            {
                name: 'Wizard',
                source: 'PHB',
            },
        ],
    },
    entries: [
        'This spell wards a willing dwarf you touch and creates a mystic connection between you. Choose one of the following wards; you and the target gain that ward until the spell ends.',
        {
            type: 'list',
            items: [
                'You and the target gain a +2 bonus to AC and gain {@dice 2d6} temporary hit points each (roll once for both), which are lost when the spell ends.',
                'You and the target are immune to being {@condition charmed} and {@condition frightened} and cannot be possessed.',
                'You and the target are immune to being {@condition petrified}.',
                'You and the target add +5 to any skill or ability check in which stone is concerned.',
            ],
        },
        'The spell ends if you or the target drop to 0 hit points. It also ends if the spell is cast again on either of the connected creatures. You can dismiss the spell as a bonus action.',
    ],
    source: 'zorq',
    components: {
        v: true,
        s: true,
        m: 'a pebble and a dwarven beard hair',
    },
    meta: {
        ritual: true,
    },
    entriesHigherLevel: [
        {
            name: 'At Higher Levels',
            entries: [
                'When you cast this spell using a spell slot of 3rd level or higher,  you can target one additional dwarf for each slot level above 2nd.',
            ],
        },
    ],
};
