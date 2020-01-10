module.exports = {
    source: 'DM03',
    page: 5,
    class: 'Wizard',
    name: 'Void Speaker',
    subclassFeatures: [
        [
            {
                name: 'Void Speaker',
                entries: [
                    'Given the nature of void magic, it comes as no surprise that a tradition of wizards sprang up from the study of void speech. Void speakers are a standoffish and secretive lot, prone to delving into crumbling, monster-prowled ruins and the dark corners of moldering libraries with equal caution; carelessly reading a text that may be sprinkled with void glyphs can be just as deadly as stumbling into a den of trolls. As you focus your study on void speech, you learn to properly invoke the words and glyphs to empower your magic and to tap the vast potential of the void.',

                    'Some void speakers risk the darkness for the sake of knowledge or defense against that which lies beyond. Others succumb to the madness and corruption that void magic touches and become living conduits for the horror seeking entry into the mortal world.',

                    {
                        type: 'entries',
                        name: 'Void Savant',
                        entries: [
                            'Beginning when you select this tradition at 2nd level, the gold and time you must spend to copy a void spell into your spellbook is halved.',

                            'When you gain a level, one of the two spells you learn for gaining a level can be a void magic spell, even if you’ve never encountered the spell before. Similarly, when you learn a new cantrip, it can be a void magic cantrip, even if you’ve never previously encountered it.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Whispers of the Void',
                        entries: [
                            "Starting at 2nd level, as a bonus action immediately before you cast a spell of 1st level or higher, you can utter a few words of void speech and weave its dark magic into your spell. The tainted spell disorients one creature you can see that the spell affects when you cast it. The creature has disadvantage on the next attack roll or ability check it makes before the start of your next turn. You can't use this feature if you are unable to speak.",
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Rebuke from Beyond',
                        entries: [
                            'Beginning at 6th level, when you are damaged by a creature within 60 feet, you can use your reaction to bark a destructive word of void speech. If the creature can hear you, it takes necrotic damage equal to half your wizard level plus your Intelligence modifier. You can use this ability a number of times equal to your Intelligence modifier (minimum of 1), and you regain all expended uses when you finish a long rest. You can’t use this ability if you are unable to speak.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Powerful Echo',
                        entries: [
                            'Starting at 10th level, when you cast a void magic spell that targets only one creature, you can have it target a second creature. Additionally, you have advantage on Constitution saving throws made to maintain concentration on void spells.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Manifestation',
                        entries: [
                            'At 14th level, you can use your action to pronounce a complicated phrase in void speech. Choose a point you can see within 60 feet. The area within 20 feet of that point is shrouded in dim light for one minute. Any creature hostile to you within the area is vulnerable to necrotic damage and has disadvantage on Wisdom checks. An affected creature that starts its turn in the area or that enters the area for the first time on its turn takes 3d6 necrotic damage, or half damage with a successful Constitution saving throw (using your spell save DC). Once you use this ability, you can’t use it again until you finish a short or long rest. You can’t use this feature if you’re unable to speak.',
                        ],
                    },
                ],
            },
        ],
    ],
};
