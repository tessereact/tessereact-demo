import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Label } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Labels', () => {
  scenario('Basic example', () =>
    <div>
      <h1>Label <Label>New</Label></h1>
      <h2>Label <Label>New</Label></h2>
      <h3>Label <Label>New</Label></h3>
      <h4>Label <Label>New</Label></h4>
      <h5>Label <Label>New</Label></h5>
      <p>Label <Label>New</Label></p>
    </div>
  )

  scenario('Available variations', () =>
    <div>
      <Label bsStyle='default'>Default</Label>&nbsp;
      <Label bsStyle='primary'>Primary</Label>&nbsp;
      <Label bsStyle='success'>Success</Label>&nbsp;
      <Label bsStyle='info'>Info</Label>&nbsp;
      <Label bsStyle='warning'>Warning</Label>&nbsp;
      <Label bsStyle='danger'>Danger</Label>
    </div>
  )
})
