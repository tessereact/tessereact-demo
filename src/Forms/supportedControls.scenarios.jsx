import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

function FieldGroup ({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

context('Forms: Supported controls', () => {
  scenario('Text', () =>
    <form>
      <FieldGroup
        id='formControlsText'
        type='text'
        label='Text'
        placeholder='Enter text'
      />
    </form>
  )

  scenario('Email', () =>
    <form>
      <FieldGroup
        id='formControlsEmail'
        type='email'
        label='Email address'
        placeholder='Enter email'
      />
    </form>
  )

  scenario('Password', () =>
    <form>
      <FieldGroup
        id='formControlsPassword'
        label='Password'
        type='password'
      />
    </form>
  )

  scenario('File', () =>
    <form>
      <FieldGroup
        id='formControlsFile'
        type='file'
        label='File'
        help='Example block-level help text here.'
      />
    </form>
  )

  scenario('Checkbox', () =>
    <form>
      <Checkbox checked readOnly>
        Checkbox
      </Checkbox>
    </form>
  )

  scenario('Radio button', () =>
    <form>
      <Radio checked readOnly>
        Radio
      </Radio>
    </form>
  )

  scenario('Checkbox group', () =>
    <form>
      <FormGroup>
        <Checkbox inline>
          1
        </Checkbox>
        {' '}
        <Checkbox inline>
          2
        </Checkbox>
        {' '}
        <Checkbox inline>
          3
        </Checkbox>
      </FormGroup>
    </form>
  )

  scenario('Radio group', () =>
    <form>
      <FormGroup>
        <Radio name='radioGroup' inline>
          1
        </Radio>
        {' '}
        <Radio name='radioGroup' inline>
          2
        </Radio>
        {' '}
        <Radio name='radioGroup' inline>
          3
        </Radio>
      </FormGroup>
    </form>
  )

  scenario('Select', () =>
    <form>
      <FormGroup controlId='formControlsSelect'>
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass='select' placeholder='select'>
          <option value='select'>select</option>
          <option value='other'>...</option>
        </FormControl>
      </FormGroup>
    </form>
  )

  scenario('Multiple select', () =>
    <form>
      <FormGroup controlId='formControlsSelectMultiple'>
        <ControlLabel>Multiple select</ControlLabel>
        <FormControl componentClass='select' multiple>
          <option value='select'>select (multiple)</option>
          <option value='other'>...</option>
        </FormControl>
      </FormGroup>
    </form>
  )

  scenario('Textarea', () =>
    <form>
      <FormGroup controlId='formControlsTextarea'>
        <ControlLabel>Textarea</ControlLabel>
        <FormControl componentClass='textarea' placeholder='textarea' />
      </FormGroup>
    </form>
  )

  scenario('Static text', () =>
    <form>
      <FormGroup>
        <ControlLabel>Static text</ControlLabel>
        <FormControl.Static>
          email@example.com
        </FormControl.Static>
      </FormGroup>
    </form>
  )

  scenario('Button', () =>
    <form>
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
})
