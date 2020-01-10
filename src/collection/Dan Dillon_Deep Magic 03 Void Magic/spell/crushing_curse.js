module.exports = {
    name: 'Crushing Curse',
    level: 0,
    school: 'VD',
    // subschools: ['VD'],
    source: 'DM03',
    time: [
        {
            number: 1,
            unit: 'action',
        },
    ],
    range: {
        distance: {
            type: 'feet',
            amount: 60,
        },
    },
    components: {
        v: true,
        s: true,
    },
    duration: [
        {
            type: 'instant',
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
        'You speak a word of void speech. Choose a creature you can see within range. If the target can hear you, it must succeed on a Wisdom saving throw or take {@damage 1d6} psychic damage and be {@condition deafened|phb} for 1 minute. A deafened creature can repeat the saving throw at the end of each of its turns, ending the deafness on a success. A creature deafened in this way can still hear Void Speech.',
    ],
    entriesHigherLevel: [
        {
            type: 'entries',
            name: 'At Higher Levels',
            entries: [
                'This spell’s damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6}).',
            ],
        },
    ],
    page: 7,
    damageInflict: ['psychic'],
    conditionInflict: ['deafened'],
    savingThrow: ['wisdom'],
    areaTags: ['ST'],
    srd: true,
};
