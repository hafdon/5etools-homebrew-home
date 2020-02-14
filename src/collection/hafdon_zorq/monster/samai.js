module.exports = {
    name: 'Samai',
    isNamedCreature: true,
    source: 'zorq',
    size: 'L',
    type: {
        type: 'humanoid',
        tags: ['demon'],
    },
    alignment: ['C', 'E'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        formula: '16d10 + 48',
        average: 150,
    },
    speed: {
        walk: 30,
    },
    str: 14,
    dex: 15,
    con: 16,
    int: 14,
    wis: 16,
    cha: 18,
    save: {
        dex: '+6',
        con: '+7',
        wis: '+7',
    },
    skill: {
        perception: '+7',
    },
    senses: ['blindsight 60 ft.'],
    passive: 17,
    resist: ['cold', 'fire', 'lightning'],
    immune: ['poison'],
    conditionImmune: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
    languages: ['all', 'telepathy 120 ft.'],
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Samai's spellcasting ability is Charisma (spell save {@dc 16}). She can innately cast the following spells, requiring no material components:",
            ],
            will: [
                '{@spell detect magic}',
                '{@spell locate animals or plants}',
                '{@spell ray of sickness}',
            ],
            daily: {
                '3e': [
                    '{@spell ensnaring strike}',
                    '{@spell entangle}',
                    '{@spell plant growth}',
                ],
            },
            ability: 'cha',
            type: 'spellcasting',
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['Samai makes two pseudopod attacks.'],
        },
        {
            name: 'Pseudopod',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 10 ft., one target. {@h}15 ({@damage 2d8 + 6}) bludgeoning damage plus 9 ({@damage 2d8}) poison damage.',
            ],
        },
        {
            name: 'Infestation Spores',
            entries: [
                "Samai releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a {@dc 16} Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called X and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant.",
            ],
        },
        {
            name: 'Mind Control Spores',
            entries: [
                "Samai releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her. Humanoids and beasts in the cloud when it appears must make a {@dc 16} Wisdom saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is {@condition charmed} by her for 1 minute and can't be reinfected by these spores. A creature can repeat the saving throw at the end of each of its turns, ending the effect early on itself on a success. ",
            ],
        },
        {
            name: 'Euphoria Spores',
            entries: [
                'Samai releases a cloud of spores in a 20-foot-radius sphere centered on itself. Other creatures in that area must each succeed on a {@dc 15} Constitution saving throw or become {@condition poisoned} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect early on itself on a success. When the effect ends on it, the creature gains one level of {@condition exhaustion}.',
            ],
        },
        {
            name: 'Photophobia Spores',
            entries: [
                "Samai releases a cloud of spores in a 20-foot-radius sphere centered on itself. Other creatures in that area must each succeed on a {@dc 15} Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, for 1 minute, while the creature is in sunlight, the creature has disadvantage on ability checks, attack rolls, and saving throws. A creature can repeat the saving throw at the end of each of its turns, ending the effect early on itself on a success. Once infected, a creature can't be reinfected by these spores.",
            ],
        },
    ],
    reaction: [
        {
            name: 'Protective Shriek',
            entries: [
                'When Samai is hit by an attack, one creature that is {@condition charmed} by her must use its reaction to emit a shriek audible within 300 feet of it. The creature continues to shriek until the end of its next turn.',
            ],
        },
    ],
    senseTags: ['B'],
    actionTags: ['Multiattack'],
    languageTags: ['XX', 'TP'],
    damageTags: ['B', 'I'],
    spellcastingTags: ['I'],
    miscTags: ['MW', 'RCH', 'AOE'],
    fluff: {
        name: 'Zuggtmoy',
        source: 'MTF',
        entries: [
            {
                type: 'entries',
                name: 'Zuggtmoy',
                entries: [
                    'The Demon Queen of Fungi, Lady of Rot and Decay, Zuggtmoy is an alien creature whose only desire is to infect the living with spores, transforming them into her mindless servants and, eventually, into decomposing hosts for the mushrooms, molds, and other fungi that she spawns.',
                    'Utterly inhuman, Zuggtmoy can mold her fungoid form into an approximation of a humanoid shape, including the skeletal-thin figure depicted in grimoires and ancient art, draped and veiled in mycelia and lichen. Indeed, much of her appearance and manner, and that of her servants, is a soulless mockery of mortal life and its many facets.',
                    "Zuggtmoy's cultists often follow her unwittingly. Most are fungi—infected to some degree, whether through inhaling her mind-controlling spores or being transformed to the point where flesh and fungus become one. Such cultists are fungal extensions of the Demon Queen's will.",
                    'Their devotion might begin with the seemingly harmless promises offered by exotic spores and mushrooms, but quickly consumes them, body and soul.',
                ],
            },
        ],
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MTF/Zuggtmoy.jpg',
                },
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MTF/Zuggtmoy.png?v=1.96.3',
    uniqueId: '8063499a83c2df9b77e582b5c8371320',
};
