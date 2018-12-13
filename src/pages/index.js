import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import './index.sass'

const IndexPage = () => (
  <Layout bodyClass={'index-page'}>
    <header className={'hero-header'}>
      <div className={'hero-content'}>
        <h1>Hi everyone!</h1>
        <p>Welcome to your new Gatsby site and great to see you.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </header>
    <div className={'some-other-content'}>
      <h2>Other Content</h2>
      <p>I am just another piece of content somewhere else lower on the page</p>
    </div>
  </Layout>
)

export default IndexPage
