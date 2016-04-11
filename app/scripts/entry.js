// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import TodoCollection from './collections/TodoCollection';
import TodoItemView from './views/TodoItemView';

// let workTodoList = new TodoListView();
//let personalTodoList = new TodoListView();

// $('body').append(workTodoList.$el);
//$('body').append(personalTodoList.$el);

let todoList = new TodoCollection();

$(document).ready(function(){
var settings = {
	success: function(){
		todoList.forEach((task) => {
			//console.log(task.get('inputText'));
			let newTaskView = new TodoItemView(task.get('inputText'));
			$('#todo-list1').append(newTaskView.el);
			console.log(newTaskView);
	});
		
},

};
todoList.fetch(settings);


	console.log($('.push'));
	$('.push').on('click',(e) =>{

	e.preventDefault();
	let newtoDo = {
		inputText: $('#todo-text').val()

	};
	todoList.create(newtoDo);
	let newTaskView = new TodoItemView(newtoDo.inputText);
	$('#todo-list1').prepend(newTaskView.el);
	
});


});




