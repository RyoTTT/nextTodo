import React from 'react'
import { useRecoilValue } from 'recoil'
import {TodoList} from '../../atoms/atoms';


const detail = () => {
    const todos = useRecoilValue(TodoList);
    const test = () => {
        console.log(todos);
    }

  return (
    <div><button onClick={test}>確認</button></div>
  )
}

export default detail