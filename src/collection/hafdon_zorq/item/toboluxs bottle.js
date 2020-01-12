/**
 * Sources: Efreeti Bottle and Ghost Lantern
 */
module.exports = {
    name: "Tobolux's Bottle",
    wondrous: true,
    weight: 1,
    rarity: 'Rare',
    tier: 'Major',
    source: 'zorq',

    entries: [
        'This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an {@creature Tobolux|zorq} appears in an unoccupied space within 30 feet of you.',
        "While holding the bottle, you can use an action to order {@creature Tobolux|zorq} to duplicate the effect of the {@spell detect poison and disease} or {@spell protection from poison}. {@creature Tobolux|zorq} returns to the bottle when the spell ends, and the stopper can't be removed for another 24 hours.",
        "{@creature Tobolux|zorq} is bound to the bottle and can't be harmed, turned, or raised from the dead.",
        'Casting a {@spell dispel evil and good} spell on the bottle releases {@creature Tobolux|zorq} (to what effect?) and renders the bottle nonmagical.',
    ],
    attachedSpells: ['detect poison and disease', 'protection from poison'],
};

//     {
//         name: 'Efreeti Bottle',
//         wondrous: true,
//         weight: 1,
//         tier: 'Major',
//         rarity: 'Very Rare',
//         source: 'DMG',
//         page: 167,
//         entries: [
//             ,
//             'The first time the bottle is opened, the DM rolls to determine what happens.',
//             {
//                 type: 'table',
//                 colLabels: ['{@dice d100}', 'Effect'],
//                 colStyles: ['col-1 text-center', 'col-11'],
//                 rows: [
//                     [
//                         '01-10',
//                         'The {@creature efreeti} attacks you. After fighting for 5 rounds, the {@creature efreeti} disappears, and the bottle loses its magic.',
//                     ],
//                     [
//                         '11-90',
//                         "The {@creature efreeti} serves you for 1 hour, doing as you command. Then the {@creature efreeti} returns to the bottle, and a new stopper contains it. The stopper can't be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the {@creature efreeti} escapes and disappears, and the bottle loses its magic.",
//                     ],
//                     [
//                         '91-00',
//                         'The {@creature efreeti} can cast the {@spell wish} spell three times for you. It disappears when it grants the final wish or after 1 hour, and the bottle loses its magic.',
//                     ],
//                 ],
//             },
//         ],
//         attachedSpells: ['wish'],
//         lootTables: ['Magic Item Table H'],
//         srd: true,
//     },
// ];
