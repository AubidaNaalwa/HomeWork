const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const words = new Schema({
    word: { type: String, required: true }
});

const Words = mongoose.model('words', words);

module.exports = Words;