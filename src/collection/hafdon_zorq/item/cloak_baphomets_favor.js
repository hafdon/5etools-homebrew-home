module.exports = {
    name: "Cloak of Baphomet's Favor",
    wondrous: true,
    tier: 'Major',
    rarity: 'Rare',
    source: 'zorq',
    reqAttune: true,
    entries: [
        'While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal.',
        {
            type: 'entries',
            name: 'Curse',
            entries: [
                "Once you don this cursed armor, you can't doff it unless you are targeted by the {@spell remove curse} spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against followers of {@creature Baphomet} and on saving throws against their spells and special abilities.",
            ],
        },
    ],
    curse: true,
};
