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
    },

    newTodo: (req, res) => {
        res.render('addTodo')
    },

    createTodo: (req, res) => {
        const content = req.body.content
        res.end(content)  // send and end
    }
}

module.exports = todoController
