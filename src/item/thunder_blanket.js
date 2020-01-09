module.exports = {
    name: 'Thunder Blanket',
    wondrous: true,
    type: 'AG',
    tier: 'Minor',
    rarity: 'Uncommon',
    source: 'zorq',
    weight: 15,
    recharge: 'dawn',

    reqAttune: true,
    entries: [
        'You may use an action to wrap a Large or smaller creature in this blanket. While the blanket is on the creature, it suppresses any effect causing the creature to be {@condition charmed} or {@condition frightened}. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.',
        'The blanket may only be used in this way for 10 minutes before it loses its efficacy. The blanket regains its efficacy at the next dawn.',
    ],
};
