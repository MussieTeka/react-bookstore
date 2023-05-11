import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import { removeBook, addBook } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (bookToDelete) => {
    dispatch(removeBook(bookToDelete));
  };

  const handleAddBook = (bookToAdd) => {
    dispatch(addBook(bookToAdd));
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
