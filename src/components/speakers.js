import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './speakers.sass'
import BigSpeaker from './bigspeaker'

export const generateId = (name='') => name.replace(/\s/gi, '')

const Speaker = ({topic, format}) => {
  const speaker = topic.speaker
  const imageSrc = speaker.image ? speaker.image.childImageSharp.small.src : '#'
  return (
    <a href={`#${generateId(speaker.name)}`} className={'speaker'}>
      <img src={imageSrc} className={format} alt={`keynote speaker ${speaker.name}`}/><h2>{speaker.name}</h2><h1>{topic.topic}</h1>
    </a>
  )
}

export const Speakers = (props) => {

  return (
    <StaticQuery
      query={graphql`
      query SiteSpeakersQuery {
        eventsJson {
          current {
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
    `}
      render={data => (
        <div className={'speaker-container'}>
          {data.eventsJson.current.topics.map( (topic, idx) => (props.format === 'small') ? <Speaker key={idx} topic={topic} format={props.format} /> : <BigSpeaker key={idx} topic={topic} format={props.format} />)}
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
