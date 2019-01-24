import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import './reset.sass'
import './layout.sass'
import Footer from './footer'

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollAtTop: true
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({scrollAtTop: this.isScrollAtTop()})
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    this.setState({scrollAtTop: this.isScrollAtTop()})
  }

  isScrollAtTop() {
    return window.scrollY < this.screenTopMin
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                siteDescription
                siteKeywords
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.siteDescription },
                { name: 'keywords', content: data.site.siteMetadata.siteKeywords},
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Menu siteTitle={data.site.siteMetadata.title}
                  scrollAtTop={this.state.scrollAtTop} />
            <div className={`layout-content ${this.props.bodyClass}`} >
              {this.props.children}
            </div>
            <Footer/>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string
}

Layout.defaultProps = {
  bodyClass: '',
}

Layout.prototype.screenTopMin = 5

export default Layout
