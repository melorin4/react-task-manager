import {useState} from "react";
import TodoItem from './components/TodoItem.tsx';
import {dummydata } from './data/todos';
import AddTodoForm from "./components/AddTodoForm.tsx";
function App() {
  const [todos, setTodos] = useState(dummydata);

  function setTodoCompleted(id: number, completed: boolean){
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? {...todo, completed}: todo))
  );
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Task Manager</h1>
      <div className='max-w-2xl mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
        <AddTodoForm />
        <div className='space-y-2'>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}
            onCompletedChange={setTodoCompleted} />

            
            ))}
        </div>
      </div>
    </main>
  )
}

export default App
