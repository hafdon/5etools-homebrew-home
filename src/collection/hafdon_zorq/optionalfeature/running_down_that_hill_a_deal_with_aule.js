module.exports = {
    name: 'Running Down That Hill (A Deal With Aule) (1/day)',

    // the initiative-changing one

    prerequisite: [
        {
            level: {
                level: 5,
                class: {
                    name: 'Cleric',
                },
            },
        },
        {
            domain: 'life',
            deity: 'aule',
        },
    ],
    entries: [
        'Your divine deity allows you to hurry an ally into the fray while you step back, ready to help any endangered comrades. If you and at least one ally roll initiative, you may swap your results with those of one of your allies.',
        'If you are following Combat: Step by Step (PHB 189), this swap occurs after step 3 (Roll Initiative) but before step 4 (Take Turns).',
    ],
    source: 'zorq',
    // featureType: 'EI',
};
