import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: `item${Date.now()}`,
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
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
        <div>
          Category:
          <select value={category} onChange={(event) => setCategory(event.target.value)} required>
            <option value="">Select a category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
