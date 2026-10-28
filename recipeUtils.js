
const mongoose = require("mongoose")
const recipe = require("./model/recipe")

async function createRecipe() {
    try {
        const newRecipe = await recipe.create({
            name: "Um Ali",
            instructions: "bake at 180C",
            prepTime: "120",
            difficulty: "medium"

        })
        console.log("Recipe created:", recipe)
    } catch (error) {
        console.error("Error creating recipe:", error)
    }

}

async function getAllRecipes() {
    try {
        const recipes = await recipe.find({ name: 'difficulty', prepTime: 1 })
        console.log('All recipes:', recipe)
    } catch (error) {
        console.error('Error fetching recipe from the database:', error)
    }
}

async function getRecipeById(id) {
    try {
        const foundRecipe = await recipe.findById('6adf3ad41d812e190bcf0e76')
        console.log(' found recipe:', foundRecipe);
    } catch (error) {
        console.error('Error fetching recipe from the database:', error);
    }
}

async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updateRecipe = await recipe.findByIdAndUpdate('6adf3ad41d812e190bcf0e76', { prepTime: 60 }, { new: true })
        console.log(' update recipe:', updateRecipe);
    } catch (error) {
        console.error('Error fetching recipe from the database:', error)
    }
}

async function deleteRecipe(recipeId) {
    try {
        const DeleteRecipe = await recipe.findByIdAndDelete('6adf3ad41d812e190bcf0e76')
        console.log(' Delete recipe:', DeleteRecipe)
    } catch (error) {
        console.error('Error fetching recipe from the database:', error)
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    deleteRecipe,
    updateRecipe
}