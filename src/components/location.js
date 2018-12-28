//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116444.80245764508!2d120.7084002!3d24.21027895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9be446dd93%3A0x246540f9df2293dd!2sPassenger!5e0!3m2!1sen!2stw!4v1545975181667" width="800" height="600" frameBorder="0" style="border:0" allowFullScreen></iframe>
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
  showMap: PropTypes.boolean
}

Location.defaultProps = {
  showMap: false
}

export default Location