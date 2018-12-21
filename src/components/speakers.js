import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './speakers.sass'

export const generateId = (name='') => name.replace(/\s/gi, '')

const Speaker = ({speaker}) => (
  <a href={`#${generateId(speaker.name)}`} className={'speaker'}>
    <img src={"#"} alt={`keynote speaker ${speaker.name}`}/><h2>{speaker.name}</h2><h1>{speaker.topic}</h1>
  </a>
)

const Speakers = () => (
  <StaticQuery
    query={graphql`
      query SiteSpeakersQuery {
        site {
          siteMetadata {
            currentSpeakers {
              name
              topic
              company
            }
          }
        }
      }
    `}
    render={data => (
      <div className={'speaker-container'}>
        {data.site.siteMetadata.currentSpeakers.map( (speaker) => <Speaker speaker={speaker}/> )}
      </div>
    )}
  />
)

Speakers.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        currentSpeakers: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}


export default Speakers
