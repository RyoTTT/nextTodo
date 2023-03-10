import { TodoList, TodoType } from "@/atoms/atoms";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  Button,
  Text,
  Heading,
  Center,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Id = () => {
  const [editText, setEditText] = useState<string>("");
  const [editDetail, setEditDetail] = useState<string>("");
  const [editDate, setEditDate] = useState<string>("");

  const [todos, setTodos] = useRecoilState(TodoList);
  const router = useRouter();

  const Edittext = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditText(e.target.value);
  };
  const EditDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setEditDetail(e.target.value);
  };
  const EditDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditDate(e.target.value);
  };
  const updateTodo = () => {
    const newTodo: TodoType = {
      id: Number(router.query.id),
      text: editText,
      state: Number(router.query.state),
      detail: editDetail,
      date: editDate,
    };
    setTodos((todos) =>
      todos.map((todo: any) =>
        todo.id === Number(router.query.id) ? newTodo : todo
      )
    );
    console.log(todos);
  };
  return (
    <>
      <Center margin="20px">
        <Heading>編集ページ</Heading>
      </Center>
      <Center>
      <Box display="flex" gap="10px">
        <Box w="400px">
          <Text fontSize="20px">編集するTODO</Text>
          <Box>
            <Text>タイトル:</Text>
            <Input isReadOnly value={router.query.text} />
          </Box>
          <Box>
            <Text>詳細:</Text>
            <Textarea isReadOnly value={router.query.detail}></Textarea>
          </Box>
          <Box>
            <Text>日付:</Text>
            <Input isReadOnly value={router.query.date} />
          </Box>
        </Box>
        <Box w="400px">
          <Text fontSize="20px">編集後のTODO</Text>
          <Text>タイトル:</Text>
          <Input type="text" onChange={Edittext}></Input>
          <Text>詳細:</Text>
          <Textarea onChange={EditDetail} height="10px"></Textarea>
          <Text>日付:</Text>
          <Input type="date" onChange={EditDate}></Input>
        </Box>
      </Box>
      </Center>
      <Box float="right" marginTop="20px" marginRight="270px">
        <Button onClick={updateTodo} marginRight="10px" backgroundColor="green">
          <Link href="/todos/detail">更新</Link>
        </Button>
        <Button>
          <Link href="/todos/detail">キャンセル</Link>
        </Button>
      </Box>
      
    </>
  );
};

export default Id;
