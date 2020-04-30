on('ready', function() {
    ShapedScripts.addEntities({
        name: 'Player’s Handbook',
        dependencies: ['SRD'],
        version: '2.0.0',
        classes: [
            {
                name: 'Barbarian',
                archetypes: [
                    {
                        name: 'Totem Warrior',
                        spells: ['Speak with Animals', 'Beast Sense'],
                    },
                ],
            },
            {
                name: 'Bard',
                spells: [
                    'Blade Ward',
                    'Friends',
                    'Dissonant Whispers',
                    'Cloud of Daggers',
                    'Crown of Madness',
                    'Phantasmal Force',
                    'Feign Death',
                    'Power Word Heal',
                ],
            },
            {
                name: 'Cleric',
                archetypes: [
                    {
                        name: 'Knowledge',
                        spells: [
                            'Command',
                            'Identify',
                            'Augury',
                            'Suggestion',
                            'Nondetection',
                            'Speak with Dead',
                            'Arcane Eye',
                            'Confusion',
                            'Legend Lore',
                            'Scrying',
                        ],
                    },
                    {
                        name: 'Light',
                        spells: [
                            'Burning Hands',
                            'Faerie Fire',
                            'Flaming Sphere',
                            'Scorching Ray',
                            'Daylight',
                            'Fireball',
                            'Guardian of Faith',
                            'Wall of Fire',
                            'Flame Strike',
                            'Scrying',
                        ],
                    },
                    {
                        name: 'Nature',
                        spells: [
                            'Animal Friendship',
                            'Speak with Animals',
                            'Barkskin',
                            'Spike Growth',
                            'Plant Growth',
                            'Wind Wall',
                            'Dominate Beast',
                            'Grasping Vine',
                            'Insect Plague',
                            'Tree Stride',
                        ],
                    },
                    {
                        name: 'Tempest',
                        spells: [
                            'Fog Cloud',
                            'Thunderwave',
                            'Gust of Wind',
                            'Shatter',
                            'Call Lightning',
                            'Sleet Storm',
                            'Control Water',
                            'Ice Storm',
                            'Destructive Wave',
                            'Insect Plague',
                        ],
                    },
                    {
                        name: 'Trickery',
                        spells: [
                            'Charm Person',
                            'Disguise Self',
                            'Mirror Image',
                            'Pass without Trace',
                            'Blink',
                            'Dispel Magic',
                            'Dimension Door',
                            'Polymorph',
                            'Dominate Person',
                            'Modify Memory',
                        ],
                    },
                    {
                        name: 'War',
                        spells: [
                            'Divine Favor',
                            'Shield of Faith',
                            'Magic Weapon',
                            'Spiritual Weapon',
                            'Crusader’s Mantle',
                            'Spirit Guardians',
                            'Freedom of Movement',
                            'Stoneskin',
                            'Flame Strike',
                            'Hold Monster',
                        ],
                    },
                ],
                spells: ['Feign Death'],
            },
            {
                name: 'Druid',
                spells: [
                    'Thorn Whip',
                    'Beast Sense',
                    'Feign Death',
                    'Grasping Vine',
                    'Tsunami',
                ],
            },
            {
                name: 'Paladin',
                archetypes: [
                    {
                        name: 'Ancients',
                        spells: [
                            'Ensnaring Strike',
                            'Speak with Animals',
                            'Misty Step',
                            'Moonbeam',
                            'Plant Growth',
                            'Protection from Energy',
                            'Ice Storm',
                            'Stoneskin',
                            'Commune with Nature',
                            'Tree Stride',
                        ],
                    },
                    {
                        name: 'Vengeance',
                        spells: [
                            'Bane',
                            'Hunter’s Mark',
                            'Hold Person',
                            'Misty Step',
                            'Haste',
                            'Protection from Energy',
                            'Banishment',
                            'Dimension Door',
                            'Hold Monster',
                            'Scrying',
                        ],
                    },
                ],
                spells: [
                    'Compelled Duel',
                    'Searing Smite',
                    'Thunderous Smite',
                    'Wrathful Smite',
                    'Aura of Vitality',
                    'Blinding Smite',
                    'Crusader’s Mantle',
                    'Elemental Weapon',
                    'Aura of Life',
                    'Aura of Purity',
                    'Staggering Smite',
                    'Banishing Smite',
                    'Circle of Power',
                    'Destructive Wave',
                ],
            },
            {
                name: 'Ranger',
                spells: [
                    'Ensnaring Strike',
                    'Hail of Thorns',
                    'Beast Sense',
                    'Cordon of Arrows',
                    'Conjure Barrage',
                    'Lightning Arrow',
                    'Grasping Vine',
                    'Conjure Volley',
                    'Swift Quiver',
                ],
            },
            {
                name: 'Sorcerer',
                spells: [
                    'Blade Ward',
                    'Friends',
                    'Chromatic Orb',
                    'Ray of Sickness',
                    'Witch Bolt',
                    'Cloud of Daggers',
                    'Crown of Madness',
                    'Phantasmal Force',
                    'Arcane Gate',
                ],
            },
            {
                name: 'Warlock',
                archetypes: [
                    {
                        name: 'Archfey',
                        spells: [
                            'Faerie Fire',
                            'Sleep',
                            'Calm Emotions',
                            'Phantasmal Force',
                            'Blink',
                            'Plant Growth',
                            'Dominate Beast',
                            'Greater Invisibility',
                            'Dominate Person',
                            'Seeming',
                        ],
                    },
                    {
                        name: 'Great Old One',
                        spells: [
                            'Dissonant Whispers',
                            'Tasha’s Hideous Laughter',
                            'Detect Thoughts',
                            'Phantasmal Force',
                            'Clairvoyance',
                            'Sending',
                            'Dominate Beast',
                            'Evard’s Black Tentacles',
                            'Dominate Person',
                            'Telekinesis',
                        ],
                    },
                ],
                spells: [
                    'Blade Ward',
                    'Friends',
                    'Armor of Agathys',
                    'Arms of Hadar',
                    'Hex',
                    'Witch Bolt',
                    'Cloud of Daggers',
                    'Crown of Madness',
                    'Hunger of Hadar',
                    'Arcane Gate',
                ],
            },
            {
                name: 'Wizard',
                spells: [
                    'Blade Ward',
                    'Friends',
                    'Chromatic Orb',
                    'Ray of Sickness',
                    'Witch Bolt',
                    'Cloud of Daggers',
                    'Crown of Madness',
                    'Phantasmal Force',
                    'Feign Death',
                    'Arcane Gate',
                    'Telepathy',
                ],
            },
        ],
        monsters: [
            {
                name: 'Animated Object (Huge)',
                size: 'Huge',
                type: 'Construct',
                alignment: 'unaligned',
                AC: '10 (natural armor)',
                HP: '80 (80d1)',
                speed: '30 ft.',
                strength: 18,
                dexterity: 6,
                constitution: 10,
                intelligence: 3,
                wisdom: 3,
                charisma: 1,
                senses: 'blindsight 30 ft. (blind beyond this radius)',
                languages: '',
                challenge: 0,
                traits: [
                    {
                        name: 'Animated',
                        text:
                            'If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0.\nWhen the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.\nThe DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.',
                    },
                ],
                actions: [
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d12 + 4) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Animated Object (Large)',
                size: 'Large',
                type: 'Construct',
                alignment: 'unaligned',
                AC: '10 (natural armor)',
                HP: '50 (50d1)',
                speed: '30 ft.',
                strength: 14,
                dexterity: 10,
                constitution: 10,
                intelligence: 3,
                wisdom: 3,
                charisma: 1,
                senses: 'blindsight 30 ft. (blind beyond this radius)',
                languages: '',
                challenge: 0,
                traits: [
                    {
                        name: 'Animated',
                        text:
                            'If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0.\nWhen the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.\nThe DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.',
                    },
                ],
                actions: [
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d10 + 2) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Animated Object (Medium)',
                size: 'Medium',
                type: 'Construct',
                alignment: 'unaligned',
                AC: '13 (natural armor)',
                HP: '40 (40d1)',
                speed: '30 ft.',
                strength: 10,
                dexterity: 12,
                constitution: 10,
                intelligence: 3,
                wisdom: 3,
                charisma: 1,
                senses: 'blindsight 30 ft. (blind beyond this radius)',
                languages: '',
                challenge: 0,
                traits: [
                    {
                        name: 'Animated',
                        text:
                            'If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0.\nWhen the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.\nThe DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.',
                    },
                ],
                actions: [
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d6 + 1) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Animated Object (Small)',
                size: 'Small',
                type: 'Construct',
                alignment: 'unaligned',
                AC: '16 (natural armor)',
                HP: '25 (25d1)',
                speed: '30 ft.',
                strength: 6,
                dexterity: 14,
                constitution: 10,
                intelligence: 3,
                wisdom: 3,
                charisma: 1,
                senses: 'blindsight 30 ft. (blind beyond this radius)',
                languages: '',
                challenge: 0,
                traits: [
                    {
                        name: 'Animated',
                        text:
                            'If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0.\nWhen the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.\nThe DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.',
                    },
                ],
                actions: [
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Animated Object (Tiny)',
                size: 'Tiny',
                type: 'Construct',
                alignment: 'unaligned',
                AC: '18 (natural armor)',
                HP: '20 (20d1)',
                speed: '30 ft.',
                strength: 4,
                dexterity: 18,
                constitution: 10,
                intelligence: 3,
                wisdom: 3,
                charisma: 1,
                senses: 'blindsight 30 ft. (blind beyond this radius)',
                languages: '',
                challenge: 0,
                traits: [
                    {
                        name: 'Animated',
                        text:
                            'If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0.\nWhen the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.\nThe DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.',
                    },
                ],
                actions: [
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 6 (1d4 + 4) bludgeoning damage.',
                    },
                ],
            },
        ],
        spells: [
            { name: 'Acid Arrow', newName: 'Melf’s Acid Arrow' },
            {
                name: 'Arcane Gate',
                level: 6,
                school: 'Conjuration',
                castingTime: '1 action',
                range: '500 feet',
                components: { verbal: true, somatic: true },
                concentration: true,
                duration: 'up to 10 minutes',
                description:
                    'You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.\nThe portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.\nAny creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction.',
            },
            { name: 'Arcane Hand', newName: 'Bigby’s Hand' },
            { name: 'Arcane Sword', newName: 'Mordenkainen’s Sword' },
            { name: 'Arcanist’s Magic Aura', newName: 'Nystul’s Magic Aura' },
            {
                name: 'Armor of Agathys',
                level: 1,
                school: 'Abjuration',
                castingTime: '1 action',
                range: 'Self',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a cup of water',
                },
                duration: '1 hour',
                description:
                    'A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.',
                damage: { damageBonus: '5', damageType: 'cold' },
            },
            {
                name: 'Arms of Hadar',
                level: 1,
                school: 'Conjuration',
                castingTime: '1 action',
                range: 'Self (10-foot radius)',
                components: { verbal: true, somatic: true },
                duration: 'Instantaneous',
                description:
                    'You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can’t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
                save: {
                    ability: 'Strength',
                    saveSuccess: 'half damage and can take reactions',
                    damage: '2d6',
                    damageType: 'necrotic',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Aura of Life',
                level: 4,
                school: 'Abjuration',
                castingTime: '1 action',
                range: 'Self (30-foot radius)',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 10 minutes',
                description:
                    'Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can’t be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points.',
            },
            {
                name: 'Aura of Purity',
                level: 4,
                school: 'Abjuration',
                castingTime: '1 action',
                range: 'Self (30-foot radius)',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 10 minutes',
                description:
                    'Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can’t become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.',
            },
            {
                name: 'Aura of Vitality',
                level: 3,
                school: 'Evocation',
                castingTime: '1 action',
                range: 'Self (30-foot radius)',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.',
                heal: { heal: '2d6' },
            },
            {
                name: 'Banishing Smite',
                level: 5,
                school: 'Abjuration',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you’re on, the target disappears, returning to its home plane. If the target is native to the plane you’re on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.',
                damage: { damage: '5d10', damageType: 'force' },
            },
            {
                name: 'Beast Sense',
                level: 2,
                school: 'Divination',
                ritual: true,
                castingTime: '1 action',
                range: 'Touch',
                components: { somatic: true },
                concentration: true,
                duration: 'up to 1 hour',
                description:
                    'You touch a willing beast. For the duration of the spell, you can use your action to see through the beast’s eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast’s senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.',
            },
            { name: 'Black Tentacles', newName: 'Evard’s Black Tentacles' },
            {
                name: 'Blade Ward',
                level: 0,
                school: 'Abjuration',
                castingTime: '1 action',
                range: 'Self',
                components: { verbal: true, somatic: true },
                duration: '1 round',
                description:
                    'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.',
            },
            {
                name: 'Blinding Smite',
                level: 3,
                school: 'Evocation',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.\nA creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.',
                save: { ability: 'Constitution', saveSuccess: 'not blinded' },
                damage: { damage: '3d8', damageType: 'radiant' },
            },
            {
                name: 'Chromatic Orb',
                level: 1,
                school: 'Evocation',
                castingTime: '1 action',
                range: '90 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a diamond worth at least 50 gp',
                },
                duration: 'Instantaneous',
                description:
                    'You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.',
                attack: {
                    type: 'ranged',
                    damage: '3d8',
                    damageType:
                        'acid, cold, fire, lightning, poison, or thunder',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Circle of Power',
                level: 5,
                school: 'Abjuration',
                castingTime: '1 action',
                range: 'Self (30-foot radius)',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 10 minutes',
                description:
                    'Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.',
            },
            {
                name: 'Cloud of Daggers',
                level: 2,
                school: 'Conjuration',
                castingTime: '1 action',
                range: '60 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a sliver of glass',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell’s area for the first time on a turn or starts its turn there.',
                higherLevel:
                    'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.',
                damage: {
                    damage: '4d4',
                    damageType: 'slashing',
                    higherLevelDice: 2,
                },
            },
            {
                name: 'Compelled Duel',
                level: 1,
                school: 'Enchantment',
                castingTime: '1 bonus action',
                range: '30 feet',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn.\nThe spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.',
                save: {
                    ability: 'Wisdom',
                    saveSuccess: 'unaffected this turn',
                },
            },
            {
                name: 'Conjure Barrage',
                level: 3,
                school: 'Conjuration',
                castingTime: '1 action',
                range: 'Self (60-foot cone)',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial:
                        'one piece of ammunition or a thrown weapon',
                },
                duration: 'Instantaneous',
                description:
                    'You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.',
                save: {
                    ability: 'Dexterity',
                    saveSuccess: 'half damage',
                    damage: '3d8',
                    damageType:
                        'same as weapon or ammunition used as component',
                },
            },
            {
                name: 'Conjure Volley',
                level: 5,
                school: 'Conjuration',
                castingTime: '1 action',
                range: '150 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial:
                        'one piece of ammunition or one thrown weapon',
                },
                duration: 'Instantaneous',
                description:
                    'You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius, 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.',
                save: {
                    ability: 'Dexterity',
                    saveSuccess: 'half damage',
                    damage: '8d8',
                    damageType: 'same as that of the ammunition or weapon',
                },
            },
            {
                name: 'Cordon of Arrows',
                level: 2,
                school: 'Transmutation',
                castingTime: '1 action',
                range: '5 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'four or more arrows or bolts',
                },
                duration: '8 hours',
                description:
                    'You plant four pieces of nonmagical ammunition—arrows or crossbow bolts—in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.\nWhen you cast this spell, you can designate any creatures you choose, and the spell ignores them.',
                higherLevel:
                    'When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd.',
                save: {
                    ability: 'Dexterity',
                    damage: '1d6',
                    damageType: 'piercing',
                },
            },
            {
                name: 'Crown of Madness',
                level: 2,
                school: 'Enchantment',
                castingTime: '1 action',
                range: '120 feet',
                components: { verbal: true, somatic: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.\nThe charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.\nOn your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.',
                save: { ability: 'Wisdom' },
            },
            {
                name: 'Crusader’s Mantle',
                level: 3,
                school: 'Evocation',
                castingTime: '1 action',
                range: 'Self (30-foot radius)',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.',
            },
            {
                name: 'Destructive Wave',
                level: 5,
                school: 'Evocation',
                castingTime: '1 action',
                range: 'Self (30-foot radius)',
                components: { verbal: true },
                duration: 'Instantaneous',
                description:
                    'You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.',
                save: {
                    ability: 'Constitution',
                    saveSuccess: 'half damage and not prone',
                    damage: '5d6',
                    damageType: 'thunder',
                    secondaryDamage: '5d6',
                    secondaryDamageType: 'radiant or necrotic (your choice)',
                },
            },
            {
                name: 'Dissonant Whispers',
                level: 1,
                school: 'Enchantment',
                castingTime: '1 action',
                range: '60 feet',
                components: { verbal: true },
                duration: 'Instantaneous',
                description:
                    'You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
                save: {
                    ability: 'Wisdom',
                    saveSuccess: 'half damage and doesn’t have to move away',
                    damage: '3d6',
                    damageType: 'psychic',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Elemental Weapon',
                level: 3,
                school: 'Transmutation',
                castingTime: '1 action',
                range: 'Touch',
                components: { verbal: true, somatic: true },
                concentration: true,
                duration: 'up to 1 hour',
                description:
                    'A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.',
                higherLevel:
                    'When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.',
                damage: {
                    damage: '1d4',
                    damageType: 'acid, cold, fire, lightning, or thunder',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Ensnaring Strike',
                level: 1,
                school: 'Conjuration',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.\nWhile restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.',
                higherLevel:
                    'If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
                save: {
                    ability: 'Strength',
                    damage: '1d6',
                    damageType: 'piercing',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Faithful Hound',
                newName: 'Mordenkainen’s Faithful Hound',
            },
            {
                name: 'Feign Death',
                level: 3,
                school: 'Necromancy',
                ritual: true,
                castingTime: '1 action',
                range: 'Touch',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a pinch of graveyard dirt',
                },
                duration: '1 hour',
                description:
                    'You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.\nFor the spell’s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target’s status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends.',
            },
            { name: 'Floating Disk', newName: 'Tenser’s Floating Disk' },
            { name: 'Freezing Sphere', newName: 'Otiluke’s Freezing Sphere' },
            {
                name: 'Friends',
                level: 0,
                school: 'Enchantment',
                castingTime: '1 action',
                range: 'Self',
                components: {
                    somatic: true,
                    material: true,
                    materialMaterial:
                        'a small amount of makeup applied to the face as this spell is cast',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn’t hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM’s discretion), depending on the nature of your interaction with it.',
            },
            {
                name: 'Grasping Vine',
                level: 4,
                school: 'Conjuration',
                castingTime: '1 bonus action',
                range: '30 feet',
                components: { verbal: true, somatic: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.\nUntil the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.',
                save: { ability: 'Dexterity' },
            },
            {
                name: 'Hail of Thorns',
                level: 1,
                school: 'Conjuration',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.',
                higherLevel:
                    'If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).',
                save: {
                    ability: 'Dexterity',
                    saveSuccess: 'half damage',
                    damage: '1d10',
                    damageType: 'piercing',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Hex',
                level: 1,
                school: 'Enchantment',
                castingTime: '1 bonus action',
                range: '90 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'the petrified eye of a newt',
                },
                concentration: true,
                duration: 'up to 1 hour',
                description:
                    'You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.\nIf the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.\nA remove curse cast on the target ends this spell early.',
                higherLevel:
                    'When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.',
                damage: { damage: '1d6', damageType: 'necrotic' },
            },
            { name: 'Hideous Laughter', newName: 'Tasha’s Hideous Laughter' },
            {
                name: 'Hunger of Hadar',
                level: 3,
                school: 'Conjuration',
                castingTime: '1 action',
                range: '150 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a pickled octopus tentacle',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.\nThe void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it.',
                save: {
                    ability: 'Dexterity',
                    saveSuccess: 'no acid damage',
                    damage: '2d6',
                    damageType: 'acid',
                },
                damage: { damage: '2d6', damageType: 'cold' },
            },
            { name: 'Instant Summons', newName: 'Drawmij’s Instant Summons' },
            {
                name: 'Irresistible Dance',
                newName: 'Otto’s Irresistible Dance',
            },
            {
                name: 'Lightning Arrow',
                level: 3,
                school: 'Transmutation',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true, somatic: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you make a ranged weapon attack during the spell’s duration, the weapon’s ammunition, or the weapon itself if it’s a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon’s normal damage.\nWhether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.\nThe piece of ammunition or weapon then returns to its normal form.',
                higherLevel:
                    'When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.',
                save: {
                    ability: 'Dexterity',
                    saveSuccess: 'half damage',
                    damage: '2d8',
                    damageType: 'lightning',
                    higherLevelDice: 1,
                },
                damage: {
                    damage: '4d8',
                    damageType: 'lightning',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Magnificent Mansion',
                newName: 'Mordenkainen’s Magnificent Mansion',
            },
            {
                name: 'Phantasmal Force',
                level: 2,
                school: 'Illusion',
                castingTime: '1 action',
                range: '60 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a bit of fleece',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.\nThe phantasm includes sound, temperature, and other stimuli, also evident only to the creature.\nThe target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.\nWhile a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall—it was pushed, it slipped, or a strong wind might have knocked it off.\nAn affected target is so convinced of the phantasm’s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.',
                save: {
                    ability: 'Intelligence',
                    damage: '1d6',
                    damageType: 'psychic',
                },
            },
            {
                name: 'Power Word Heal',
                level: 9,
                school: 'Evocation',
                castingTime: '1 action',
                range: 'Touch',
                components: { verbal: true, somatic: true },
                duration: 'Instantaneous',
                description:
                    'A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs.',
                heal: { bonus: 999 },
            },
            {
                name: 'Private Sanctum',
                newName: 'Mordenkainen’s Private Sanctum',
            },
            {
                name: 'Ray of Sickness',
                level: 1,
                school: 'Necromancy',
                castingTime: '1 action',
                range: '60 feet',
                components: { verbal: true, somatic: true },
                duration: 'Instantaneous',
                description:
                    'A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.',
                attack: {
                    type: 'ranged',
                    damage: '2d8',
                    damageType: 'poison',
                    higherLevelDice: 1,
                },
                save: { ability: 'Constitution', saveSuccess: 'not poisoned' },
            },
            { name: 'Resilient Sphere', newName: 'Otiluke’s Resilient Sphere' },
            {
                name: 'Searing Smite',
                level: 1,
                school: 'Evocation',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.',
                save: {
                    ability: 'Constitution',
                    saveSuccess: 'no secondary damage',
                    damage: '1d6',
                    damageType: 'fire',
                },
                damage: {
                    damage: '1d6',
                    damageType: 'fire',
                    higherLevelDice: 1,
                },
            },
            { name: 'Secret Chest', newName: 'Leomund’s Secret Chest' },
            {
                name: 'Staggering Smite',
                level: 4,
                school: 'Evocation',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can’t take reactions, until the end of its next turn.',
                save: { ability: 'Wisdom' },
                damage: { damage: '4d6', damageType: 'psychic' },
            },
            {
                name: 'Swift Quiver',
                level: 5,
                school: 'Transmutation',
                castingTime: '1 bonus action',
                range: 'Touch',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial:
                        'a quiver containing at least one piece of ammunition',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.\nOn each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends.',
            },
            { name: 'Telepathic Bond', newName: 'Rary’s Telepathic Bond' },
            {
                name: 'Telepathy',
                level: 8,
                school: 'Evocation',
                castingTime: '1 action',
                range: 'Unlimited',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a pair of linked silver rings',
                },
                duration: '24 hours',
                description:
                    'You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.\nUntil the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it.',
            },
            {
                name: 'Thorn Whip',
                level: 0,
                school: 'Transmutation',
                castingTime: '1 action',
                range: '30 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'the stem of a plant with thorns',
                },
                duration: 'Instantaneous',
                description:
                    'You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.',
                higherLevel:
                    'This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).',
                attack: {
                    type: 'melee',
                    damage: '[[ceil((@{level} + 2) / 6)]]d6',
                    damageType: 'piercing',
                },
            },
            {
                name: 'Thunderous Smite',
                level: 1,
                school: 'Evocation',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.',
                save: { ability: 'Strength' },
                damage: { damage: '2d6', damageType: 'thunder' },
            },
            { name: 'Tiny Hut', newName: 'Leomund’s Tiny Hut' },
            {
                name: 'Tsunami',
                level: 8,
                school: 'Conjuration',
                castingTime: '1 minute',
                range: 'Sight',
                components: { verbal: true, somatic: true },
                concentration: true,
                duration: 'up to 6 rounds',
                description:
                    'A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.\nWhen the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save.\nAt the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.\nA creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground.',
                save: {
                    ability: 'Strength',
                    saveSuccess: 'half damage and not prone',
                    damage: '6d10',
                    damageType: 'bludgeoning',
                },
            },
            {
                name: 'Witch Bolt',
                level: 1,
                school: 'Evocation',
                castingTime: '1 action',
                range: '30 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial:
                        'a twig from a tree that has been struck by lightning',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you.',
                higherLevel:
                    'When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.',
                attack: {
                    type: 'ranged',
                    damage: '1d12',
                    damageType: 'lightning',
                    higherLevelDice: 1,
                },
            },
            {
                name: 'Wrathful Smite',
                level: 1,
                school: 'Evocation',
                castingTime: '1 bonus action',
                range: 'Self',
                components: { verbal: true },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.',
                save: { ability: 'Wisdom', saveSuccess: 'spell ends' },
                damage: { damage: '1d6', damageType: 'psychic' },
            },
        ],
    });
    ShapedScripts.addEntities({
        name: 'zorq',
        dependencies: ['Player’s Handbook'],
        version: '2.0.0',
        classes: [
            { name: 'Bard', spells: ['Obsidian Shards'] },
            { name: 'Cleric', spells: ['Monk Sanctuary'] },
            { name: 'Sorcerer', spells: ['Obsidian Shards'] },
            { name: 'Warlock', spells: ['Third Eye', 'Obsidian Shards'] },
            {
                name: 'Wizard',
                spells: ['These Rocks Look Great', 'Obsidian Shards'],
            },
        ],
        monsters: [
            {
                name: 'Angel of Lole’iel',
                size: 'Medium',
                type: 'Celestial (pronouns: she, her, hers)',
                alignment: 'lawful good',
                AC: '18 (plate armor)',
                HP: '66 (12d8 + 12)',
                speed: '30 ft., fly 90 ft.',
                strength: 16,
                dexterity: 12,
                constitution: 13,
                intelligence: 11,
                wisdom: 17,
                charisma: 18,
                savingThrows: 'Wis +6, Cha +7',
                skills: 'Investigation +3, Perception +6',
                damageResistances: 'fire, radiant',
                conditionImmunities: 'charmed, exhaustion, frightened',
                senses: 'darkvision 120 ft., truesight 120 ft.',
                languages: 'all',
                challenge: 5,
                traits: [
                    {
                        name: 'Flyby',
                        text:
                            'The angel doesn’t provoke an opportunity attack when it flies out of an enemy’s reach.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'The angel has advantage on saving throws against spells and other magical effects.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The angel makes two melee attacks. It also uses Battlefield Inspiration.',
                    },
                    {
                        name: 'Longsword',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands, plus 18 (4d8) radiant damage. If the target is within 5 feet of any of the angel’s allies, the target takes an extra 2 (1d4) radiant damage.',
                    },
                    {
                        name: 'Battlefield Inspiration',
                        text:
                            'The angel chooses up to three creatures it can see within 30 feet of it. Until the end of the angel’s next turn, each target can add a d4 to its attack rolls and saving throws.',
                    },
                ],
            },
            {
                name: 'Arthur Pod',
                size: 'Medium',
                type: 'Monstrosity (cave fisher)',
                alignment: 'unaligned',
                AC: '16 (natural armor)',
                HP: '58 (9d8 + 18)',
                speed: '20 ft., climb 20 ft.',
                strength: 16,
                dexterity: 13,
                constitution: 14,
                intelligence: 3,
                wisdom: 10,
                charisma: 3,
                skills: 'Perception +2, Stealth +5',
                senses: 'blindsight 60 ft.',
                languages: '',
                challenge: 3,
                traits: [
                    {
                        name: '_dossier',
                        text:
                            'slime dot org\nslimort\nSickly white in color\nCentipede but with crab claws. \nIts version of drooling is clacking its own claws\n6-8 feet long, but 2 feet in diameter.\nSpinneret sack under armpit is where the filament extrudes from\nself-conscious of: \nwants to be (thought of as): \nmodest about:\nblood is highly alcoholic - used ot make craft beverages\ndwarves will drink blood from creatures like this, go berserk for a half hour\nfilaments can be used to make strong things, and almost invisible\nmeat tastes good\nshell used for jewelry and tools',
                    },
                    {
                        name: 'Adhesive Filament',
                        text:
                            'The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is grappled by the cave fisher (escape DC 13), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful DC 13 Strength check to pull free. Destroying the filament causes no damage to the cave fisher, which can extrude a replacement filament on its next turn',
                    },
                    {
                        name: 'Flammable Blood',
                        text:
                            'If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage.',
                    },
                    {
                        name: 'Spider Climb',
                        text:
                            'The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The cave fisher makes two attacks with its claws.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.',
                    },
                    {
                        name: 'Filament',
                        text:
                            'One creature grappled by the cave fisher’s adhesive filament must make a DC 13 Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can’t extrude another filament.',
                    },
                ],
                reactions: [
                    {
                        name: 'Entrancing Dance',
                        recharge: '1/day',
                        text:
                            'If Arthur does not suprise its targets using stealth, it can use its reaction to taps out a rhythmic salsa dance with its claws and feet. Any creature who perceives this dance must make a DC 12 Wisdom saving throw. Until the end of this round, Arthur has advantage to attack against creatures who fail the saving throw.',
                    },
                ],
                environments: ['Underdark'],
            },
            {
                name: 'Baron von Veen (Uugeet form)',
                size: 'Large',
                type: 'Monstrosity',
                alignment: 'any evil alignment',
                AC: '13 (natural armor)',
                HP: '110 (20d8 + 30)',
                speed: '30 ft., swim 45 ft.',
                strength: 16,
                dexterity: 12,
                constitution: 16,
                intelligence: 18,
                wisdom: 15,
                charisma: 8,
                skills: 'Perception +5, Athletics +6',
                damageResistances:
                    'bludgeoning, piercing, slashing from nonmagical attacks',
                senses: '',
                languages: 'Abyssal, Infernal, Primordial, Common',
                challenge: 6,
                traits: [
                    {
                        name: 'Amphibious',
                        text: 'Uugeet can breathe air and water.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'Uugeet’s spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\nAt will: command, create or destroy water\n3/day each: control water, darkness, water breathing, water walk\n1/day each: call lightning, evard’s black tentacles',
                    },
                ],
                actions: [
                    {
                        name: 'Thunderous Touch',
                        text:
                            'Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10) thunder damage.',
                    },
                    {
                        name: 'Voice of the Baron',
                        recharge: 'Recharges after a Short or Long Rest',
                        text:
                            'Baron von Veen speaks through Uugeet with a thunderous voice audible within 300 feet. Creatures of Uugeet’s choice that can hear the Baron’s words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC 14 Charisma saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
                    },
                    {
                        name:
                            'This Isn’t Even My Final Form (which is good because it’s a fucking fish)',
                        text: 'WIP',
                    },
                ],
                environments: ['Coastal', 'Underwater'],
            },
            {
                name: 'Bixby',
                size: 'Medium',
                type: 'Humanoid (deep scion, pronouns: he, him, his, hybrid)',
                alignment: 'neutral good',
                AC: '12 (natural armor)',
                HP: '76 (9d8 + 36)',
                speed: '25 ft., swim 40 ft.',
                strength: 20,
                dexterity: 15,
                constitution: 18,
                intelligence: 10,
                wisdom: 12,
                charisma: 14,
                savingThrows: 'Wis +3, Cha +4',
                skills:
                    'Deception +6, Insight +3, Sleight of Hand +4, Stealth +4',
                senses: 'darkvision 120 ft.',
                languages: 'Aquan, Common, Thieves’ cant',
                challenge: 4,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'self-conscious of:\nwants to be (thought of as) \nmodest about:',
                    },
                    {
                        name: 'Background',
                        text:
                            'Pretty hairy guy in life. Tailor and jack-of-all-trades on the The Majestic Elk',
                    },
                    { name: 'Purpose', text: '' },
                    {
                        name: 'Amphibious',
                        text: 'The deep scion can breathe air and water.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d4 + 5) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6 + 5) slashing damage.',
                    },
                    {
                        name: 'Psychic Screech',
                        recharge: 'Recharge on (Recharge 6–6',
                        text:
                            'The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a DC 14 Wisdom saving throw or take 5 (2d4 + 1) psychic damage. In water, the psychic screech also telepathically transmits the deep scion’s memories of the last 24 hours to creatures who fail their save.',
                    },
                ],
                environments: ['Coastal', 'Swamp', 'Underdark', 'Underwater'],
            },
            {
                name: 'Bonfire',
                size: 'Large',
                type: 'Beast (pronouns: she, her, hers)',
                alignment: 'neutral',
                AC: '14 (natural armor)',
                HP: '44 (8d10)',
                speed: '45 ft.',
                strength: 16,
                dexterity: 8,
                constitution: 11,
                intelligence: 14,
                wisdom: 8,
                charisma: 14,
                skills: 'Athletics +7',
                damageVulnerabilities: 'cold',
                damageResistances:
                    'bludgeoning, piercing, slashing from nonmagical attacks',
                damageImmunities: 'fire',
                senses: 'darkvision 60 ft.',
                languages: 'Salamander, Common',
                challenge: 0,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Bonfire is the size and general appearance of a rough-skinned newt, scaled to 4 feet at the shoulder and 20 feet long. She has carrot-colored skin with marigold spots. She has large, wideset, bulging deep red eyes. If she opens her mouth one can spot a row of sharp, nearly translucent vomerine teeth on the upper jaw and homodont dentary teeth on the lower jaw.',
                    },
                    {
                        name: 'Heated Body',
                        text:
                            'A creature that touches Bonfire or hits it with a melee attack while within 5 feet of it takes 2 (1d4) fire damage.',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'Bonfire is 1st-level spellcaster. Her spellcasting ability is Intelligence (spell save {@dc} 12, 4 to hit with spell attacks). She has the following wizard spells prepared:\nCantrips (at will): fire bolt, create bonfire\n1st level (at will): hellish rebuke',
                    },
                ],
                actions: [
                    {
                        name: 'Tail',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 2 (1d4) bludgeoning damage plus 2 (1d4) fire damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, Bonfire can automatically hit the target with its tail, and Bonfire can’t make tail attacks against other targets.',
                    },
                ],
                environments: ['Underdark'],
            },
            {
                name: 'Branda Earthlord',
                size: 'Medium',
                type: 'Humanoid (dwarf)',
                alignment: 'any alignment',
                AC: '16 (chain mail)',
                HP: '33 (4d8 + 15)',
                speed: '25 ft.',
                strength: 18,
                dexterity: 13,
                constitution: 17,
                intelligence: 12,
                wisdom: 14,
                charisma: 11,
                savingThrows: 'Str +6, Con +5',
                skills:
                    'Perception +4, Stealth +3, Athletics +6, Animal Handling +4',
                damageResistances: 'poison',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Dwarvish',
                challenge: 1,
                traits: [
                    {
                        name: '_',
                        text:
                            '\nOne of four dwarf spirits; older sisters of {@creature soul rock|zorq}\n\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Dwarven Resilience',
                        text:
                            'The dwarf has advantage on saving throws against poison.',
                    },
                    {
                        name: 'Siege Monster',
                        text:
                            'Branda Earthlord deals double damage to objects and structures.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'Branda Earthlord has advantage on saving throws against spells and other magical effects.',
                    },
                    {
                        name: 'Mythomane (title)',
                        text:
                            'You have always has a strong or irresistible propensity for fantasizing, lying, or exaggerating.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The dwarf’s innate spellcasting ability is Wisdom. Their Spell Save DC is 12 and their Spellcasting Ability Modifier is +4. They can innately cast the following spells, requiring no material components:\n1/day each: healing word (level 2), hunter’s mark, jump, pass without trace, speak with animals, speak with plants, these rocks look great',
                    },
                ],
                actions: [
                    {
                        name: 'Handaxe',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (1d12 + 6) slashing damage.',
                    },
                ],
            },
            {
                name: 'Carlos',
                size: 'Medium',
                type: 'Humanoid (dwarf, pronouns: he, him, his)',
                alignment: 'lawful good',
                AC:
                    '15 (scale mail - disadvantage on Stealth (Dexterity) checks)',
                HP: '36 (4d8 + 12)',
                speed: '25 ft. ',
                strength: 14,
                dexterity: 12,
                constitution: 17,
                intelligence: 15,
                wisdom: 20,
                charisma: 12,
                savingThrows: 'Wis +7, Cha +3',
                skills: 'Insight +7, Medicine +7, Persuasion +3, Religion +4',
                damageResistances: 'poison',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Dwarvish',
                challenge: 0,
                traits: [
                    { name: '', text: '\n\n\n' },
                    {
                        name: 'Channel Divinity',
                        recharge: '1/rest',
                        text:
                            'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\nA turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the {@action Dash|phb} action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the {@action Dodge|phb} action.\nYou can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended 1st-level spell slot.\nStarting at 2nd level, you can use your Channel Divinity to heal the badly injured.\nAs an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct.\nAfter {@creature Cora Gn’Tash|zorq} and {@creature Lum Gorebelly|zorq} carried out a similar spell to revitalize the bones of their murdered kin, {@deity Aule|zorq} granted you this feature. You always have {@spell These Rocks Look Great|zorq} prepared, and can use your Channel Divinity to cast it as an action, requiring no material components and without using a spell slot.',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'Carlos is a 4th level spellcaster. His spellcasting ability is Wisdom. His spell save DC is 15. His spell attack bonus is +7. He can prepare 4 cantrips and 9 spells. \nCantrips (at will): light, mending, sacred flame, spare the dying\n1st level (4 slots): command, detect evil and good, healing word\n2nd level (3 slots): calm emotions, lesser restoration, prayer of healing, protection from poison, spiritual weapon, these rocks look great',
                    },
                ],
                actions: [
                    {
                        name: 'Warhammer',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 1d8 + 3 bludgeoning damage, or 1d10 + 3 damage if used with both hands.',
                    },
                ],
            },
            {
                name: 'Cora Gn’Tash',
                size: 'Medium',
                type: 'Humanoid (gnoll)',
                alignment: 'good',
                AC: '13 (studded leather armor)',
                HP: '52 (8d8 + 16)',
                speed: '30 ft.',
                strength: 14,
                dexterity: 12,
                constitution: 14,
                intelligence: 14,
                wisdom: 10,
                charisma: 18,
                savingThrows: 'Str +4, Con +4',
                skills:
                    'Athletics +6, Persuasion +8, Intimidation +8, Perception +4',
                senses: 'darkvision 60 ft.',
                languages: 'Gnoll, Common',
                challenge: 2,
                traits: [
                    {
                        name: 'Harrying Attacks',
                        text:
                            'If the gnoll attacks two creatures in the same turn, the first target has disadvantage on attack rolls until the end of its next turn.',
                    },
                    {
                        name: 'Lightning Lope',
                        text:
                            'The gnoll can Dash or Disengage as a bonus action.',
                    },
                    {
                        name: 'Pack Tactics',
                        text:
                            'The gnoll has advantage on its attack rolls against a target if at least one of the gnoll’s allies is within 5 feet of the target and the ally isn’t incapacitated.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The gnoll makes one bite attack and two battleaxe attacks.',
                    },
                    {
                        name: 'Battleaxe',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage or 7 (1d10 + 2) slashing damage if used in two hands.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
                    },
                ],
            },
            {
                name: 'Cpt. Bill Perry',
                size: 'Medium',
                type: 'Humanoid (deep scion, pronouns: he, him, his, hybrid)',
                alignment: 'neutral good',
                AC: '12 (natural armor)',
                HP: '76 (9d8 + 36)',
                speed: '25 ft., swim 40 ft.',
                strength: 20,
                dexterity: 15,
                constitution: 18,
                intelligence: 10,
                wisdom: 12,
                charisma: 14,
                savingThrows: 'Wis +3, Cha +4',
                skills:
                    'Deception +6, Insight +3, Sleight of Hand +4, Stealth +4',
                senses: 'darkvision 120 ft.',
                languages: 'Aquan, Common, Thieves’ cant',
                challenge: 4,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Captain Bill Perry is a hybrid human-piscine; his body is sleek like a seal and his thick skin is greyish-white with red vertical stripes. Instead of hands he possesses fins terminating in cartilaginous claws.\nself-conscious of:\nwants to be (thought of as) \nmodest about:',
                    },
                    { name: 'Background', text: '' },
                    { name: 'Purpose', text: '' },
                    {
                        name: 'Amphibious',
                        text: 'The deep scion can breathe air and water.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d4 + 5) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6 + 5) slashing damage.',
                    },
                    {
                        name: 'Psychic Screech',
                        recharge: 'Recharge on (Recharge 6–6',
                        text:
                            'The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a DC 14 Wisdom saving throw or take 5 (2d4 + 1) psychic damage. In water, the psychic screech also telepathically transmits the deep scion’s memories of the last 24 hours to creatures who fail their save.',
                    },
                ],
                environments: ['Coastal', 'Swamp', 'Underdark', 'Underwater'],
            },
            {
                name: 'Cpt. Juna Merrigold',
                size: 'Medium',
                type: 'Humanoid (deep scion, pronouns: she, her, hers, hybrid)',
                alignment: 'neutral good',
                AC: '12 (natural armor)',
                HP: '76 (9d8 + 36)',
                speed: '25 ft., swim 40 ft.',
                strength: 20,
                dexterity: 15,
                constitution: 18,
                intelligence: 10,
                wisdom: 12,
                charisma: 14,
                savingThrows: 'Wis +3, Cha +4',
                skills:
                    'Deception +6, Insight +3, Sleight of Hand +4, Stealth +4',
                senses: 'darkvision 120 ft.',
                languages: 'Aquan, Common, Thieves’ cant',
                challenge: 4,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Captain Juna Marigold is a hybrid human-piscine; HER body is sleek like a seal and his thick skin is greyish-white with red vertical stripes. Instead of hands she possesses fins terminating in cartilaginous claws.\ndemands loyalty of crew\nsaw potential, and destiny in FEZ, who became First Mate (cargo, crew’s welfare, safety, search and rescue, answers to Captain)\nself-conscious of (new fish body, lost a ship and survived tho captain)\nwant to be (thought of as) (good leader, knowledgeable about ships, due loyalty)\nmodest about ()\nbackground (from Old Barleyshire)',
                    },
                    { name: 'Purpose', text: '' },
                    {
                        name: 'Amphibious',
                        text: 'The deep scion can breathe air and water.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d4 + 5) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6 + 5) slashing damage.',
                    },
                    {
                        name: 'Psychic Screech',
                        recharge: 'Recharge on (Recharge 6–6',
                        text:
                            'The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a DC 14 Wisdom saving throw or take 5 (2d4 + 1) psychic damage. In water, the psychic screech also telepathically transmits the deep scion’s memories of the last 24 hours to creatures who fail their save.',
                    },
                ],
                environments: ['Coastal', 'Swamp', 'Underdark', 'Underwater'],
            },
            {
                name: 'Dalariel',
                size: 'Medium',
                type: 'Celestial (pronouns: she, her, hers)',
                alignment: 'lawful good',
                AC: '18 (plate armor)',
                HP: '66 (12d8 + 12)',
                speed: '30 ft., fly 90 ft.',
                strength: 16,
                dexterity: 12,
                constitution: 13,
                intelligence: 11,
                wisdom: 17,
                charisma: 18,
                savingThrows: 'Wis +6, Cha +7',
                skills: 'Investigation +3, Perception +6',
                damageResistances: 'fire, radiant',
                conditionImmunities: 'charmed, exhaustion, frightened',
                senses: 'darkvision 120 ft., truesight 120 ft.',
                languages: 'all',
                challenge: 5,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Dalariel is an angel who, according to the rabbis of the Talmud, takes charge of the waters of the earth.\nFishermen invoke her so that they may take large fish. Dalariel has also traditionally been invoked as a cure for stupidity.\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Purpose',
                        text:
                            'Act as one of Ulimara’s lieutenants.\nInitiate any paladins who have not realized that they have been called.',
                    },
                    { name: 'Background', text: '' },
                    {
                        name: 'Flyby',
                        text:
                            'Dalariel doesn’t provoke an opportunity attack when it flies out of an enemy’s reach.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'Dalariel has advantage on saving throws against spells and other magical effects.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The angel makes two melee attacks. It also uses Battlefield Inspiration.',
                    },
                    {
                        name: 'Longsword',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands, plus 18 (4d8) radiant damage. If the target is within 5 feet of any of the angel’s allies, the target takes an extra 2 (1d4) radiant damage.',
                    },
                    {
                        name: 'Battlefield Inspiration',
                        text:
                            'The angel chooses up to three creatures it can see within 30 feet of it. Until the end of the angel’s next turn, each target can add a d4 to its attack rolls and saving throws.',
                    },
                ],
            },
            {
                name: 'Darby the Chest High',
                size: 'Huge',
                type: 'Beast (Monstrous Centipede)',
                alignment: 'unaligned',
                AC: '16 (natural armor)',
                HP: '84 (8d12 + 40)',
                speed: '40 ft., climb 40 ft.',
                strength: 21,
                dexterity: 16,
                constitution: 20,
                intelligence: 1,
                wisdom: 8,
                charisma: 3,
                senses: 'blindsight 30 ft.',
                languages: '',
                challenge: 4,
                traits: [
                    {
                        name: 'Keen Smell',
                        text:
                            'The centipede has advantage on Wisdom (Perception) checks that rely on smell.',
                    },
                ],
                actions: [
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 12 (2d6 + 5) piercing damage, and the target must succeed on a DC 15 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.',
                    },
                ],
            },
            {
                name: 'Domonkos',
                regionalEffects: [
                    'There’s a noticeable increase in the populations of bats, rats, and wolves in the region.',
                    'Plants within 500 feet of the lair wither, and their stems and branches become twisted and thorny.',
                    'Shadows cast within 500 feet of the lair seem abnormally gaunt and sometimes move as though alive.',
                    'A creeping fog clings to the ground within 500 feet of the vampire’s lair. The fog occasionally takes eerie forms, such as grasping claws and writhing serpents.',
                ],
                regionalEffectsFade:
                    'If the vampire is destroyed, these effects end after 2d6 days.',
            },
            {
                name: 'Doodril Manacart',
                size: 'Medium',
                type: 'Humanoid (any race)',
                alignment: 'any alignment',
                AC: '10',
                HP: '4 (1d8)',
                speed: '30 ft.',
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
                senses: '',
                languages: 'any one language (usually Common)',
                challenge: 0,
                actions: [
                    {
                        name: 'Club',
                        text:
                            'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.',
                    },
                ],
                environments: [
                    'Arctic',
                    'Coastal',
                    'Desert',
                    'Forest',
                    'Grassland',
                    'Hill',
                    'Urban',
                ],
            },
            {
                name: 'Dort Threed',
                size: 'Medium',
                type: 'Humanoid (any race)',
                alignment: 'any alignment',
                AC: '10',
                HP: '4 (1d8)',
                speed: '30 ft.',
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
                senses: '',
                languages: 'any one language (usually Common)',
                challenge: 0,
                actions: [
                    {
                        name: 'Club',
                        text:
                            'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.',
                    },
                ],
                environments: [
                    'Arctic',
                    'Coastal',
                    'Desert',
                    'Forest',
                    'Grassland',
                    'Hill',
                    'Urban',
                ],
            },
            {
                name: 'Ecks',
                size: 'Tiny',
                type: 'Construct',
                alignment: 'neutral',
                AC: '15 (natural armor)',
                HP: '40 (16d4)',
                speed: '20 ft., fly 40 ft.',
                strength: 6,
                dexterity: 15,
                constitution: 13,
                intelligence: 10,
                wisdom: 10,
                charisma: 16,
                skills: 'Acrobatics +4, Athletics +0, Stealth +6',
                damageImmunities: 'poison',
                conditionImmunities: 'charmed, poisoned',
                senses: 'darkvision 60 ft.',
                languages:
                    'understands the languages of its creator but can’t speak',
                challenge: 0.25,
                traits: [
                    {
                        name: 'Telepathic Bond',
                        text:
                            'While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.',
                    },
                ],
                actions: [
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.',
                    },
                ],
            },
            {
                name: 'Eluin',
                size: 'Large',
                type: 'Humanoid (merrow shaman)',
                alignment: 'chaotic',
                AC: '13',
                HP: '102 (12d10 + 36)',
                speed: '30 ft., swim 50 ft.',
                strength: 18,
                dexterity: 10,
                constitution: 16,
                intelligence: 8,
                wisdom: 16,
                charisma: 9,
                skills:
                    'Perception +4, Religion +4, Athletics +7, Survival +6, Nature +2, Stealth +3, Animal Handling +6',
                senses: 'darkvision 60 ft.',
                languages: 'Aquan, Common',
                challenge: 5,
                traits: [
                    {
                        name: 'Hold Breath',
                        text:
                            'The selshamurinn can hold its breath for 2 hours.',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'The selshamurinn is an 8th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following druid spells prepared:\nCantrips (at will): druidcraft, poison spray, shape water, thunderclap\n1st level (4 slots): bane, entangle, thunderwave\n2nd level (3 slots): blindness/deafness, hold person, moonbeam\n3rd level (3 slots): call lightning, tidal wave, wall of water\n4th level (2 slots): control water, watery sphere',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The selshamurinn makes two attacks: one with its bite and one with its tail.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.',
                    },
                    {
                        name: 'Tail',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Ephphatha (The bear of holding)',
                size: 'Large',
                type: 'Celestial',
                alignment: 'neutral evil',
                AC: '17 (natural armor)',
                HP: '136 (16d10 + 48)',
                speed: '50 ft.',
                strength: 18,
                dexterity: 10,
                constitution: 17,
                intelligence: 8,
                wisdom: 12,
                charisma: 18,
                skills: 'Perception +9, Athletics +12',
                damageResistances:
                    'cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks',
                damageImmunities: 'force, poison',
                conditionImmunities: 'poisoned',
                senses: 'darkvision 60 ft., truesight 120 ft.',
                languages: 'Abyssal, Infernal, telepathy 60 ft.',
                challenge: 9,
                traits: [
                    {
                        name: 'Dimensional Lock',
                        text:
                            'Other creatures can’t teleport to or from a space within 60 feet of Ephphatha. Any attempt to do so is wasted.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'Ephphatha has advantage on saving throws against spells and other magical effects.',
                    },
                    {
                        name: 'Magic Weapons',
                        text: 'Ephphatha’s weapon attacks are magical.',
                    },
                    {
                        name: 'Uncanny Senses',
                        text:
                            'Ephphatha can’t be surprised while it isn’t incapacitated.',
                    },
                    {
                        name: 'Radiation Cloud',
                        text:
                            'Ephphatha is surrounded by a 10-foot-radius sphere of radiation. When a creature enters the radiation’s area for the first time on a turn or starts its turn there, that creature must make a DC 13 Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. On a failed save, it is also poisoned until the end of Ephphatha’s next turn.',
                    },
                    {
                        name: 'Taste buds',
                        text:
                            'Ephphatha’s taste buds are mostly in her mouth (though some are on her tongue).',
                    },
                    {
                        name: 'Lightcloud',
                        text:
                            'Ephphatha radiates nonmagical sunlight in a 60-foot radius.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'Ephphatha makes two attacks: one with its tongue or its bite and one with its claws. (Only her claw attack may be used as an opportunity attack.)',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 25 (6d6 + 4) piercing damage.',
                    },
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) slashing damage.',
                    },
                    {
                        name: 'Tongue',
                        text:
                            'Ranged Weapon Attack: +7 to hit, range 30 ft., one target. Hit: 17 (2d12 + 4) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 15), pulled up to 30 feet toward the canoloth, and is restrained until the grapple ends. The canoloth can grapple one target at a time with its tongue.',
                    },
                ],
                reactions: [
                    {
                        name: 'Shard Shed',
                        text:
                            'If Ephphatha sustains bludgeoning, slashing, or piercing damage from a nonmagical attack, she may use her reaction to shed a marlock (based on ’the wretched’). A marlock shed in this way begins with hit points equal to the damage sustained. Its initiative is the same as Ephphatha’s. Ephphatha can have only one marlock in existence at a time. An attempt to create a second marlock destroys the other marlock.',
                    },
                    {
                        name: 'Shard Absorb',
                        text:
                            'Ephphatha can use a reaction to absorb a morlock within 5 feet of her. She regains hit points equal to one half of the morlock’s hit points, rounded down, to a minimum of 1.',
                    },
                ],
                environments: ['Coastal', 'Underdark', 'Urban'],
            },
            {
                name: 'Ethel Three School',
                size: 'Large',
                type: 'Monstrosity',
                alignment: 'chaotic neutral',
                AC: '15 (natural armor)',
                HP: '85 (10d10 + 30)',
                speed: '30 ft.',
                strength: 15,
                dexterity: 5,
                constitution: 16,
                intelligence: 3,
                wisdom: 6,
                charisma: 8,
                savingThrows: 'Str +4, Con +5',
                skills: 'Perception +0',
                senses: 'darkvision 60 ft.',
                languages: '',
                challenge: 3,
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The gray render makes three attacks: one with its bite and two with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage. If the target is Medium or smaller, the target must succeed on a DC 12 Strength saving throw or be knocked prone.',
                    },
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 6 (1d8 + 2) slashing damage. If the target is prone an additional 4 (1d4 + 2) bludgeoning damage is dealt to the target.',
                    },
                ],
                reactions: [
                    {
                        name: 'Bloody Rampage',
                        text:
                            'When the gray render takes damage, it makes one attack with its claws against a random creature within its reach, other than its master.',
                    },
                ],
                environments: ['Forest', 'Hill'],
            },
            {
                name: 'Fezziwig Hornswoggle',
                size: 'Medium',
                type: 'Humanoid (halfling)',
                alignment: 'lawful good',
                AC: '16 (chain mail)',
                HP: '30 (4d8 + 12)',
                speed: '30 ft.',
                strength: 16,
                dexterity: 11,
                constitution: 16,
                intelligence: 11,
                wisdom: 10,
                charisma: 13,
                skills: 'Athletics +5, Intimidation +3',
                senses: '',
                languages: 'any one language (usually Common)',
                challenge: 3,
                traits: [
                    {
                        name: 'Sea Legs',
                        text:
                            'Fez has advantage on ability checks and saving throws to resist being knocked prone.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The first mate makes two attacks with its longsword.',
                    },
                    {
                        name: 'Longsword',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands. If the target is a creature, the first mate can choose to deal no damage with the attack to disarm the target. The target must succeed on a DC 14 Strength saving throw or drop one item it is holding on the ground.',
                    },
                ],
            },
            {
                name: 'Foldorf',
                size: 'Small',
                type: 'Humanoid (gnome)',
                alignment: 'neutral good',
                AC: '15 (chain shirt)',
                HP: '16 (3d6 + 6)',
                speed: '20 ft.',
                strength: 15,
                dexterity: 14,
                constitution: 14,
                intelligence: 12,
                wisdom: 10,
                charisma: 9,
                skills: 'Investigation +3, Perception +2, Stealth +4',
                senses: 'darkvision 120 ft.',
                languages: 'Gnomish, Terran, Undercommon',
                challenge: 1,
                traits: [
                    {
                        name: 'Stone Camouflage',
                        text:
                            'The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
                    },
                    {
                        name: 'Gnome Cunning',
                        text:
                            'The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The gnome’s innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: nondetection (self only)\n1/day each: blindness/deafness, blur, disguise self',
                    },
                ],
                actions: [
                    {
                        name: 'War Pick',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage.',
                    },
                    {
                        name: 'Poisoned Dart',
                        text:
                            'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success',
                    },
                ],
                environments: ['Underdark'],
            },
            {
                name: 'Forl',
                size: 'Small',
                type: 'Beast',
                alignment: 'unaligned',
                AC: '10 (natural armor)',
                HP: '7 (2d6)',
                speed: '50 ft.',
                strength: 2,
                dexterity: 12,
                constitution: 10,
                intelligence: 2,
                wisdom: 14,
                charisma: 10,
                skills: 'Perception +4, Stealth +3',
                senses: 'darkvision 30 ft.',
                languages: '',
                challenge: 0.125,
                traits: [
                    {
                        name: 'Keen Senses',
                        text:
                            'The forl has advantage on Wisdom (Perception) checks that rely on hearing or sight.',
                    },
                ],
                actions: [
                    {
                        name: 'Horn',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.',
                    },
                ],
            },
            {
                name: 'Galax Belle-mere',
                size: 'Medium',
                type: 'Humanoid (lizardfolk, belle-mere)',
                alignment: 'lawful good',
                AC: '16 (chain mail, shield)',
                HP: '26 (2d10 + 16)',
                speed: '30 ft., swim 30 ft.',
                strength: 16,
                dexterity: 10,
                constitution: 14,
                intelligence: 10,
                wisdom: 10,
                charisma: 16,
                skills:
                    'Athletics +7, Perception +2, Survival +2, Animal Handling +4, Persuasion +5, Religion +2',
                senses: '',
                languages: 'Common, Draconic, Salamander',
                challenge: 1,
                traits: [
                    {
                        name: 'Hold Breath',
                        text: 'Galax can hold her  breath for 15 minutes.',
                    },
                    {
                        name: 'Charge',
                        text:
                            'If Galax is mounted and moves at least 30 feet in a straight line toward a target and then hits it with a melee attack on the same turn, the target takes an extra 10 (3d6) damage.',
                    },
                    {
                        name: 'Mounted Combatant',
                        text:
                            'Galax is a dangerous foe to face while mounted. While she is mounted and isn’t incapacitated, she gains the following benefits:\n• She gains advantage on melee attack rolls against any unmounted creature that is smaller than her mount.\n• She can force an attack targeted at her mount to target her instead.\n• If her mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'Galax is a 3rd-level spellcaster.  Her spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). She regains her expended spell slots when she finishes a long rest. She knows the following paladin spells:\n1st level (3 slots): bless, compelled duel, cure wounds, detect evil and good',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'Galax makes two melee attacks.',
                    },
                    {
                        name: 'Morningstar',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
                    },
                    {
                        name: 'Lance',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 11 (1d12 + 5) piercing damage.',
                    },
                ],
            },
            {
                name: 'Gardweard Sister(s)',
                size: 'Medium',
                type: 'Humanoid (dwarf)',
                alignment: 'any alignment',
                AC: '14 (chain mail)',
                HP: '47 (5d8 + 25)',
                speed: '25 ft.',
                strength: 13,
                dexterity: 17,
                constitution: 21,
                intelligence: 12,
                wisdom: 14,
                charisma: 11,
                skills: 'Perception +4, Stealth +5, Survival +4',
                damageResistances: 'poison',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Dwarvish',
                challenge: 4,
                traits: [
                    {
                        name: '_',
                        text:
                            '\n\nslime dot org\nslimort\nSleek metal helmets and massive warhammers. About 5 1/2 feet tall and 200 pounds. Hair is short, almost brosse under the helmet, and a deep red, but they have mullets that fade to a blonde umbre. Tight, collarbone-length beards of the same coloration. Braiding style differs between them.\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Dwarven Resilience',
                        text:
                            'The dwarf has advantage on saving throws against poison.',
                    },
                    {
                        name: 'Happy to Teach',
                        text:
                            'The Earthlord Sisters can teach someone with weapon proficiency how to recall a thrown weapon by using a reaction. What this costs (gold, time, feat/skill replacement) is up to the DM’s discretion.',
                    },
                    {
                        name: 'Goldkiller',
                        text:
                            'Martial Bludgeoning Weapons\n1d8 bludgeoning - sundering (1), versatile (1d10)\nSundering (1). The weapon has qualities that crush or pierce armor, making it more effective against targets that employ such defenses. When you attack a target wearing armor components with the Hard property, or natural armor and its armor AC is 15 or more, you gain a bonus to the attack roll equal to the value in parenthesis.\nVersatile. This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The dwarf’s innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no material components:\n1/day each: hunter’s mark, jump, pass without trace, speak with animals, speak with plants',
                    },
                ],
                actions: [
                    {
                        name: 'Warhammer',
                        text:
                            'Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 10 (2d6 + 3) slashing damage.',
                    },
                ],
                reactions: [
                    { name: 'Hammerang', text: 'Hammer comes back if thrown.' },
                ],
            },
            {
                name: 'Garoo Cheakhead',
                size: 'Medium',
                type:
                    'Humanoid (goblinoid, hobgoblin, pronouns: she, her, hers)',
                alignment: 'lawful evil',
                AC: '17 (half plate armor)',
                HP: '39 (6d8 + 12)',
                speed: '30 ft.',
                strength: 15,
                dexterity: 14,
                constitution: 14,
                intelligence: 12,
                wisdom: 10,
                charisma: 13,
                senses: 'darkvision 60 ft.',
                languages: 'Common, Goblin',
                challenge: 3,
                traits: [
                    {
                        name: 'Anamnesis',
                        text:
                            'tall hobgoblin\n                    might have an apprentice to help (or pretend sister is apprentice)\n                    could also be an exterminator\n                    but part of this blackmail / crime ring\n                    deception, sleight of hand\n                    sneak attack\n                    thieves cant\n                    cunning action\n                    will have to give regular light armor\n                    shortsword\n                    shortbow\n                    burglar’s pack\n                    leather armor, 2 daggers, thieves tools\n                    \nmedical history and reflections\nA very subtle and discreet blackmailer who doesn’t resort to killing\nHer murder record (far exceeds successful blackmailer\n{@creature Meech|zorq',
                    },
                    {
                        name: 'Martial Advantage',
                        text:
                            'Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn’t incapacitated.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The hobgoblin makes two greatsword attacks.',
                    },
                    {
                        name: 'Greatsword',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.',
                    },
                    {
                        name: 'Javelin',
                        text:
                            'Melee  or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
                    },
                    {
                        name: 'Leadership',
                        recharge: 'Recharges after a Short or Long Rest',
                        text:
                            'For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated.',
                    },
                ],
                environments: [
                    'Desert',
                    'Forest',
                    'Grassland',
                    'Hill',
                    'Underdark',
                ],
            },
            {
                name: 'Georginia',
                size: 'Medium',
                type: 'Fiend (yugoloth, canoloth)',
                alignment: 'lawful neutral',
                AC: '16 (natural armor)',
                HP: '120 (16d8 + 48)',
                speed: '50 ft.',
                strength: 18,
                dexterity: 10,
                constitution: 17,
                intelligence: 5,
                wisdom: 17,
                charisma: 12,
                skills: 'Investigation +3, Perception +9',
                damageResistances:
                    'cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks',
                damageImmunities: 'acid, poison',
                conditionImmunities: 'poisoned',
                senses: 'darkvision 60 ft., truesight 120 ft.',
                languages: 'Abyssal, Infernal, telepathy 60 ft.',
                challenge: 8,
                traits: [
                    {
                        name: '_',
                        text:
                            '\n\nLunchasaurus\nself-conscious of: \nwants to be (thought of as): \nmodest about:\nDimensional Lock:  (something made from a canoloth that acts as ) Other creatures can’t teleport to or from a space within 60 feet of Georginia. Any attempt to do so is wasted.',
                    },
                    {
                        name: 'Dimensional Lock',
                        text:
                            'Other creatures can’t teleport to or from a space within 60 feet of Georginia. Any attempt to do so is wasted.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'Georginia has advantage on saving throws against spells and other magical effects.',
                    },
                    {
                        name: 'Magic Weapons',
                        text: 'Georginia’s weapon attacks are magical.',
                    },
                    {
                        name: 'Uncanny Senses',
                        text:
                            'Georginia can’t be surprised while it isn’t incapacitated.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'Georginia makes two attacks: one with its tongue or its bite and one with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 25 (6d6 + 4) piercing damage.',
                    },
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) slashing damage.',
                    },
                    {
                        name: 'Tongue',
                        text:
                            'Ranged Weapon Attack: +7 to hit, range 30 ft., one target. Hit: 17 (2d12 + 4) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 15), pulled up to 30 feet toward Georginia, and is restrained until the grapple ends. Georginia can grapple one target at a time with its tongue.',
                    },
                ],
                environments: ['Coastal', 'Underdark', 'Urban'],
            },
            {
                name: 'Goglocks',
                size: 'Large',
                type: 'Fey (Yeth hound)',
                alignment: 'neutral evil',
                AC: '13 (natural armor)',
                HP: '45 (6d10 + 12)',
                speed: '40 ft., fly 40 ft. (hover)',
                strength: 16,
                dexterity: 15,
                constitution: 14,
                intelligence: 5,
                wisdom: 12,
                charisma: 7,
                savingThrows: 'Str +5, Dex +4',
                skills: 'Athletics +7, Perception +5, Stealth +4',
                damageResistances:
                    'bludgeoning, piercing, slashing from nonmagical attacks',
                conditionImmunities: 'charmed, exhaustion, frightened',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Elvish, and Sylvan',
                challenge: 3,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Munta (one of Baphomet’s agents) tried to grant to Sigmurh a boon but ended up bonding Goglocks as master to the Sigmurh.',
                    },
                    {
                        name: 'Keen Hearing and Smell',
                        text:
                            'Goglocks has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
                    },
                    {
                        name: 'Sunlight Banishment',
                        text:
                            'If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can’t affect or be affected by anything on the other plane. Once it is adjacent to its master or a pack mate that is on the Material Plane, a yeth hound in the Border Ethereal can return to the Material Plane as an action.',
                    },
                    {
                        name: 'Telepathic Bond',
                        text:
                            'While the yeth hound is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically with each other.',
                    },
                    {
                        name: 'Spellcasting',
                        text: 'header\n1/day each: barkskin, tree stride',
                    },
                ],
                actions: [
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage, plus 13 (3d6 + 3) psychic damage if the target is frightened.',
                    },
                    {
                        name: 'Barkskin',
                        text: 'Goglocks can cast barkskin on itself ',
                    },
                    {
                        name: 'Baleful Baying',
                        text:
                            'The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a DC 12 Wisdom saving throw or be frightened until the end of the hound’s next turn or until the hound is incapacitated. A frightened target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible, must finish the move before taking an action, and must take the most direct route, even if hazards lie that way. A target that successfully saves is immune to the baying of all yeth hounds for the next 24 hours.',
                    },
                ],
                environments: ['Forest', 'Grassland', 'Hill'],
            },
            {
                name: 'Graal',
                size: 'Large',
                type: 'Monstrosity (Girallon, she, her)',
                alignment: 'unaligned',
                AC: '13',
                HP: '59 (7d10 + 21)',
                speed: '40 ft., climb 40 ft.',
                strength: 18,
                dexterity: 16,
                constitution: 16,
                intelligence: 5,
                wisdom: 12,
                charisma: 7,
                skills: 'Perception +3, Stealth +5',
                senses: 'darkvision 60 ft.',
                languages: '',
                challenge: 4,
                traits: [
                    {
                        name: 'Aggressive',
                        text:
                            'As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see.',
                    },
                    {
                        name: 'Regeneration',
                        text:
                            'she can grow arm back if (put some evilish thing here).',
                    },
                    {
                        name: 'Apperarance & Mannerisms',
                        text:
                            'Completely silver-white fur. Two smaller arms under pectorals. Created to serve as guardian for a previous (dwarf?) empire. \ndoesn’t like swimming\n9 feet tall.\nHas a slight lisp speaking Common because of gigantic canines. Took a long time for Graal to learn Common.',
                    },
                    {
                        name: 'Variant: Lusty Limbs',
                        text:
                            'Whenever Graal takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it:\n1–10: Nothing else happens.\n11–12: One leg is severed from Graal if it has any legs left.\n13–20: One arm is severed from Graal if it has any arms left.\nIf Graal finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on Graal’s initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and Graal’s Regeneration trait.\nA severed leg is unable to attack and has a speed of 5 feet.\nA severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless Graal can see the arm and its target. Each time Graal loses an arm, it loses a claw attack.\nIf its head is severed, Graal loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet and Graal’s Keen Smell trait. It can make a bite attack but only against a target in its space.\nGraal’s speed is halved if it’s missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can’t benefit from bonuses to speed.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The girallon makes five attacks: one with its bite and four with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 7 (1d6 + 4) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +6 to hit. reach 10 ft., one target. Hit: 7 (1d6 + 4) slashing damage.',
                    },
                ],
                environments: ['Forest'],
            },
            {
                name: 'Gybter',
                size: 'Large',
                type: 'Fiend (demon, barlgura)',
                alignment: 'chaotic evil',
                AC: '15 (natural armor)',
                HP: '68 (8d10 + 24)',
                speed: '40 ft., climb 40 ft.',
                strength: 18,
                dexterity: 15,
                constitution: 16,
                intelligence: 7,
                wisdom: 14,
                charisma: 9,
                savingThrows: 'Dex +5, Con +6',
                skills: 'Perception +5, Stealth +5',
                damageResistances: 'cold, fire, lightning',
                damageImmunities: 'poison',
                conditionImmunities: 'poisoned',
                senses: 'blindsight 30 ft., darkvision 120 ft.',
                languages: 'Abyssal, telepathy 120 ft.',
                challenge: 5,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Mortal enemy of Graal? Or her sister lost at separation?!\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Reckless',
                        text:
                            'At the start of its turn, Gybter can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.',
                    },
                    {
                        name: 'Running Leap',
                        text:
                            'Gybter’s long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'Gybter’s spellcasting ability is Wisdom (spell save DC 13). Gybter can innately cast the following spells, requiring no material components:\n2/day each: disguise self, invisibility (self only)\n1/day each: entangle, phantasmal force',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'Gybter makes three attacks: one with its bite and two with its fists.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.',
                    },
                    {
                        name: 'Fist',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Joan',
                size: 'Medium',
                type: 'Humanoid (dragonborn, pronouns: she, her, hers)',
                alignment: 'chaotic neutral',
                AC: '15 (chain shirt)',
                HP: '33 (4d12 + 0)',
                speed: '30 ft. ',
                strength: 20,
                dexterity: 14,
                constitution: 10,
                intelligence: 9,
                wisdom: 10,
                charisma: 11,
                savingThrows: 'Str +7, Con +2',
                skills:
                    'Gearhead +2, Animal Handling +2, Athletics +7, Intimidation +2, Stealth +4',
                damageResistances: 'lightning',
                senses: '',
                languages: 'Common, Draconic',
                challenge: 0,
                traits: [
                    {
                        name: '_dossier',
                        text:
                            '{@item multicolored stone disc|zorq}\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.\nWhen you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.\nYou gain the ability to cast the {@spell beast sense} and {@spell speak with animals} spells, but only as rituals,\nYou are now The Mask of Three School, along with {@creature Ethel Three School|zorq} and {@creature Stump Three School|zorq}.\nOn your turn, you can enter a rage as a bonus action.\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\n\nYour rage lasts for 1 minute. It ends early if you are knocked {@condition unconscious} or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.',
                    },
                ],
                actions: [
                    {
                        name: 'Lightning Breath',
                        recharge: '2/rest',
                        text:
                            'Each creature in the area of the exhalation (5 by 30 ft. line) must make a DC 10 Dexterity saving throw. A creature takes Hit: 11 (3d6) lightning damage on a failed save (Hit: 13 (3d6 + 2) if you are raging), and half as much damage on a successful save',
                    },
                    {
                        name: 'Trident',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d8 + 5) piercing damage (Hit: 12 (1d8 + 7 )if raging).',
                    },
                ],
            },
            {
                name: 'Jojo',
                size: 'Large',
                type: 'Monstrosity (Dogmole Juggernaut, adult wrinklemole)',
                alignment: 'neutral',
                AC: '15 (natural armor)',
                HP: '126 (12d10 + 60)',
                speed: '30 ft., burrow 10 ft., swim 10 ft.',
                strength: 21,
                dexterity: 14,
                constitution: 20,
                intelligence: 8,
                wisdom: 10,
                charisma: 18,
                savingThrows: 'Con +11, Str +8',
                skills:
                    'Athletics +8, Intimidation +10, Stealth +5, Survival +6, Acrobatics +8',
                senses: 'blindsight 30 ft.',
                languages: '',
                challenge: 5,
                traits: [
                    {
                        name: 'Burrow',
                        text:
                            'Dogmole juggernauts cannot burrow into solid rock, but they can move through softer material like soil or loose rubble, leaving a usable tunnel 10 ft. in diameter.',
                    },
                    {
                        name: 'Ferocity',
                        recharge: '1/Day',
                        text:
                            'When the dogmole juggernaut is reduced to 0 hit points, it doesn’t die until the end of its next turn.',
                    },
                    {
                        name: 'Powerful Build',
                        text:
                            'A dogmole juggernaut is treated as one size larger if doing so is advantageous to it (such as during grapple checks, pushing attempts, and tripping attempts, but not for the purposes of squeezing or AC). It gains advantage against magical pushing attempts such as gust of wind or repelling blast.',
                    },
                    {
                        name: 'Wormkiller Rage',
                        text:
                            'Wild dogmole juggernaut packs are famed for their battles against the monsters of the dark caverns of the world. If a dogmole juggernaut draws blood against vermin, purple worms, or other underground invertebrate, it gains a +4 bonus to Strength and Constitution but suffers a −2 penalty to AC. The wormkiller rage lasts for a number of rounds equal to 1 + its Constitution modifier (minimum 1 round). It cannot end the rage voluntarily while the creatures that sent it into a rage still live.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The dogmole juggernaut makes one claw attack and one bite attack.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (1d12 + 5) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (4d6 + 5) slashing damage.',
                    },
                ],
            },
            {
                name: 'Jumps',
                size: 'Medium',
                type: 'Beast (dogmole, wrinklemole, pronouns: he, him, his)',
                alignment: 'neutral',
                AC: '14 (natural armor)',
                HP: '71 (11d8 + 22)',
                speed: '30 ft., burrow 10 ft., swim 10 ft.',
                strength: 14,
                dexterity: 20,
                constitution: 12,
                intelligence: 6,
                wisdom: 12,
                charisma: 18,
                savingThrows: 'Dex +7, Cha +6',
                skills: 'Acrobatics +9, Persuasion +8, Stealth +9, Survival +3',
                senses: 'blindsight 30 ft.',
                languages: '',
                challenge: 1,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Little pug face, little mole body, little rabbit teeth.\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    { name: 'Purpose', text: '' },
                    { name: 'Background', text: '' },
                    {
                        name: 'Burrow',
                        text:
                            'Jumps cannot burrow into solid rock, but he can move through softer material like soil or loose rubble, leaving a usable tunnel 5 feet in diameter.',
                    },
                    {
                        name: 'Wormkiller Rage',
                        text:
                            'Wrinklemole packs are famed for their battles against monsters in the dark caverns of the world. If Jumps draws blood against vermin, a purple worm, or other underground invertebrates, he gains a +4 boost to its Strength and Constitution, but suffers a −2 penalty to its AC. The wormkiller rage lasts for 3 rounds. It cannot end the rage voluntarily while the creatures that sent it into a rage still lives.',
                    },
                    {
                        name: 'Binkies',
                        text:
                            'Jumps was named for his ability to jump. Jumps’s long jump is up to 40 feet and his high jump is up to 20 feet when he has a running start.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'Jumps makes one claw attack and one bite attack.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) slashing damage.',
                    },
                ],
            },
            {
                name: 'Juniper Three School',
                size: 'Medium',
                type: 'Humanoid (any race)',
                alignment: 'any alignment',
                AC: '11 (14 with mage armor)',
                HP: '49 (11d8)',
                speed: '30 ft.',
                strength: 9,
                dexterity: 13,
                constitution: 11,
                intelligence: 11,
                wisdom: 12,
                charisma: 18,
                savingThrows: 'Wis +3, Cha +6',
                skills: 'Arcana +2, Deception +6, Nature +2, Persuasion +6',
                conditionImmunities: 'charmed',
                senses: '',
                languages: 'any two languages (usually Sylvan)',
                challenge: 4,
                traits: [
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The warlock’s innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:\nAt will: disguise self, mage armor (self only), silent image, speak with animals\n1/day: conjure fey',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'The warlock is an 11th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:\nCantrips (at will): dancing lights, eldritch blast, friends, mage hand, minor illusion, prestidigitation, vicious mockery\n5th level (3 slots): blink, charm person, dimension door, dominate beast, faerie fire, fear, hold monster, misty step, phantasmal force, seeming, sleep',
                    },
                ],
                actions: [
                    {
                        name: 'Dagger',
                        text:
                            'Melee  or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.',
                    },
                ],
                reactions: [
                    {
                        name: 'Misty Escape',
                        recharge: 'Recharges after a Short or Long Rest',
                        text:
                            'In response to taking damage, the warlock turns invisible and teleports up to 60 feet to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks, makes a damage roll, or casts a spell.',
                    },
                ],
                environments: [
                    'Arctic',
                    'Forest',
                    'Mountain',
                    'Swamp',
                    'Urban',
                ],
            },
            {
                name: 'Juvenile Snapping Turtle',
                size: 'Medium',
                type: 'Beast',
                alignment: 'unaligned',
                AC: '14 (natural armor), 9 while prone',
                HP: '19 (3d10 + 3)',
                speed: '30 ft., swim 40 ft.',
                strength: 17,
                dexterity: 10,
                constitution: 12,
                intelligence: 6,
                wisdom: 12,
                charisma: 5,
                senses: 'darkvision 60 ft.',
                languages: '',
                challenge: 0.5,
                traits: [
                    {
                        name: 'Amphibious',
                        text: 'The turtle can breathe air and water.',
                    },
                    {
                        name: 'Stable',
                        text:
                            'Whenever an effect knocks the turtle prone, it can make a DC 10 Constitution saving throw to avoid being knocked prone. A prone turtle is upside down. To stand up, it must succeed on a DC 10 Dexterity check on its turn and then use all its movement for that turn.',
                    },
                ],
                actions: [
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) slashing damage.',
                    },
                ],
            },
            {
                name: 'Karnish (Elemental Locus Form)',
                size: 'Gargantuan',
                type: 'Elemental (elemental locus)',
                alignment: 'neutral',
                AC: '16 (natural armor)',
                HP: '290 (20d20 + 80)',
                speed: '5 ft.',
                strength: 28,
                dexterity: 1,
                constitution: 18,
                intelligence: 10,
                wisdom: 11,
                charisma: 11,
                savingThrows: 'Int +6, Wis +6, Cha +6',
                skills: 'Nature +6, Perception +6',
                damageResistances: 'bludgeoning, piercing, slashing',
                damageImmunities:
                    'acid, cold, fire, lightning, poison, thunder; bludgeoning, piercing, and slashing from nonmagical weapons',
                conditionImmunities:
                    'charmed, exhaustion, frightened, paralyzed, petrified, poisoned, unconscious',
                senses: 'darkvision 120 ft., tremorsense 120 ft.',
                languages: 'Primordial',
                challenge: 17,
                traits: [
                    {
                        name: 'Magic Resistance',
                        text:
                            'The elemental locus has advantage on saving throws against spells and other magical effects.',
                    },
                    {
                        name: 'Immortal',
                        text:
                            'The elemental locus does not age and does not die when it drops to 0 hit points. If the elemental locus drops to 0 hit points, it falls into a quiescent state for 25 weeks before returning to activity with full hit points. Its spawned elementals continue fighting whatever enemies attacked the elemental locus; if no enemies are present, they defend the locus’s area.',
                    },
                    {
                        name: 'Massive',
                        text:
                            'The elemental locus is larger than most Gargantuan creatures, occupying a space of 60 by 60 feet. Its movement is not affected by difficult terrain or by Huge or smaller creatures. Other creatures can enter and move through the elemental locus’s space, but they must make a successful DC 20 Strength (Athletics) check after each 10 feet of movement. Failure indicates they fall prone and can move no farther that turn.',
                    },
                    {
                        name: 'Spawn Elementals',
                        text:
                            'As a bonus action, the elemental locus loses 82 hit points and spawns an air, earth, fire, or water elemental to serve it. Spawned elementals answer to their creator’s will and are not fully independent. The types of elementals the locus can spawn depend on the terrain it embodies; for example, an elemental locus of the desert can spawn earth, fire, and air elementals, but not water.',
                    },
                    {
                        name: 'Siege Monster',
                        text:
                            'The elemental locus deals double damage to objects and structures.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The elemental locus makes two slam attacks.',
                    },
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 36 (6d8 + 9) bludgeoning damage. If the target is a creature, it must succeed on a DC 23 Strength saving throw or be knocked prone.',
                    },
                ],
            },
            {
                name: 'Karnish (Spirit Form)',
                size: 'Large',
                type: 'Elemental (Spirit Troll)',
                alignment: 'chaotic evil',
                AC: '17 (natural armor)',
                HP: '303 (39d12 + 50)',
                speed: '30 ft.',
                strength: 1,
                dexterity: 17,
                constitution: 13,
                intelligence: 8,
                wisdom: 9,
                charisma: 16,
                skills: 'Perception +3',
                damageResistances: 'acid, cold, fire, lightning, thunder',
                damageImmunities:
                    'bludgeoning, piercing, slashing from nonmagical attacks',
                conditionImmunities:
                    'exhaustion, grappled, paralyzed, petrified, prone, restrained, unconscious',
                senses: 'darkvision 60 ft.',
                languages: 'Giant',
                challenge: 11,
                traits: [
                    {
                        name: '_dossier',
                        text:
                            'This is really just a rough placeholder for Karnish\nThe spirit of Castle Karn (and the original spirit of the grey tongue). perhaps she too has some association with the fountain.\n\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Incorporeal Movement',
                        text:
                            'The troll can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.',
                    },
                    {
                        name: 'Regeneration',
                        text:
                            'The troll regains 10 hit points at the start of each of its turns. If the troll takes psychic or force damage, this trait doesn’t function at the start of the troll’s next turn. The troll dies only if it starts its turn with 0 hit points and doesn’t regenerate.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The troll makes three attacks: one with its bite and two with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 19 (3d10 + 3) psychic damage, and the target must succeed on a DC 15 Wisdom saving throw or be stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
                    },
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 14 (2d10 + 3) psychic damage.',
                    },
                ],
                environments: ['Coastal', 'Forest', 'Swamp', 'Underdark'],
            },
            {
                name: 'Limalay',
                size: 'Large',
                type: 'Celestial (angel, elemental, pronouns: she, her, hers)',
                alignment: 'lawful good',
                AC: '18 (plate armor)',
                HP: '120 (12d10 + 54)',
                speed: '30 ft., fly 75 ft., swim 45 ft.',
                strength: 20,
                dexterity: 14,
                constitution: 16,
                intelligence: 14,
                wisdom: 16,
                charisma: 20,
                savingThrows: 'Dex +5, Wis +5, Cha +8, Skill [object Object]',
                damageResistances: 'acid, cold, lightning, radiant',
                senses: 'blindsight 30 ft., darkvision 120 ft.',
                languages: 'all',
                challenge: 7,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text: ' (LEE mah lay) ',
                    },
                    { name: 'Purpose', text: 'Lieutenant of Ulimara.' },
                    {
                        name: 'Amphibious',
                        text: 'Limalay can breathe air and water.',
                    },
                    {
                        name: 'Elemental Demise',
                        text:
                            'If Limalay dies, her body disintegrates into a burst of water and foam, leaving behind only equipment Limalay was wearing or carrying.',
                    },
                    {
                        name: 'Flyby',
                        text:
                            'Limalay doesn’t provoke an opportunity attack when she flies out of an enemy’s reach.',
                    },
                    {
                        name: 'Gauntlets of Weapon Recall',
                        text:
                            'As a bonus action Limalay can recall to her grasp her trident as long as it is no more than 80 feet away from her.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'Limalay’s innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:\nAt will: create or destroy water, detect evil and good, detect magic, fog cloud, purify food and drink\n3/day each: tongues, water breathing, water walk\n1/day each: conjure elemental (water elemental only), control water, gaseous form, invisibility, plane shift',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'Limalay makes two trident attacks.',
                    },
                    {
                        name: 'Trident',
                        text:
                            'Melee  or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 8 (1d6 + 5) piercing damage, or 9 (1d8 + 5) piercing damage if used with two hands to make a melee attack.',
                    },
                    {
                        name: 'Battlefield Inspiration',
                        text:
                            'Limalay chooses up to three creatures she can see within 30 feet of it. Until the end of Limalay’s next turn, each target can add a d4 to its attack rolls and saving throws.',
                    },
                ],
            },
            {
                name: 'Lole of the Moonlit Sun',
                size: 'Medium',
                type: 'Celestial (angel)',
                alignment: 'lawful good',
                AC: '18 (plate armor)',
                HP: '66 (12d8 + 12)',
                speed: '30 ft., fly 90 ft.',
                strength: 16,
                dexterity: 12,
                constitution: 13,
                intelligence: 11,
                wisdom: 17,
                charisma: 18,
                savingThrows: 'Wis +6, Cha +7',
                skills: 'Investigation +3, Perception +6',
                damageResistances: 'fire, radiant',
                conditionImmunities: 'charmed, exhaustion, frightened',
                senses: 'darkvision 120 ft., truesight 120 ft.',
                languages: 'all',
                challenge: 5,
                traits: [
                    {
                        name: 'Flyby',
                        text:
                            'The angel doesn’t provoke an opportunity attack when it flies out of an enemy’s reach.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'The angel has advantage on saving throws against spells and other magical effects.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The angel makes two melee attacks. It also uses Battlefield Inspiration.',
                    },
                    {
                        name: 'Longsword',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands, plus 18 (4d8) radiant damage. If the target is within 5 feet of any of the angel’s allies, the target takes an extra 2 (1d4) radiant damage.',
                    },
                    {
                        name: 'Battlefield Inspiration',
                        text:
                            'The angel chooses up to three creatures it can see within 30 feet of it. Until the end of the angel’s next turn, each target can add a d4 to its attack rolls and saving throws.',
                    },
                ],
            },
            {
                name: 'Lum Gorbelly',
                size: 'Medium',
                type: 'Humanoid (gnoll, gnoll Fang of Yeenoghu)',
                alignment: 'neutral',
                AC: '14 (hide armor)',
                HP: '65 (10d8 + 20)',
                speed: '30 ft.',
                strength: 17,
                dexterity: 15,
                constitution: 15,
                intelligence: 10,
                wisdom: 11,
                charisma: 13,
                savingThrows: 'Con +4, Wis +2, Cha +3',
                senses: 'darkvision 60 ft.',
                languages: 'Abyssal, Gnoll',
                challenge: 4,
                traits: [
                    {
                        name: '_',
                        text:
                            '\n\n\nHeavy coat with white skullcap. Scar across face splits left nostril and left ear missing. Compressed lips, wide-set green eyes. Soft gentle paws.\nself-conscious of: (balding, soft gentle paws, narrow lips, doglike features)\nwant to or important to be seen as (in touch with nature, a deep thinker and careful consider-er)\nmodest about:\nquotes ( -- no, i wear the skullcap for religious reasons! -- my lips aren’t thin, i’m just deep in thought -- )',
                    },
                    {
                        name: 'Rampage',
                        text:
                            'When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The gnoll makes three attacks: one with its bite and two with its claws.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 7 (2d6) poison damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.',
                    },
                ],
                environments: ['Desert', 'Forest', 'Grassland', 'Hill'],
            },
            {
                name: 'Lying Cat',
                size: 'Tiny',
                type: 'Beast (Tressym)',
                alignment: 'chaotic neutral',
                AC: '12',
                HP: '5 (2d4)',
                speed: '40 ft., climb 30 ft., fly 40 ft.',
                strength: 3,
                dexterity: 15,
                constitution: 10,
                intelligence: 11,
                wisdom: 12,
                charisma: 12,
                skills: 'Perception +5, Stealth +4',
                damageImmunities: 'poison',
                conditionImmunities: 'poisoned',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Rodent',
                challenge: 0,
                traits: [
                    {
                        name: 'Detect Invisibility',
                        text:
                            'Within 60 feet of Lying Cat, magical invisibility fails to conceal anything from Lying Cat’s sight',
                    },
                    {
                        name: 'Keen Smell',
                        text:
                            'Lying Cat has advantage on Wisdom (Perception) checks that rely on smell.',
                    },
                    {
                        name: 'Poison Sense',
                        text:
                            'Lying Cat can detect whether a substance is poisonous by taste, touch, or smell.',
                    },
                    {
                        name: 'Familiar',
                        text:
                            'With the DM’s permission, a person who casts the find familiar spell can choose to conjure Lying Cat in stead of a normal cat.',
                    },
                ],
                actions: [
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.',
                    },
                ],
            },
            {
                name: 'moghling',
                size: 'Small',
                type: 'Monstrosity',
                alignment: 'unaligned',
                AC: '11',
                HP: '22 (5d6 + 5)',
                speed: '10 ft., fly 30 ft.',
                strength: 16,
                dexterity: 12,
                constitution: 13,
                intelligence: 2,
                wisdom: 10,
                charisma: 5,
                skills: 'Stealth +3',
                senses: 'blindsight 60 ft.',
                languages: '',
                challenge: 0.5,
                traits: [
                    {
                        name: 'Echolocation',
                        text:
                            'The moghling can’t use its blindsight while deafened.',
                    },
                    {
                        name: 'False Appearance',
                        text:
                            'While the moghling remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.',
                    },
                ],
                actions: [
                    {
                        name: 'Crush',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the moghling attaches to the target. If the target is Medium or smaller and the moghling has advantage on the attack roll, it attaches by engulfing the target’s head, and the target is also blinded and unable to breathe while the moghling is attached in this way.\nWhile attached to the target, the moghling can attack no other creature except the target but has advantage on its attack rolls. The moghling’s speed also becomes 0, it can’t benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the moghling by making a successful DC 13 Strength check as an action. On its turn, the moghling can detach itself from the target by using 5 feet of movement.',
                    },
                    {
                        name: 'Darkness Aura',
                        recharge: '1/Day',
                        text:
                            'A 15-foot radius of magical darkness extends out from the moghling, moves with it, and spreads around corners. The darkness lasts as long as the moghling maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can’t penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.',
                    },
                ],
                environments: ['Underdark'],
            },
            {
                name: 'Naphula',
                size: 'Large',
                type:
                    'Fiend (devil, ooze, Intelligent Black Pudding, lemure, slithering tracker, pronouns: they, them, theirs)',
                alignment: 'lawful evil',
                AC: '14',
                HP: '85 (10d10 + 30)',
                speed: '30 ft., climb 30 ft., swim 30 ft.',
                strength: 16,
                dexterity: 19,
                constitution: 16,
                intelligence: 14,
                wisdom: 14,
                charisma: 11,
                skills: 'Stealth +8',
                damageVulnerabilities: 'cold, fire',
                damageResistances:
                    'bludgeoning, piercing from nonmagical weapons',
                damageImmunities: 'acid, cold, lightning, slashing',
                conditionImmunities:
                    'blinded, deafened, exhaustion, grappled, paralyzed, petrified, prone, restrained, unconscious',
                senses: 'darkvision 120 ft., blindsight 120 ft.',
                languages:
                    'understands Infernal, Elvish, and Undercommon but can’t speak',
                challenge: 5,
                traits: [
                    {
                        name: '_dossier',
                        text:
                            'NAF-yoo-luh\nTactics: Naphula presents more of a puzzle than a challenge; once Naphula grapples a creature, it generally has to be the target of Shove or contested grapple checks, as it will pass damage through to the creature it is grappling.\nmodest about:',
                    },
                    {
                        name: 'Devil’s Sight',
                        text:
                            'Magical darkness doesn’t impede the lemure’s darkvision.',
                    },
                    {
                        name: 'Hellish Rejuvenation',
                        text:
                            'Naphula comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.',
                    },
                    {
                        name: 'Amorphous',
                        text:
                            'Naphula can move through a space as narrow as 1 inch wide without squeezing.',
                    },
                    {
                        name: 'Corrosive Form',
                        text:
                            'A creature that touches Naphula or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage.',
                    },
                    {
                        name: 'Ambusher',
                        text:
                            'In the first round of a combat, Naphula has advantage on attack rolls against any creature it surprised.',
                    },
                    {
                        name: 'Damage Transfer',
                        text:
                            'While grappling a creature, Naphula takes only half the damage dealt to it, and the creature it is grappling takes the other half.',
                    },
                    {
                        name: 'False Appearance',
                        text:
                            'While Naphula remains motionless, it is indistinguishable from a puddle, unless an observer succeeds on a DC 18 Intelligence (Investigation) check.',
                    },
                    {
                        name: 'Keen Tracker',
                        text:
                            'Naphula has advantage on Wisdom checks to track prey.',
                    },
                    {
                        name: 'Liquid Form',
                        text:
                            'Naphula can enter an enemy’s space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing.',
                    },
                    {
                        name: 'Spider Climb',
                        text:
                            'Naphula can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'Haborim makes one pseudopod fist attack and one slam attack.',
                    },
                    {
                        name: 'Pseudopod Fist',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage.',
                    },
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) bludgeoning damage. A Large or smaller target that is hit must succeed on a DC 13 Dexterity saving throw or be grappled (escape DC 13). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. In addition, the grappled target takes 16 (3d10) necrotic damage at the start of each of its turns. Naphula can grapple only one target at a time, and cannot use its Slam attack if it is grapping a creature.',
                    },
                ],
            },
            {
                name: 'Nevlim',
                size: 'Gargantuan',
                type: 'Celestial (Dragon Turtle, ulimara harbinger, dragon)',
                alignment: 'neutral',
                AC: '20 (natural armor)',
                HP: '341 (22d20 + 110)',
                speed: '20 ft., swim 40 ft.',
                strength: 25,
                dexterity: 10,
                constitution: 20,
                intelligence: 10,
                wisdom: 12,
                charisma: 12,
                savingThrows: 'Dex +6, Con +11, Wis +7',
                damageResistances: 'fire',
                senses: 'darkvision 120 ft.',
                languages: 'Aquan, Draconic, telepathy',
                challenge: 17,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Gargantuan, tetrapod body, huge head with beak, beautiful rich pink coral growing out of its body, between flippers and feet, huge chunky tail, a “horseshoe head” growing off tail?, face like seal with beak, perfetly clear water. like having a blue whale in front of you.\nInside mouth: like globe of fire in space -- in its mouth; incredible conical teeth and huge tusks. little globe of fire comes out.\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    { name: 'Purpose', text: '' },
                    { name: 'Background', text: '' },
                    {
                        name: 'Amphibious',
                        text: 'Nevlim can breathe air and water.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage.',
                    },
                    {
                        name: 'Tail',
                        text:
                            'Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.',
                    },
                    {
                        name: 'Steam Breath',
                        recharge: 'Recharge 5–6',
                        text:
                            'The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn’t grant resistance against this damage.',
                    },
                ],
                environments: ['Coastal', 'Underwater'],
            },
            {
                name: 'Oklmuk',
                size: 'Small',
                type: 'Fiend (devil)',
                alignment: 'lawful evil',
                AC: '14 (unarmored defense)',
                HP: '54 (12d6 + 12)',
                speed: '30 ft., fly 5 ft. (hover)',
                strength: 12,
                dexterity: 18,
                constitution: 12,
                intelligence: 20,
                wisdom: 8,
                charisma: 18,
                savingThrows: 'Dex +6',
                skills: 'Arcana +9, Deception +8, History +9, Stealth +8',
                damageResistances:
                    'cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren’t silvered',
                damageImmunities: 'fire, poison',
                conditionImmunities: 'poisoned',
                senses: 'darkvision 120 ft.',
                languages:
                    'Celestial, Common, Draconic, Infernal; telepathy (120 ft.)',
                challenge: 2,
                traits: [
                    {
                        name: 'Devil’s Sight',
                        text:
                            'Magical darkness doesn’t impede the devil’s darkvision.',
                    },
                    {
                        name: 'Magic Resistance',
                        text:
                            'The devil has advantage on saving throws against spells and other magical effects.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The ink devil’s spellcasting ability is Charisma (spell save DC 14). The ink devil can cast the following spells, requiring no material components:\nAt will: detect magic, illusory script, invisibility, teleport (self plus 50 lb. of objects only)\n1/day each: glyph of warding, planar ally (1d4 + 1 lemures 40% or 1 ink devil 25%)',
                    },
                ],
                actions: [
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., single target. Hit: 11 (2d6 + 4) piercing damage.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., single target. Hit: 14 (3d6 + 4) slashing damage.',
                    },
                    {
                        name: 'Disrupt Concentration',
                        text:
                            'Their sharp, shrill tongues and sharper claws make ink devils more distracting than their own combat prowess might indicate. As a bonus action, an ink devil can force a single foe within 30 feet of the ink devil to make a DC 13 Wisdom saving throw or lose concentration until the beginning of the target’s next turn.',
                    },
                    {
                        name: 'Corrupt Scroll',
                        text:
                            'An ink devil can corrupt the magic within any scroll by touch. Any such corrupted scroll requires a DC 13 Intelligence saving throw to use successfully. If the check fails, the scroll’s spell affects the caster if it is an offensive spell, or it affects the nearest devil if it is a beneficial spell.',
                    },
                    {
                        name: 'Devil’s Mark',
                        text:
                            'Ink devils can flick ink from their fingertips at a single target within 15 feet of the devil. The target must succeed on a Dexterity saving throw (DC 13), or the affected creature gains a devil’s mark—a black, red, or purple tattoo in the shape of an archduke’s personal seal (most often Mammon or Totivillus but sometimes Arbeyach, Asmodeus, Beelzebub, Dispater, or others). Any devil’s magic performed against the marked creature has advantage due to the mark, including touch spells, innate spell-like or supernatural abilities, and magic drawn from a scroll or other item by a devil. The mark can be removed only by a remove curse spell or comparable magic. In addition, the mark detects as faintly evil and often shifts its position on the body. Paladins, witchfinders, and some clerics may consider such a mark proof that a creature has made a pact with a devil.',
                    },
                ],
            },
            {
                name: 'Oriax',
                size: 'Large',
                type: 'Monstrosity (genasii, banderhobb, she, her)',
                alignment: 'unaligned',
                AC: '15 (natural armor)',
                HP: '84 (8d10 + 40)',
                speed: '30 ft.',
                strength: 20,
                dexterity: 12,
                constitution: 20,
                intelligence: 11,
                wisdom: 14,
                charisma: 8,
                skills: 'Athletics +8, Stealth +7',
                conditionImmunities: 'charmed, frightened',
                senses: 'darkvision 120 ft.',
                languages:
                    'Common and the languages of its creator but can’t speak',
                challenge: 5,
                traits: [
                    {
                        name: 'Resonant Connection',
                        text:
                            'If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object if it is within 1 mile of the banderhobb.',
                    },
                    {
                        name: 'Shadow Stealth',
                        text:
                            'While in dim light or darkness, the banderhobb can take the Hide action as a bonus action.',
                    },
                    {
                        name: 'Amphibious',
                        text: 'Oriax can breathe air and water.',
                    },
                ],
                actions: [
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 22 (5d6 + 5) piercing damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the banderhobb can’t use its bite attack or tongue attack on another target.',
                    },
                    {
                        name: 'Tongue',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 10 (3d6) necrotic damage, and the target must make a DC 15 Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can use a bonus action to make a bite attack against the target.',
                    },
                    {
                        name: 'Swallow',
                        text:
                            'The banderhobb makes a bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the banderhobb and it takes 10 (3d6) necrotic damage at the start of each of the banderhobb’s turns. A creature reduced to 0 hit points in this way stops taking necrotic damage and becomes stable.\nThe banderhobb can have only one target swallowed at a time. While the banderhobb isn’t incapacitated, it can regurgitate the creature at any time (no action required) in a space within 5 feet of it. The creature exits prone. If the banderhobb dies, it likewise regurgitates a swallowed creature.',
                    },
                    {
                        name: 'Shadow Step',
                        text:
                            'The banderhobb magically teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see. Before or after teleporting, it can make a bite or tongue attack.',
                    },
                ],
                environments: ['Urban'],
            },
            {
                name: 'Oubriidhe (Shoggoth Form)',
                size: 'Huge',
                type: 'Aberration (Shoggoth, gibbering mouther)',
                alignment: 'chaotic neutral',
                AC: '18 (natural armor)',
                HP: '387 (25d12 + 225)',
                speed: '50 ft., climb 30 ft., swim 30 ft.',
                strength: 26,
                dexterity: 14,
                constitution: 28,
                intelligence: 12,
                wisdom: 16,
                charisma: 13,
                skills: 'Perception +9',
                damageResistances: 'fire, bludgeoning, piercing',
                damageImmunities: 'cold, thunder, slashing',
                conditionImmunities:
                    'blinded, deafened, prone, stunned, unconscious',
                senses: 'darkvision 120 ft., tremorsense 60 ft.',
                languages: 'Void Speech',
                challenge: 19,
                traits: [
                    {
                        name: 'Anaerobic',
                        text:
                            'A shoggoth doesn’t need oxygen to live. It can exist with equal comfort at the bottom of the ocean or in the vacuum of outer space.',
                    },
                    {
                        name: 'Absorb Flesh',
                        text:
                            'The body of a creature that dies while grappled by a shoggoth is completely absorbed into the shoggoth’s mass. No portion of it remains to be used in raise dead, reincarnate, and comparable spells that require touching the dead person’s body.',
                    },
                    {
                        name: 'Amorphous',
                        text:
                            'A shoggoth can move through a space as small as 1 foot wide. It must spend 1 extra foot of movement for every foot it moves through a space smaller than itself, but it isn’t subject to any other penalties for squeezing.',
                    },
                    {
                        name: 'Hideous Piping',
                        text:
                            'The fluting noises made by a shoggoth are otherworldly and mind-shattering. A creature that can hear this cacophony at the start of its turn and is within 120 feet of a shoggoth must succeed on a DC 15 Wisdom saving throw or be confused (as the spell confusion) for 1d4 rounds. Creatures that roll a natural 20 on this saving throw become immune to the Hideous Piping for 24 hours. Otherwise, characters who meet the conditions must repeat the saving throw every round.',
                    },
                    {
                        name: 'Keen Senses',
                        text:
                            'A shoggoth has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
                    },
                    {
                        name: 'Rolling Charge',
                        text:
                            'If the shoggoth moves at least 20 feet straight toward a creature and hits it with a slam attack on the same turn, that creature must succeed on a DC 20 Dexterity saving throw or be knocked prone. If the creature is knocked prone, the shoggoth immediately moves into the creature’s space as a bonus action and crushes the creature beneath its bulk. The crushed creature can’t breathe, is restrained, and takes 11 (2d10) bludgeoning damage at the start of each of the shoggoth’s turns. A crushed creature remains in its space and does not move with the shoggoth. A crushed creature can escape by using an action and making a successful DC 19 Strength check. On a success, the creature crawls into an empty space within 5 feet of the shoggoth.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The shoggoth makes 3 (1d4 + 1) slam attacks. (If you wish, reroll the number of attacks at the start of each of the shoggoth’s turns.)',
                    },
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage, and the target is grappled (escape DC 18) and restrained. The shoggoth can grapple any number of creatures simultaneously, and this has no effect on its number of attacks.',
                    },
                ],
            },
            {
                name: 'Pennington Applepie',
                size: 'Small',
                type: 'Humanoid (ratfolk, she, her)',
                alignment: 'lawful good',
                AC: '15 (padded armor)',
                HP: '26 (4d6 + 12)',
                speed: '25 ft., climb 20 ft., swim 30 ft.',
                strength: 14,
                dexterity: 18,
                constitution: 14,
                intelligence: 14,
                wisdom: 10,
                charisma: 10,
                savingThrows: 'Int +4',
                skills:
                    'Acrobatics +6, Perception +4, Stealth +8, Athletics +4, Nature +6, Survival +4, Sleight of Hand +6',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Thieves Cant',
                challenge: 2,
                traits: [
                    {
                        name: 'Cunning Action',
                        text:
                            'A ratfolk rogue can use a bonus action to Dash, Disengage, or Hide.',
                    },
                    {
                        name: 'Nimbleness',
                        text:
                            'A ratfolk rogue can move through the space of any creature size Medium or larger.',
                    },
                    {
                        name: 'Pack Tactics',
                        text:
                            'A ratfolk rogue has advantage on its attack roll against a creature if at least one of the ratfolk’s allies is within 5 feet of the creature and the ally is capable of attacking.',
                    },
                    {
                        name: 'Sneak Attack',
                        recharge: '1/Turn',
                        text:
                            'A ratfolk rogue deals an extra 3 (1d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of one of its allies that isn’t incapacitated and the rogue doesn’t have disadvantage on the attack roll.',
                    },
                ],
                actions: [
                    {
                        name: 'Dagger',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d4 + 4) piercing damage.',
                    },
                    {
                        name: 'Light Crossbow',
                        text:
                            'Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 8 (1d8 + 4) piercing damage.',
                    },
                    {
                        name: 'Rat Dagger Flurry',
                        text:
                            'Ranged Weapon Attack: +5 to hit, range 20/60 ft., three targets. Hit: 6 (1d4 + 4) piercing damage.',
                    },
                ],
            },
            {
                name: 'Phoenix Molvraki',
                size: 'Medium',
                type:
                    'Humanoid (kalashtar, mystic, order of the immortal, pronouns: they, their, theirs)',
                alignment: 'any alignment',
                AC: '13 (Immortal Durability)',
                HP: '27 (6d8 + 0)',
                speed: '30 ft.',
                strength: 10,
                dexterity: 16,
                constitution: 10,
                intelligence: 12,
                wisdom: 18,
                charisma: 16,
                savingThrows: 'Int +4, Wis +7',
                skills:
                    'Acrobatics +6, Insight +7, Persuasion +9, Perception +7, Nature +4',
                damageResistances: 'psychic',
                senses: '',
                languages: 'Common, telepathy 20 ft.',
                challenge: 0,
                traits: [
                    {
                        name: '_dossier',
                        text:
                            '5 feet 8 inches; 122 pounds\nThey are obsessed with conspiracy theories.\nPuts their name before the {@creature quori|erlw} name.\nEverything {@creature Paros|zorq} wants to be. However, they refuse to recognize the power of reading and only learn through psionics. Furthermore, their dedication to learning comes at the cost of ... ',
                    },
                    {
                        name: 'Spotless Sunlit Mind',
                        text:
                            'Phoenix has managed to harness the gregariousness of the conversative and playful brass dragon. When Phoenix is at or below 15 hit points, they have advantage on all Charisma saving throws and ability checks.',
                    },
                    {
                        name: 'Ring of Mind Shielding',
                        text:
                            'While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\nYou can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\nIf you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can’t prevent this telepathic communication.',
                    },
                    {
                        name: 'Dual Mind',
                        text:
                            'The kalashtar has advantage on Wisdom saving throws.',
                    },
                    {
                        name: 'Severed from Dreams',
                        text:
                            'Kalashtar sleep, but they don’t connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like dream, but not to spells and other magical effects that put you to sleep, like sleep.',
                    },
                    {
                        name: 'Proficiencies',
                        text: 'light armor\nnone\nsimple weapons',
                    },
                ],
                actions: [
                    {
                        name: 'Dagger',
                        text:
                            'Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.',
                    },
                    {
                        name: 'Mind Thrust',
                        text:
                            'The kalashtar targets a creature it can see within 30 feet of it. The target must succeed on a 13  Wisdom saving throw or take 10 (2d10) psychic damage.',
                    },
                    {
                        name: 'Spear',
                        text:
                            'Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d6 + 3) piercing damage in melee, or Hit: 6 (1d6 + 3)  piercing damage at range, or 7 (1d8 + 3) piercing damage if used with both hands.',
                    },
                ],
            },
            {
                name: 'Quickling',
                size: 'Tiny',
                type: 'Fey',
                alignment: 'chaotic evil',
                AC: '16',
                HP: '13 (3d4 + 6)',
                speed: '120 ft.',
                strength: 4,
                dexterity: 25,
                constitution: 15,
                intelligence: 10,
                wisdom: 12,
                charisma: 7,
                skills:
                    'Acrobatics +9, Perception +5, Sleight of Hand +9, Stealth +9',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Sylvan',
                challenge: 2,
                traits: [
                    {
                        name: '_',
                        text:
                            'Tricks of that sort are hardly the limit of their artful malice, however. They don’t commit outright murder, but quicklings can ruin lives in plenty of other ways: stealing an important letter, swiping coins collected for the poor, planting a stolen item in someone’s bag. Quicklings enjoy causing suffering that transcends mere mis chief, especially when the blame for their actions falls on other creatures and creates discord.\nBudduck using them alongside owls for mischievous things, including blackmail.\n\nOwls\nself-conscious of: \nwants to be (thought of as): \nmodest about: how fast they are',
                    },
                    {
                        name: 'Blurred Movement',
                        text:
                            'Attack rolls against the quickling have disadvantage unless the quickling is incapacitated or restrained.',
                    },
                    {
                        name: 'Evasion',
                        text:
                            'If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The quickling makes three dagger attacks.',
                    },
                    {
                        name: 'Dagger',
                        text:
                            'Melee  or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 12 (2d4 + 7) piercing damage.',
                    },
                ],
                environments: ['Forest'],
            },
            {
                name: 'Rufus Skyflume',
                size: 'Huge',
                type: 'Giant (cloud giant)',
                alignment: 'neutral good',
                AC: '14 (natural armor)',
                HP: '200 (16d12 + 96)',
                speed: '50 ft.',
                strength: 27,
                dexterity: 10,
                constitution: 22,
                intelligence: 12,
                wisdom: 16,
                charisma: 16,
                savingThrows: 'Con +10, Wis +7, Cha +7, Str +12',
                skills:
                    'Insight +7, Perception +7, Athletics +12, Survival +7, Animal Handling +7',
                senses: '',
                languages: 'Common, Giant',
                challenge: 10,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'very kind\nshort for a cloud giant (usually 24 feet, maybe more like 18)\nmiddle age\nmore like a farmer\nhe’s red instead of blue … or just tan\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    { name: 'Purpose', text: '' },
                    {
                        name: 'Background',
                        text:
                            'comes into town to sell astounding wares from superhuge garden\nbrings in its own cows on a wagon to say high to local cows\nalways checking the clouds with a local nephoscope it has set up\nhas a skywriting business, and is a patron to warlocks\nSome warlocks find messages from their patrons etched on trees, mingled among tea leaves, or adrift in the clouds—messages that only the warlock can see. Other warlocks converse with their patrons in dreams or waking visions, or deal only with intermediaries. ',
                    },
                    {
                        name: 'Keen Smell',
                        text:
                            'The giant has advantage on Wisdom (Perception) checks that rely on smell.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The giant’s innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:\nAt will: detect magic, fog cloud, light\n3/day each: feather fall, fly, misty step, telekinesis\n1/day each: control weather, gaseous form',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The giant makes two pitchfork attacks.',
                    },
                    {
                        name: 'Pitchfork',
                        text:
                            'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage.',
                    },
                    {
                        name: 'Rock',
                        text:
                            'Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage.',
                    },
                    {
                        name: 'Fling',
                        text:
                            'The giant tries to throw a Small or Medium creature within 10 feet of it. The target must succeed on a DC 20 Dexterity saving throw or be hurled up to 60 feet horizontally in a direction of the giant’s choice and land prone, taking 4 (1d8) bludgeoning damage for every 10 feet it was thrown.',
                    },
                    {
                        name: 'Wind Aura',
                        text:
                            'A magical aura of wind surrounds the giant. The aura is a 10-foot-radius sphere that lasts as long as the giant maintains concentration on it (as if concentrating on a spell). While the aura is in effect, the giant gains a +2 bonus to its AC against ranged weapon attacks, and all open flames within the aura are extinguished unless they are magical.',
                    },
                ],
                environments: ['Mountain'],
            },
            {
                name: 'Sally Farmer',
                size: 'Medium',
                type: 'Humanoid (dwarf)',
                alignment: 'lawful good',
                AC: '16 (chain shirt, shield)',
                HP: '39 (6d8 + 12)',
                speed: '25 ft. ',
                strength: 15,
                dexterity: 12,
                constitution: 14,
                intelligence: 10,
                wisdom: 11,
                charisma: 10,
                skills: 'Perception +2',
                senses: '',
                languages: 'Common, Dwarvish',
                challenge: 1,
                traits: [
                    {
                        name: 'Dwarven Resilience',
                        text:
                            'The shield dwarf guard has advantage on saving throws against poison, and has resistance against poison damage.',
                    },
                ],
                actions: [
                    {
                        name: 'Warhammer',
                        text:
                            'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 24 (5d8 + 2) bludgeoning damage, or 29 (5d10 + 2) bludgeoning damage if used with two hands.',
                    },
                ],
            },
            {
                name: 'Samai',
                size: 'Large',
                type: 'Humanoid (demon)',
                alignment: 'chaotic evil',
                AC: '16 (natural armor)',
                HP: '150 (16d10 + 48)',
                speed: '30 ft.',
                strength: 14,
                dexterity: 15,
                constitution: 16,
                intelligence: 14,
                wisdom: 16,
                charisma: 18,
                savingThrows: 'Dex +6, Con +7, Wis +7',
                skills: 'Perception +7',
                damageResistances: 'cold, fire, lightning',
                damageImmunities: 'poison',
                conditionImmunities:
                    'charmed, exhaustion, frightened, poisoned',
                senses: 'blindsight 60 ft.',
                languages: 'all, telepathy 120 ft.',
                challenge: 0,
                traits: [
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'Samai’s spellcasting ability is Charisma (spell save DC 16). She can innately cast the following spells, requiring no material components:\nAt will: detect magic, locate animals or plants, ray of sickness\n3/day each: ensnaring strike, entangle, plant growth',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'Samai makes two pseudopod attacks.',
                    },
                    {
                        name: 'Pseudopod',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage plus 9 (2d8) poison damage.',
                    },
                    {
                        name: 'Infestation Spores',
                        text:
                            'Samai releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 16 Constitution saving throw. On a successful save, the creature can’t be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called X and also gains a random form of madness (determined by rolling on the Madness of Zuggtmoy table) that lasts until the creature is cured of the disease or dies. While infected in this way, the creature can’t be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature’s body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a spore servant.',
                    },
                    {
                        name: 'Mind Control Spores',
                        text:
                            'Samai releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her. Humanoids and beasts in the cloud when it appears must make a DC 16 Wisdom saving throw. On a successful save, the creature can’t be infected by these spores for 24 hours. On a failed save, the creature is charmed by her for 1 minute and can’t be reinfected by these spores. A creature can repeat the saving throw at the end of each of its turns, ending the effect early on itself on a success. ',
                    },
                    {
                        name: 'Euphoria Spores',
                        text:
                            'Samai releases a cloud of spores in a 20-foot-radius sphere centered on itself. Other creatures in that area must each succeed on a DC 15 Constitution saving throw or become poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect early on itself on a success. When the effect ends on it, the creature gains one level of exhaustion.',
                    },
                    {
                        name: 'Photophobia Spores',
                        text:
                            'Samai releases a cloud of spores in a 20-foot-radius sphere centered on itself. Other creatures in that area must each succeed on a DC 15 Constitution saving throw. On a successful save, the creature can’t be infected by these spores for 24 hours. On a failed save, for 1 minute, while the creature is in sunlight, the creature has disadvantage on ability checks, attack rolls, and saving throws. A creature can repeat the saving throw at the end of each of its turns, ending the effect early on itself on a success. Once infected, a creature can’t be reinfected by these spores.',
                    },
                ],
                reactions: [
                    {
                        name: 'Protective Shriek',
                        text:
                            'When Samai is hit by an attack, one creature that is charmed by her must use its reaction to emit a shriek audible within 300 feet of it. The creature continues to shriek until the end of its next turn.',
                    },
                ],
            },
            {
                name: 'Selkie',
                size: 'Medium',
                type: 'Humanoid (human, shapechanger)',
                alignment: 'chaotic',
                AC:
                    '11 in humanoid form, 12 (natural armor) in seal or hybrid form',
                HP: '58 (9d8 + 18)',
                speed: '30 ft.  (0 ft., swim 40 ft. in seal form)',
                strength: 18,
                dexterity: 13,
                constitution: 14,
                intelligence: 10,
                wisdom: 11,
                charisma: 10,
                skills: 'Perception +4',
                damageImmunities:
                    'bludgeoning, piercing, slashing from nonmagical attacks that aren’t silvered',
                senses: 'blindsight 30 ft.',
                languages: 'Common (can’t speak in seal form)',
                challenge: 3,
                traits: [
                    {
                        name: 'Shapechanger',
                        text:
                            'The wereseal can use its action to polymorph into a seal-humanoid hybrid or into a giant seal, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.',
                    },
                    {
                        name: 'Hold Breath',
                        text: 'The selkie can hold its breath for 2 hours.',
                    },
                    {
                        name: 'Variant: Nonhuman Lycanthropes',
                        text:
                            'The statistics presented in this section assume a base creature of human. However, you can also use the statistics to represent nonhuman lycanthropes, adding verisimilitude by allowing a nonhuman lycanthrope to retain one or more of its humanoid racial traits. For example, an elf werewolf might have the Fey Ancestry trait.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack (Humanoid or Hybrid Form Only)',
                        text:
                            'The wereseal makes two attacks: one with its bite and one with its spear.',
                    },
                    {
                        name: 'Bite (seal or Hybrid Form Only)',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereseal lycanthropy.',
                    },
                    {
                        name: 'Spear (Humanoid or Hybrid Form Only)',
                        text:
                            'Melee  or Ranged Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack.',
                    },
                ],
            },
            {
                name: 'Selshamurinn',
                size: 'Large',
                type: 'Humanoid (merrow shaman, human, shapechanger)',
                alignment: 'chaotic',
                AC: '13',
                HP: '102 (12d10 + 36)',
                speed: '30 ft., swim 50 ft.',
                strength: 18,
                dexterity: 10,
                constitution: 16,
                intelligence: 8,
                wisdom: 16,
                charisma: 9,
                skills:
                    'Perception +4, Religion +4, Athletics +7, Survival +6, Nature +2, Stealth +3, Animal Handling +6',
                senses: 'darkvision 60 ft.',
                languages: 'Aquan, Common',
                challenge: 5,
                traits: [
                    {
                        name: 'Hold Breath',
                        text:
                            'The selshamurinn can hold its breath for 2 hours.',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'The selshamurinn is an 8th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following druid spells prepared:\nCantrips (at will): druidcraft, poison spray, shape water, thunderclap\n1st level (4 slots): bane, entangle, thunderwave\n2nd level (3 slots): blindness/deafness, hold person, moonbeam\n3rd level (3 slots): call lightning, tidal wave, wall of water\n4th level (2 slots): control water, watery sphere',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The selshamurinn makes two attacks: one with its bite and one with its tail.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.',
                    },
                    {
                        name: 'Tail',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Servo',
                size: 'Tiny',
                type: 'Construct',
                alignment: 'unaligned',
                AC: '11 (natural armor)',
                HP: '10 (3d4 + 3)',
                speed: '20 ft.',
                strength: 4,
                dexterity: 11,
                constitution: 12,
                intelligence: 3,
                wisdom: 10,
                charisma: 7,
                damageImmunities: 'poison',
                conditionImmunities: 'charmed, poisoned',
                senses: '',
                languages: '',
                challenge: 0,
            },
            {
                name: 'Sigmurch',
                size: 'Small',
                type: 'Humanoid (xvart)',
                alignment: 'evil',
                AC: '12 (15 with mage armor)',
                HP: '22 (5d6 + 5)',
                speed: '30 ft.',
                strength: 6,
                dexterity: 14,
                constitution: 12,
                intelligence: 10,
                wisdom: 12,
                charisma: 14,
                skills: 'History +4, Insight +5, Persuasion +6, Religion +4',
                senses: 'darkvision 30 ft.',
                languages: 'Abyssal, Common',
                challenge: 1,
                traits: [
                    {
                        name: 'Low Cunning',
                        text:
                            'The xvart can take the Disengage action as a bonus action on each of its turns.',
                    },
                    {
                        name: 'Overbearing Pack',
                        text:
                            'The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart’s allies is within 5 feet of the target and the ally isn’t incapacitated.',
                    },
                    {
                        name: 'Raxivort’s Tongue',
                        text:
                            'The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The xvart’s innate spellcasting ability is Charisma. it can innately cast the following spells, requiring no material components:\nAt will: detect magic, mage armor (self only)',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'The xvart is a 3rd-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:\nCantrips (at will): eldritch blast, mage hand, minor illusion, poison spray, prestidigitation\n2nd level (2 slots): burning hands, expeditious retreat, invisibility, scorching ray',
                    },
                ],
                actions: [
                    {
                        name: 'Scimitar',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.',
                    },
                ],
                environments: ['Hill', 'Underdark'],
            },
            {
                name: 'Sik',
                size: 'Medium',
                type: 'Humanoid (gnome, artificer)',
                alignment: 'any alignment',
                AC: '12',
                HP: '16 (2d10 + 6)',
                speed: '30 ft.',
                strength: 12,
                dexterity: 15,
                constitution: 12,
                intelligence: 16,
                wisdom: 10,
                charisma: 10,
                skills: '{@Item Smith’s Tools} +5, {@Item Tinker’s Tools} +5',
                senses: '',
                languages: 'Common, Undercommon, Gnome',
                challenge: 0,
                traits: [
                    {
                        name: 'Sjonhannr',
                        text:
                            'Sjónhannr\nSik has an expert eye in their trades or crafts of choice. Add +1 to any roll made with a tool proficiency.',
                    },
                    {
                        name: 'Superior Attunement',
                        text:
                            'The artificer can attune to four magic items maximum, instead of three.',
                    },
                ],
                reactions: [
                    {
                        name: 'Aid Me, Servant',
                        text:
                            'When a creature targets the artificer with a melee attack and the artificer’s mechanical servant is within 5 feet of the creature, the artificer can command its mechanical servant to make a melee weapon attack against that creature. The mechanical servant’s attack hits first.',
                    },
                ],
            },
            {
                name: 'Slimorg',
                size: 'Medium',
                type: 'Monstrosity (Toxic Cave Fisher)',
                alignment: 'unaligned',
                AC: '16 (natural armor)',
                HP: '67 (9d8 + 27)',
                speed: '30 ft., climb 30 ft.',
                strength: 16,
                dexterity: 13,
                constitution: 16,
                intelligence: 3,
                wisdom: 10,
                charisma: 3,
                skills: 'Perception +2, Stealth +5',
                damageVulnerabilities: 'fire',
                damageImmunities: 'poison',
                conditionImmunities: 'poisoned',
                senses: 'blindsight 60 ft.',
                languages: '',
                challenge: 3,
                traits: [
                    {
                        name: '_',
                        text:
                            '\n\nslime dot org\nslimort\ngreenish glow\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Fear of Fire',
                        text:
                            'If the cave fisher takes fire damage, it is frightened of the source of that damage for 1 round.',
                    },
                    {
                        name: 'Toxic Filament',
                        text:
                            'The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is grappled by the cave fisher (escape DC 13), and ability checks made to escape this grapple have disadvantage. A creature that begins its turn adhered to the cave fisher’s filament, must succeed on a DC 13 Constitution saving throw or become poisoned for one minute. While poisoned, the creature must succeed on a DC 13 Constitution saving throw at the start of each of its turns or be stunned for 1 round and take 4 (1d8) poison damage. A creature that succeeds on this saving throw on two consecutive turns, ends the poisoned condition on itself. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage; vulnerability to fire damage), but a weapon that fails to sever it becomes stuck to it, requiring an action and a successful DC 13 Strength check to pull free. Destroying the filament deals no damage to the cave fisher, which can extrude a replacement filament on its next turn.',
                    },
                    {
                        name: 'Volatile Blood',
                        text:
                            'If the cave fisher has half its maximum hit points or fewer, it must make a DC 13 Constitution saving throw each time it takes fire damage. If it fails the save, its blood combusts violently and the cave fisher takes 10 (3d6) slashing damage.',
                    },
                    {
                        name: 'Spider Climb',
                        text:
                            'The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The cave fisher makes two claw attacks.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.',
                    },
                    {
                        name: 'Filament',
                        text:
                            'One creature grappled by the cave fisher’s toxic filament must make a DC 12 Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can’t extrude another filament.',
                    },
                ],
            },
            {
                name: 'Soul Rock',
                size: 'Medium',
                type: 'Humanoid (dwarf)',
                alignment: 'any alignment',
                AC: '16 (chain mail)',
                HP: '33 (4d8 + 15)',
                speed: '25 ft.',
                strength: 18,
                dexterity: 13,
                constitution: 17,
                intelligence: 12,
                wisdom: 14,
                charisma: 11,
                savingThrows: 'Str +6, Con +5',
                skills:
                    'Perception +4, Stealth +3, Athletics +6, Animal Handling +4',
                damageResistances: 'poison',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Dwarvish',
                challenge: 1,
                traits: [
                    {
                        name: 'Dwarven Resilience',
                        text:
                            'The dwarf has advantage on saving throws against poison.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The dwarf’s innate spellcasting ability is Wisdom. Their Spell Save DC is 12 and their Spellcasting Ability Modifier is +4. They can innately cast the following spells, requiring no material components:\n1/day each: healing word (level 2), hunter’s mark, jump, pass without trace, speak with animals, speak with plants, these rocks look great',
                    },
                ],
                actions: [
                    {
                        name: 'Handaxe',
                        text:
                            'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (1d12 + 6) slashing damage.',
                    },
                ],
            },
            {
                name: 'Stump Three School',
                size: 'Tiny',
                type: 'Ooze',
                alignment: 'unaligned',
                AC: '13 (natural armor)',
                HP: '22 (4d4 + 12)',
                speed: '20 ft., climb 10 ft.',
                strength: 4,
                dexterity: 6,
                constitution: 17,
                intelligence: 1,
                wisdom: 1,
                charisma: 12,
                skills: 'Deception +5',
                senses: 'blindsight 60 ft.',
                languages: '',
                challenge: 0.25,
                traits: [
                    {
                        name: 'Amorphous',
                        text:
                            'The treacle can move through a space as narrow as 1 inch wide without squeezing.',
                    },
                    {
                        name: 'Charming Presence',
                        text:
                            'The treacle has an uncanny ability to sense and to play off of another creature’s emotions. It uses Charisma (Deception) to oppose Wisdom (Insight or Perception) skill checks made to see through its ruse, and it has advantage on its check.',
                    },
                ],
                actions: [
                    {
                        name: 'Reshape',
                        text:
                            'The treacle assumes the shape of any tiny creature or object. A reshaped treacle gains the movement of its new form but no other special qualities.',
                    },
                    {
                        name: 'Blood Drain',
                        recharge: '1/Hour',
                        text:
                            'A treacle touching the skin of a warm-blooded creature inflicts 4 (1d8) necrotic damage per hour of contact, and the victim’s maximum hit points are reduced by the same number. Blood is drained so slowly that the victim doesn’t notice the damage unless he or she breaks contact with the treacle (sets it down or hands it to someone else, for example). When contact is broken, the victim notices blood on his or her skin or clothes with a successful DC 13 Wisdom (Perception) check.',
                    },
                ],
            },
            {
                name: 'Suille',
                size: 'Large',
                type: 'Monstrosity (Monstrous Peryton)',
                alignment: 'chaotic evil',
                AC: '12 (natural armor)',
                HP: '90 (12d10 + 24)',
                speed: '20 ft., fly 60 ft.',
                strength: 19,
                dexterity: 10,
                constitution: 14,
                intelligence: 9,
                wisdom: 14,
                charisma: 10,
                savingThrows: 'Str +8, Dex +3, Wis +5',
                skills: 'Perception +5, Athletics +7',
                senses: 'darkvision 60 ft.',
                languages: 'understands Common and Elvish but can’t speak',
                challenge: 5,
                traits: [
                    {
                        name: 'Flyby',
                        text:
                            'The peryton doesn’t provoke opportunity attacks when it flies out of an enemy’s reach.',
                    },
                    {
                        name: 'Keen Sight and Smell',
                        text:
                            'The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell.',
                    },
                    {
                        name: 'Legendary Resistance',
                        recharge: '3/Day',
                        text:
                            'If the peryton fails a saving throw, it can choose to succeed instead.',
                    },
                    {
                        name: 'Campaign',
                        text:
                            'Adopted Bellily (Lili) (daughter of Aurelia and Isabella)',
                    },
                    { name: 'Consume heart', text: '???' },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The peryton makes two attacks: one with its gore and one with its talons.',
                    },
                    {
                        name: 'Gore',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.',
                    },
                    {
                        name: 'Talons',
                        text:
                            'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) slashing damage.',
                    },
                    {
                        name: 'Warp Shadow',
                        text:
                            'The peryton chooses up to three creatures within 60 feet of it that it can see. Each creature must succeed on a DC 12 Wisdom saving throw or become cursed. While cursed, whenever the creature makes an attack roll, an ability check, or a saving throw, it must roll a d4 and subtract that number from the roll. A cursed creature can repeat this saving throw at the end of each of its turns, ending the effect on itself with a success. A creature that succeeds on this saving throw is immune to this peryton’s Warp Shadow for 24 hours.',
                    },
                ],
                legendaryPoints: 3,
                legendaryActions: [
                    {
                        name: 'Detect',
                        text: 'The peryton makes a Wisdom (Perception) check.',
                    },
                    {
                        name: 'Talons Attack',
                        text: 'The peryton makes one attack with its talons.',
                    },
                    {
                        name: 'Dive Attack',
                        cost: 2,
                        text:
                            'The peryton moves up to its speed toward one target of its choosing. It then makes a gore attack that deals an extra 4 (1d8) piercing damage on a hit.',
                    },
                ],
            },
            {
                name: 'Swarm of Herg Worms',
                size: 'Medium',
                type: 'Swarm of tiny beasts',
                alignment: 'unaligned',
                AC: '8',
                HP: '22 (5d8)',
                speed: '5 ft., climb 5 ft.',
                strength: 2,
                dexterity: 7,
                constitution: 10,
                intelligence: 1,
                wisdom: 2,
                charisma: 1,
                damageResistances: 'piercing, slashing',
                conditionImmunities:
                    'charmed, frightened, grappled, paralyzed, petrified, prone, restrained',
                senses: 'blindsight 10 ft.',
                languages: '',
                challenge: 0.5,
                traits: [
                    {
                        name: 'Swarm',
                        text:
                            'The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can’t regain hit points or gain temporary hit points.',
                    },
                    {
                        name: 'Silver-blooded',
                        text:
                            'Herg worms are finger-sized earthworms underneath whose skin are visible thin veins of silver. If at least 10 herg worms are crushed and used to make a paste, that paste can be applied to a weapon to render it silvered for 1 minute. Crushing the worms and applying the paste in this way takes 1 action. The paste loses its efficacy at the end of the minute.',
                    },
                ],
                actions: [
                    {
                        name: 'Bites',
                        text:
                            'Melee Weapon Attack: +0 to hit, reach 0 ft., one creature in the swarm’s space. Hit: The target is infested by 1d4 herg worms. At the start of each of the target’s turns, the target takes 1d6 piercing damage per rot grub infesting it. Applying fire to the bite wound before the end of the target’s next turn deals 1 fire damage to the target and kills these herg worms. After this time, these herg worms are too far under the skin to be burned. If a target infested by herg worms ends its turn with 0 hit points, it dies as the herg worms burrow into its heart and kill it. Any effect that cures disease kills all herg worms infesting the target.',
                    },
                ],
                environments: ['Swamp', 'Underdark'],
            },
            {
                name: 'Tobolux',
                size: 'Tiny',
                type: 'Elemental (spirit, genie)',
                alignment: 'any alignment',
                AC: '11',
                HP: '13 (3d8)',
                speed: '0 ft., fly 40 ft. (hover)',
                strength: 7,
                dexterity: 13,
                constitution: 10,
                intelligence: 10,
                wisdom: 12,
                charisma: 11,
                damageResistances:
                    'acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks',
                damageImmunities: 'cold, necrotic, poison',
                conditionImmunities:
                    'charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained',
                senses: '',
                languages: 'Common, Ignan',
                challenge: 1,
                traits: [
                    {
                        name: 'Incorporeal Movement',
                        text:
                            'The spirit can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.',
                    },
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Tobolux is a tiny genii spirit. She has the typical turqoise complexion, but on her face are simplified paisley patterns of bright white. She has dark-red hair and her eyes are nested within rose petal leaves which perpetually separate and fall, disappearing into dust before they touch the ground.\nHer eye petals are produced and shed perpetually.',
                    },
                ],
            },
            {
                name: 'Toestealer',
                size: 'Tiny',
                type: 'Fey',
                alignment: 'chaotic evil',
                AC: '13',
                HP: '22 (5d4 + 10)',
                speed: '20 ft., climb 10 ft., swim 10 ft.',
                strength: 10,
                dexterity: 16,
                constitution: 14,
                intelligence: 12,
                wisdom: 9,
                charisma: 12,
                skills: 'Stealth +5',
                conditionImmunities: 'poisoned',
                senses: 'darkvision 120 ft.',
                languages: 'Common',
                challenge: 0.5,
                traits: [
                    {
                        name: 'Magic Resistance',
                        text:
                            'The gremlin has advantage on saving throws against spells and other magical effects.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The gremlin’s innate spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: prestidigitation\n3/day: hex',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The goblin makes one claw attack and one bite attack.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +5 to hit, range 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.',
                    },
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +5 to hit, range 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.',
                    },
                    {
                        name: 'Aura of Drunkenness',
                        text:
                            'A rum gremlin radiates an aura of drunkenness to a radius of 20 feet. Every creature that starts its turn in the aura must make a successful DC 12 Constitution saving throw against poison or be poisoned for one hour. Creatures that have drunk any alcohol during the previous hour have disadvantage on the saving throw. While affected by this poison, a creature falls prone if it tries to move more than half its speed during a turn.',
                    },
                ],
            },
            {
                name: 'Tusternoof, or The Twisted One',
                size: 'Medium',
                type: 'Fiend',
                alignment: 'lawful evil',
                AC: '12 (16 with mage armor)',
                HP: '36 (8d8)',
                speed: '30 ft., climb 30 ft.',
                strength: 12,
                dexterity: 16,
                constitution: 10,
                intelligence: 14,
                wisdom: 12,
                charisma: 16,
                savingThrows: 'Int +4, Cha +5',
                skills:
                    'Arcana +4, History +4, Athletics +5, Nature +6, Stealth +7, Perception +3',
                damageResistances:
                    'bludgeoning, piercing, slashing from nonmagical attacks',
                damageImmunities: 'poison',
                conditionImmunities: 'exhaustion, poisoned',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Underdark, Abyssal',
                challenge: 4,
                traits: [
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'Tusternoof’s innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components:\nAt will: detect magic, disguise self, mage armor',
                    },
                    {
                        name: 'Spellcasting',
                        text:
                            'Tusternoof is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:\nCantrips (at will): chill touch, eldritch blast, mage hand\n3rd level (2 slots): arms of Hadar, dispel magic, hold person, hunger of Hadar, invisibility, phantasmal force',
                    },
                ],
                actions: [
                    {
                        name: 'Horned Vine',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit:  6 (1d6 + 2) slashing plus 9 (2d6 + 2) necrotic damage.\nTODO: consider applying the cave fisher’s grapple/attackable arms mechanism to this',
                    },
                ],
                environments: ['Urban'],
            },
            {
                name: 'Ulthak',
                size: 'Huge',
                type: 'Elemental (Stone Giant Thane)',
                alignment: 'neutral',
                AC: '18 (natural armor)',
                HP: '195 (17d12 + 85)',
                speed: '40 ft.',
                strength: 25,
                dexterity: 15,
                constitution: 20,
                intelligence: 10,
                wisdom: 17,
                charisma: 14,
                savingThrows: 'Dex +7, Con +10, Wis +8, Cha +7',
                skills: 'Athletics +12, Perception +8',
                senses: '',
                languages: 'Giant',
                challenge: 13,
                traits: [
                    {
                        name: 'Stone Camouflage',
                        text:
                            'The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The giant’s innate spellcasting ability is Wisdom (spell save DC 16). The giant can innately cast the following spells, without providing material components:\n3/day each: erupting earth, meld into stone, stone shape\n1/day each: bones of the earth, stoneskin, wall of stone',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The giant makes two maul attacks.',
                    },
                    {
                        name: 'Maul',
                        text:
                            'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone. If a target’s saving throw fails by 5 or more, the creature is also stunned until the end of its next turn.',
                    },
                    {
                        name: 'Rock',
                        text:
                            'Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.',
                    },
                ],
                reactions: [
                    {
                        name: 'Rock Catching',
                        text:
                            'If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it.',
                    },
                ],
                legendaryPoints: 3,
                legendaryActions: [
                    {
                        name: 'Move',
                        text: 'The giant moves up to half its speed.',
                    },
                    {
                        name: 'Direct Ally',
                        cost: 2,
                        text:
                            'The giant targets one ally it can see within 30 feet of it. If the target can see and hear the giant, the target can use its reaction to move up to half its speed and make one weapon attack.',
                    },
                    {
                        name: 'Maul',
                        cost: 2,
                        text: 'The giant makes a maul attack.',
                    },
                    {
                        name: 'Cast a Spell',
                        cost: 3,
                        text:
                            'The giant casts a spell from its list of innate spells, using a spell slot as normal.',
                    },
                ],
            },
            {
                name: 'Uugeet',
                lairActions: [
                    'The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can’t take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth’s phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.',
                    'Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. The aboleth can’t use this lair action again until it has used a different one.',
                    'Water in the aboleth’s lair magically becomes a conduit for the creature’s rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage. The aboleth can’t use this lair action again until it has used a different one.',
                ],
                regionalEffects: [
                    'Underground surfaces within 1 mile of the aboleth’s lair are slimy and wet and are difficult terrain.',
                    'Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes.',
                    'As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image’s position as if present at that position. If the image takes any damage, it disappears.',
                ],
                regionalEffectsFade:
                    'If the aboleth dies, the first two effects fade over the course of 3d10 days.',
            },
            {
                name: 'Vee’gn’och',
                size: 'Medium',
                type: 'Undead',
                alignment: 'chaotic evil',
                AC: '15 (natural armor)',
                HP: '84 (13d6 + 39)',
                speed: '30 ft., burrow 20 ft.',
                strength: 12,
                dexterity: 18,
                constitution: 16,
                intelligence: 14,
                wisdom: 10,
                charisma: 10,
                savingThrows: 'Dex +6, Con +5',
                skills: 'Arcana +4, Deception +4, Perception +2, Stealth +8',
                damageResistances: 'bludgeoning, piercing, slashing',
                damageImmunities: 'necrotic, poison',
                conditionImmunities: 'exhaustion, poisoned',
                senses: 'darkvision 120 ft.',
                languages: 'Common, Vee’gn’och, Undercommon',
                challenge: 4,
                traits: [
                    {
                        name: 'Swarm',
                        text:
                            'Vee’gn’och can act as a swarm (composed of smaller elements), or it can grant a single member (called an exarch) control, acting as a singular creature. Changing between forms takes one action. In its singular form, the collective can’t occupy the same space as another creature, but it can perform sneak attacks and cast spells. In swarm form, the Vee’gn’och can occupy another creature’s space and vice versa, and it can move through openings at least 1 foot square. It can’t change to singular form while it occupies the same space as another creature. It uses its skills normally in either form.',
                    },
                    {
                        name: 'Rampage',
                        text:
                            'When Vee’gn’och reduces a creature to 0 hit points with a melee attack on its turn, Vee’gn’och can take a bonus action to move up to half its speed and make a bite attack.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The Vee’gn’och’s innate spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\nAt will: chill touch\n1/day: animate dead (up to 5 skeletons or zombies)',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text:
                            'The Vee’gn’och makes two claw attacks, or one claw and one bite attack, or one swarm attack.',
                    },
                    {
                        name: 'Bite',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) piercing damage, and the target must make a DC 14 Constitution save or suffer the effects of Wyrmblood Venom.',
                    },
                    {
                        name: 'Claw',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.',
                    },
                    {
                        name: 'Swarm',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm’s space. Hit: 30 (4d12 + 4) piercing damage, or 17 (2d12 + 4) piercing damage if the Vee’gn’och has half its hit points or fewer. If the attack hits, the target must make a successful DC 13 Constitution save or suffer the effects of Wyrmblood Venom.',
                    },
                    {
                        name: 'Sudden Rush.',
                        text:
                            'Until the end of the turn, Vee’gn’och’s speed increases by 60 feet and it doesn’t provoke opportunity attacks.',
                    },
                    {
                        name: 'Incite Rampage',
                        recharge: 'Recharge 5–6',
                        text:
                            'One creature the Vee’gn’och can see within 30 feet of it can use its reaction to make a melee attack if it can hear the Vee’gn’och and has the Rampage trait.',
                    },
                ],
            },
            {
                name: 'White Boar face hag, 4’6”',
                size: 'Medium',
                type: 'Fey',
                alignment: 'neutral evil',
                AC: '17 (natural armor)',
                HP: '82 (11d8 + 33)',
                speed: '30 ft.',
                strength: 18,
                dexterity: 12,
                constitution: 16,
                intelligence: 13,
                wisdom: 14,
                charisma: 14,
                skills: 'Arcana +3, Deception +4, Perception +4, Stealth +3',
                senses: 'darkvision 60 ft.',
                languages: 'Common, Draconic, Sylvan',
                challenge: 3,
                traits: [
                    {
                        name: 'Amphibious',
                        text: 'The hag can breathe air and water.',
                    },
                    {
                        name: 'Mimicry',
                        text:
                            'The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.',
                    },
                    {
                        name: 'Hag Coven',
                        text:
                            'When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.',
                    },
                    {
                        name: 'Hag Eye (Coven Only)',
                        text:
                            'A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can’t perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'The hag’s innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:\nAt will: dancing lights, minor illusion, vicious mockery',
                    },
                    {
                        name: 'Shared Spellcasting (Coven Only)',
                        text:
                            'While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard’s spell list but must share the spell slots among themselves:\n1st level (4 slots): identify, ray of sickness\n2nd level (3 slots): hold person, locate object\n3rd level (3 slots): bestow curse, counterspell, lightning bolt\n4th level (3 slots): phantasmal killer, polymorph\n5th level (2 slots): contact other plane, scrying\n6th level (1 slot): eyebite\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12 + the hag’s Intelligence modifier, and the spell attack bonus is 4 + the hag’s Intelligence modifier.',
                    },
                ],
                actions: [
                    {
                        name: 'Claws',
                        text:
                            'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.',
                    },
                    {
                        name: 'Illusory Appearance',
                        text:
                            'The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.',
                    },
                    {
                        name: 'Invisible Passage',
                        text:
                            'The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.',
                    },
                ],
                environments: ['Forest', 'Hill', 'Swamp'],
            },
            {
                name: 'Ygatin',
                size: 'Medium',
                type: 'Undead',
                alignment: 'chaotic evil',
                AC: '15 (natural armor)',
                HP: '58 (9d8 + 18)',
                speed: '30 ft.',
                strength: 15,
                dexterity: 16,
                constitution: 15,
                intelligence: 7,
                wisdom: 12,
                charisma: 12,
                skills: 'Perception +4, Stealth +6',
                damageResistances:
                    'cold, fire, necrotic; bludgeoning, piercing, and slashing from nonmagical attacks',
                damageImmunities: 'lightning, poison',
                conditionImmunities: 'charmed, frightened, poisoned',
                senses: 'darkvision 120 ft.',
                languages: 'Abyssal, the languages it knew in life',
                challenge: 6,
                traits: [
                    {
                        name: 'Aura of Annihilation',
                        text:
                            'The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends ignore this effect.',
                    },
                    {
                        name: 'Death Gaze',
                        text:
                            'When a creature that can see the bodak’s eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a DC 13 Constitution saving throw if the bodak isn’t incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points, unless it is immune to the frightened condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed save.\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so. it has disadvantage on attack rolls against the bodak until the start of its next turn. If the creature looks at the bodak in the meantime, it must immediately make the saving throw.',
                    },
                    {
                        name: 'Sunlight Hypersensitivity',
                        text:
                            'The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.',
                    },
                ],
                actions: [
                    {
                        name: 'Fist',
                        text:
                            'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage plus 9 (2d8) necrotic damage.',
                    },
                    {
                        name: 'Withering Gaze',
                        text:
                            'One creature that the bodak can see within 60 feet of it must make a DC 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as much damage on a successful one.',
                    },
                ],
                environments: ['Swamp', 'Underdark', 'Urban'],
            },
            {
                name: 'Zarachiel',
                size: 'Large',
                type: 'Celestial (ooze)',
                alignment: 'chaotic evil',
                AC: '12 (natural armor)',
                HP: '63 (14d6 + 14)',
                speed: '20 ft., climb 20 ft.',
                strength: 12,
                dexterity: 4,
                constitution: 12,
                intelligence: 10,
                wisdom: 14,
                charisma: 10,
                damageResistances:
                    'piercing and slashing from nonmagical weapons',
                damageImmunities: 'bludgeoning, acid, lightning',
                conditionImmunities:
                    'blinded, charmed, deafened, exhaustion, frightened, prone',
                senses: 'blindsight 90 ft. (blind beyond this radius)',
                languages:
                    'none in its natural form; knows the same languages as a creature it dominates',
                challenge: 3,
                traits: [
                    {
                        name: 'Amorphous',
                        text:
                            'The sap demon can move through a space as narrow as 1 inch wide without squeezing.',
                    },
                    {
                        name: 'Season’s Change',
                        text:
                            'If a sap demon (or its host) takes at least 10 fire damage, it also gains the effect of a haste spell until the end of its next turn. If it takes at least 10 cold damage, it gains the effect of a slow spell until the end of its next turn.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'The sap demon makes two slam attacks.',
                    },
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 10 (2d8 + 1) bludgeoning damage. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 11), and the sap demon uses Soul Sap on it as a bonus action.',
                    },
                    {
                        name: 'Soul Sap',
                        text:
                            'The sap demon slides down the throat of a sleeping, helpless, or grappled living creature of Medium size or smaller. Once inside, the sap demon takes control of its host, as per the dominate monster spell (Wisdom DC 11 negates). While dominated, the host gains blindsight 90 feet. The host drips blood from its ears, nose, eyes, or from a wound that resembles the injury done to the sap demon’s tree (1 damage/Hour). Damage inflicted on the host has no effect on the sap demon. If the host dies or is reduced to 0 hit points, the sap demon must leave the body within one hour.',
                    },
                ],
            },
            {
                name: 'Zarachiel (Gloucous form)',
                size: 'Large',
                type: 'Ooze (celestial, pronouns: they, them, theirs)',
                alignment: 'chaotic evil',
                AC: '13 (natural armor)',
                HP: '63 (14d6 + 14)',
                speed: '20 ft., climb 20 ft.',
                strength: 16,
                dexterity: 8,
                constitution: 14,
                intelligence: 10,
                wisdom: 10,
                charisma: 4,
                damageResistances: 'piercing, slashing from nonmagical weapons',
                damageImmunities: 'bludgeoning, acid, lightning',
                conditionImmunities:
                    'blinded, charmed, deafened, exhaustion, frightened, prone',
                senses: 'blindsight 90 ft. (blind beyond this radius)',
                languages:
                    'Common, Zorbh, knows the same languages as a creature it dominates',
                challenge: 3,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'In glaucous form, Zarachiel is a 9-foot tall greyish-black ooze with tiny silver eyes. Its outer layer flows like a fondue fountain. It does not spell great.\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    {
                        name: 'Amorphous',
                        text:
                            'Zarachiel can move through a space as narrow as 1 inch wide without squeezing.',
                    },
                    {
                        name: 'Season’s Change',
                        text:
                            'If Zarachiel (or its host) takes at least 10 fire damage, it also gains the effect of the {spell haste|phb} spell until the end of its next turn. If it takes at least 10 cold damage, it gains the effect of the {@slow|phb} spell until the end of its next turn.',
                    },
                ],
                actions: [
                    {
                        name: 'Multiattack',
                        text: 'Zarachiel makes two slam attacks.',
                    },
                    {
                        name: 'Slam',
                        text:
                            'Melee Weapon Attack: +3 to hit, reach 10 ft., one target. Hit: 10 (2d8 + 1) bludgeoning damage. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 11), and Zarachiel uses Soul Sap on it as a bonus action.',
                    },
                    {
                        name: 'Soul Sap',
                        text:
                            'Zarachiel slides down the throat of a sleeping, helpless, or grappled living creature of Medium size or smaller. Once inside, Zarachiel takes control of its host, as per the dominate monster spell (Wisdom DC 11 negates). While dominated, the host gains blindsight 90 feet. The host drips blood from its ears, nose, eyes, or from a wound that resembles the injury done to Zarachiel’s tree (1 damage/Hour). Damage inflicted on the host has no effect on Zarachiel. If the host dies or is reduced to 0 hit points, Zarachiel must leave the body within one hour.',
                    },
                ],
            },
            {
                name: 'Zilla',
                size: 'Medium',
                type: 'Humanoid (elf, drow, pronouns: she, her, hers, cleric)',
                alignment: 'neutral',
                AC: '13 (chain shirt)',
                HP: '27 (5d8 + 5)',
                speed: '30 ft.',
                strength: 10,
                dexterity: 10,
                constitution: 12,
                intelligence: 13,
                wisdom: 16,
                charisma: 13,
                skills:
                    'Medicine +7, Persuasion +3, Religion +5, Perception +5',
                senses: 'darkvision 120 ft.',
                languages: 'Undercommon, Common, Elvish',
                challenge: 2,
                traits: [
                    {
                        name: 'Divine Eminence',
                        text:
                            'As a bonus action, Zilla can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If Zilla expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.',
                    },
                    {
                        name: 'Fey Ancestry',
                        text:
                            'Zilla has advantage on saving throws against being charmed, and magic can’t put Zilla to sleep.',
                    },
                    {
                        name: 'Sunlight Sensitivity',
                        text:
                            'While in sunlight, Zilla has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.',
                    },
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            'Zilla is 5 feet tall, pale, with a strong, triangular face and precise features. She has short, side-swept jet-black hair and disengaged grey eyes. She wears a tailored grey pea-coat buttoned up to her neck, and thick cotton slacks. Her boots are a deep brown and utilitarian, and at least three sizes larger than one would expect. She carries a slim leather tome about the size of a placemat.\nFor a celebrity feel-alike, think Robert Patrick?',
                    },
                    { name: 'Indagator (title)', text: 'An investigator.' },
                    {
                        name: 'Spellcasting',
                        text:
                            'Zilla is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). Zilla has the following cleric spells prepared:\nCantrips (at will): light, sacred flame, thaumaturgy\n1st level (4 slots): cure wounds, guiding bolt, sanctuary\n2nd level (3 slots): lesser restoration, spiritual weapon\n3rd level (2 slots): dispel magic, spirit guardians',
                    },
                    {
                        name: 'Innate Spellcasting',
                        text:
                            'Zilla’s innate spellcasting ability is Charisma (spell save DC 11). Zilla can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie fire',
                    },
                ],
                actions: [
                    {
                        name: 'Mace',
                        text:
                            'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage.',
                    },
                ],
            },
            {
                name: 'Zod',
                size: 'Small',
                type: 'Humanoid (kobold)',
                alignment: 'lawful evil',
                AC: '12',
                HP: '8 (2d6 +2)',
                speed: '30 ft.',
                strength: 7,
                dexterity: 15,
                constitution: 9,
                intelligence: 8,
                wisdom: 7,
                charisma: 8,
                senses: 'darkvision 60 ft.',
                languages: 'Common, Draconic',
                challenge: 0.125,
                traits: [
                    {
                        name: 'Appearance and Mannerisms',
                        text:
                            '\nself-conscious of: \nwants to be (thought of as): \nmodest about:',
                    },
                    { name: 'Purpose', text: '' },
                    { name: 'Background', text: '' },
                    {
                        name: 'Sunlight Sensitivity',
                        text:
                            'While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.',
                    },
                    {
                        name: 'Pack Tactics',
                        text:
                            'The kobold has advantage on an attack roll against a creature if at least one of the kobold’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
                    },
                ],
                actions: [
                    {
                        name: 'Dagger',
                        text:
                            'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.',
                    },
                    {
                        name: 'Sling',
                        text:
                            'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.',
                    },
                ],
                environments: [
                    'Arctic',
                    'Coastal',
                    'Desert',
                    'Forest',
                    'Hill',
                    'Mountain',
                    'Swamp',
                    'Underdark',
                    'Urban',
                ],
            },
        ],
        spells: [
            {
                name: 'Monk Sanctuary',
                level: 1,
                school: 'Abjuration',
                castingTime: '1 bonus action',
                range: '30 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a small silver mirror',
                },
                duration: '1 minute',
                description:
                    'You ward yourself against attack. Until the spell ends, any creature who targets you with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball.\nIf you make an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends.',
            },
            {
                name: 'Obsidian Shards',
                level: 3,
                school: 'Evocation',
                castingTime: '1 action',
                range: '30 feet',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'an obsidian blade',
                },
                concentration: true,
                duration: 'up to 1 minute',
                description:
                    'You commune with Aulë, the God of the Forge. He hammers an ingot of celestial obsidian, causing to appear a cloud of shards in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 radiant damage when it enters the spell’s area for the first time on a turn or starts its turn there.',
                higherLevel:
                    'When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 4th.',
            },
            {
                name: 'These Rocks Look Great',
                level: 2,
                school: 'Enchantment',
                ritual: true,
                castingTime: '1 action',
                range: 'Touch',
                components: {
                    verbal: true,
                    somatic: true,
                    material: true,
                    materialMaterial: 'a pebble and a dwarven beard hair',
                },
                duration: '10 minutes',
                description:
                    'This spell wards a willing dwarf you touch and creates a mystic connection between you. Choose one of the following wards; you and the target gain that ward until the spell ends.\n- You and the target gain a +2 bonus to AC and gain 2d6 temporary hit points each (roll once for both), which are lost when the spell ends.\n- You and the target are immune to being charmed and frightened and cannot be possessed.\n- You and the target are immune to being petrified. In addition, you or the target may use an action to cast the mold earth cantrip.\n- You and the target add +5 to any skill or ability check in which stone is concerned.\nThe spell ends if you or the target drop to 0 hit points. It also ends if the spell is cast again on either of the connected creatures. You can dismiss the spell as a bonus action.',
                higherLevel:
                    'When you cast this spell using a spell slot of 3rd level or higher,  you can target one additional dwarf for each slot level above 2nd.',
            },
            {
                name: 'Third Eye',
                level: 2,
                school: 'Necromancy',
                castingTime: '1 bonus action',
                range: '60 feet',
                components: { somatic: true },
                duration: '1 minute',
                description:
                    'A fleshy, grotesque eye emerges from your forehead and remains for the duration. When you cast the spell, you are able to discern the embodied life energies of those with whom you have close relationships. You may do one of the following:  \n- If a creature is blinded, and the cause of that condition allows a saving throw to dispel, your Third Eye allows that creature to attempt that saving throw again now. If they still succeed, the blindness ends. If they fail, the creature can roll their next ability check with disadvantage that otherwise would have failed automatically due to blindness.  \nAs a bonus action on your turn, you may carry out one of the listed choices from above.\nAfter using this ability, until the end of your next long rest, you take disadvantage on all ability checks and saving throws based on Charisma as the malevolent eye throbs noticeably on your forehead.',
            },
        ],
    });
});
