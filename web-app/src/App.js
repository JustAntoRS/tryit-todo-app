import TodoList from './components/todoList';
import "./App.css"

function App() {
  return (
    <div className='tryit-todo-app'>
      <div className='tryit-todo-title'>
        <h1> TryIt Todo</h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
