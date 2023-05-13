import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BooksList = ({ books }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.item_id}>
              <div>
                <strong>Title:</strong>
                {' '}
                {book.title}
              </div>
              <div>
                <strong>Author:</strong>
                {' '}
                {book.author}
              </div>
              <div>
                <strong>Category:</strong>
                {' '}
                {book.category}
              </div>
              <div>
                <button type="button" onClick={() => handleDeleteBook(book)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
