import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import thumbnailImg from '../assets/thumbnail.png'
import thumbnaildivImg from '../assets/thumbnaildiv.png'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Media content: Thumbnails', () => {
  scenario('Anchor Thumbnail', () =>
    <Grid>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href='#' alt='171x180' src={thumbnailImg} />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href='#' alt='171x180' src={thumbnailImg} />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href='#' alt='171x180' src={thumbnailImg} />
        </Col>
      </Row>
    </Grid>
  )

  scenario('Divider Thumbnails', () =>
    <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={thumbnaildivImg} alt='242x200'>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle='primary'>Button</Button>&nbsp;
              <Button bsStyle='default'>Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={thumbnaildivImg} alt='242x200'>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle='primary'>Button</Button>&nbsp;
              <Button bsStyle='default'>Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={thumbnaildivImg} alt='242x200'>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle='primary'>Button</Button>&nbsp;
              <Button bsStyle='default'>Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
  )
})
