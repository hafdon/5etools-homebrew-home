/**
 * based on {@creature marid|mm} cr11
 */
module.exports = {
    name: 'Dalariel',
    size: 'L',
    type: { type: 'celestial', tags: ['elemental', 'she, her'] },
    group: 'Angels',
    source: 'zorq',
    alignment: ['L', 'G'],
    ac: [
        {
            ac: 15,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 150,
        formula: '12d10 + 84',
    },
    speed: {
        walk: 30,
        fly: 60,
        swim: 90,
    },
    str: 20,
    dex: 8,
    con: 24,
    int: 18,
    wis: 17,
    cha: 14,
    save: {
        dex: '+2',
        wis: '+6',
        cha: '+7',
    },
    resist: ['acid', 'cold', 'lightning'],
    senses: ['blindsight 30 ft.', 'darkvision 120 ft.'],
    passive: 13,
    languages: ['XX'],
    cr: '6',
    trait: [
        {
            name: 'Amphibious',
            entries: ['Dalariel can breathe air and water.'],
        },
        {
            name: 'Elemental Demise',
            entries: [
                'If Dalariel dies, her body disintegrates into a burst of water and foam, leaving behind only equipment Dalariel was wearing or carrying.',
            ],
        },
        {
            name: 'Flyby',
            entries: [
                "The angel doesn't provoke an opportunity attack when it flies out of an enemy's reach.",
            ],
        },
        {
            name: 'Recall Trident',
            entries: [
                'As a bonus action Dalariel can recall to her grasp her trident as long as it is no more than 80 feet away from her.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['Dalariel makes two trident attacks.'],
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
                "Dalariel chooses up to three creatures she can see within 30 feet of it. Until the end of Dalariel's next turn, each target can add a {@dice d4} to its attack rolls and saving throws.",
            ],
        },
    ],

    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "Dalariel's innate spellcasting ability is Charisma (spell save DC 14, {@hit 6} to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
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
            type: 'spellcasting',
        },
    ],
    // variant: [
    //     {
    //         type: 'variant',
    //         name: 'Genie Powers',
    //         entries: [
    //             'Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.',
    //             {
    //                 type: 'entries',
    //                 name: 'Disguises',
    //                 entries: [
    //                     'Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the {@spell disguise self} spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the {@spell true polymorph} spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.',
    //                 ],
    //             },
    //             {
    //                 type: 'entries',
    //                 name: 'Wishes',
    //                 entries: [
    //                     "The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
    //                     "To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the {@spell wish} spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
    //                 ],
    //             },
    //         ],
    //     },
    // ],
    environment: ['coastal', 'underwater'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/322/marid.mp3',
    traitTags: ['Amphibious', 'Flyby'],
    actionTags: ['Multiattack'],
    languageTags: ['AQ'],
    senseTags: ['B', 'SD'],
    spellcastingTags: ['I'],

    damageTags: ['P', 'B'],
    miscTags: ['RW', 'MW', 'THW', 'AOE'],

    fluff: {
        source: 'GGR',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/GGR/Battleforce Angel.jpg',
                },
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/GGR/Battleforce Angel.png?v=1.94.8',
};

