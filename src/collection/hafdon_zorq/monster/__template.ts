module.exports = {
    name: String,

    resist: Array,
    hp: Object,
    speed: Object,
    spellcasting: [
        {
            name: String,
            headerEntries: Array(String),
            will: Array(String),
            daily: Object,
            ability: String,
        },
    ],
};
