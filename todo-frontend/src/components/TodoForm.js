import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/todos', { title });
      setTitle(''); // Clear the input field
      fetchTodos(); // Refetch todos after adding a new one
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;