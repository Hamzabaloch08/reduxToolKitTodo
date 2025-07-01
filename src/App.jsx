import AddTodo from "./components/AddTodo";
import ClearAllTodo from "./components/ClearAllTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <AddTodo />
      <Todos />
      <ClearAllTodo />
    </div>
  );
}

export default App;
