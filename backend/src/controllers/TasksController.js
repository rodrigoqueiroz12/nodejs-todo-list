const Task = require("../models/Task")

const getTasks = async (req, res) => {
  const tasks = await Task.getTasks()

  return res.status(200).json(tasks)
}

module.exports = {
  getTasks,
}
