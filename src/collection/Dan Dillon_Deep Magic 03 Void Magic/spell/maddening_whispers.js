module.exports = {
    name: 'Maddening Whispers',
    level: 2,
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
            amount: 30,
        },
    },
    components: {
        v: true,
        s: true,
    },
    duration: [
        {
            type: 'timed',
            duration: {
                type: 'minute',
                amount: 0,
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
        'You whisper a string of Void Speech toward a target that can hear you. The target must succeed on a Charisma saving throw or be {@condition incapacitated}. While incapacitated by this spell, the target’s speed is 0 and it can’t benefit from increases to its speed. To maintain the effect, you must use your action on subsequent turns to continue whispering; otherwise, the spell ends. The spell also ends if the target takes damage.',
    ],
    page: 8,

    conditionInflict: ['incapacitated'],
    savingThrow: ['charisma'],
    areaTags: ['ST'],
    srd: true,
};
