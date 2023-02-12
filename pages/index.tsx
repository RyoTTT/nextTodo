import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <Link href="/todos/todos">テスト</Link>
</>
  )
}
