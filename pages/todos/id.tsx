import { TodoList, TodoType } from '@/atoms/atoms';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';

const id = () => {
    const [editTodo, setEditTodo] = useState<TodoType>();
    const [editText,setEditText] = useState<string>("");
    const [editDetail,  setEditDetail] = useState<string>("");
    const [editDate , setEditDate] = useState<string>("");

    const todos = useRecoilValue(TodoList);
    const router = useRouter();

    const Edittext = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEditText(e.target.value);
    }
    const EditDetail = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setEditDetail(e.target.value);
    }
    const EditDate = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEditDate(e.target.value);
    }
    const updateTodo = () => {
        const newTodo:TodoType = {
            id:router.query.id,
            text:editText,
            state:router.query.state,
            detail:editDetail,
            date:editDate
        }
        setEditTodo(newTodo);
    }
  return (
    <div>
        <h1>編集</h1>
        <p>編集するTODO</p>
        <p>タイトル:{router.query.text}</p>
        <p>詳細:{router.query.detail}</p>
        <p>日付:{router.query.date}</p>
        <input type="text" onChange={Edittext}></input>
        <textarea onChange={EditDetail}></textarea>
        <input type="date" onChange={EditDate}></input>
        <button onClick={updateTodo}>更新</button>
        <Link href="/todos/detail">キャンセル</Link>
    </div>
  )
}

export default id