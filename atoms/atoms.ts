import {atom} from 'recoil';

export type TodoType = {
    id:number,
    text:string,
    state:number,
    detail:string,
    date:string
  }

export const TodoList =  atom<TodoType[]>({
    key:"todo",
    default: []
})