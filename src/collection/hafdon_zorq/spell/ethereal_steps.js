module.exports = {
    name: 'Ethereal Steps',
    source: 'zorq',
    level: 6,
    school: 'T',
    time: [
        {
            number: 1,
            unit: 'bonus',
        },
    ],
    range: {
        type: 'point',
        distance: {
            type: 'self',
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
                type: 'round',
                amount: 2,
            },
        },
    ],
    entries: [
        "As you concentrate (very, very hard) on the fundamental consubstantiality of the planes with which you are familiar, you transform your body from material matter to aithra: the 'hyparxis,' or essence, of the ethereal plane.",
        "Until the end of the following round you interact with only the ethereal plane, excepting uses of 'force' energy, which affect also the underlying substrate plane. You remain in this state until the spell ends or you end the spell by using your reaction.",
        "You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.",
    ],
    miscTags: ['SGT'],
    classes: {
        fromClassList: [
            {
                name: 'Ranger',
                source: 'PHB',
            },
        ],
        fromSubclass: [
            {
                class: {
                    name: 'Ranger',
                    source: 'PHB',
                },
                subclass: {
                    name: 'Horizon Walker',
                    source: 'XGE',
                },
            },
        ],
    },
};
