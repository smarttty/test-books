/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'BOOK.Application',

    name: 'BOOK',

    requires: [
        // This will automatically load all classes in the BOOK namespace
        // so that application classes do not need to require each other.
        'BOOK.*'
    ],

    // The name of the initial view to create.
    mainView: 'BOOK.view.BookList'
});
