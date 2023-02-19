import { TodoList } from '@/atoms/atoms';
import React from 'react'
import { useRecoilValue } from 'recoil';

const id = () => {
    const todos = useRecoilValue(TodoList);
  return (
    <div>
        
    </div>
  )
}

export default id