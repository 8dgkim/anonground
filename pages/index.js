import Head from 'next/head'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AnonGround</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="AnonGround coming soon...!" />
      
      <main>
        <p className="description">
          Currently editing <code>pages/index.js</code>
        </p>
        <p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
