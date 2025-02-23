import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoList /> {/* Only render TodoList here */}
    </div>
  );
};

export default App;
