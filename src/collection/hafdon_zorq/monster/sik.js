module.exports = {
    source: 'zorq',
    name: 'Sik',
    size: 'M',
    isNpc: true,
    isNamedCharacter: true,
    type: {
        type: 'humanoid',
        tags: ['gnome', 'artificer'],
    },
    alignment: ['A'],
    ac: [12],
    hp: {
        average: 16,
        formula: '2d10 + 6',
    },
    speed: {
        walk: 30,
    },
    str: 12,
    dex: 15,
    con: 12,
    int: 16,
    wis: 10,
    cha: 10,
    skill: {
        "{@item smith's tools}": '+5',
        "{@item tinker's tools}": '+5',
    },
    passive: 10,
    languages: ['Common', 'Undercommon', 'Gnome'],

    trait: [
        '{@$trait sjonhannr|zorq}',
        {
            name: 'Superior Attunement',
            entries: [
                'The artificer can attune to four magic items maximum, instead of three.',
            ],
        },
    ],
    action: [
        // {
        //     name: 'Thunder Cannon',
        //     entries: [
        //         '{@atk rw} {@hit 0} to hit, range 150/500 ft., one target. {@b Hit}: 9 ({@damage 2d6 + 2}) piercing damage plus 7 ({@damage 2d6}) thunder damage.',
        //     ],
        // },
        // {
        //     name: 'Blast Wave (Recharge 5-6)',
        //     entries: [
        //         'The artificer releases energy from its cannon in a 15-foot cone. Each creature in the cone must succeed on a {@dc 13} Strength saving throw or take 14 ({@damage 4d6}) thunder damage and be pushed 10 feet away from the artificer.',
        //     ],
        // },
    ],
    reaction: [
        {
            name: 'Aid Me, Servant',
            entries: [
                "When a creature targets the artificer with a melee attack and the artificer's mechanical servant is within 5 feet of the creature, the artificer can command its mechanical servant to make a melee weapon attack against that creature. The mechanical servant's attack hits first.",
            ],
        },
    ],
    languageTags: ['X'],
    damageTags: ['P', 'T'],
    miscTags: ['RW', 'AOE'],
};
