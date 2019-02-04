import React from 'react'

import Layout from '../components/layout'
import Speakers from '../components/speakers'

import './index.sass'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Datetime from '../components/datetime'
import Location from '../components/location'
import Buttons from '../components/buttons'
import LinkButton from '../components/linkbutton'

const IndexPage = ({data}) => (
  <Layout bodyClass={'index-page'}>
    <header className={'hero-header'}>
      <div className={'hero-content'}>
        {/*<Image/>*/}
        <h1>readme.tw <small>Taichung Development meetup.</small></h1>
        <h4 className={'mb-0'}>Next Event</h4>
        <p><Datetime/></p>
        <h4 className={'mb-0'}>At</h4>
        <p>
          <a href={"#location"}><i className="fas fa-map-marker-alt"/> <Location/></a>
        </p>
        <Speakers/>
        <Buttons className={'header-buttons'}>
          <LinkButton text={'RSVP for event'} link={data.site.siteMetadata.currentEvent.rsvpLink} icon={'fa-ticket-alt'}/>
          <LinkButton text={'Join mailing list'} link={data.site.siteMetadata.mailingListLink} icon={'fa-envelope'} external={true}/>
        </Buttons>
      </div>
    </header>
    <section>
      <article>
        <h2>Speakers</h2>
        <Speakers format={'medium'}/>
        <Buttons className={'article-buttons'}>
          <LinkButton text={'RSVP for event'} link={data.site.siteMetadata.currentEvent.rsvpLink} icon={'fa-ticket-alt'}/>
          <LinkButton text={'Join mailing list'} link={data.site.siteMetadata.mailingListLink} icon={'fa-envelope'} external={true}/>
        </Buttons>
      </article>
      <article>
        <h2>When</h2>
        <Datetime/>
      </article>
      <article id={'location'}>
        <h2>Location</h2>
        <Location showMap={true}/>
      </article>
    </section>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        mailingListLink
        currentEvent {
          rsvpLink
        }
      }
    }
  }
`

export default IndexPage
