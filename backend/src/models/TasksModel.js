const connection = require("./Connection")

const getTasks = async () => {
  const query = "SELECT * FROM tasks"
  const [tasks] = await connection.execute(query)

  return tasks
}

const create = async task => {
  const { title } = task
  const status = "pendente"
  const created_at = new Date(Date.now()).toUTCString()

  const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)"
  const [created] = await connection.execute(query, [title, status, created_at])

  return { insertId: created.insertId }
}

const update = async (taskId, task) => {
  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?"
  const { title, status } = task
  const [updated] = await connection.execute(query, [title, status, taskId])

  return updated
}

const destroy = async taskId => {
  const query = "DELETE FROM tasks WHERE id = ?"
  const [deleted] = await connection.execute(query, [taskId])

  return deleted
}

module.exports = {
  getTasks,
  create,
  update,
  destroy,
}
