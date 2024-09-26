const mongoose = require('mongoose');

// Defining Schema
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  image: { type: String, required: true }, // Assuming image is stored as a string (path or filename)
  rating: { type: Number, required: true, min: 1, max: 5 }, // Assuming rating is between 1 and 5
});

// Compiling Schema into Model
const recipeModel = mongoose.model('RecipeItem', recipeSchema);

// Exporting the model
module.exports = recipeModel;
