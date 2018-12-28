import { DateTime as Luxon }  from "luxon";
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'


const Datetime = () => (
  <StaticQuery
    query={graphql`
      query EventDateTimeQuery {
        site {
          siteMetadata {
            currentEvent {
              unixTime
            }
          }
        }
      }
    `}
    render={data => (
      <span className={'datetime'}>
        {Luxon.fromSeconds(data.site.siteMetadata.currentEvent.unixTime, {zone: 'Asia/Taipei'}).toLocaleString(Luxon.DATETIME_MED)}
      </span>
    )}
  />
)

export default Datetime