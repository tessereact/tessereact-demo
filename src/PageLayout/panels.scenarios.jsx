import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Panel, Button, ListGroup, ListGroupItem, PanelGroup, Accordion } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Page layout: Panels', () => {
  scenario('Basic example', () => {
    function handleClick () {
      alert('You have clicked on me')
    }

    return <Panel onClick={handleClick}>
      Basic panel example
    </Panel>
  })

  scenario('Collapsible Panel', class PanelCollapsibleExample extends React.Component {
    constructor (...args) {
      super(...args)
      this.state = {
        open: true
      }
    }

    render () {
      return (
        <div>
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            click
          </Button>
          <Panel collapsible expanded={this.state.open}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </Panel>
        </div>
      )
    }
  })

  scenario('Panel with heading', () => {
    const title = (
      <h3>Panel title</h3>
    )

    return <div>
      <Panel header='Panel heading without title'>
        Panel content
      </Panel>
      <Panel header={title}>
        Panel content
      </Panel>
    </div>
  })

  scenario('Panel with footer', () =>
    <Panel footer='Panel footer'>
      Panel content
    </Panel>
  )

  scenario('Contextual alternatives', () => {
    const title = (
      <h3>Panel title</h3>
    )

    return <div>
      <Panel header={title}>
        Panel content
      </Panel>

      <Panel header={title} bsStyle='primary'>
        Panel content
      </Panel>

      <Panel header={title} bsStyle='success'>
        Panel content
      </Panel>

      <Panel header={title} bsStyle='info'>
        Panel content
      </Panel>

      <Panel header={title} bsStyle='warning'>
        Panel content
      </Panel>

      <Panel header={title} bsStyle='danger'>
        Panel content
      </Panel>
    </div>
  })

  scenario('With list groups', () =>
    <Panel collapsible defaultExpanded header='Panel heading'>
      Some default panel content here.
      <ListGroup fill>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>&hellip;</ListGroupItem>
      </ListGroup>
      Some more panel content here.
    </Panel>
  )

  scenario('Controlled PanelGroups', class ControlledPanelGroup extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        activeKey: '1'
      }
    }

    handleSelect = (activeKey) => {
      this.setState({ activeKey })
    }

    render () {
      return (
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          <Panel header='Panel 1' eventKey='1'>Panel 1 content</Panel>
          <Panel header='Panel 2' eventKey='2'>Panel 2 content</Panel>
        </PanelGroup>
      )
    }
  })

  scenario('Uncontrolled PanelGroups', () =>
    <PanelGroup defaultActiveKey='2' accordion>
      <Panel header='Panel 1' eventKey='1'>Panel 1 content</Panel>
      <Panel header='Panel 2' eventKey='2'>Panel 2 content</Panel>
    </PanelGroup>
  )

  scenario('Multiple Expandable Panels', () =>
    <PanelGroup>
      <Panel collapsible header='Panel 1' eventKey='1'>Panel 1 content</Panel>
      <Panel collapsible header='Panel 2' eventKey='2'>Panel 2 content</Panel>
      <Panel collapsible header='Panel 3' eventKey='3'>Panel 3 content</Panel>
    </PanelGroup>
  )

  scenario('Accordions', () =>
    <Accordion>
      <Panel header='Collapsible Group Item #1' eventKey='1'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </Panel>
      <Panel header='Collapsible Group Item #2' eventKey='2'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </Panel>
      <Panel header='Collapsible Group Item #3' eventKey='3'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </Panel>
    </Accordion>
  )
})
