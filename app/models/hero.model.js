var mongoose = require('mongoose');

var HeroSchema = mongoose.Schema({
    name: String,
    title: String,
    story: String
}, {
    timestamps: true
});
HeroSchema.index({ name: 1}, { unique: true });

module.exports = mongoose.model('Hero', HeroSchema);
