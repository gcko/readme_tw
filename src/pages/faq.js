import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FaqPage = () => (
  <Layout>
    <h1>Hi from the FAQ</h1>
    <p>Welcome to the Faq</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FaqPage
