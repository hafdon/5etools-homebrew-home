module.exports = {
    name: 'Wraith Dew (Ingested)',
    wondrous: true,
    source: 'zorq',
    tier: 'Minor',
    poison: true,
    type: 'TG',
    entries: [
        'This potent, syrupy liquid smells like earth and {@item black wood resin|zorq}. Many taverns carry proprietary blends.',
        'A creature subjected to this liquid must succeed on a {@dc 13} Constitution saving throw or become {@condition poisoned} for {@dice 1d4} hours.',
        'On a successful save, the creature gains +1 to any Charisma ability checks or saving throws and -1 to Perception ability checks or saving throws for {@dice 1d4 hours}.',
    ],
    attachedSpells: [],
    recharge: 'dawn',
};
