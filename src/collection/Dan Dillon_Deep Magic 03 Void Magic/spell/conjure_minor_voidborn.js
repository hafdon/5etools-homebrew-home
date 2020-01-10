module.exports = {
    name: 'Conjure Minor Voidborn',
    level: 5,
    school: 'VD',
    // subschools: ['VD'],
    source: 'DM03',
    time: [
        {
            number: 1,
            unit: 'minute',
        },
    ],
    range: {
        distance: {
            type: 'feet',
            amount: 90,
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
                type: 'hour',
                amount: 1,
            },
            concentration: true,
        },
    ],
    classes: {
        fromClassList: [
            {
                name: 'Wizard',
                source: 'PHB',
            },
        ],
        // fromSubclass: [
        //     {
        //         class: {
        //             name: 'Wizard',
        //             source: 'PHB',
        //         },
        //         subclass: {
        //             name: 'Void Speaker',
        //             source: 'DM03',
        //         },
        //     },
        // ],
    },

    entries: [
        'You summon fiends or aberrations that appear in unoccupied spaces you can see within range. You choose one of the following options for what appears:',
        {
            type: 'list',
            items: [
                'One creature of challenge rating 2 or lower',
                'Two creatures of challenge rating 1 or lower',
                'Four creatures of challenge rating 1/2 or lower',
                'Eight creatures of challenge rating 1/4 or lower',
            ],
        },
        'Summoned creatures disappear when they drop to 0 hit points or when the spell ends.',
        'The summoned creatures do not directly attack you or your companions. Roll initiative for the summoned creatures as a group; they take their own turns on their initiative result. They attack your enemies and try to stay within 90 feet of you, but they control their own actions. The summoned creatures despise being bound, so they might harm or impede you and your companions with secondary effects (but not direct attacks) if the opportunity arises. At the beginning of the creatures’ turn, you can use your reaction to verbally command them. They obey your commands for that turn, and you take {@damage 1d6} psychic damage at the end of the turn.',
        'If your concentration is broken, the creatures don’t disappear. Instead, you can no longer command them and they become hostile to you and your companions. They will attack you and your allies if they believe they have a chance to win the fight or to inflict meaningful harm, but they won’t fight if they fear it would mean their own death. The creatures can’t be dismissed by you, but they disappear 1 hour after being summoned.',
    ],
    entriesHigherLevel: [
        {
            type: 'entries',
            name: 'At Higher Levels',
            entries: [
                'When you cast this spell using a 7th- or 9th-level spell slot, you choose one of the summoning options above, and more creatures appear: twice as many with a 7th-level spell slot and three times as many with a 9th-level spell slot.',
            ],
        },
    ],
    page: 7,
    // damageInflict: ['bludgeoning', 'piercing', 'slashing'],
    // areaTags: ['MT'],
    // backgrounds: [
    //     {
    //         name: 'Izzet Engineer',
    //         source: 'GGR',
    //     },
    // ],
    // miscTags: ['SMN'],
    srd: true,
};
