import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const PastEventsPage = () => (
  <Layout>
    <h1>Hi from the Past Events page</h1>
    <p>Welcome to Past Events</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PastEventsPage
