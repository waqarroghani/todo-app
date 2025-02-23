import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm'; // Import TodoForm

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/todos');
      setTodos(response.data); // Update state with fetched todos
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Delete a todo
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/api/todos/${id}`);
    fetchTodos(); // Refetch todos after deletion
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm fetchTodos={fetchTodos} /> {/* Pass fetchTodos as a prop */}
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;