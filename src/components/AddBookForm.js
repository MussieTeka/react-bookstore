import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import '../styles/components/AddBookForm.css';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = {
      item_id: title,
      title,
      author,
      category,
    };
    await dispatch(addBook(newBook));
    dispatch(fetchBooks());
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="add-book">
      <hr className="horizontal-line" />
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="title">
          <input type="text" placeholder="Book title" value={title} onChange={(event) => setTitle(event.target.value)} required />
        </div>
        <div className="author">
          <input type="text" placeholder="Book author" className="author" value={author} onChange={(event) => setAuthor(event.target.value)} required />
        </div>
        <div className="category">
          <select value={category} onChange={(event) => setCategory(event.target.value)} required>
            <option value="">Category</option>
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
