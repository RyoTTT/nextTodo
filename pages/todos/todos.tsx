import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { TodoList } from '../../atoms/atoms'

type todotype = [{
  id:number,
  text:string,
  state:number
}]

const  Todos= () => {
const [todos,setTodos] = useRecoilState<todotype>(TodoList);
const [todoText,setTodoText] = useState("");
const [todoId,setTodoId] = useState(1);

const textSet = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoText(e.target.value);
}

const addTodoList = () => {
    const newTodo:todotype = {
        id:todoId,
        text:todoText,
        state:1
    }
    setTodos(...todos,newTodo)
    console.log(todos)
    setTodoId(todoId + 1);
}
  return (
    <div>
        <input onChange={textSet} type="text" value={todos.text}></input>
        <button onClick={addTodoList}>追加</button>
    </div>
  )
}

export default Todos;