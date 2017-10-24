import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Glyphicon, InputGroup, Form, Col, Checkbox, Radio } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Forms: Validation states', () => {
  scenario('Input with success', () =>
    <form>
      <FormGroup controlId='formValidationSuccess1' validationState='success'>
        <ControlLabel>Input with success</ControlLabel>
        <FormControl type='text' />
        <HelpBlock>Help text with validation state.</HelpBlock>
      </FormGroup>
    </form>
  )

  scenario('Input with warning', () =>
    <form>
      <FormGroup controlId='formValidationWarning1' validationState='warning'>
        <ControlLabel>Input with warning</ControlLabel>
        <FormControl type='text' />
      </FormGroup>
    </form>
  )

  scenario('Input with error', () =>
    <form>
      <FormGroup controlId='formValidationError1' validationState='error'>
        <ControlLabel>Input with error</ControlLabel>
        <FormControl type='text' />
      </FormGroup>
    </form>
  )

  scenario('Input with no validation state', () =>
    <form>
      <FormGroup controlId='formValidationNull' validationState={null}>
        <ControlLabel>Input with no validation state</ControlLabel>
        <FormControl type='text' />
      </FormGroup>
    </form>
  )

  scenario('Input with success and feedback icon', () =>
    <form>
      <FormGroup controlId='formValidationSuccess2' validationState='success'>
        <ControlLabel>Input with success and feedback icon</ControlLabel>
        <FormControl type='text' />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  )

  scenario('Input with warning and feedback icon', () =>
    <form>
      <FormGroup controlId='formValidationWarning2' validationState='warning'>
        <ControlLabel>Input with warning and feedback icon</ControlLabel>
        <FormControl type='text' />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  )

  scenario('Input with error and feedback icon', () =>
    <form>
      <FormGroup controlId='formValidationError2' validationState='error'>
        <ControlLabel>Input with error and feedback icon</ControlLabel>
        <FormControl type='text' />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  )

  scenario('Input with success and custom feedback icon', () =>
    <form>
      <FormGroup controlId='formValidationSuccess3' validationState='success'>
        <ControlLabel>Input with success and custom feedback icon</ControlLabel>
        <FormControl type='text' />
        <FormControl.Feedback>
          <Glyphicon glyph='music' />
        </FormControl.Feedback>
      </FormGroup>
    </form>
  )

  scenario('Input group with warning', () =>
    <form>
      <FormGroup controlId='formValidationWarning3' validationState='warning'>
        <ControlLabel>Input group with warning</ControlLabel>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type='text' />
        </InputGroup>
        <FormControl.Feedback />
      </FormGroup>
    </form>
  )

  scenario('Checkboxes and radios', () =>
    <form>
      <Checkbox validationState='success'>
        Checkbox with success
      </Checkbox>
      <Radio validationState='warning'>
        Radio with warning
      </Radio>
      <Checkbox validationState='error'>
        Checkbox with error
      </Checkbox>
    </form>
  )

  scenario('Inline checkboxes', () =>
    <form>
      {/* This requires React 15's <span>-less spaces to be exactly correct. */}
      <FormGroup validationState='success'>
        <Checkbox inline>
          Checkbox
        </Checkbox>
        {' '}
        <Checkbox inline>
          with
        </Checkbox>
        {' '}
        <Checkbox inline>
          success
        </Checkbox>
      </FormGroup>
    </form>
  )
})
