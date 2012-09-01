Ext.define("GS.view.Main", {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar',
		'Ext.dataview.List',
		'Ext.field.Text'
    ],
	config:{
		layout: {
			type:'fit'
		},
		fullscreen:true,
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'Todo'
			}, 
			{
				xtype:'textfield',
				id:'todoinput',
				docked:'top',
				placeHolder:'New Task'				
			},
			{
				xtype:'list',
				store:"todos",
				id:'todolist',
				itemTpl:['{text}'],
				grouped:true
			}			
		]
	}
});
