const express = require("express")

/* Controllers */
const TasksController = require("./controllers/TasksController")

/* Middleware */
const TasksMiddleware = require("./middleware/TasksMiddleware")

const router = express.Router()

router.get("/tasks", TasksController.getTasks)
router.post(
  "/tasks",
  TasksMiddleware.validateFieldTitle,
  TasksController.create,
)
router.put(
  "/tasks/:id",
  TasksMiddleware.validateFieldTitle,
  TasksMiddleware.validateFieldStatus,
  TasksController.update,
)
router.delete("/tasks/:id", TasksController.destroy)

module.exports = router
