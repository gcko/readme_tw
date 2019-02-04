import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './speakers.sass'
import BigSpeaker from './bigspeaker'

export const generateId = (name='') => name.replace(/\s/gi, '')

const Speaker = ({speaker, format}) => {
  const imageSrc = speaker.image ? speaker.image.childImageSharp.small.src : '#'
  return (
    <a href={`#${generateId(speaker.name)}`} className={'speaker'}>
      <img src={imageSrc} className={format} alt={`keynote speaker ${speaker.name}`}/><h2>{speaker.name}</h2><h1>{speaker.topic}</h1>
    </a>
  )
}

export const Speakers = (props) => {

  return (
    <StaticQuery
      query={graphql`
      query SiteSpeakersQuery {
        speakersJson {
          current {
            name
            topic
            topicDescription
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
    `}
      render={data => (
        <div className={'speaker-container'}>
          {data.speakersJson.current.map( (speaker, idx) => (props.format === 'small') ? <Speaker key={idx} speaker={speaker} format={props.format} /> : <BigSpeaker key={idx} speaker={speaker} format={props.format} />)}
        </div>
      )}
    />
  )
}

const FORMAT_TYPES = ['small', 'medium', 'large']

Speakers.propTypes = {
  format: PropTypes.oneOf(FORMAT_TYPES)
}

Speakers.defaultProps = {
  format: 'small'
}


export default Speakers
