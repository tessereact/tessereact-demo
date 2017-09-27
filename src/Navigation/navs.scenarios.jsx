import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Navigation: Navs', () => {
  scenario('Basic example', () => {
    function handleSelect (selectedKey) {
      alert('selected ' + selectedKey)
    }

    return <Nav bsStyle='pills' activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
      <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>
  })

  scenario('Dropdown', class NavDropdownExample extends React.Component {
    handleSelect = (event) => {
      event.preventDefault()
      alert(`selected ${event}`)
    }

    render () {
      return (
        <Nav bsStyle='tabs' activeKey='1' onSelect={this.handleSelect}>
          <NavItem eventKey='1' href='/home'>NavItem 1 content</NavItem>
          <NavItem eventKey='2' title='Item'>NavItem 2 content</NavItem>
          <NavItem eventKey='3' disabled>NavItem 3 content</NavItem>
          <NavDropdown eventKey='4' title='Dropdown' id='nav-dropdown'>
            <MenuItem eventKey='4.1'>Action</MenuItem>
            <MenuItem eventKey='4.2'>Another action</MenuItem>
            <MenuItem eventKey='4.3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4.4'>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      )
    }
  })

  scenario('Stacked', () => {
    function handleSelect (selectedKey) {
      alert('selected ' + selectedKey)
    }

    return <Nav bsStyle='pills' stacked activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
      <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>
  })

  scenario('Justified', class NavJustified extends React.Component {
    handleSelect = (selectedKey) => {
      alert('selected ' + selectedKey)
    }

    render () {
      return (
        <div>
          <Nav bsStyle='tabs' justified activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
            <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
          <br />
          <Nav bsStyle='pills' justified activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
            <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
        </div>
      )
    }
  })
})
