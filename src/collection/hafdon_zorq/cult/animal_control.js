module.exports = {
    name: 'Animal Control',
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
        "Some kind of fake animal control unit, or Arrested Development's Blendin animal cleaning.",
        // {
        //     type: 'entries',
        //     name: 'Path of Levistus',
        //     entries: [
        //         "This creature magically teleports to a location of Levistus's choice within 1 mile of its location. Using this ability also restores all of the creature's hit points. This ability can be invoked as an action by the creature or when the creature would die. Once the creature uses it, the creature can't use it again.",
        //     ],
        // },
    ],
    source: 'zorq',
};
