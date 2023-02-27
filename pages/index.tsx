import { googleSignin, signinWithEmailAndPassword } from '@/firebase';
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';


export default function Home() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const signin = async (e:any) => {
      e.preventDefault();
      const user = await signinWithEmailAndPassword(email,password);
  }
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <div>
        <h1>ログイン</h1>
        <form onSubmit={signin}>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">ログイン</button>
        </form>
        <button onClick={googleSignin}>Googleでログイン</button>
    </div>
    <Link href="/todo/pages/subscribe.tsx">ユーザー登録</Link>
      <Link href="/todos/todos">テスト</Link>
</>
  )
}
