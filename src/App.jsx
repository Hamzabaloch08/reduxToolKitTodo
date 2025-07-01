import AddTodo from "./components/addTodo"
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