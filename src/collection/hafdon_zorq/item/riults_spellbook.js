module.exports = {
    name: "Riult's Spellbook",
    wondrous: true,
    tier: 'Major',
    rarity: 'Other',
    source: 'zorq',
    srd: true,
    entries: [
        "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age.",
        'This spellbook contains the following legible spells. There are other markings in the book, but you cannot tell what they are, and {@spell comprehend languages|phb} does not allow you to interpret them.',
        {
            type: 'list',
            items: [
                '{@spell comprehend languages|phb}',
                '{@spell false life|phb]}',
                '{@spell enlarge/reduce|phb}',
            ],
        },
    ],
};
