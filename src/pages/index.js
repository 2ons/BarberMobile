import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Mission from '../components/Mission'

export default function Home() {
  return (
    <>
      <Head>
        <title>BarberMobile - Mobila Frisörtjänster</title>
        <meta name="description" content="BarberMobile erbjuder exceptionella mobila frisörtjänster direkt vid din dörr. Boka en tid idag!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Mission />
      </main>
    </>
  )
}
