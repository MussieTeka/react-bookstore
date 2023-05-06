import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ handleAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    handleAddBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
        </div>
        <div>
          Author:
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

AddBookForm.propTypes = {
  handleAddBook: PropTypes.func.isRequired,
};

export default AddBookForm;
