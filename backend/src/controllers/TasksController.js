const TasksModel = require("../models/TasksModel")

const getTasks = async (_req, res) => {
  const tasks = await TasksModel.getTasks()

  return res.status(200).json(tasks)
}

const create = async (req, res) => {
  const task = await TasksModel.create(req.body)

  return res.status(200).json(task)
}

const update = async (req, res) => {
  const { id } = req.params

  await TasksModel.update(id, req.body)

  return res.status(204).json()
}

const destroy = async (req, res) => {
  const { id } = req.params

  await TasksModel.destroy(id)

  return res.status(204).json()
}

module.exports = {
  getTasks,
  create,
  update,
  destroy,
}
