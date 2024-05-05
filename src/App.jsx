
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalItems from "./components/TotalItems";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1 className="text-center">React Redux Todo App</h1>
      <AddTodoForm/>
      <TodoList />
      <TotalItems />
    </div>
  );
}

export default App;
