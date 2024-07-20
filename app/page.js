import Head from 'next/head'
import OperatorList from '../components/OperatorList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Ferry Operators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
     

        <OperatorList />
      </main>
    </div>
  )
}