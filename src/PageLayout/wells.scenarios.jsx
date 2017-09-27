import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Well } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Page layout: Wells', () => {
  scenario('Basic example', () =>
    <Well>Look I'm in a well!</Well>
  )

  scenario('Optional classes', () =>
    <div>
      <Well bsSize='large'>Look I'm in a large well!</Well>
      <Well bsSize='small'>Look I'm in a small well!</Well>
    </div>
  )
})
