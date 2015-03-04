var express = require('express');
var router = express.Router();
var todos = require('./api/todo'); 

/* Routes. */
router.route('/todos')
    .post(function(req,res) { todos.addTodo(req,res) })
    .get(function(req,res) { todos.getAllTodos(req,res) });

/* Single post routes */
router.route('/todos/:todo_id')  
    //.get(function(req, res) { posts.getSinglePost(req, res, req.params.post_id) })
    .put(function(req, res) { todos.updateTodo(req, res, req.params.todo_id) })
    .delete(function(req, res) { todos.deleteTodo(req, res, req.params.todo_id) });


module.exports = router;