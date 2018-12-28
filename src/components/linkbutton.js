import React from 'react'
import PropTypes from 'prop-types'

import './linkbutton.sass'

const LinkButton = ({text, link, icon}) => (
  <a href={link} className={'link-button'}><i className={`fas ${icon}`}/> {text}</a>
)

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default LinkButton