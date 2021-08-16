const express = require('express')
const app = express()
const port = 5001

const todoController = require('./controller/todo')

// 使用 EJS 當模板系統
app.set('view engine', 'ejs')

// edit body
app.get('/', (req, res) => res.send('hello'))

// render template
app.get('/hello', (req, res) => res.render('hello'))

// GET
app.get('/todos', todoController.getAll)
app.get('/todo/:id', todoController.get)

// start server, support hard reload
app.listen(port, () => console.log(`app listen to ${port}`))
