import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SubscriberJoined = () => (
  <Layout>
    <h1>Thanks for subscribing</h1>
    <p>Your information will not be sold or distributed in any way.</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default SubscriberJoined
