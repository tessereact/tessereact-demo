import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Badge } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Badges', () => {
  scenario('Basic example', () =>
    <p>Badges <Badge>42</Badge></p>
  )
})
