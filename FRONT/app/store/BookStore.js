Ext.define('BOOK.store.BookStore', {
    extend: 'Ext.data.Store',
    model: 'BOOK.model.Book',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8000/api/books',
        appendId: true,
        limitParam: false,
        noCache: false,
        pageParam: false,
        startParam: false,
        reader: {
            type: 'json',
        }

    },
    autoLoad: true
});

