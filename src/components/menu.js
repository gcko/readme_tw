import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './menu.sass'

const MenuLink = ({link, label}) => (
  <Link className={'menu-item menu-link'} to={link}>
    {label}
  </Link>
)

const Menu = ({ siteTitle }) => (
  <div className={'menu'}>
    <div className={'menu-links'}>
      <MenuLink link={'/'} label={siteTitle} />
      <MenuLink link={'/past-events/'} label={'Past Events'} />
      <MenuLink link={'/faq/'} label={'FAQ'} />
      <MenuLink link={'/sponsorship/'} label={'Sponsorship'} />
    </div>
  </div>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: '',
}

export default Menu
