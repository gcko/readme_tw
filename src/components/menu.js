import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './menu.sass'

const MenuGroup = ({children}) => (
  <div className={'menu-group'}>
    {children}
  </div>
)

const MenuLink = ({link, label}) => (
  <Link className={'menu-item menu-link'} to={link}>
    {label}
  </Link>
)

class Menu extends React.Component {

  render() {
    return (
      <div className={`menu${this.props.scrollAtTop ? ' at-top' : ''}`}>
        <div className={'menu-links'}>
          <MenuGroup>
            <MenuLink link={'/'} label={this.props.siteTitle} />
          </MenuGroup>
          <MenuGroup>
            <MenuLink link={'/past-events/'} label={'Past Events'} />
            <MenuLink link={'/faq/'} label={'FAQ'} />
            <MenuLink link={'/sponsorship/'} label={'Sponsorship'} />
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
