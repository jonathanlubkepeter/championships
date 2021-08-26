const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ChampionshipSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: false},
    active: {type: Boolean, default: false},
    category: {type: String, require: true},
    sport: {type: String, require: true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Championship', ChampionshipSchema);