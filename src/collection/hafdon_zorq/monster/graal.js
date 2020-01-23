module.exports = {
    name: 'Graal',
    size: 'L',
    type: {
        type: 'monstrosity',
        tags: ['Girallon', 'she, her'],
    },
    source: 'zorq',
    alignment: ['U'],
    ac: [13],
    hp: {
        average: 59,
        formula: '7d10 + 21',
    },
    speed: {
        walk: 40,
        climb: 40,
    },
    str: 18,
    dex: 16,
    con: 16,
    int: 5,
    wis: 12,
    cha: 7,
    skill: {
        perception: '+3',
        stealth: '+5',
    },
    senses: ['darkvision 60 ft.'],
    passive: 13,
    cr: '4',
    trait: [
        {
            name: 'Aggressive',
            entries: [
                'As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see.',
            ],
        },
        {
            name: 'Regeneration',
            entries: [
                'she can grow arm back if (put some evilish thing here).',
            ],
        },

        {
            name: 'Apperarance & Mannerisms',
            entries: [
                'Completely silver-white fur. Two smaller arms under pectorals. Created to serve as guardian for a previous (dwarf?) empire. ',
                "doesn't like swimming",
                '9 feet tall.',
                'Has a slight lisp speaking Common because of gigantic canines. Took a long time for Graal to learn Common.',
            ],
        },
    ],
    variant: [
        {
            type: 'variant',
            name: 'Lusty Limbs',
            entries: [
                'Whenever Graal takes at least 15 slashing damage at one time, roll a {@dice d20} to determine what else happens to it:',
                {
                    type: 'list',
                    style: 'list-hang-notitle',
                    items: [
                        {
                            type: 'item',
                            name: '1–10:',
                            entry: 'Nothing else happens.',
                        },
                        {
                            type: 'item',
                            name: '11–12:',
                            entry:
                                'One leg is severed from Graal if it has any legs left.',
                        },
                        {
                            type: 'item',
                            name: '13–20:',
                            entry:
                                'One arm is severed from Graal if it has any arms left.',
                        },
                    ],
                },
                "If Graal finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on Graal's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and Graal's Regeneration trait.",
                'A severed leg is unable to attack and has a speed of 5 feet.',
                'A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless Graal can see the arm and its target. Each time Graal loses an arm, it loses a claw attack.',
                "If its head is severed, Graal loses its bite attack and its body is {@condition blinded} unless the head can see it. The severed head has a speed of 0 feet and Graal's Keen Smell trait. It can make a bite attack but only against a target in its space.",
                "Graal's speed is halved if it's missing a leg. If it loses both legs, it falls {@condition prone}. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The girallon makes five attacks: one with its bite and four with its claws.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 6} to hit, reach 5 ft., one creature. {@h}7 ({@damage 1d6 + 4}) piercing damage.',
            ],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 6} to hit. reach 10 ft., one target. {@h}7 ({@damage 1d6 + 4}) slashing damage.',
            ],
        },
    ],

    environment: ['forest'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/219/girallon.mp3',
    traitTags: ['Aggressive'],
    actionTags: ['Multiattack'],
    senseTags: ['D'],
    damageTags: ['P', 'S'],
    miscTags: ['MW', 'RCH'],
    fluff: {
        name: 'Girallon',
        source: 'VGM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/VGM/Girallon.jpg',
                },
            },
        ],
        entries: [
            {
                type: 'entries',
                entries: [
                    'A girallon looks like an oversized, four-armed ape with gray skin and white fur. Its fangs and claws set it apart from a normal ape, revealing it to be a monstrous predator.',
                    {
                        name: 'Forest Hunters',
                        entries: [
                            " Girallons are most common in temperate or warm forest environments abundant with life. They share the ape's adeptness at climbing, although these half-ton creatures shy away from scaling trees that can't support their bulk. Instead, they stalk the forest floor, lurk in narrow ravines or shallow caves, or hide in ruined sites while waiting for prey to come near. A girallon is surprisingly stealthy, considering its size and its lack of camouflage.",
                            'Girallons form loose bands of several individuals and their offspring, usually led by a dominant adult that also tends to be the oldest member of the group. When on the hunt away from their lair, girallons use roars and body language to communicate with one another over distance. Each individual typically hunts alone and widely separated from the others, to ensure that everyone gets adequate fodder. The leader might organize members to work together to make a big kill. If they succeed, everyone in the group shares the spoils, with the best parts going to mothers caring for their young.',
                            "In the time since then, numerous creatures have tried to tame, subjugate, or cooperate with the monsters. For instance, yuan-ti enslave girallons, turning them into border sentinels for their serpent kingdoms. Because girallons are known to be peaceful among their own kind, some humanoids have learned how to approach a group's leader, offering food and other gifts in hopes of establishing an alliance with the creatures.",
                            "Girallons that are well treated might be willing to serve as guards, though they lack the intelligence to take on tasks more complicated than attacking strangers that enter their domain. If one is taken young and properly trained, a girallon could end up in a seemingly unlikely place, such as guarding the entrance to a city's thieves' guild. Those who would keep a girallon as a pet must always be wary, because the creature could revert to its predatory nature at any time.",
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Wall Climbers',
                        entries: [
                            ' The ruins of humanoid habitations, especially those found in deep forests and jungles, seem to attract girallons. They move effortlessly along stairs and balconies, as well as on the sloped rooftops and buttresses of such formations. To a girallon, a city\'s buildings are just another sort of forest-and better yet, one whose uppermost "branches" can easily support the creatures. In such a setting, the girallons take full advantage of their skill in climbing. The creatures can easily scale walls and battlements, and they perch on tower tops and other high vantages to keep an eye on the surrounding area.',
                        ],
                        type: 'entries',
                    },
                    {
                        name: 'Magical Origin',
                        entries: [
                            " The social habits of wild girallons are unusual for apes, as is their instinctive attraction to humanoid structures. These facts, together with the girallon's appearance, lead sages to believe that girallons were created through magic to serve as guardians for some lost empire. When that empire fell ages ago, girallons turned feral and spread out across the world.",
                        ],
                        type: 'entries',
                    },
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/VGM/Girallon.png?v=1.94.4',
};
