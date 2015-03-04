var express = require('express');
var router = express.Router();
var todos = require('./api/todo'); 

/* Routes. */
router.route('/todos')
    .post(function(req,res) { todos.addTodo(req,res) })
    .get(function(req,res) { todos.getAllTodos(req,res) });

module.exports = router;