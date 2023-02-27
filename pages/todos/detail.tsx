import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodoList, TodoType } from "../../atoms/atoms";

const Detail = () => {
  const [todos,setTodos] = useRecoilState(TodoList);
  const [displayedTodoList, setDisplayedTodoList] = useState<any>([]);
  const [filteredTodoList, setFilteredTodoList] = useState<any>([]);
  const [filterState, setFilterState] = useState<boolean>(false);

    
  useEffect(() => {
    if (filteredTodoList.length > 0) {
      setDisplayedTodoList([...filteredTodoList])
    } else if (filterState === true && filteredTodoList.length === 0) {
      setDisplayedTodoList([...todos]);
    }
    else {
      setDisplayedTodoList(todos);
    }
  }, [todos, filteredTodoList])
    const todoDelete = (id:number) => {
        const removeTodo = todos.filter((todo:any)=> todo.id !== id);
        setTodos(removeTodo);
    }

    const todoStateChange1 = (targetTodo: any) => {
        const newTodoList = todos.map((todo: any) => {
          if (targetTodo.id === todo.id) {
            return { ...todo, state: 1 }
          } else {
            return todo
          }
        })
        setTodos(newTodoList);
      };

      const todoStateChange2 = (targetTodo: any) => {
        const newTodoList = todos.map((todo: any) => {
          if (targetTodo.id === todo.id) {
            return { ...todo, state: 2 }
          } else {
            return todo
          }
        })
        setTodos(newTodoList);
      };

      const todoStateChange3 = (targetTodo: any) => {
        
        const newTodoList = todos.map((todo: any) => {
          if (targetTodo.id === todo.id) {
            return { ...todo, state: 3 }
          } else {
            return todo
          }
        })
        setTodos(newTodoList);
      };

      const listSort = (todos: any) => {
        const copyTodoList = [...todos];
        copyTodoList.sort((a: any, b: any) => {
          if (a.state < b.state) {
            return -1;
          }
          if (a.state > b.state) {
            return 1;
          }
          return 0;
        });
        setTodos(copyTodoList);
      };
      const todoFilter1 = (todos:any) => {
        const filterTodoList = todos.filter((todo:any)=> todo.state === 1)
        setFilteredTodoList([...filterTodoList])
        if (todos.length > 0) {
          setFilterState(true);
        } else {
          setFilterState(false);
        }
      }

      const todoFilter2 = (todos:any) => {
        const filterTodoList = todos.filter((todo:any)=> todo.state === 2)
        setFilteredTodoList([...filterTodoList])
        if (todos.length > 0) {
          setFilterState(true);
        } else {
          setFilterState(false);
        }
      }
      const todoFilter3 = (todos:any) => {
        const filterTodoList = todos.filter((todo:any)=> todo.state === 3)
        setFilteredTodoList([...filterTodoList])
        if (todos.length > 0) {
          setFilterState(true);
        } else {
          setFilterState(false);
        }
      }

      const resetTodoList = () => {
        setFilteredTodoList([])
        setFilterState(false);
      }

  return (
    <>
    <div>
        <p>絞り込み:</p>
        
            <button onClick={()=>todoFilter1(todos)}>未完了</button>
            <button onClick={()=>todoFilter2(todos)}>進行中</button>
            <button onClick={()=>todoFilter3(todos)}>完了</button>
            <button onClick={resetTodoList}>戻す</button>
        <button onClick={()=>listSort(todos)}>並び替え</button>
    </div>
    <div>
      {displayedTodoList.map((todo:any) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <p>{todo.detail}</p>
          <p>
            {todo.state === 1 ? "未完了" : todo.state === 2 ? "進行中" : "完了"}
          </p>
          <p>{todo.date}</p>

          <button onClick={() => todoDelete(todo.id)}>削除</button>
            <button onClick={()=>todoStateChange1(todo)}>未完了</button>
            <button onClick={()=>todoStateChange2(todo)}>進行中</button>
            <button onClick={()=>todoStateChange3(todo)}>完了</button>         
          <Link href={{ pathname: "/todos/id", query: { ...todo } }}>編集する</Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default Detail;
