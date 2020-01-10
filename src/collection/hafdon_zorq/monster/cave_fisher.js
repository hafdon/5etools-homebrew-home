/**
 * For use for template for its usability as ingredients
 */
module.exports = {
    name: 'Cave Fisher (zorq)',
    size: 'M',
    type: 'monstrosity',
    source: 'zorq',
    alignment: ['U'],
    ac: [
        {
            ac: 16,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 58,
        formula: '9d8 + 18',
    },
    speed: {
        walk: 20,
        climb: 20,
    },
    str: 16,
    dex: 13,
    con: 14,
    int: 3,
    wis: 10,
    cha: 3,
    skill: {
        perception: '+2',
        stealth: '+5',
    },
    senses: ['blindsight 60 ft.'],
    passive: 12,
    cr: '3',
    trait: [
        {
            name: 'Adhesive Filament',
            entries: [
                'The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is {@condition grappled} by the cave fisher (escape {@dc 13}), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful {@dc 13} Strength check to pull free. Destroying the filament causes no damage to the cave fisher, which can extrude a replacement filament on its next turn',
            ],
        },
        {
            name: 'Flammable Blood',
            entries: [
                'If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage.',
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
            entries: ['The cave fisher makes two attacks with its claws.'],
        },
        {
            name: 'Claw',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}10 ({@damage 2d6 + 3}) slashing damage.',
            ],
        },
        {
            name: 'Filament',
            entries: [
                "One creature {@condition grappled} by the cave fisher's adhesive filament must make a {@dc 13} Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can't extrude another filament.",
            ],
        },
    ],
    environment: ['underdark'],
    // page: 130,
    // soundClip:
    //     'https://media-waterdeep.cursecdn.com/file-attachments/0/83/cave-fisher.mp3',
    traitTags: ['Spider Climb'],
    actionTags: ['Multiattack'],
    senseTags: ['B'],
    damageTags: ['S'],
    miscTags: ['MW'],
};
