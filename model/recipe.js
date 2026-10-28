
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 2, maxlength: 100, trim: true },
    instructions: { type: [String] },
    prepTime: { type: Number, required: true, unique: true, min: 5, max: 500 },
    difficulty: { type: String, required: true, enum: ['easy', 'medium', 'hard'] },
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)