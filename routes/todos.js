var mongoose = require('mongoose');  
var Todo = require('../models/todo'); 

//module.exports.addPost = function(req, res) {};

//module.exports.getAllPosts = function(req, res) {};


module.exports.addTodo = function(req, res) {  
    var todo = new Todo(req.body.todo);
    todo.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({todo: todo});
    });
};