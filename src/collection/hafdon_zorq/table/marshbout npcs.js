module.exports = {
    name: 'Marshbout NPCs',
    source: 'zorq',
    intro: [
        'The following table can be used as inspiration when an NPC is needed.',
    ],
    // outro: [
    //     'Ideally, this table should be consulted in advance of a situation which would require it, as the results can feed into greater plot hooks.',
    // ],
    caption: 'Marshbout NPCs',
    colLabels: ['1d6', 'Name', 'Description'],
    colStyles: ['col-1 text-center', 'col-3', 'col-8'],
    rows: [
        ['1', "Nancy O'Pug", 'n/a'],
        ['2', 'Dame {@creature Clippington Titchwillow|zorq}', 'Landed lady.'],
        [
            '3',
            '{@creature Branda Earthlord|zorq}',
            'One of the sisters guarding {@creature Soul Rock|zorq}',
        ],
        ['4', 'Igno Red McGerf', 'A stupid or oblivious dragon.'],
        [
            '5',
            'A trail of blood leading to an unconscious and badly wounded member of the group responsible',
            'n/a',
        ],
        [
            '6',
            'A living witness, who was unable or unwilling to leave the crime scene',
            'n/a',
        ],
    ],
};
