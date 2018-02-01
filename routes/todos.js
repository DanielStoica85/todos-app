const express = require('express');
const router = express.Router();

const db = require('../models');

// Get all todos
router.get('/', (req, res) => {
    db.Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            res.send(err);
        });
});

// create a todo
router.post('/', (req, res) => {
    db.Todo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        })
        .catch((err) => {
            res.send(err);
        });
});

// get a todo by id
router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.send(err);
        });
});

// edit a todo
router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({
            _id: req.params.todoId
        }, req.body, {
            new: true
        })
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.send(err);
        });
});

// delete a todo
router.delete('/:todoId', (req, res) => {
    db.Todo.remove({
            _id: req.params.todoId
        })
        .then(() => {
            res.json({
                message: 'Todo deleted.'
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;