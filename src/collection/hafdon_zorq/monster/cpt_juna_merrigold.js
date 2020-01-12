module.exports = {
    name: 'Cpt. Juna Merrigold',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['deep scion', 'pronouns: she, her, hers', 'hybrid'],
    },
    source: 'zorq',
    alignment: ['N', 'G'],
    ac: [
        {
            ac: 12,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 76,
        formula: '9d8 + 36',
    },
    speed: {
        walk: 25,
        swim: 40,
    },
    str: 20,
    dex: 15,
    con: 18,
    int: 10,
    wis: 12,
    cha: 14,
    save: {
        wis: '+3',
        cha: '+4',
    },
    skill: {
        deception: '+6',
        insight: '+3',
        'sleight of hand': '+4',
        stealth: '+4',
    },
    senses: ['darkvision 120 ft.'],
    passive: 11,
    languages: ['Aquan', 'Common', "Thieves' cant"],
    cr: '4',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'Captain Juna Marigold is a hybrid human-piscine; HER body is sleek like a seal and his thick skin is greyish-white with red vertical stripes. Instead of hands she possesses fins terminating in cartilaginous claws.',
                'demands loyalty of crew',
                'saw potential, and destiny in FEZ, who became First Mate (cargo, crew’s welfare, safety, search and rescue, answers to Captain)',
                'self-conscious of (new fish body, lost a ship and survived tho captain)',
                'want to be (thought of as) (good leader, knowledgeable about ships, due loyalty)',
                'modest about ()',
                'background (from Old Barleyshire)',
            ],
        },
        { type: 'inset', name: 'Purpose', entries: [''] },
        {
            name: 'Amphibious',
            entries: ['The deep scion can breathe air and water.'],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}7 ({@damage 1d4 + 5}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d6 + 5}) slashing damage.',
            ],
        },
        {
            name: 'Psychic Screech (Recharge on {@recharge 6})',
            entries: [
                "The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a {@dc 14} Wisdom saving throw or take 5 ({@damage 2d4 + 1}) psychic damage. In water, the psychic screech also telepathically transmits the deep scion's memories of the last 24 hours to creatures who fail their save.",
            ],
        },
    ],
    environment: ['coastal', 'swamp', 'underdark', 'underwater'],
    actionTags: ['Multiattack'],
    languageTags: ['AQ', 'C', 'TC'],
    senseTags: ['SD'],
    damageTags: ['P', 'S'],
    miscTags: ['MW'],

    tokenUrl: 'https://5e.tools/img/VGM/Deep Scion.png?v=1.94.2',

    traitTags: ['Amphibious'],
    isNpc: true,
    isNamedCreature: true,
};
