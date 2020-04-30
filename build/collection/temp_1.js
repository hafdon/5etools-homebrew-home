// what gets output for roll20
const a = {
    name: 'Absorb Elements',
    level: 1,
    school: 'Abjuration',
    castingTime: '1 reaction',
    range: 'Self',
    components: { somatic: true },
    duration: '1 round',
    description:
        'The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.',
    higherLevel:
        'When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.',
    damage: {
        damage: '1d6',
        damageType: 'triggering',
        higherLevelDice: 1,
    },
};

const b = {
    name: 'Absorb Elements',
    source: 'XGE',
    page: 150,
    otherSources: [
        {
            source: 'EEPC',
            page: 15,
        },
    ],
    level: 1,
    school: 'A',
    time: [
        {
            number: 1,
            unit: 'reaction',
            condition:
                'which you take when you take acid, cold, fire, lightning, or thunder damage',
        },
    ],
    range: {
        type: 'point',
        distance: {
            type: 'self',
        },
    },
    components: {
        s: true,
    },
    duration: [
        {
            type: 'timed',
            duration: {
                type: 'round',
                amount: 1,
            },
        },
    ],
    entries: [
        'The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra {@damage 1d6} damage of the triggering type, and the spell ends.',
    ],
    entriesHigherLevel: [
        {
            type: 'entries',
            name: 'At Higher Levels',
            entries: [
                'When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by {@scaledamage 1d6|1-9|1d6} for each slot level above 1st.',
            ],
        },
    ],
    damageResist: ['acid', 'cold', 'fire', 'lightning', 'thunder'],
    classes: {
        fromClassList: [
            {
                name: 'Druid',
                source: 'PHB',
            },
            {
                name: 'Ranger',
                source: 'PHB',
            },
            {
                name: 'Sorcerer',
                source: 'PHB',
            },
            {
                name: 'Wizard',
                source: 'PHB',
            },
            {
                name: 'Artificer (Revisited)',
                source: 'UAArtificerRevisited',
            },
            {
                name: 'Artificer',
                source: 'ERLW',
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
