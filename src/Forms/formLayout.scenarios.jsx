import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Checkbox } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Forms: Form layouts', () => {
  scenario('Inline', () =>
    <Form inline>
      <FormGroup controlId='formInlineName'>
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl type='text' placeholder='Jane Doe' />
      </FormGroup>
      {' '}
      <FormGroup controlId='formInlineEmail'>
        <ControlLabel>Email</ControlLabel>
        {' '}
        <FormControl type='email' placeholder='jane.doe@example.com' />
      </FormGroup>
      {' '}
      <Button type='submit'>
        Send invitation
      </Button>
    </Form>
  )

  scenario('Horizontal', () =>
    <Form horizontal>
      <FormGroup controlId='formHorizontalEmail'>
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type='email' placeholder='Email' />
        </Col>
      </FormGroup>

      <FormGroup controlId='formHorizontalPassword'>
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type='password' placeholder='Password' />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type='submit'>
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  )
})
