/**
 * based on {@creature marid|mm} cr11
 */
module.exports = {
    name: 'Limalay',
    size: 'L',
    type: {
        type: 'celestial',
        tags: ['angel', 'elemental', 'pronouns--she, her, hers'],
    },
    // group: 'Angels',
    source: 'zorq',
    alignment: ['L', 'G'],
    ac: [
        {
            ac: 18,
            from: ['{@item plate armor|phb}'],
        },
    ],
    hp: {
        average: 120,
        formula: '12d10 + 54',
    },
    speed: {
        walk: 30,
        fly: 75,
        swim: 45,
    },
    str: 20,
    dex: 14,
    con: 16,
    int: 14,
    wis: 16,
    cha: 20,
    save: {
        dex: '+5',
        wis: '+5',
        cha: '+8',
        skill: { athletics: '+9' },
    },
    resist: ['acid', 'cold', 'lightning', 'radiant'],
    senses: ['blindsight 30 ft.', 'darkvision 120 ft.'],
    passive: 13,
    languages: ['all'],
    cr: '7',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [' (LEE mah lay) '],
        },
        { type: 'inset', name: 'Purpose', entries: ['Lieutenant of Ulimara.'] },
        {
            name: 'Amphibious',
            entries: ['Limalay can breathe air and water.'],
        },
        {
            name: 'Elemental Demise',
            entries: [
                'If Limalay dies, her body disintegrates into a burst of water and foam, leaving behind only equipment Limalay was wearing or carrying.',
            ],
        },
        {
            name: 'Flyby',
            entries: [
                "Limalay doesn't provoke an opportunity attack when she flies out of an enemy's reach.",
            ],
        },
        {
            name: 'Gauntlets of Weapon Recall',
            entries: [
                'As a bonus action Limalay can recall to her grasp her trident as long as it is no more than 80 feet away from her.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['Limalay makes two trident attacks.'],
        },
        {
            name: 'Trident',
            entries: [
                '{@atk mw,rw} {@hit 8} to hit, reach 5 ft. or range 20/60 ft., one target. {@h}8 ({@damage 1d6 + 5}) piercing damage, or 9 ({@damage 1d8 + 5}) piercing damage if used with two hands to make a melee attack.',
            ],
        },
        {
            name: 'Battlefield Inspiration',
            entries: [
                "Limalay chooses up to three creatures she can see within 30 feet of it. Until the end of Limalay's next turn, each target can add a {@dice d4} to its attack rolls and saving throws.",
            ],
        },
    ],

    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Limalay's innate spellcasting ability is Charisma (spell save DC 14, {@hit 6} to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
            ],
            will: [
                '{@spell create or destroy water}',
                '{@spell detect evil and good}',
                '{@spell detect magic}',
                '{@spell fog cloud}',
                '{@spell purify food and drink}',
            ],
            daily: {
                '3e': [
                    '{@spell tongues}',
                    '{@spell water breathing}',
                    '{@spell water walk}',
                ],
                '1e': [
                    '{@spell conjure elemental} (water elemental only)',
                    '{@spell control water}',
                    '{@spell gaseous form}',
                    '{@spell invisibility}',
                    '{@spell plane shift}',
                ],
            },
            ability: 'cha',
        },
    ],
};
