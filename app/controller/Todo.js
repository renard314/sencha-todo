Ext.define("GS.controller.Todo",{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			newTodoField: '#todoinput',
			todoList:'#todolist'
		},
		control:{
			newTodoField: {
				action:"addTodo"
			},
			todoList: {
				itemswipe:"toggleTodo",
				itemtaphold:"deleteTodo"
				
			}
		}
	},
	deleteTodo: function(dataview, index, target, record, e, options){
		console.log("deleteTodo");
	},
	toggleTodo: function(dataview, index, target, record, e, options) {
		console.log("toggleTodo");
	},
	addTodo: function(textfield, e, options){
		console.log("addTodo");
	}
});