// fluff: {
//     name: 'Marid',
//     source: 'MM',
//     images: [
//         {
//             type: 'image',
//             href: {
//                 type: 'internal',
//                 path: 'bestiary/MM/Marid.jpg',
//             },
//         },
//     ],
//     entries: [
//         'Hailing from the Elemental Plane of Water, the marids are the most wondrous of genie-kind. Although all genies wield great power, even the lowliest marid sees itself as clearly superior to the flighty djinn, the ground-hugging dao, and the fuming efreet. Large and piscine, marids are a strange sight to behold, particularly when clad in the finely stitched vests and colorful pantaloons they favor. They speak in voices as soft as the sea breeze or as sonorous as storm waves breaking against a rocky cliff. In flight, their lower bodies transform into columns of foamy water.',
//         {
//             name: 'Water Lords',
//             type: 'entries',
//             entries: [
//                 "Water is a marid's native element, and the genie can manipulate water in virtually any way it desires. A marid can walk on water and breathe naturally beneath its surface. It can create water or shape clouds of fog and mist from the vapor in the air. It can even transform itself into mist, or use water as a weapon to bludgeon its foes.",
//             ],
//         },
//         {
//             name: 'Marid Homes',
//             type: 'entries',
//             entries: [
//                 'Marids are rare on the Material Plane. They inhabit mighty and majestic coral fortresses located in the Elemental Plane of Water. These citadels float in the depths of the plane and contain opulent, air-filled chambers where slaves and guests reside.',
//                 "A marid doesn't expect much from its slaves, simply wanting to have them for the status of ownership. Marids go out of their way to obtain skilled slaves, and aren't above kidnapping mortal artists, entertainers, or storytellers for use in their courts.",
//             ],
//         },
//         {
//             name: 'Egotistical Hierarchs',
//             type: 'entries',
//             entries: [
//                 'All marids claim a title of nobility, and the race is awash in shahs, sultans, muftis, and khedives. Most of these titles are mere pretense on the part of the self-important marids.',
//                 'Marids treat all others-including other genies-as inferiors of various grades, ranging from poor cousins to petty annoyances. They tolerate djinn, dislike dao, and despise efreet.',
//                 'Humanoids are among the lowest of the creatures that marids must tolerate, although they sometimes deal with powerful wizards and exceptional leaders on an almost-equal footing. Doing so has sometimes proven to be a mistake, since wizards have managed to imprison marids in conch shells, flasks, and decanters over the ages. Bribery and flattery are the best means of dealing with marids, to which an obsequious mortal is a creature that knows its place.',
//             ],
//         },
//         {
//             name: 'Whimsical Storytellers',
//             type: 'entries',
//             entries: [
//                 "Marids are champion tale tellers, whose favorite legends emphasize the prowess of marids in general and of the speaker in particular. Fanciful genies, they lie often and creatively. They aren't always malicious in their deception, but embellishments suit their fancy. Marids consider it a crime for a lesser being to interrupt one of their tales, and offending a marid is a sure way to invoke its wrath.",
//             ],
//         },
//         {
//             type: 'entries',
//             name: 'Genies',
//             entries: [
//                 'Genies are rare elemental creatures out of story and legend. Only a few can be found on the Material Plane. The rest reside on the Elemental Planes, where they rule from lavish palaces and are attended by worshipful slaves.',
//                 'Genies are as brilliant as they are mighty, as proud as they are majestic. Haughty and decadent, they have a profound sense of entitlement that stems from the knowledge that few creatures except the gods and other genies can challenge their power.',
//                 {
//                     name: 'Creatures of the Elements',
//                     entries: [
//                         ' A genie is born when the soul of a sentient living creature melds with the primordial matter of an elemental plane. Only under rare circumstances does such an elemental-infused soul coalesce into a manifest form and create a genie.',
//                         "A genie usually retains no connection to the soul that gave it form. That life force is a building block that determines the genie's form and apparent gender, as well as one or two key personality traits. Although they resemble humanoid beings, genies are elemental spirits given physical form. They don't mate with other genies or produce genie offspring, as all new genies are born out of the same mysterious fusion of spirit energy and elemental power. A genie with a stronger connection to its mortal soul might choose to sire a child with a mortal, although such offspring are rare.",
//                         'When a genie perishes, it leaves nothing behind except what it was wearing or carrying, along with a small trace of its native element: a pile of dust, a gust of wind, a flash of fire and smoke, or a burst of water and foam.',
//                         'In contrast to their love of slaves, most genies loathe being bound to service themselves. A genie obeys the will of another only when bribed or compelled by magic. All genies command the power of their native element, but a rare few also possess the power to grant wishes. For both these reasons, mortal mages often seek to bind genies into service.',
//                         "Noble genies cultivate the jealousy and envy of other genies, asserting their superiority at every opportunity. Other genies respect the influence of the noble genies, knowing how unwise it is to defy a creature that can alter reality at a whim. A genie isn't beholden to any noble genie, however, and will sometimes choose to defy a noble genie's will and risk the consequences.",
//                         'Their miraculous powers, the grandeur of their abodes, and the numbers of their slaves allow some genies to deceive themselves into believing they are as powerful as the gods. Some go so far as to demand that mortals of other realms-even whole continents or worlds-bow down before them.',
//                     ],
//                     type: 'entries',
//                 },
//                 {
//                     name: 'Rule or Be Ruled',
//                     entries: [
//                         " Mortal slaves serve to validate a genie's power and high self-opinion. A hundred flattering voices are music to a genie's ears, while two hundred mortal slaves prostrated at its feet are proof that it is lord and master. Genies view slaves as living property, and a genie without property amounts to nothing among its own kind. As a result, many genies treasure their slaves, treating them as honored members of their households. Evil genies freely threaten and abuse their slaves, but never to the extent that the slaves are no longer of use.",
//                     ],
//                     type: 'entries',
//                 },
//                 {
//                     name: 'Decadent Nobility',
//                     entries: [
//                         ' Noble genies are the rarest of their kind. They are used to getting what they want, and have learned to trade their ability to grant wishes to attain the objects of their desire. This constant indulgence has made them decadent, while their supreme power over reality makes them haughty and arrogant. Their vast palaces overflow with wonders and sensory delights beyond imagination.',
//                     ],
//                     type: 'entries',
//                 },
//                 {
//                     name: 'The Power of Worship',
//                     entries: [
//                         ' Genies acknowledge the gods as powerful entities but have no desire to court or worship them. They find the endless fawning and mewling of religious devotees tiresome-except as it is directed toward them by their worshipful slaves.',
//                     ],
//                     type: 'entries',
//                 },
//             ],
//         },
//     ],
// },
