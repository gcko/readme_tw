import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

export const Location = ({showMap, location, locationLink}) => (
  <>
    <span className={'event-location'}>
      {location}
    </span>
    {showMap &&
    <div className={'event-map embed-responsive embed-responsive-21by9'}>
      <iframe className={'embed-responsive-item'} title="Location" src={locationLink} frameBorder={"0"} style={{border: 0}} allowFullScreen/>
    </div>
    }
  </>
)

const CurrentLocation = ({showMap}) => (
  <StaticQuery
    query={graphql`
      query EventLocationQuery {
				allStrapiEvent(sort: {fields: Time, order: DESC}, limit: 1) {
					edges {
						node {
							Location
							LocationLink
						}
					}
				}
      }
    `}
    render={data => (
     <Location showMap={showMap} location={data.allStrapiEvent.edges[0].node.location}
               locationLink={data.allStrapiEvent.edges[0].node.locationLink} />
    )}
  />
)

CurrentLocation.propTypes = {
  showMap: PropTypes.bool,
}

CurrentLocation.defaultProps = {
  showMap: false,
}

export default CurrentLocation
