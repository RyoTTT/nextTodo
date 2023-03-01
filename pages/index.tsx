import { app, provider } from '@/firebase';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const signin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth,email,password);
    router.push('/todos/todos');
  }

  const googleSignin = async() => {
    await signInWithPopup(auth,provider);
    router.push('/todos/todos');
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
