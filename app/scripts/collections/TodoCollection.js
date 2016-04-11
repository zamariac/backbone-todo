import Backbone from 'backbone';
import TodoModel from '../models/TodoModel';

const TodoCollection = Backbone.Collection.extend({
	model: TodoModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/mariasto-do'
});

export default TodoCollection;