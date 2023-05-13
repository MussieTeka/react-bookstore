import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/components/BookList.css';

const BooksList = ({ books }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <div>
      {books.length > 0 ? (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-list-item">
              <div className="book-details">
                <div className="book-category">
                  {book.category}
                </div>
                <div className="book-title">
                  {book.title}
                </div>
                <div className="book-author">
                  {book.author}
                </div>
                <div className="book-actions">
                  <button type="button" className="button-actions">Comments</button>
                  <button type="button" className="button-actions" onClick={() => handleDeleteBook(book)}>Delete</button>
                  <button type="button" className="button-actions">Edit</button>

                </div>
              </div>
              <div className="book-progress">
                <span className="progress-circle" />
                <div className="percent">
                  <span className="percent-number">64%</span>
                  <span className="percent-complete">Completed</span>
                </div>
              </div>
              <div className="book-chapter">
                <span className="current-chapter">CUREENT CHAPTER</span>
                <span className="current-lesson">Chapter 17</span>
                <button type="button">UPDATE PROGRESS</button>
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
