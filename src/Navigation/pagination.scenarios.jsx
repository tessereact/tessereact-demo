import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Pagination } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Navigation: Pagination', () => {
  scenario('Basic example', class PaginationBasic extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        activePage: 1
      }
    }

    handleSelect = (eventKey) => {
      this.setState({
        activePage: eventKey
      })
    }

    render () {
      return (
        <div>
          <Pagination
            bsSize='large'
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
          <br />

          <Pagination
            bsSize='medium'
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
          <br />

          <Pagination
            bsSize='small'
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
        </div>
      )
    }
  })

  scenario('More options', class PaginationAdvanced extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        activePage: 1
      }
    }

    handleSelect = (eventKey) => {
      this.setState({
        activePage: eventKey
      })
    }

    render () {
      return (
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={20}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
      )
    }
  })
})
