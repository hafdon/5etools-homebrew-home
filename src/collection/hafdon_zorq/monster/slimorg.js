module.exports = {
    source: 'zorq',
    name: 'Slimorg',
    size: 'M',
    type: { type: 'monstrosity', tags: ['Toxic Cave Fisher'] },
    alignment: ['U'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 67,
        formula: '9d8 + 27',
    },
    speed: {
        walk: 30,
        climb: 30,
    },
    str: 16,
    dex: 13,
    con: 16,
    int: 3,
    wis: 10,
    cha: 3,
    skill: {
        perception: '+2',
        stealth: '+5',
    },
    vulnerable: ['fire'],
    immune: ['poison'],
    conditionImmune: ['poisoned'],
    senses: ['blindsight 60 ft.'],
    passive: 12,
    cr: '3',
    trait: [
        {
            type: 'inset',
            entries: [
                { name: 'Purpose', entries: [''] },
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: ['slime dot org', 'slimort'] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'greenish glow',
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about:',
                    ],
                },
            ],
        },
        {
            name: 'Fear of Fire',
            entries: [
                'If the cave fisher takes fire damage, it is {@condition frightened} of the source of that damage for 1 round.',
            ],
        },
        {
            name: 'Toxic Filament',
            entries: [
                "The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is {@condition grappled} by the cave fisher (escape {@dc 13}), and ability checks made to escape this grapple have disadvantage. A creature that begins its turn adhered to the cave fisher's filament, must succeed on a {@dc 13} Constitution saving throw or become {@condition poisoned} for one minute. While {@condition poisoned}, the creature must succeed on a {@dc 13} Constitution saving throw at the start of each of its turns or be {@condition stunned} for 1 round and take 4 ({@damage 1d8}) poison damage. A creature that succeeds on this saving throw on two consecutive turns, ends the {@condition poisoned} condition on itself. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage; vulnerability to fire damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful {@dc 13} Strength check to pull free. Destroying the filament deals no damage to the cave fisher, which can extrude a replacement filament on its next turn.",
            ],
        },
        {
            name: 'Volatile Blood',
            entries: [
                'If the cave fisher has half its maximum hit points or fewer, it must make a {@dc 13} Constitution saving throw each time it takes fire damage. If it fails the save, its blood combusts violently and the cave fisher takes 10 ({@damage 3d6}) slashing damage.',
            ],
        },
        {
            name: 'Spider Climb',
            entries: [
                'The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: ['The cave fisher makes two claw attacks.'],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit +5} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) slashing damage.',
            ],
        },
        {
            name: 'Filament',
            entries: [
                "One creature {@condition grappled} by the cave fisher's toxic filament must make a {@dc 12} Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can't extrude another filament.",
            ],
        },
    ],

    actionTags: ['Multiattack'],
    traitTags: ['Spider Climb'],
    senseTags: ['B'],
    damageTags: ['S', 'I'],
    miscTags: ['MW'],
};
