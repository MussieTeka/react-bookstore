import React, { useState } from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';

const Books = () => {
  const [books, setBooks] = useState([]);

  const handleDeleteBook = (bookToDelete) => {
    setBooks(books.filter((book) => book !== bookToDelete));
  };

  const handleAddBook = (bookToAdd) => {
    setBooks([...books, bookToAdd]);
  };

  return (
    <div>
      <h1>Books</h1>
      <BookList books={books} handleDeleteBook={handleDeleteBook} />
      <AddBookForm handleAddBook={handleAddBook} />
    </div>
  );
};

export default Books;
