const express = require("express")

/* Controllers */
const TasksController = require("./controllers/TasksController")

const router = express.Router()

router.get("/tasks", TasksController.getTasks)

module.exports = router
