/* @flow */
import React from 'react'
import { Link, Route } from 'react-router-dom'

import { Menu, Container } from 'semantic-ui-react'

const NavItem = ({to, children, ...rest}) => {
  return (
    <Route path={typeof to === 'object' ? to.pathname : to}
    children={({match}) => {
      const isActive = !!match
      return (
        <Menu.Item active={isActive} {...rest} as={Link} to={to}>
          {children}
        </Menu.Item>
      )}} />
  )
}

const Layout = ({children}) => {return (
  <div className='App'>
    <Menu inverted>
      <Container>
        <Menu.Item header to='/'>Tools</Menu.Item>
        <NavItem to='/qrcode' name='qrcode' />
        <NavItem to='/mermaid' name='mermaid' />
        <NavItem to='/about' name='about' position='right' />
      </Container>
    </Menu>
    <Container>
      {children}
    </Container>
  </div>
)}

export default Layout
