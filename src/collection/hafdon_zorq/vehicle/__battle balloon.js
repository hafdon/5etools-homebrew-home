module.exports = {
    name: 'Battle Balloon',
    source: 'AI',
    vehicleType: 'SHIP',
    page: 218,
    size: 'G',
    dimensions: ['80 ft.', '20 ft.'],
    capCrew: 20,
    capPassenger: 10,
    capCargo: 1,
    pace: 9,
    str: 18,
    dex: 17,
    con: 20,
    int: 0,
    wis: 0,
    cha: 0,
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
    action: [
        'On its turn the battle balloon can take 3 actions if it has twenty or more crew, 2 actions if it has ten or more crew, or 1 action if it has fewer than ten crew, choosing from the options below. It cannot take any actions if it has no remaining crew.',
        {
            type: 'list',
            style: 'list-hang-notitle',
            items: [
                {
                    type: 'item',
                    name: 'Fire Ballista.',
                    entry: 'The battle balloon can fire its harpoon guns.',
                },
                {
                    type: 'item',
                    name: 'Fire Green Flame Arbalester.',
                    entry:
                        'The battle balloon can fire its green flame arbalester.',
                },
                {
                    type: 'item',
                    name: 'Move.',
                    entry:
                        "The battle balloon can use its helm to move using its propeller. If the battle balloon enters a Large or smaller creature's space, that creature is automatically pushed to the edge of the battle balloon's space. The creature must also succeed on a DC 15 Dexterity saving throw or take 5 ({@damage 1d10}) bludgeoning damage.",
                },
                {
                    type: 'item',
                    name: 'Harpoon Haul.',
                    entry:
                        'The battle balloon can pull each target {@condition grappled} by it up to 30 feet toward the battle balloon.',
                },
            ],
        },
    ],
    hull: {
        ac: 15,
        hp: 500,
        dt: 15,
    },
    control: [
        {
            name: 'Helm',
            ac: 18,
            hp: 50,
            entries: [
                "Move up to the speed of the ship's propeller, with one 90-degree turn. If the helm is destroyed, the ship can't turn.",
            ],
        },
        {
            name: 'Balloon',
            ac: 12,
            hp: 75,
            entries: [
                'If its balloon is destroyed, a battle balloon cannot maintain altitude.',
            ],
        },
    ],
    movement: [
        {
            name: 'Propeller',
            ac: 12,
            hp: 100,
            hpNote: '-5 ft. speed per 25 damage taken',
            speed: [
                {
                    mode: 'air',
                    entries: [
                        '80 ft.; 50 ft. while flying into the wind; 100 ft. while flying with the wind',
                    ],
                },
            ],
        },
    ],
    weapon: [
        {
            name: 'Green Flame Arbalester',
            ac: 15,
            hp: 75,
            entries: [
                "{@atk rw} {@hit 8} to hit, range 200/800 ft. (can't hit targets within 60 ft. of it) one target. {@h}16 ({@damage 3d10}) piercing damage and 22 ({@damage 4d10}) fire damage. If the attack misses, the DM determines where the arbalester bolt hits. Each creature within 10 feet of that spot must make a DC 15 Dexterity saving throw to avoid the bolt as it shatters, taking 5 ({@damage 1d10}) piercing damage and 5 ({@damage 1d10}) fire damage on a failed save.",
            ],
        },
        {
            name: 'Harpoon Gun',
            count: 3,
            ac: 15,
            hp: 50,
            entries: [
                "{@atk rw} {@hit 8} to hit, range 120/480 ft., one target. {@h}11 ({@damage 2d10}) piercing damage, and the target is {@condition grappled} (escape DC 16). Until the grapple ends, the target's speed is halved, and it can't move farther away from the battle balloon. Each of the battle balloon's harpoon guns can grapple one target. While it has one or more targets {@condition grappled} with its harpoon gun attack, the battle balloon's speed is not halved.",
            ],
        },
    ],
};
