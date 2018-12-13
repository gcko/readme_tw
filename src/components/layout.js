import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import './reset.sass'
import './layout.sass'

const Layout = ({ bodyClass, children }) => (
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
        <Menu siteTitle={data.site.siteMetadata.title} />
        <div className={`layout-content${bodyClass ? ` ${bodyClass}` : ''}`} >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
