import React from 'react'
import {generateId} from '../components/speakers'

const BigSpeaker = ({topic, format}, key) => {
  const speaker = topic.speaker
  const imageSrc = speaker.image ? speaker.image.childImageSharp.medium.src : '#'

  return (
    <div id={`${generateId(speaker.name)}`} className={'speaker'} key={key}>
      <img src={imageSrc} className={format} alt={`Keynote speaker ${speaker.name}`}/>
      <div className={'speaker-details'}>
        <h3>{speaker.name}
          {(speaker.socialMedia && speaker.socialMedia.length > 0) &&
          <span className={'social-links'}>
            {speaker.socialMedia.map( (item, idx) => <a href={item.link} target={'_blank'} rel={`noopener noreferrer`} key={idx}><i className={`fab fa-${item.icon}`}/></a> )}
          </span>
          }
        </h3>
        <div className={'talk-info'}>
          <h2>{topic.topic}</h2>
          <p>{topic.topicDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default BigSpeaker
