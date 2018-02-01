const express = require('express');
const router = express.Router();

const helpers = require('../helpers/todos');

// Get all todos
router.get('/', helpers.getTodos);

// create a todo
router.post('/', helpers.createTodo);

// get a todo by id
router.get('/:todoId', helpers.getTodo);

// edit a todo
router.put('/:todoId', helpers.updateTodo);

// delete a todo
router.delete('/:todoId', helpers.deleteTodo);

module.exports = router;