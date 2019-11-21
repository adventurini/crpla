import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import "../styles/base.scss";

const Home = () => (
  <div>
    <Head>
      <title>curpela | Homes Live Here</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

  </div>
)

export default Home
