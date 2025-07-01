import AddTodo from "src/components/AddTodo.jsx"
import ClearAllTodo from "./components/ClearAllTodo"
import Todos from "./components/todos"


function App() {

  return (
    <div className="flex flex-col justify-between h-screen">
    <AddTodo/>
    <Todos/>
    <ClearAllTodo/>
    </div>
  )
}

export default App