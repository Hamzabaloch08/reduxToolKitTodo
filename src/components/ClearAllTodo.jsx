import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllTodo } from '../features/todo/todoSlice'

function ClearAllTodo() {

    const dispatch = useDispatch()

  return (
    <div 
    className='flex justify-center p-10'
    >
    <button
    className='bg-red-500 text-white p-3 rounded-xl cursor-pointer hover:bg-red-600' 
    onClick={()=>dispatch(clearAllTodo())}
    >Clear all todo</button>
    </div>
  )
}

export default ClearAllTodo