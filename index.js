const express = require('express')
const session = require('express-session')
const app = express()
const port = 5001

const todoController = require('./controller/todo')

app.use(session({
    secret: 'catcat', resave: false, saveUninitialized: true
}))

// 使用 EJS 當模板系統
app.set('view engine', 'ejs')

// middleware
app.use(express.json())  // parse JSON requests
app.use(express.urlencoded({ extended: true }))  // parse application/x-www-form-urlencoded

// login
app.use((req, res, next) => {
    res.locals.isLogin = req.session.isLogin  // res.locals 可以在 view 直接使用
    next()
})

// edit body
app.get('/hi', (req, res) => res.send('hi'))

// render template
app.get('/hello', (req, res) => res.render('hello'))

// GET
app.get('/todos', todoController.getAll)
app.get('/todo/:id', todoController.get)
app.get('/', todoController.newTodo)

// POST
app.post('/todos', todoController.createTodo)

app.get('/login', (req, res) => res.render('login'))
app.post('/login', (req, res) => {
    if (req.body.password === 'abc') {
        req.session.isLogin = true
        res.redirect('/')
    } else {
        res.redirect('/login')
    }
})
app.get('/logout', (req, res) => {
    req.session.isLogin = false
    res.redirect('/')
})

// start server, support hard reload
app.listen(port, () => console.log(`app listen to ${port}`))
