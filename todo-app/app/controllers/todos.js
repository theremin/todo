import Ember from 'ember';

var TodosController = Ember.ArrayController.extend({
    actions : {
        createTodo: function() {
            var title = this.get('newTitle');

            if( !title.trim() )
            {
                return false;
            }

            var todo = this.store.createRecord( 'todo', {
                title: title,
                isCompleted: false
            });

            this.set('newTitle', '');

            todo.save();
        },
    },

    remaining : function() {

        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection : function() {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining')
});

export default TodosController;
