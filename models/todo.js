const todos = [
    '1st', '2nd', '3rd'
]

const todoModel = {
    getAll: () => { return todos },
    get: id => { return todos[id-1] }
}


module.exports = todoModel
