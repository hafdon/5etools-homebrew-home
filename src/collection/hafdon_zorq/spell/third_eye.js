module.exports = {
    name: 'Third Eye',
    source: 'zorq',
    level: 2,
    school: 'N',
    time: [
        {
            number: 1,
            unit: 'bonus',
        },
    ],
    range: {
        type: 'point',
        distance: {
            type: 'feet',
            amount: 60,
        },
    },
    duration: [
        {
            type: 'timed',
            duration: {
                type: 'minute',
                amount: 1,
            },
        },
    ],
    entries: [
        'A fleshy, grotesque eye emerges from your forehead and remains for the duration. When you cast the spell, you are able to discern the embodied life energies of those with whom you have close relationships. You may do one of the following:  ',
        '- If a creature is {@condition blinded}, and the cause of that condition allows a saving throw to dispel, your Third Eye allows that creature to attempt that saving throw again now. If they still succeed, the blindness ends. If they fail, the creature can roll their next ability check with disadvantage that otherwise would have failed automatically due to blindness.  ',
        'As a bonus action on your turn, you may carry out one of the listed choices from above.',
        'After using this ability, until the end of your next long rest, you take disadvantage on all ability checks and saving throws based on Charisma as the malevolent eye throbs noticeably on your forehead.',
    ],
    areaTags: ['ST'],
    classes: {
        fromClassList: [
            {
                name: 'Warlock',
                source: 'zorq',
            },
        ],
    },
    components: {
        s: true,
    },
    miscTags: ['HL'],
    conditionInflict: ['blinded'],
};
