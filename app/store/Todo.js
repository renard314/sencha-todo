Ext.define("GS.store.Todo",{
	extend:"Ext.data.Store",
	requires: "Ext.data.proxy.LocalStorage",
	config: {		
		model: "GS.model.Todo",
		storeId:"todos",
		sorters: [
				{property:'timestamp',direction:'DESC'}
			],
		grouper: {
			groupFn: function(record){
				if (record.get('completed')){
					return "completed";
				} else {
					return "tasks";
				}
			},
			sortProperty: 'completed'
		},
		proxy:{
			type:"localstorage",
			id:"todostore"
		},
		autoLoad:true
	}
});