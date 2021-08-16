const todoModel = require('../models/todo')

const todoController = {
    getAll: (req, res) => {
        const todos = todoModel.getAll()
        res.render('todos', { todos })  // ES6 中，{ todos: todos } 可以簡寫為 { todo }
    },

    get: (req, res) => {
        const id = req.params.id
        const todo = todoModel.get(id)
        res.render('todo', { todo })
    }
}

module.exports = todoController
