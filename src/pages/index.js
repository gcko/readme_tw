import React from 'react'

import Layout from '../components/layout'
import Speakers from '../components/speakers'

import './index.sass'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import CurrentDatetime from '../components/datetime'
import CurrentLocation from '../components/location'
import Buttons from '../components/buttons'
import LinkButton from '../components/linkbutton'

const IndexPage = ({data}) => (
  <Layout bodyClass={'index-page'}>
    <header className={'hero-header'}>
      <div className={'hero-content'}>
        {/*<Image/>*/}
        <h1>readme.tw <small>Taichung Development meetup.</small></h1>
        <h4 className={'mb-0'}>Next Event</h4>
        <p><CurrentDatetime/></p>
        <h4 className={'mb-0'}>At</h4>
        <p>
          <a href={"#location"}><i className="fas fa-map-marker-alt"/> <CurrentLocation/></a>
        </p>
        <Speakers/>
        <Buttons className={'header-buttons'}>
					{!!data.allStrapiEvent.edges.node &&
						<LinkButton text={'RSVP for event'} link={data.allStrapiEvent.edges.node.rsvpLink} icon={'fa-ticket-alt'} external={true}/>
					}
          <LinkButton text={'Join mailing list'} link={data.site.siteMetadata.mailingListLink} icon={'fa-envelope'} external={true}/>
        </Buttons>
      </div>
    </header>
    <section>
      <article>
        <h2 className={'speaker-header'}>Speakers</h2>
        <Speakers format={'medium'}/>
        <Buttons className={'article-buttons'}>
					{!!data.allStrapiEvent.edges.node &&
						<LinkButton text={'RSVP for event'} link={data.allStrapiEvent.edges.node.rsvpLink} icon={'fa-ticket-alt'} external={true}/>
					}
          <LinkButton text={'Join mailing list'} link={data.site.siteMetadata.mailingListLink} icon={'fa-envelope'} external={true}/>
        </Buttons>
      </article>
      <article>
        <h2>When</h2>
        <CurrentDatetime/>
      </article>
      <article id={'location'}>
        <h2>Location</h2>
        <CurrentLocation showMap={true}/>
      </article>
    </section>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        mailingListLink
      }
    }
    allStrapiEvent(sort: {fields: Time, order: DESC}, limit: 1) {
			edges {
				node {
					rsvpLink
				}
			}
  	}
  }
`

export default IndexPage
