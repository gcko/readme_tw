import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const Location = ({showMap}) => (
  <StaticQuery
    query={graphql`
      query EventLocationQuery {
        site {
          siteMetadata {
            currentEvent {
              location
              locationLink
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <span className={'event-location'}>
          {data.site.siteMetadata.currentEvent.location}
        </span>
        {showMap &&
          <div className={'event-map embed-responsive embed-responsive-21by9'}>
            <iframe className={'embed-responsive-item'} title="Location" src={data.site.siteMetadata.currentEvent.locationLink} frameBorder={"0"} style={{border: 0}} allowFullScreen/>
          </div>
        }
      </>

    )}
  />
)

Location.propTypes = {
  showMap: PropTypes.bool,
}

Location.defaultProps = {
  showMap: false,
}

export default Location