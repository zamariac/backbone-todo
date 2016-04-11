import Backbone from 'backbone';

const TodoModel = Backbone.Model.extend({
	defaults: {
		inputText : '',
	},

	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/mariasto-do',
	idAttribute: '_id',

}); 

export default TodoModel;