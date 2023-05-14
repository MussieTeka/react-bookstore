import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import AddBookForm from '../components/AddBookForm';
import BookList from '../components/BookList';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <BookList books={books} />
      <AddBookForm />
    </div>
  );
};

export default Books;
