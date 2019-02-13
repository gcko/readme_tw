import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import BigSpeaker from '../components/bigspeaker'
import { Datetime } from '../components/datetime'
import { Location } from '../components/location'

import '../components/speakers.sass'
import './past-events.sass'

const Event = ({event}) => {
    return (
      <div className={'event'}>
        <div className={'time-place'}>
          <Datetime unixTime={event.unixTime} preamble={false} /> at <Location location={event.location}/>
        </div>
        <div className={'speaker-container'}>
          {event.topics.map( (topic, idx) => <BigSpeaker topic={topic}
                                                         format={'medium'}
                                                         key={idx}/>)}
        </div>
      </div>
    )
}

const PastEventsPage = ({data}) => (
  <Layout bodyClass={'past-events'}>
    <h1>Past Events</h1>
    {data.eventsJson.past.map( (event, idx) => <Event event={event} key={idx} />)}
  </Layout>
)

export const query = graphql`
  query PastEventPageQuery {
    eventsJson {
      past {
        unixTime
        location
        locationLink
        topics {
          topic
          topicDescription
          speaker {
            name
            company
            image {
              childImageSharp {
                small: resize(width:75 height:75 quality:100 cropFocus:NORTH) {
                  src
                }
                medium: resize(width:125 height:125 quality:100 cropFocus:NORTH) {
                  src
                }
              }
             }
            socialMedia {
              icon
              link
            }
          }
        }
      }
    }
  }
`

export default PastEventsPage
