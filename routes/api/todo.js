var mongoose = require('mongoose');
var Todo = require('../../models/todo');

module.exports.addTodo = function(req, res) {

	console.log( req.body );
	var todo = new Todo(req.body.todo);
	todo.save( function(err) {
		if (err) {
			res.send(err);
		}
		res.json({todo: todo});
	});
};

module.exports.getAllTodos = function(req, res) {
	Todo.find(function(err, todos) {
		if (err) {
			res.send(err);
		}
		res.json({todos: todos});
	});
};

module.exports.updateTodo = function( req, res, id ) {

	Todo.findByIdAndUpdate( id, { $set: req.body.todo }, function( err, todo ){

		if( err ) {
			res.send( err );
		}
		res.json({todo: todo});
	});
}

module.exports.deleteTodo = function( req, res, id ) {

	Todo.findByIdAndRemove( id, function( err ){
		if( err ) {
			res.send( err );	
		}
		res.sendStatus( 200 );	
	});
}