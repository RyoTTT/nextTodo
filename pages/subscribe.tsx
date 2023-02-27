import React, { useState } from 'react'
import { signupWithEmailAndPassword } from '@/firebase';

const Subscribe = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const subscribe = async (e:any) => {
        e.preventDefault();
        const user = await signupWithEmailAndPassword(email,password);
        console.log(user);
    }

  return (
    <div>
        <h1>ユーザー登録</h1>
        <form onSubmit={subscribe}>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">登録</button>
        </form>
    </div>
  )
}

export default Subscribe