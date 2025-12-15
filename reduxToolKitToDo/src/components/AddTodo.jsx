import React, {useState,useEffect,useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'


function AddTodo() {


    const [input,setInput]=useState('')
    const inputRef = useRef(null)
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        if(edit.id){
          dispatch(updateTodo({id:edit.id,text:input}))
        }else if(input){
          dispatch(addTodo(input))
        }else alert('ENTER INPUT')
        
        setInput('')
    }
    const edit=useSelector(state=>state.edit)
    useEffect(() => {
        if (edit && edit.id) {
            setInput(edit.text)
            inputRef.current.focus()
        }
    }, [edit])
    

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {edit.id? "Update Todo":"Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo