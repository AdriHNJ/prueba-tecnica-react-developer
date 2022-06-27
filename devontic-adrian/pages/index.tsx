import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/cabecera/cabeceraMain'
import MainPage from '../components/cuerpo/mainPageBody'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainFooter from '../components/footer/mainFooter'

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <MainPage/>
      <MainFooter/>
    </div>
  )
}

export default Home
