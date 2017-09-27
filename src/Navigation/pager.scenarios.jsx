import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Pager } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Navigation: Pager', () => {
  scenario('Centers by default', () =>
    <Pager>
      <Pager.Item href='#'>Previous</Pager.Item>
      {' '}
      <Pager.Item href='#'>Next</Pager.Item>
    </Pager>
  )

  scenario('Aligned', () =>
    <Pager>
      <Pager.Item previous href='#'>&larr; Previous Page</Pager.Item>
      <Pager.Item next href='#'>Next Page &rarr;</Pager.Item>
    </Pager>
  )

  scenario('Disabled', () =>
    <Pager>
      <Pager.Item previous href='#'>&larr; Previous</Pager.Item>
      <Pager.Item disabled next href='#'>Next &rarr;</Pager.Item>
    </Pager>
  )
})
