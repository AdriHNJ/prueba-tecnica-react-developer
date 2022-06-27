import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/cabecera/cabeceraSeries'
import SeriesFooter from '../components/footer/seriesFooter'
import SeriesPageBody from '../components/cuerpo/seriesPageBody'

function SeriesPage() {
  return (
    <div>
      <Header />
      <SeriesPageBody />
      <SeriesFooter />
    </div>
  )
}

export default SeriesPage
