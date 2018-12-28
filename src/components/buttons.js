import React from 'react'
import PropTypes from 'prop-types'

const Buttons = ({className, children}) => (
  <div className={`buttons mt-5 d-flex ${className}`}>
    {children}
  </div>
)

Buttons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Buttons.defaultProps = {
  className: ''
}

export default Buttons