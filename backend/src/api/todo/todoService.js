const Todo = require('./Todo')

//Define metodos que serão utilizados com o BD
Todo.methods(['get', 'post', 'put', 'delete'])
//Mostra os dados atulizados
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo