# spellcaster

-   Do **not** include `type: 'spellcasting'` property in `spellcaster` section. It causes the upload to break.

## spells

-   for some reason, `0` spells cause a shaped sheet builder error, but don't cause problems with indexing or hover cards

```javascript
spellcasting: [
    {
        name: 'Spellcasting',
        spells: {
            '0': {
                spells: [
                    '{@spell infestation|XGE}',
                    '{@spell mind sliver|UASorcererAndWarlock}',
                    '{@spell thorn whip|PHB}',
                ],
            },
        },
        ability: 'int',
    },
];
```
