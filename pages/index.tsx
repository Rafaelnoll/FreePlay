import type { NextPage } from 'next'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
    </>
  )
}

export default Home
