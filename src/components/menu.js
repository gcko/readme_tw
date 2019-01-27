import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './menu.sass'

const MenuGroup = ({children}) => (
  <div className={'menu-group'}>
    {children}
  </div>
)

const MenuLink = ({link, children}) => (
  <Link className={'menu-item menu-link'} to={link}>
    {children}
  </Link>
)

class Menu extends React.Component {

  render() {
    return (
      <div className={`menu${this.props.scrollAtTop ? ' at-top' : ''}`}>
        <div className={'menu-links'}>
          <MenuGroup>
            <MenuLink link={'/'}>R<span>e</span>:</MenuLink>
          </MenuGroup>
          <MenuGroup>
            <MenuLink link={'/past-events/'}>Past Events</MenuLink>
            <MenuLink link={'/faq/'}>FAQ</MenuLink>
            <MenuLink link={'/sponsorship/'}>Sponsorship</MenuLink>
          </MenuGroup>
        </div>
      </div>
    )
  }
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
  scrollAtTop: PropTypes.bool
}

Menu.defaultProps = {
  siteTitle: ''
}

export default Menu
