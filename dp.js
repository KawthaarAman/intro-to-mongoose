
const mongoose = require('mongoose')

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}

module.exports = connectToDatabase