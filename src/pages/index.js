import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Speakers from '../components/speakers'
import BigSpeaker from '../components/bigspeaker'

import './index.sass'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Datetime from '../components/datetime'

const IndexPage = () => (
  <Layout bodyClass={'index-page'}>
    <header className={'hero-header'}>
      <div className={'hero-content'}>
        <h1>readme.tw <small>The Taiwan Front-end meetup.</small></h1>
        <p className={'mb-0'}>Next Event: <Datetime/></p>
        <p>@ Passenger Coffee Shop, Taichung <i className="fas fa-map-marker-alt"></i></p>
        <Speakers/>
        <div className={'header-buttons mt-5 d-flex'}>
          <a href={"#rsvp"} className={'button'}><i className="fas fa-ticket-alt"></i> RSVP for event</a>
          <a href={"#mailing"} className={'button'}><i className="far fa-envelope"></i> Join mailing list</a>
        </div>
      </div>
    </header>
    <section>
      <article>
        <h2>Speakers</h2>
        <BigSpeaker/>
      </article>
      <article>
        <h2>When</h2>
        <Datetime/>
      </article>
      <article>
        <h2>Location</h2>
        <p>
          <Link to="/page-2/">Go to page 2</Link>
        </p>
      </article>
    </section>
  </Layout>
)

export default IndexPage
