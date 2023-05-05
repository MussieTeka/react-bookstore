import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books, handleDeleteBook }) => (
  <div>
    {books.length > 0 ? (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
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

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default BookList;
