import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { useRef, useState, useEffect } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (editId !== null) {
      inputRef.current?.focus();
    }
  }, [editId]);

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
<ul className="list-none px-4 sm:px-16">
  {todos.map((todo) => (
    <li
      key={todo.id}
      className="mt-4 max-sm:mt-2 flex justify-between items-center gap-3 bg-zinc-800 px-3 py-2 rounded"
    >
      {editId === todo.id ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="text-md text-white bg-zinc-700 px-3 py-2 rounded outline-none w-full sm:w-auto max-sm:px-2 max-sm:py-1 max-sm:text-sm"
        />
      ) : (
        <span className="text-white text-base break-words">{todo.text}</span>
      )}

      <div className="flex  gap-2 max-sm:gap-1 justify-end sm:justify-end">
        {editId === todo.id ? (
          <button
            onClick={() => handleSave(todo.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto  max-sm:py-1 max-sm-text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEditClick(todo)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full sm:w-auto max-sm:text-sm max-sm:py-1 max-sm:px-3"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto max-sm:text-sm max-sm:py-1  max-sm:px-3"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

    </>
  );
}

export default Todos;
