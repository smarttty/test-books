Ext.define('BOOK.controller.BookController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.BookController',
    models: ['Book'],
    stores: ['BookStore'],
    views: ['BookList'],
    require:['widget.bookwindow'],
    init: function () {
        var bookStore = Ext.create('BOOK.store.BookStore');
        this.control({
            '#booksGrid': {
                render: function (grid) {
                    grid.reconfigure(bookStore)
                },
                itemclick: this.createForm
            },
            '#b_new': {
                click: this.createBook
            },
            '#b_save': {
                click: this.updateBook
            },
            '#b_del': {
                click: this.deleteBook
            },
            '#b_clear':{
                click: this.clearForm
            }


            }
        )
    },
    createForm: function (grid, record) {
        var view = Ext.widget('bookWindow');
        view.down('form').loadRecord(record);
    },
    createBook: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            book = Ext.create('BOOK.model.Book', values );
        book.save({
            success : function(){
               Ext.Msg.alert('Книга успешно создана');
            },
            failure: function(){
                Ext.Msg.alert('Ошибка');
            },
            callback: function () {
                win.close();
                Ext.ComponentQuery.query('#booksGrid')[0].getStore().load();
            }
        });
    },
    updateBook: function (button){
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
        values.id = id;
        var book = Ext.create('BOOK.model.Book', values);
        book.save({
            success : function(){
                Ext.Msg.alert('Книга успешно изменена');
            },
            failure: function(){
                Ext.Msg.alert('Ошибка');
            },
            callback: function () {
                win.close();
                Ext.ComponentQuery.query('#booksGrid')[0].getStore().load();
            }
        });
    },
    deleteBook: function (button){
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
        values.id = id;
        var book = Ext.create('BOOK.model.Book', values);
        book.erase({
            success: function () {
                Ext.Msg.alert('Книга успешно удалена');
            },
            failure: function () {
                Ext.Msg.alert('Ошибка');
            },
            callback: function () {
                win.close();
                Ext.ComponentQuery.query('#booksGrid')[0].getStore().load();
            }
        });
    },
    clearForm: function (grid, record){
            var view = Ext.widget('bookWindow');
            view.down('form').getForm().reset();
    }


});