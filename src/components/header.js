import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.sass'

const Header = ({ siteTitle }) => (
  <div className={'menu'}>
    <div className={'menu-links'}>
      <span className={'menu-item'}>
        <Link className={'menu-link'} to="/">
          {siteTitle}
        </Link>
      </span>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
