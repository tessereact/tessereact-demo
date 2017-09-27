import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Breadcrumb } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Navigation: Breadcrumbs', () => {
  scenario('Breadcrumb', () =>
    <Breadcrumb>
      <Breadcrumb.Item href="#">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Data
      </Breadcrumb.Item>
    </Breadcrumb>
  )
})
