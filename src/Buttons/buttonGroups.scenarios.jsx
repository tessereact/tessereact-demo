import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Button, ButtonGroup, DropdownButton, ButtonToolbar, MenuItem, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Button groups', () => {
  scenario('Basic example', () =>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  )

  scenario('Button toolbar', () =>
    <ButtonToolbar>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  )

  scenario('Sizing', () =>
    <div>
      <ButtonToolbar>
        <ButtonGroup bsSize="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup bsSize="xsmall">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  )

  scenario('Nesting', () =>
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <DropdownButton title="Dropdown" id="bg-nested-dropdown">
        <MenuItem eventKey="1">Dropdown link</MenuItem>
        <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton>
    </ButtonGroup>
  )

  scenario('ToggleButton (uncontrolled)', () =>
    <div>
      <ButtonToolbar>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
          <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
          <ToggleButton value={2}>Checkbox 2</ToggleButton>

          <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1}>
            Radio 1 (pre-checked)
          </ToggleButton>
          <ToggleButton value={2}>Radio 2</ToggleButton>

          <ToggleButton value={3}>Radio 3</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>
  )

  scenario('ToggleButton (controlled)', class ToggleButtonGroupControlled extends React.Component {
    constructor (props, context) {
      super(props, context)

      this.state = {
        value: [1, 3]
      }
    }

    onChange = (value) => {
      this.setState({ value })
    }

    render () {
      return <ToggleButtonGroup
        type="checkbox"
        value={this.state.value}
        onChange={this.onChange}
      >
        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
        <ToggleButton value={2}>Checkbox 2</ToggleButton>

        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
        <ToggleButton value={4} disabled>Checkbox 4 (disabled)</ToggleButton>
      </ToggleButtonGroup>
    }
  })

  scenario('Vertical variation', () =>
    <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button</Button>
      <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
        <MenuItem eventKey="1">Dropdown link</MenuItem>
        <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton>
      <Button>Button</Button>
      <Button>Button</Button>
      <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
        <MenuItem eventKey="1">Dropdown link</MenuItem>
        <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton>
      <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
        <MenuItem eventKey="1">Dropdown link</MenuItem>
        <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton>
    </ButtonGroup>
  )

  scenario('Vertical variation (full width)', () =>
    <ButtonGroup vertical block>
      <Button>Full width button</Button>
      <Button>Full width button</Button>
    </ButtonGroup>
  )

  scenario('Justified button groups', () =>
    <ButtonGroup justified>
      <Button href="#">Left</Button>
      <Button href="#">Middle</Button>
      <DropdownButton title="Dropdown" id="bg-justified-dropdown">
        <MenuItem eventKey="1">Dropdown link</MenuItem>
        <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton>
    </ButtonGroup>
  )
})
