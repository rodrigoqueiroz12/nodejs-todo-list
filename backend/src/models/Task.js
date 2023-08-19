const connection = require("./Connection")

const getTasks = async () => {
  const tasks = await connection.execute("SELECT * FROM tasks")

  return tasks
}

module.exports = {
  getTasks,
}
