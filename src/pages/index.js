import React from 'react'

import Layout from '../components/layout'
import Speakers from '../components/speakers'
import BigSpeaker from '../components/bigspeaker'

import './index.sass'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Datetime from '../components/datetime'
import Location from '../components/location'
import Buttons from '../components/buttons'
import LinkButton from '../components/linkbutton'


const IndexPage = () => (
  <Layout bodyClass={'index-page'}>
    <header className={'hero-header'}>
      <div className={'hero-content'}>
        <h1>readme.tw <small>The Taiwan Front-end meetup.</small></h1>
        <p className={'mb-0'}>Next Event: <Datetime/></p>
        <p><i className="fas fa-map-marker-alt"/> <Location/></p>
        <Speakers/>
        <Buttons className={'header-buttons'}>
          <LinkButton text={'RSVP for event'} link={'#rsvp'} icon={'fa-ticket-alt'}/>
          <LinkButton text={'Join mailing list'} link={'#mailing'} icon={'fa-envelope'}/>
        </Buttons>
      </div>
    </header>
    <section>
      <article>
        <h2>Speakers</h2>
        <BigSpeaker/>
        <Buttons className={'article-buttons'}>
          <LinkButton text={'RSVP for event'} link={'#rsvp'} icon={'fa-ticket-alt'}/>
          <LinkButton text={'Join mailing list'} link={'#mailing'} icon={'fa-envelope'}/>
        </Buttons>
      </article>
      <article>
        <h2>When</h2>
        <Datetime/>
      </article>
      <article>
        <h2>Location</h2>
        <Location showMap={true}/>
      </article>
    </section>
  </Layout>
)

export default IndexPage
