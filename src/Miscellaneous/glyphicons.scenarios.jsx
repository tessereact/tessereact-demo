import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Glyphicons', () => {
  scenario('Basic example', () =>
    <div>
      <ButtonToolbar>
        <ButtonGroup>
          <Button><Glyphicon glyph='align-left' /></Button>
          <Button><Glyphicon glyph='align-center' /></Button>
          <Button><Glyphicon glyph='align-right' /></Button>
          <Button><Glyphicon glyph='align-justify' /></Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar>
        <ButtonGroup>
          <Button bsSize='large'><Glyphicon glyph='star' /> Star</Button>
          <Button><Glyphicon glyph='star' /> Star</Button>
          <Button bsSize='small'><Glyphicon glyph='star' /> Star</Button>
          <Button bsSize='xsmall'><Glyphicon glyph='star' /> Star</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  )
})
