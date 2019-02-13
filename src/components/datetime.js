import { DateTime as Luxon }  from "luxon";
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

export const Datetime = ({unixTime, preamble}) => (
  <span className={'datetime'}>
    {preamble ? 'Starts at ' : ''}{Luxon.fromSeconds(unixTime, {zone: 'Asia/Taipei'}).toFormat("T, DDDD")}
  </span>
)

Datetime.propTypes = {
  unixTime: PropTypes.number,
  preamble: PropTypes.bool,
}

Datetime.defaultProps = {
  preamble: true,
}


const CurrentDatetime = () => (
  <StaticQuery
    query={graphql`
      query EventDateTimeQuery {
        eventsJson {
          current {
            unixTime
          }
        }
      }
    `}
    render={data => (
      <Datetime unixTime={data.eventsJson.current.unixTime}/>
    )}
  />
)

export default CurrentDatetime