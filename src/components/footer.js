import React from 'react'
import { OutboundLink} from 'gatsby-plugin-google-analytics'

import './footer.sass'
const Footer = () => (
  <footer>
    <span>Site Design inspired by <OutboundLink href={'https://js.la/'} target={'_blank'}>js.la</OutboundLink>. | Created by Jared M. Scott</span>
  </footer>
)

export default Footer