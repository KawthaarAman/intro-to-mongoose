
const mongoose = require("mongoose")

const dotenv = require('dotenv')

dotenv.config()

const connectToDatabase = require('./dp')

const recipeUtils = require('./recipeUtils')

connectToDatabase()

recipeUtils.getRecipeById()