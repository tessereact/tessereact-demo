import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { ProgressBar } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Progress bars', () => {
  scenario('Basic example', () =>
    <ProgressBar now={60} />
  )

  scenario('With label', () => {
    const now = 60
    return <ProgressBar now={now} label={`${now}%`} />
  })

  scenario('Screenreader only label', () => {
    const now = 60
    return <ProgressBar now={now} label={`${now}%`} srOnly />
  })

  scenario('Contextual alternatives', () =>
    <div>
      <ProgressBar bsStyle='success' now={40} />
      <ProgressBar bsStyle='info' now={20} />
      <ProgressBar bsStyle='warning' now={60} />
      <ProgressBar bsStyle='danger' now={80} />
    </div>
  )

  scenario('Striped', () =>
    <div>
      <ProgressBar striped bsStyle='success' now={40} />
      <ProgressBar striped bsStyle='info' now={20} />
      <ProgressBar striped bsStyle='warning' now={60} />
      <ProgressBar striped bsStyle='danger' now={80} />
    </div>
  )

  scenario('Animated', () =>
    <ProgressBar active now={45} />
  )

  scenario('Stacked', () =>
    <ProgressBar>
      <ProgressBar striped bsStyle='success' now={35} key={1} />
      <ProgressBar bsStyle='warning' now={20} key={2} />
      <ProgressBar active bsStyle='danger' now={10} key={3} />
    </ProgressBar>
  )
})
