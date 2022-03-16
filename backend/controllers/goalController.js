const getGoals = async (req, res) => {
    res.status(200).send("got them new goals")
}

const postGoals = async (req, res) => {
    // res.status(201).send("posted new goals")
    if(!req.body.text){
        res.status(400).json({Error: "No Text Entered!"})
    }
    else{
        res.status(200).json({
            Goal: req.body.text
        })
    }
}

const deleteGoals = async (req, res) => {
    res.status(200).send(`deleted the goal #${req.params.id}`)
}

const updateGoals = async (req, res) => {
    res.status(200).send(`updated the goal #${req.params.id}`)
}


module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}
