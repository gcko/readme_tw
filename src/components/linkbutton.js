import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink} from 'gatsby-plugin-google-analytics'

import './linkbutton.sass'

const LinkButton = ({text, link, icon, external}) => {
  return (
    <>
    {external ? (
      <OutboundLink href={link} className={'link-button'} target={'_blank'}>
        <i className={`fas ${icon}`}/> {text}
      </OutboundLink>
      ) : (
      <a href={link} className={'link-button'}>
        <i className={`fas ${icon}`}/> {text}
      </a>
    )}
    </>
  )
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
  external: PropTypes.bool
}

LinkButton.defaultProps = {
  external: false
}

export default LinkButton