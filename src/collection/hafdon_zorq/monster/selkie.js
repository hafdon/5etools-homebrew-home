module.exports = {
    name: 'Selkie',
    group: 'Lycanthropes',

    source: 'zorq',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['human', 'shapechanger'],
    },

    alignment: ['C'],
    ac: [
        {
            ac: 11,
            condition: 'in humanoid form',
        },
        {
            ac: 12,
            from: ['natural armor'],
            condition: 'in seal or hybrid form',
        },
    ],
    hp: {
        average: 58,
        formula: '9d8 + 18',
    },
    speed: {
        walk: {
            number: 30,
            condition: ' (0 ft., swim 40 ft. in seal form)',
        },
    },
    str: 18,
    dex: 13,
    con: 14,
    int: 10,
    wis: 11,
    cha: 10,
    skill: {
        perception: '+4',
    },
    immune: [
        {
            immune: ['bludgeoning', 'piercing', 'slashing'],
            note: "from nonmagical attacks that aren't silvered",
        },
    ],
    senses: ['blindsight 30 ft.'],
    passive: 14,
    languages: ["Common (can't speak in seal form)"],
    cr: '3',
    trait: [
        {
            name: 'Shapechanger',
            entries: [
                "The wereseal can use its action to polymorph into a seal-humanoid hybrid or into a {@creature giant seal|CC 3pp}, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
            ],
        },

        {
            name: 'Hold Breath',
            entries: ['The selkie can hold its breath for 2 hours.'],
        },
    ],
    action: [
        {
            name: 'Multiattack (Humanoid or Hybrid Form Only)',
            entries: [
                'The wereseal makes two attacks: one with its bite and one with its spear.',
            ],
        },
        {
            name: 'Bite (seal or Hybrid Form Only)',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}13 ({@damage 2d8 + 4}) piercing damage. If the target is a humanoid, it must succeed on a {@dc 12} Constitution saving throw or be cursed with wereseal lycanthropy.',
            ],
        },
        {
            name: 'Spear (Humanoid or Hybrid Form Only)',
            entries: [
                '{@atk mw,rw} {@hit 4} to hit, reach 10 ft., one target. {@h}7 ({@damage 1d6 + 4}) piercing damage, or 8 ({@damage 1d8 + 4}) piercing damage if used with two hands to make a melee attack.',
            ],
        },
    ],
    variant: [
        {
            type: 'variant',
            name: 'Nonhuman Lycanthropes',
            entries: [
                'The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait.',
            ],
        },
    ],
    page: 237,
    traitTags: ['Shapechanger', 'Amphibious', 'Water Breathing'],
    languageTags: ['C', 'CS'],
    senseTags: ['B'],
    damageTags: ['P'],
    miscTags: ['MW', 'RW', 'THW', 'RCH'],
    fluff: {
        entries: [
            'Wereseals are ruthless in the pursuit of prey. In their humanoid form they are aggressive loners, making their homes in sea caves and deserted fishing hamlets. In seal form they act as any seal would, always on the lookout for an easy meal. Like a werewolf, a wereseal can wield weapons in its hybrid form, but prefers to tear foes apart with its gaping, many-toothed maw.',
            {
                type: 'inset',
                name: 'Player Characters as Lycanthropes',
                entries: [
                    "A character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in nonhumanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.",
                    "A humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.",
                    {
                        type: 'entries',
                        name: 'Wereseal',
                        entries: [
                            "The character gains a Strength of 18 if his or her score isn't already higher, and a +1 bonus to AC while in seal or hybrid form (from natural armour). Attack and damage rolls for the bite are based on Strength. The wereseal also gains the Amphibious and Water Breathing traits.",
                        ],
                    },
                ],
            },
        ],
        images: [
            {
                type: 'image',
                href: {
                    type: 'external',
                    url: 'https://i.imgur.com/ujPNwoN.png',
                },
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/CftD/Wereseal.png?v=1.95.0',
};
