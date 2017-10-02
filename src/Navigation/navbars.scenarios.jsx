import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Navbar, Nav, NavItem, NavDropdown, FormGroup, FormControl, MenuItem, Button } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Navigation: Navbars', () => {
  scenario('Basic example', () =>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href='#'>Link</NavItem>
        <NavItem eventKey={2} href='#'>Link</NavItem>
        <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )

  scenario('Responsive', () =>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='#'>Link</NavItem>
          <NavItem eventKey={2} href='#'>Link</NavItem>
          <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>Link Right</NavItem>
          <NavItem eventKey={2} href='#'>Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

  scenario('Forms', () =>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>Brand</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type='text' placeholder='Search' />
          </FormGroup>
          {' '}
          <Button type='submit'>Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )

  scenario('Text and Non-nav links', () =>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>Brand</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Signed in as: <Navbar.Link href='#'>Mark Otto</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          Have a great day!
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
})
