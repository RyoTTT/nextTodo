import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoList, TodoType } from "../../atoms/atoms";

const Todos = () => {
  const [todos, setTodos] = useRecoilState<TodoType[]>(TodoList);
  const [todoText, setTodoText] = useState<string>("");
  const [todoDetails, setTodoDetails] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");
  const [todoId, setTodoId] = useState<number>(1);

  const textSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };

  const detailSet = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setTodoDetails(e.target.value);
  };

  const dateSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoDate(e.target.value);
  };

  const addTodoList = () => {
    if (todoText === "" || todoDetails === "" || todoDate === "") return;
    const newTodo: TodoType = {
      id: todoId,
      text: todoText,
      state: 1,
      detail: todoDetails,
      date: todoDate,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
    setTodoId(todoId + 1);
    setTodoText("");
    setTodoDetails("");
    setTodoDate("");
  };
  return (
    <>
    <div>
      <input onChange={textSet} type="text" value={todoText}></input>
      <textarea onChange={detailSet}></textarea>
      <input type="date" onChange={dateSet}></input>
      <button onClick={addTodoList}>追加</button>
      <Link href="/todos/detail">確認</Link>
    </div>

    </>
  );
};

export default Todos;
