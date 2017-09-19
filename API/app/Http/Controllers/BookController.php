<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{
    public function index()
    {
        return book::all();
    }

    public function show(book $book)
    {
        return $book;
    }

    public function store(Request $request)
    {
        $book = book::create($request->all());

        return response()->json($book, 201);
    }

    public function update(Request $request, book $book)
    {
        $book->update($request->all());

        return response()->json($book, 200);
    }

    public function delete(book $book)
    {
        $book->delete();

        return response()->json(null, 204);
    }
}
