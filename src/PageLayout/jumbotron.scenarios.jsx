import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Jumbotron, Button } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Page layout: Jumbotron', () => {
  scenario('Jumbotron', () =>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p><Button bsStyle='primary'>Learn more</Button></p>
    </Jumbotron>
  )
})
