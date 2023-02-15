import {atom} from 'recoil';

export type TodoType = {
    id:number,
    text:string,
    state:number
  }

export const TodoList =  atom<TodoType[]>({
    key:"todo",
    default: []
})