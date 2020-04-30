module.exports = {
    name: 'Obsidian Shards',
    source: 'zorq',
    level: 3,
    school: 'V',
    time: [
        {
            number: 1,
            unit: 'action',
        },
    ],
    range: {
        type: 'point',
        distance: {
            type: 'feet',
            amount: 30,
        },
    },
    components: {
        v: true,
        s: true,
        m: 'an obsidian blade',
    },
    duration: [
        {
            type: 'timed',
            duration: {
                type: 'minute',
                amount: 1,
            },
            concentration: true,
        },
    ],
    entries: [
        "You commune with Aulë, the God of the Forge. He hammers an ingot of celestial obsidian, causing to appear a cloud of shards in a cube 5 feet on each side, centered on a point you choose within range. A creature takes {@damage 5d4} radiant damage when it enters the spell's area for the first time on a turn or starts its turn there.",
    ],
    entriesHigherLevel: [
        {
            name: 'At Higher Levels',
            entries: [
                'When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 5d4|3-9|1d6} for each slot level above 4th.',
            ],
        },
    ],
    damageInflict: ['slashing'],
    areaTags: ['C'],
    classes: {
        fromClassList: [
            {
                name: 'Bard',
                source: 'PHB',
            },
            {
                name: 'Sorcerer',
                source: 'PHB',
            },
            {
                name: 'Warlock',
                source: 'PHB',
            },
            {
                name: 'Wizard',
                source: 'PHB',
            },
        ],
        fromSubclass: [
            {
                class: {
                    name: 'Fighter',
                    source: 'PHB',
                },
                subclass: {
                    name: 'Eldritch Knight',
                    source: 'PHB',
                },
            },
            {
                class: {
                    name: 'Rogue',
                    source: 'PHB',
                },
                subclass: {
                    name: 'Arcane Trickster',
                    source: 'PHB',
                },
            },
        ],
    },
};
