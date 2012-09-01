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
		Ext.Msg.confirm('Delete Todo', 'Are you sure you want to delete?', function(e) {
				if(e == 'yes'){
					var todos = Ext.getStore('todos');
					todos.removeAt(index);
					todos.sync();
				}
			}
		);

	},
	toggleTodo: function(dataview, index, target, record, e, options) {
		console.log("toggleTodo");
		var completed = record.get('completed');
        record.set("completed", !completed);
        var todos = Ext.getStore('todos');
        todos.sync();		
	},
	addTodo: function(textfield, e, options){
		console.log("addTodo");
		var todos = Ext.getStore('todos');
        todos.add({
            text: textfield.getValue(),
            completed: false,
            timestamp: new Date().getTime()
        });
        todos.sync();
        textfield.setValue("");        
	}
});