import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { PageHeader } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Page layout: Page header', () => {
  scenario('PageHeader', () =>
    <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
  )
})
