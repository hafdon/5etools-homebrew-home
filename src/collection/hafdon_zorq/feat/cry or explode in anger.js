module.exports = {
    name: 'Cry or Explode in Anger',
    source: 'zorq',
    prerequisite: [
        {
            other: 'The strongest heart.',
        },
    ],
    entries: [
        'At any time, if you are feeling intense emotions, you may roll a pure Luck check ({@dice 1d20}).',
        'On a 1-9, you become {@condition prone} and find yourself {@condition crying|zorq} for the next minute. You may use your movement to get up from prone at any time, but nothing can end the {@condition crying|zorq} condition short of a {@spell wish|phb} spell',
        'On a 10-20, for the next minute, once per turn when you hit with a melee attack or a spell attack you may add {@damage 1d6} to the damage. You may choose the type of damage from among the types that the attack already deals. (This damage is not doubled or increased on a critical hit.)',
        'Once you use this ability, you may not use it again until after a long rest.',
    ],
};
