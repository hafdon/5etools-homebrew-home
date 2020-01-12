module.exports = {
    name: 'Whip Aficionado',
    source: 'zorq',
    prerequisite: [
        {
            other: 'Proficiency with whips',
            ability: [
                {
                    dex: 13,
                },
            ],
        },
    ],
    entries: [
        'You have always had a love for whips. You gain the following benefits when using one:',
        {
            type: 'list',
            // items: [
            //     'You can use the {@action Help} action as a bonus action provided you have made a melee attack with a whip this turn. Additionally, when you use the {@action Help} action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than within 5 feet of you, if the target can see or hear you.',
            //     'If you hit a Large or smaller creature with a melee attack using a whip, you can choose to knock the creature prone, or pull the creature up to 10 feet closer to you. If you do so, roll a {@dice d8} and reduce any damage the creature would take from the attack by that amount (to a minimum of 0).',
            //     'When you make a melee attack on your turn with a whip, your reach with it is 5 feet greater than normal.',
            // ],
            items: [
                'You gain a +1 bonus to attack rolls you make with a whip.',
                'As a bonus action on your turn, you can increase your reach with a whip by 5 feet for the rest of your turn.',
                'Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes slashing damage equal to your Dexterity modifier (minimum of 0) if the attack misses but the higher of the two {@dice d20} rolls would have hit.',
                'If you roll a critical hit on a melee attack roll with the weapon, as a reaction you can take the {@action Help} action to aid an ally’s melee attack against that same target.',
            ],
        },
    ],
};
