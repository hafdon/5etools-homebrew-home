module.exports = {
    name: 'Domonkos',
    size: 'M',
    type: {
        type: 'undead',
        tags: ['shapechanger'],
    },
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [
        {
            ac: 14,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 104,
        formula: '16d8 + 32',
    },
    speed: {
        walk: 30,
    },
    str: 20,
    dex: 14,
    con: 14,
    int: 17,
    wis: 15,
    cha: 18,
    save: {
        dex: '+5',
        wis: '+5',
        cha: '+7',
    },
    skill: {
        perception: '+5',
        stealth: '+5',
    },
    resist: [
        'necrotic',
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    senses: ['darkvision 120 ft.'],
    passive: 15,
    languages: ['Common', 'Undercommon'],
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [],
        },
        {
            name: 'Shapechanger',
            entries: [
                "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
                "While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
                "While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
            ],
        },
        {
            name: 'Misty Escape',
            entries: [
                "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling {@condition unconscious}, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
                "While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then {@condition paralyzed} until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
            ],
        },
        {
            name: 'Regeneration',
            entries: [
                "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
            ],
        },
        {
            name: 'Spider Climb',
            entries: [
                'The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
            ],
        },
        {
            name: 'Vampire Weaknesses',
            entries: [
                'The vampire has the following flaws:',
                "{@i Forbiddance.} The vampire can't enter a residence without an invitation from one of the occupants.",
                '{@i Harmed by Running Water.} The vampire takes 20 acid damage if it ends its turn in running water.',
                "{@i Stake to the Heart.} If a piercing weapon made of wood is driven into the vampire's heart while the vampire is {@condition incapacitated} in its resting place, the vampire is {@condition paralyzed} until the stake is removed.",
                '{@i Sunlight Hypersensitivity.} The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack (Vampire Form Only)',
            entries: [
                'The vampire makes two attacks, only one of which can be a bite attack.',
            ],
        },
        {
            name: 'Unarmed Strike (Vampire Form Only)',
            entries: [
                '{@atk mw} {@hit 8} to hit, reach 5 ft., one creature. {@h}7 ({@damage 1d4 + 5}) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape {@dc 16}).',
            ],
        },
        {
            name: 'Bite (Bat or Vampire Form Only)',
            entries: [
                "{@atk mw} {@hit 8} to hit, reach 5 ft., one willing creature, or a creature that is {@condition grappled} by the vampire, {@condition incapacitated}, or {@condition restrained}. {@h}7 ({@damage 1d4 + 5}) piercing damage plus 8 ({@damage 1d6 + 5}) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
            ],
        },
        {
            name: 'Charm',
            entries: [
                "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a {@dc 15} Wisdom saving throw against this magic or be {@condition charmed} by the vampire. The {@condition charmed} target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.",
                "Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
            ],
        },
        {
            name: 'Single-Fang Bite (Vampire Form Only)',
            entries: [
                'tbd; reference to fez joke; Domonkos really has to try to get both fangs involved',
            ],
        },
    ],
    legendaryGroup: {
        name: 'Vampire',
        source: 'MM',
    },

    environment: ['urban'],
    traitTags: ['Shapechanger', 'Regeneration', 'Spider Climb'],
    senseTags: ['SD'],
    damageTags: ['B', 'P', 'N'],
    miscTags: ['MW'],
    srd: true,
    // fluff: {
    //     name: 'Vampire',
    //     source: 'MM',
    //     images: [
    //         {
    //             type: 'image',
    //             href: {
    //                 type: 'internal',
    //                 path: 'bestiary/MM/Vampire.jpg',
    //             },
    //         },
    //     ],
    //     entries: [
    //         'Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.',
    //         {
    //             name: 'Dark Desires',
    //             type: 'entries',
    //             entries: [
    //                 'Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.',
    //             ],
    //         },
    //         {
    //             name: 'Born from Death',
    //             type: 'entries',
    //             entries: [
    //                 "Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.",
    //             ],
    //         },
    //         {
    //             name: 'Chained to the Grave',
    //             type: 'entries',
    //             entries: [
    //                 "Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.",
    //             ],
    //         },
    //         {
    //             name: 'Undead Nature',
    //             type: 'entries',
    //             entries: [
    //                 'Neither a vampire nor a vampire spawn requires air.',
    //             ],
    //         },
    //         {
    //             type: 'entries',
    //             name: "A Vampire's Lair",
    //             entries: [
    //                 'A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.',
    //             ],
    //         },
    //         {
    //             type: 'inset',
    //             name: 'Player Characters as Vampires',
    //             entries: [
    //                 "The game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, darkvision, traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.",
    //                 "The save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a wish spell or the character is killed and brought back to life.",
    //             ],
    //         },
    //         {
    //             type: 'inset',
    //             name: 'Strahd von Zarovich',
    //             entries: [
    //                 "A brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.",
    //                 "In his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.",
    //                 "In a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.",
    //                 "In the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.",
    //             ],
    //         },
    //     ],

    isNpc: true,
    isNamedCreature: true,
    languageTags: ['C', 'U'],
};
