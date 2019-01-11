import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {generateId} from '../components/speakers'

const BigSpeaker = ({speaker}, key) => {
  const imageSrc = speaker.image ? speaker.image.childImageSharp.resize.src : '#'

  return (
    <div id={`${generateId(speaker.name)}`} className={'speaker'} key={key}>
      <img src={imageSrc} alt={`Keynote speaker ${speaker.name}`}/>
      <div className={'speaker-details'}>
        <h3>{speaker.name}
          {(speaker.socialMedia && speaker.socialMedia.length > 0) &&
          <span className={'social-links'}>
            {speaker.socialMedia.map( (item, idx) => <a href={item.link} target={'_blank'} key={idx}><i className={`fab fa-${item.icon}`}/></a> )}
          </span>
          }
        </h3>
        <div className={'talk-info'}>
          <h2>{speaker.topic}</h2>
          <p>{speaker.topicDescription}</p>
        </div>
      </div>
    </div>
  )
}

const BigSpeakers = () => (
  <StaticQuery
    query={graphql`
      query SiteBigSpeakersQuery {
        speakersJson {
          current {
            name
            topic
            topicDescription
            company
            image {
              childImageSharp {
                resize(width:75 height:75 quality:100 cropFocus:NORTH) {
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
        {data.speakersJson.current.map( (speaker, idx) => <BigSpeaker key={idx} speaker={speaker}/> )}
      </div>
    )}
  />
)

export default BigSpeakers