import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { TodoList } from "../../atoms/atoms";

const detail = () => {
  let todos = useRecoilValue(TodoList);

    const todoDelete = (id:number) => {
        const removeTodo = todos.filter((todo:any)=> todo.id !== id);
        todos = removeTodo;
    }

    const todoStateChange1 = (targetTodo: any) => {
        const newTodoList = todos.map((todo: any) => {
          if (targetTodo.id === todo.id) {
            return { ...todo, state: 1 }
          } else {
            return todo
          }
        })
        todos = newTodoList
      };

      const todoStateChange2 = (targetTodo: any) => {
        const newTodoList = todos.map((todo: any) => {
          if (targetTodo.id === todo.id) {
            return { ...todo, state: 2 }
          } else {
            return todo
          }
        })
        todos = newTodoList
      };
      
      const todoStateChange3 = (targetTodo: any) => {
        const newTodoList = todos.map((todo: any) => {
          if (targetTodo.id === todo.id) {
            return { ...todo, state: 3 }
          } else {
            return todo
          }
        })
        todos = newTodoList
      };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <p>{todo.detail}</p>
          <p>
            {todo.state === 1 ? "未完了" : todo.state === 2 ? "進行中" : "完了"}
          </p>
          <p>{todo.date}</p>

          <button onClick={() => todoDelete(todo.id)}>削除</button>
          <select>
            <option onClick={()=>todoStateChange1(todo)}>未完了</option>
            <option onClick={()=>todoStateChange2(todo)}>進行中</option>
            <option onClick={()=>todoStateChange3(todo)}>完了</option>

          </select>
          <Link href={{ pathname: "/todos/id", query: { ...todo } }}>編集する</Link>
        </div>
      ))}
    </div>
  );
};

export default detail;
