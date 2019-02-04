import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SponsorshipPage = () => (
  <Layout>
    <h1>Interested in Sponsoring?</h1>
    <p>If you or your company are interested in sponsoring a meetup, please contact <a href={"mailto:jared.scott@variable.team"}>jared.scott@variable.team</a>
    </p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default SponsorshipPage
