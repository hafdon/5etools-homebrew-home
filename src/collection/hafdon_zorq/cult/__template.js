module.exports = {
    name: 'NAME',
    goal: {
        entry: '',
    },
    // typical members of the faction
    cultists: {
        entry: '{@creature }',
    },
    signaturespells: {
        entry: '',
        // '{@spell Blade ward} (cantrip), {@spell expeditious retreat} (1st level), {@spell spider climb} (2nd level), {@spell gaseous form} (3rd level)',
    },
    entries: [
        'Levistus has no cult in the traditional sense. Instead, he offers favors to those who are desperate to escape a seemingly inevitable fate.',
        "{@creature Drow} are sometimes worshipers of Levistus, as their cruel society often pushes them into situations they feel they can't escape.",
        'Levistus usually grants those who pledge their souls to him a single chance to escape from danger, but some cunning folk strike a deal with Levistus, pledging their souls to him in return for escape at a future date. This boon takes the form of the Path of Levistus trait.',
        {
            type: 'entries',
            name: 'Path of Levistus',
            entries: [
                "This creature magically teleports to a location of Levistus's choice within 1 mile of its location. Using this ability also restores all of the creature's hit points. This ability can be invoked as an action by the creature or when the creature would die. Once the creature uses it, the creature can't use it again.",
            ],
        },
    ],
    source: 'zorq',
};
