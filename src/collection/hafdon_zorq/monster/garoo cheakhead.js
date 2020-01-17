module.exports = {
    name: 'Garoo Cheakhead',
    size: 'M',
    type: {
        type: 'humanoid',
        tags: ['goblinoid', 'pronouns: she, her, hers'],
    },

    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [
        {
            ac: 17,
            from: ['{@item half plate armor|phb}'],
        },
    ],
    hp: {
        average: 39,
        formula: '6d8 + 12',
    },
    speed: {
        walk: 30,
    },
    str: 15,
    dex: 14,
    con: 14,
    int: 12,
    wis: 10,
    cha: 13,
    senses: ['darkvision 60 ft.'],
    passive: 10,
    languages: ['Common', 'Goblin'],
    cr: '3',
    trait: [
        {
            type: 'inset',
            name: 'Anamnesis',
            entries: [
                {
                    type: 'entries',
                    name: 'Appearance and Mannerisms',
                    entries: [
                        `tall hobgoblin
                    might have an apprentice to help (or pretend sister is apprentice)
                    could also be an exterminator
                    but part of this blackmail / crime ring
                    deception, sleight of hand
                    sneak attack
                    thieves cant
                    cunning action
                    will have to give regular light armor
                    shortsword
                    shortbow
                    burglar’s pack
                    leather armor, 2 daggers, thieves tools
                    `,
                    ],
                },
                {
                    type: 'entries',
                    name: 'self-consciousnesses',
                    entries: ['medical history and reflections'],
                },
                {
                    type: 'entries',
                    name: 'wants to be (thought of as)',
                    entries: [
                        "A very subtle and discreet blackmailer who doesn't resort to killing",
                    ],
                },
                {
                    type: 'entries',
                    name: 'modest about',
                    entries: [
                        'Her murder record (far exceeds successful blackmailer',
                    ],
                },
                {
                    type: 'entries',
                    name: 'Known Associates',
                    entries: ['{@creature Meech|zorq'],
                },
            ],
        },
        {
            name: 'Martial Advantage',
            entries: [
                "Once per turn, the hobgoblin can deal an extra 10 ({@dice 3d6}) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't {@condition incapacitated}.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The hobgoblin makes two greatsword attacks.'],
        },
        {
            name: 'Greatsword',
            entries: [
                '{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}9 ({@damage 2d6 + 2}) slashing damage.',
            ],
        },
        {
            name: 'Javelin',
            entries: [
                '{@atk mw,rw} {@hit 4} to hit, reach 5 ft. or range 30/120 ft., one target. {@h}5 ({@damage 1d6 + 2}) piercing damage.',
            ],
        },
        {
            name: 'Leadership (Recharges after a Short or Long Rest)',
            entries: [
                'For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a {@dice d4} to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is {@condition incapacitated}.',
            ],
        },
    ],
    environment: ['desert', 'forest', 'grassland', 'hill', 'underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/271/hobgoblin-captain.mp3',
    actionTags: ['Multiattack'],
    languageTags: ['C', 'GO'],
    senseTags: ['D'],
    damageTags: ['S', 'P'],
    miscTags: ['MW', 'RW', 'THW'],
    fluff: {
        name: 'Hobgoblin Captain',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Hobgoblin.jpg',
                },
            },
        ],
        entries: [
            'War horns sound, stones fly from catapults, and the thunder of a thousand booted feet echoes across the land as hobgoblins march to battle. Across the borderlands of civilization, settlements and settlers must contend with these aggressive humanoids, whose thirst for conquest is never satisfied.',
            'Hobgoblins have dark orange or red-orange skin, and hair ranging from dark red-brown to dark gray. Yellow or dark brown eyes peer out beneath their beetling brows, and their wide mouths sport sharp and yellowed teeth. A male hobgoblin might have a large blue or red nose, which symbolizes virility and power among goblinkin. Hobgoblins can live as long as humans, though their love of warfare and battle means that few do.',
            {
                name: 'Goblinoids',
                type: 'entries',
                entries: [
                    'Hobgoblins belong to a family of creatures called goblinoids. They are often found lording over their cousins, the smaller goblins and the ferocious bugbears.',
                ],
            },
            {
                name: 'Martial Might',
                type: 'entries',
                entries: [
                    'A hobgoblin measures virtue by physical strength and martial prowess, caring about nothing except the opportunity to demonstrate skill and cunning in battle. Hobgoblins of high military rank attain their positions by force, then hold those positions by imposing their authority through draconian measures.',
                    'Hobgoblins train to fight with a variety of weapons, and have great skill at crafting arms, armor, siege engines, and other military devices. Organized and disciplined, they take exceptional care of their weapons, armor, and personal possessions. They favor the bold colors associated with their tribes, and trim their often-elaborate uniforms with blood-red piping and leather dyed black.',
                ],
            },
            {
                name: 'Military Legions',
                type: 'entries',
                entries: [
                    'Hobgoblins organize themselves into tribal bands known as legions. In their martial society, every hobgoblin has a rank, from the powerful leaders and champions, to the rank-and-file foot soldiers, to the goblins that find themselves driven into the front lines at spear point. A legion is headed by a warlord with several captains serving under its command. A hobgoblin warlord is a ruthless tyrant more interested in strategy, victory, glory, reputation, and dominion than leading troops into battle.',
                    "As loyal and disciplined as hobgoblins are in their own legion, rival legions compete constantly for reputation and status. Meetings between legions erupt in violence if troops aren't restrained, and only exceptionally powerful leaders can force legions to cooperate on the battlefield.",
                ],
            },
            {
                name: 'Strategic Thinkers',
                type: 'entries',
                entries: [
                    'Hobgoblins have a strong grasp of tactics and discipline, and can carry out sophisticated battle plans under the direction of a strategically minded leader. However, they hate elves and attack them first in battle over any other opponents, even if doing so would be a tactical error.',
                    'Legions often supplement their ranks with less reliable and more expendable troops, including goblins, bugbears, orcs, evil humans, ogres, and giants.',
                ],
            },
            {
                name: 'Beast Trainers',
                type: 'entries',
                entries: [
                    'Hobgoblins have a long history of training animals to service. Like the more civilized races, they use oxen and horses to transport goods and weaponry over long distances. They communicate with each other using trained ravens, and keep vicious wolves to guard prisoners and protect hobgoblin camps. Hobgoblin cavalry use trained worgs as steeds, in the same way that goblins ride wolves. Some tribes even keep carnivorous apes as fighting beasts.',
                ],
            },
            {
                name: 'Conquer and Control',
                type: 'entries',
                entries: [
                    'Hobgoblins claim lands with abundant resources, and they can be found in forests and mountains, near mines and humanoid settlements, and anywhere else that wood, metal, and potential slaves can be found. They build and conquer strongholds in strategically advantageous locations, which they then use as staging areas to expand their territory.',
                    "Hobgoblin warlords never tire of combat, but they don't take up arms lightly. Before they attack, hobgoblins conduct thorough reconnaissance to gauge the strengths and weaknesses of their foes. When assaulting a stronghold, they surround it first to cut off escape routes and supply lines, then slowly starve their enemies out.",
                    'Hobgoblins fortify their own holdings, bolstering existing defenses with innovations of their own. Whether they lair in cavern complexes, dungeons, ruins, or forests, they protect their strongholds with ditches, fences, gates, guard towers, pit traps, and crude catapults or ballistas.',
                ],
            },
            {
                name: 'Legion of Maglubiyet',
                type: 'entries',
                entries: [
                    "Hobgoblins worship Maglubiyet the Mighty One, the greater god of goblinoids. As terrifying as this figure is, hobgoblins don't fear death, believing that when they die in battle, their spirits join the honored ranks of Maglubiyet's army on the plane of Acheron.",
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Hobgoblin Captain.png?v=1.94.11',
};
