const mongoose  = require("mongoose")
const Goal = require("../model/goalModel")
mongoose

const getGoals = async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
}

const postGoals = async (req, res) => {
    // res.status(201).send("posted new goals")
    if(!req.body.text){
        res.status(400).json({Error: "No Text Entered!"})
    }
    else{
        
        const goal = await Goal.create({
            text: req.body.text
        })

        res.status(200).json(goal)
    }
}

const updateGoals = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id) ){
        res.status(400).json({
            id: req.params.id,
            Error: "Invalid Id Entered, Please Enter 24 letter goal id"
        })
    }
    else{
    const goal = await Goal.findById(req.params.id)
    console.log(goal)

    if(!goal){
        res.status(404).json({Error: "Goal Not Found!"})
    }
    else if(!req.body.text){
        res.status(400).json({Error: "No Goal data entered!"})
    }
    else{
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatedGoal)

    }
    }
}

const deleteGoals = async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404).json({Error: "Goal Not Found!"})
    }
    else{
        await Goal.findByIdAndDelete(req.params.id)
        res.status(200).json({
            id: req.params.id,
            status: "removed!"
        })
    }
}




module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}
