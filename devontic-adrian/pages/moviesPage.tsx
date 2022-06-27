import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/cabecera/cabeceraMovies'
import MainPage from '../components/cuerpo/mainPageBody'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MoviesFooter from '../components/footer/moviesFooter'
import MoviesPageBody from '../components/cuerpo/moviesPageBody'

function MoviesPage() {
  return (
    <div>
      <Header />
      <MoviesPageBody/>
      <MoviesFooter />
    </div>
  )
}

export default MoviesPage
