import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './speakers.sass'

export const generateId = (name='') => name.replace(/\s/gi, '')

const Speaker = ({speaker, key}) => {
  const imageSrc = speaker.image ? speaker.image.childImageSharp.resize.src : '#'
  return (
    <a key={key} href={`#${generateId(speaker.name)}`} className={'speaker'}>
      <img src={imageSrc} alt={`keynote speaker ${speaker.name}`}/><h2>{speaker.name}</h2><h1>{speaker.topic}</h1>
    </a>
  )
}

export const Speakers = () => (
  <StaticQuery
    query={graphql`
      query SiteSpeakersQuery {
        speakersJson {
          current {
            name
            topic
            company
            image {
              childImageSharp {
                resize(width:75 height:75 quality:100 cropFocus:NORTH) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={'speaker-container'}>
        {data.speakersJson.current.map( (speaker, idx) => <Speaker key={idx} speaker={speaker} /> )}
      </div>
    )}
  />
)

// Speakers.propTypes = {
//   data: PropTypes.shape({
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         currentSpeakers: PropTypes.object.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }


export default Speakers
