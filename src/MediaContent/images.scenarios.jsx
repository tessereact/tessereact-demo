import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Grid, Row, Col, Image } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Media content: Images', () => {
  scenario('Shapes', () =>
    <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Image src="/assets/thumbnail.png" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/assets/thumbnail.png" circle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/assets/thumbnail.png" thumbnail />
        </Col>
      </Row>
    </Grid>
  )

  scenario('Responsive', () =>
    <Image src="/assets/thumbnail.png" responsive />
  )
})
