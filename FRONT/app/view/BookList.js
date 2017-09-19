Ext.define('BOOK.view.BookList', {
        extend: 'Ext.window.Window',
        alias: 'widget.bookList',
        title: 'Библиотека',
        controller: 'BookController',
        items: {
            itemId: 'booksGrid',
            xtype: 'grid',
            name: 'bookStore',
            columns: [
                {text: 'Название', dataIndex: 'name', flex: 1},
                {text: 'Автор', dataIndex: 'author', flex: 1},
                {text: 'Жанр', dataIndex: 'genre', flex: 1},
                {text: 'Год', dataIndex: 'year', flex: 1}
            ],
            store: {
                storeId: 'bookStore'
            }
        },
        autoShow: true
    }
);
