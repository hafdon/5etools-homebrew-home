module.exports = {
    name: "Riult's Spellbook",
    wondrous: true,
    tier: 'Major',
    rarity: 'Other',
    source: 'zorq',
    entries: [
        "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age.",
        {
            type: 'spellcasting',
            name: 'Spells',
            headerEntries: ['This spellbook contains the following spells:'],
            spells: {
                '1': {
                    slots: 4,
                    spells: ['{@spell identify}', '{@spell ray of sickness}'],
                },
            },
            footerEntries: [],
        },
    ],
};
