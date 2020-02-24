/**
 *
 * Maybe move up to Elemental Locus (TOB 3pp)
 */

module.exports = {
    name: 'Karnish (Spirit Form)',
    size: 'L',
    type: { type: 'elemental', tags: ['Spirit Troll'] },
    source: 'zorq',
    alignment: ['C', 'E'],
    ac: [
        {
            ac: 17,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 303,
        formula: '39d12 + 50',
    },
    speed: {
        walk: 30,
    },
    str: 1,
    dex: 17,
    con: 13,
    int: 8,
    wis: 9,
    cha: 16,
    skill: {
        perception: '+3',
    },
    resist: ['acid', 'cold', 'fire', 'lightning', 'thunder'],
    immune: [
        {
            immune: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    conditionImmune: [
        'exhaustion',
        'grappled',
        'paralyzed',
        'petrified',
        'prone',
        'restrained',
        'unconscious',
    ],
    senses: ['darkvision 60 ft.'],
    passive: 13,
    languages: ['Giant'],
    cr: '11',
    trait: [
        {
            type: 'inset',
            name: '_dossier',
            entries: [
                {
                    name: 'Purpose',
                    entries: [
                        'This is really just a rough placeholder for Karnish',
                    ],
                },
                {
                    name: 'Background',
                    entries: [
                        'The spirit of Castle Karn (and the original spirit of the grey tongue). perhaps she too has some association with the fountain.',
                    ],
                },
                { name: 'Aliases', entries: [''] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about:',
                    ],
                },
            ],
        },

        {
            name: 'Incorporeal Movement',
            entries: [
                'The troll can move through other creatures and objects as if they were difficult terrain. It takes 5 ({@damage 1d10}) force damage if it ends its turn inside an object.',
            ],
        },
        {
            name: 'Regeneration',
            entries: [
                "The troll regains 10 hit points at the start of each of its turns. If the troll takes psychic or force damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The troll makes three attacks: one with its bite and two with its claws.',
            ],
        },
        {
            name: 'Bite',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}19 ({@damage 3d10 + 3}) psychic damage, and the target must succeed on a {@dc 15} Wisdom saving throw or be {@condition stunned} for 1 minute. The {@condition stunned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
            ],
        },
        {
            name: 'Claws',
            entries: [
                '{@atk mw} {@hit 7} to hit, reach 5 ft., one creature. {@h}14 ({@damage 2d10 + 3}) psychic damage.',
            ],
        },
    ],
    environment: ['coastal', 'forest', 'swamp', 'underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/692/spirit-troll.mp3',
    traitTags: ['Incorporeal Movement', 'Regeneration'],
    actionTags: ['Multiattack'],
    languageTags: ['GI'],
    senseTags: ['D'],
    damageTags: ['Y', 'O'],
    miscTags: ['MW'],
};
