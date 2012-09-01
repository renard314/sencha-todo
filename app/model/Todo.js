Ext.define("GS.model.Todo",{
	extend:"Ext.data.Model",
	requires: 'Ext.data.identifier.Uuid',
	config:{
		idProperty: 'id',
		identifier: {
	                    type: 'uuid'
	                },
		fields: [
			{name: 'id', type :'int'},
			{name: 'timestamp', type:'int'},
			{name: 'text', type:'string'},
			{name: 'completed', type:'boolean', defaultValue:false}
		]
	}
});