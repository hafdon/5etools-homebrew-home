module.exports = {
    name: 'Red Gold Circlet',
    wondrous: true,
    source: 'zorq',
    rarity: 'Rare',
    tier: 'Major',
    curse: true,
    reqAttune: true,
    // type: 'TG',
    // TRADE GOOD: 'TG'
    // ADVENTURING GEAR: 'AG'
    entries: [
        'A concave circlet with cap made from intricately forged {@item red gold|zorq}.',
        {
            type: 'entries',
            name: 'Curse',
            entries: [
                'This circlet can be fitted to the head of a creature of Large size or smaller. Once attuned to this circlet, a creature wearing it has an Intelligence and Wisdom ability score of 6. They can comprehend simple statements in the languages they know, and can make themselves understood in equal measure.',
                'The creature also adds +5 to any check or save based on Strength.',
                'If the circlet is removed, the creature takes {@h}10 ({@damage 2d6+4}) slashing damage and must make a {@dc 20} Charisma save. On a failed save the creature falls {@condition unconscious} for {@dice 1d4} days. On a success, the creature gains two levels of {@condition exhaustion}.',
                'If a creature wears the circlet uninterrupted for a week or more, the effects become permanent and can only be reversed by {@spell regenerate|phb} or similar magic.',
            ],
        },
        {
            type: 'inset',
            name: 'History & Lore',
            entries: [
                'These are bad news, my man. They were and still are used to enslave humanoids.',
                "It is rumored that powerful enough beings can reverse the circlet's effect, essentially allowing the conversion of brawn to brains.",
            ],
        },
    ],
    // attachedSpells: [],
    // recharge: 'dawn',
};

// brains to brawn / brawn to brains -- slave controls
// drav uses it for brawns to brain-- then learns it was used for opposite
// one of the white mountain trilogy circlets made of alloy
