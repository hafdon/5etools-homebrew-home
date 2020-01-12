module.exports = {
    name: 'Moghling Slime',
    wondrous: true,
    tier: 'Minor',
    rarity: 'Uncommon',
    source: 'zorq',
    weight: 0.5,

    entries: [
        {
            type: 'quote',
            entries: ['Is your mantle totally too smooth and not sticky?'],
            by: 'Polive Pittlans',
        },
        '',
        'This glass jar, 3 inches in diameter, contains {@dice 1d4+1} doses of a thick mixture that smells faintly of petrichor. The jar and its contents weigh ½ pound.',

        "As an action, one dose of the ointment can be applied to a creature's skin, clothing, or armor. (The same effects require two doses for a creature of Large or larger size.)",

        'For 1 hour, spells and other magical effects can not cause the creature to be  {@condition restrained}.',

        'The creature can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it {@condition grappled}.',
    ],
};
