import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Speakers from '../components/speakers'

import './index.sass'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const IndexPage = () => (
  <Layout bodyClass={'index-page'}>
    <header className={'hero-header'}>
      <div className={'hero-content'}>
        <h1>readme.tw <small>The Taiwan Front-end meetup.</small></h1>
        <p className={'mb-0'}>Next Event: Friday January 10th, 2019 8PM</p>
        <p>@ Passenger Coffee Shop, Taichung <i className="fas fa-map-marker-alt"></i></p>
        <Speakers/>
      </div>
    </header>
    <div className={'some-other-content'}>
      <h2>Other Content</h2>
      <p>I am just another piece of content somewhere else lower on the page</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
