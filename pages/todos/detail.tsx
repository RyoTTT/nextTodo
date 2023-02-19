import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { TodoList } from "../../atoms/atoms";

const detail = () => {
  const todos = useRecoilValue(TodoList);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
            <p>{todo.text}</p>
            <p>{todo.detail}</p>
            <p>{todo.state === 1 ? "未完了" : todo.state === 2 ? "進行中" : "完了"}</p>
            <p>{todo.date}</p>

            <button>削除</button>
            //todoを遷移先ページに渡したい
            <Link href="/todos/id"><button>編集</button></Link>
        </div>
      ))}
    </div>
  );
};

export default detail;
