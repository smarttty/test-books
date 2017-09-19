Ext.define('BOOK.model.Book', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'genre', type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'year', type: 'int'}
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:8000/api/books',
        limitParam: false,
        noCache: false,
        pageParam: false,
        startParam: false,
        writer:{
            writeAllFields: true
        }
    }
});
