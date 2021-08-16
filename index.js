const express = require('express')
const app = express()
const port = 5001

const todos = [
    '1st', '2nd', '3rd'
]

// 使用 EJS 當模板系統
app.set('view engine', 'ejs')

// edit body
app.get('/', (req, res) => res.send('hello'))

// render template
app.get('/hello', (req, res) => res.render('hello'))

// GET
app.get('/todos', (req, res) => res.render('todos', { todos }))  // ES6 中，{ todos: todos } 可以簡寫為 { todo }
app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const todo = todos[id - 1]
    res.render('todo', { todo })
})

// start server, support hard reload
app.listen(port, () => console.log(`app listen to ${port}`))
