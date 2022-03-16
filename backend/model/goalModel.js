const { timeStamp } = require("console")
const mongoose = require("mongoose")

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "no goals added yet..."]
    }


},{
    timestamps:true
})


module.exports = mongoose.model("Goal", goalSchema)