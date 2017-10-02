import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Page layout: List group', () => {
  scenario('Centers by default', () =>
    <ListGroup>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>...</ListGroupItem>
    </ListGroup>
  )

  scenario('Linked', () => {
    function alertClicked () {
      alert('You clicked the third ListGroupItem')
    }

    return <ListGroup>
      <ListGroupItem href='#link1'>Link 1</ListGroupItem>
      <ListGroupItem href='#link2'>Link 2</ListGroupItem>
      <ListGroupItem onClick={alertClicked}>
        Trigger an alert
      </ListGroupItem>
    </ListGroup>
  })

  scenario('Styling by state', () =>
    <ListGroup>
      <ListGroupItem href='#' active>Link 1</ListGroupItem>
      <ListGroupItem href='#'>Link 2</ListGroupItem>
      <ListGroupItem href='#' disabled>Link 3</ListGroupItem>
    </ListGroup>
  )

  scenario('Styling by color', () =>
    <ListGroup>
      <ListGroupItem bsStyle='success'>Success</ListGroupItem>
      <ListGroupItem bsStyle='info'>Info</ListGroupItem>
      <ListGroupItem bsStyle='warning'>Warning</ListGroupItem>
      <ListGroupItem bsStyle='danger'>Danger</ListGroupItem>
    </ListGroup>
  )

  scenario('With header', () =>
    <ListGroup>
      <ListGroupItem header='Heading 1'>Some body text</ListGroupItem>
      <ListGroupItem header='Heading 2' href='#'>Linked item</ListGroupItem>
      <ListGroupItem header='Heading 3' bsStyle='danger'>Danger styling</ListGroupItem>
    </ListGroup>
  )

  scenario('With custom component children', () => {
    class CustomComponent extends React.Component {
      render () {
        return (
          <li
            className='list-group-item'
            onClick={() => {}}>
            {this.props.children}
          </li>
        )
      }
    }

    return <ListGroup componentClass='ul'>
      <CustomComponent>Custom Child 1 </CustomComponent>
      <CustomComponent>Custom Child 2 </CustomComponent>
      <CustomComponent>Custom Child 3</CustomComponent>
    </ListGroup>
  })
})
