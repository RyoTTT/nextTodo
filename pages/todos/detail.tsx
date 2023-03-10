import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodoList } from "../../atoms/atoms";
import {
  MenuItem,
  MenuList,
  Text,
  Button,
  Menu,
  MenuButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Detail = () => {
  const [todos, setTodos] = useRecoilState(TodoList);
  const [displayedTodoList, setDisplayedTodoList] = useState<any>([]);
  const [filteredTodoList, setFilteredTodoList] = useState<any>([]);
  const [filterState, setFilterState] = useState<boolean>(false);

  useEffect(() => {
    if (filteredTodoList.length > 0) {
      setDisplayedTodoList([...filteredTodoList]);
    } else if (filterState === true && filteredTodoList.length === 0) {
      setDisplayedTodoList([]);
    } else {
      setDisplayedTodoList([...todos]);
    }
  }, [todos, filteredTodoList]);
  const todoDelete = (id: number) => {
    const removeTodo = todos.filter((todo: any) => todo.id !== id);
    setTodos(removeTodo);
  };

  const todoStateChange1 = (targetTodo: any) => {
    const newTodoList = todos.map((todo: any) => {
      if (targetTodo.id === todo.id) {
        return { ...todo, state: 1 };
      } else {
        return todo;
      }
    });
    setTodos(newTodoList);
  };

  const todoStateChange2 = (targetTodo: any) => {
    const newTodoList = todos.map((todo: any) => {
      if (targetTodo.id === todo.id) {
        return { ...todo, state: 2 };
      } else {
        return todo;
      }
    });
    setTodos(newTodoList);
  };

  const todoStateChange3 = (targetTodo: any) => {
    const newTodoList = todos.map((todo: any) => {
      if (targetTodo.id === todo.id) {
        return { ...todo, state: 3 };
      } else {
        return todo;
      }
    });
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
  const todoFilter1 = (todos: any) => {
    const filterTodoList = todos.filter((todo: any) => todo.state === 1);
    setFilteredTodoList([...filterTodoList]);
    if (todos.length > 0) {
      setFilterState(true);
    } else {
      setFilterState(false);
    }
  };

  const todoFilter2 = (todos: any) => {
    const filterTodoList = todos.filter((todo: any) => todo.state === 2);
    setFilteredTodoList([...filterTodoList]);
    if (todos.length > 0) {
      setFilterState(true);
    } else {
      setFilterState(false);
    }
  };
  const todoFilter3 = (todos: any) => {
    const filterTodoList = todos.filter((todo: any) => todo.state === 3);
    setFilteredTodoList([...filterTodoList]);
    if (todos.length > 0) {
      setFilterState(true);
    } else {
      setFilterState(false);
    }
  };

  const resetTodoList = () => {
    setFilteredTodoList([]);
    setFilterState(false);
  };

  return (
    <>
      <div>
        <Menu>
          <MenuButton as={Button}>????????????</MenuButton>
          <MenuList>
            <MenuItem onClick={() => todoFilter1(todos)}>?????????</MenuItem>
            <MenuItem onClick={() => todoFilter2(todos)}>?????????</MenuItem>
            <MenuItem onClick={() => todoFilter3(todos)}>??????</MenuItem>
          </MenuList>
        </Menu>
        <Button onClick={resetTodoList} marginRight="10px" marginLeft="10px">
          ??????
        </Button>
        <Button onClick={() => listSort(todos)} marginRight="10px">
          ????????????
        </Button>
        <Button marginRight="10px">
          <Link href="/todos/todos">TODO?????????</Link>
        </Button>
      </div>
      <div>
        <Grid templateColumns="repeat(20,3fr)" gap={10}>
          {displayedTodoList.map((todo: any) => (
            <GridItem key={todo.id} w="350px" border="ridge" borderColor="brue">
              <Text fontSize="23px" fontWeight="bold">
                {todo.text}
              </Text>
              <Text fontSize="15px">??????:{todo.detail}</Text>
              <Text>
                ????????????:
                {todo.state === 1
                  ? "?????????"
                  : todo.state === 2
                  ? "?????????"
                  : "??????"}
              </Text>
              <Text>{todo.date}</Text>
              <Menu>
                <MenuButton
                  as={Button}
                  marginRight="10px"
                  backgroundColor="#66ffff"
                >
                  ??????????????????
                </MenuButton>
                <MenuList marginRight="10px">
                  <MenuItem onClick={() => todoStateChange1(todo)}>
                    ?????????
                  </MenuItem>
                  <MenuItem onClick={() => todoStateChange2(todo)}>
                    ?????????
                  </MenuItem>
                  <MenuItem onClick={() => todoStateChange3(todo)}>
                    ??????
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                onClick={() => todoDelete(todo)}
                marginRight="10px"
                backgroundColor="yellow"
              >
                ??????
              </Button>
              <Button backgroundColor="#ff367f">
                <Link href={{ pathname: "/todos/id", query: { ...todo } }}>
                  ????????????
                </Link>
              </Button>
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Detail;
