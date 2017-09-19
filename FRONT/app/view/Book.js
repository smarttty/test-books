Ext.define('BOOK.view.Book', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookWindow',
    title: 'Книга',
    autoShow: true,
    model: 'BOOK.model.Book',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            width: 330,
            items: [{
                xtype: 'textfield',
                name : 'genre',
                fieldLabel: 'Жанр'
            },{
                xtype: 'textfield',
                name : 'name',
                fieldLabel: 'Название'
            },{
                xtype: 'textfield',
                name : 'author',
                fieldLabel: 'Автор'
            },{
                xtype: 'numberfield',
                name : 'year',
                fieldLabel: 'Год',
                minValue: 1500,
                maxValue: 2017
            }]
        }];
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                itemId: 'b_new',
                text:'Создать',
                iconCls:'new-icon',
                action: 'new'
            },{
                itemId: 'b_save',
                text:'Изменить',
                iconCls:'save-icon',
                action: 'save'
            },{
                itemId: 'b_del',
                text:'Удалить',
                iconCls:'delete-icon',
                action: 'delete'
            }]
        }];
        this.buttons = [{
            itemId: 'b_clear',
            text: 'Очистить',
            scope: this,
            action: 'clear'
        }];

        this.callParent(arguments);
    }
});