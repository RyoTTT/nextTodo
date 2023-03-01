import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoList, TodoType } from "../../atoms/atoms";
import {
  Center,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";

const Todos = () => {
  const router = useRouter();
  const auth = getAuth();
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
    setTodoId(todoId + 1);
    setTodoText("");
    setTodoDetails("");
    setTodoDate("");
  };

  const LogOut = async () => {
    await signOut(auth);
    await router.push("/");
  };

  return (
    <>
      <div>
        <Button onClick={LogOut}>←ログアウト</Button>
      </div>
      <Center>
        <VStack w="450px">
          <Text fontSize="25px" margin="20px">TODOを追加する</Text>
          <Input onChange={textSet} type="text" value={todoText} placeholder="タイトル"/>
          <Textarea onChange={detailSet} placeholder="詳細"/>
          <Input type="date" onChange={dateSet} />
          <Button onClick={addTodoList} float="right">追加</Button>
        </VStack>
      </Center>
      <Center w="100px"float="right">
      <Button padding="10px 10px"><Link href="/todos/detail">TODOリストへ</Link></Button>
      </Center>
    </>
  );
};

export default Todos;
