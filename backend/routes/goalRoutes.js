const express = require("express")
const router = express.Router()

const {getGoals, postGoals, updateGoals, deleteGoals} = require("../controllers/goalController")

router.get('/', getGoals)

router.post('/', postGoals)

router.put('/:id', updateGoals)

router.delete('/:id', deleteGoals)


module.exports = router