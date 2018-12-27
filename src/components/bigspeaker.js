import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {generateId} from '../components/speakers'

const BigSpeaker = ({speaker}, key) => (
  <div id={`${generateId(speaker.name)}`} className={'speaker'} key={key}>
    <img src={"#"} alt={`Keynote speaker ${speaker.name}`}/>
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

const BigSpeakers = () => (
  <StaticQuery
    query={graphql`
      query SiteBigSpeakersQuery {
        site {
          siteMetadata {
            currentSpeakers {
              name
              topic
              topicDescription
              company
              socialMedia {
                icon
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={'speaker-container'}>
        {data.site.siteMetadata.currentSpeakers.map( (speaker, idx) => <BigSpeaker key={idx} speaker={speaker}/> )}
      </div>
    )}
  />
)

export default BigSpeakers