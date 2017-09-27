import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import thumbnailImg from '../assets/thumbnail.png'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Media content: Images', () => {
  scenario('Shapes', () =>
    <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Image src={thumbnailImg} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={thumbnailImg} circle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={thumbnailImg} thumbnail />
        </Col>
      </Row>
    </Grid>
  )

  scenario('Responsive', () =>
    <Image src={thumbnailImg} responsive />
  )
})
