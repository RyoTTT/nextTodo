import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Subscribe = () => {
    const router = useRouter();
    const auth = getAuth(app);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const subscribe = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth,email,password);
        router.push('/');
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