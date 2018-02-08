const request = require('../utils/request.js')

module.exports = {
  getTasksList(data, success) {
    request.get('tasks', data, success)
  },
  getTask() {

  },
  createTask() {

  },
  deleteTask() {

  },
  completeTask() {

  }
}