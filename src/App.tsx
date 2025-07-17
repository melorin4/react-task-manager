import {useEffect, useState} from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import {Todo} from "./types/todo"
import { dummydata } from "./data/todos";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();
  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Task Manager</h1>
      <div className='max-w-2xl mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
        <AddTodoForm
        onSubmit={addTodo} />
        <TodoList 
        todos={todos}
        onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo}/>
        

      </div>
      <TodoSummary
      todos={todos}
      deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App
