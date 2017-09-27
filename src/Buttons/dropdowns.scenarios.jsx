import React from 'react'
import ReactDOM from 'react-dom'
import { context, scenario as scenarioFn } from 'tessereact'
import { Button, DropdownButton, ButtonToolbar, MenuItem, SplitButton, Dropdown, Glyphicon, FormControl } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Button dropdowns', () => {
  scenario('Single button dropdowns', () => {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']

    function renderDropdownButton (title, i) {
      return (
        <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3' active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </DropdownButton>
      )
    }

    return <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
  })

  scenario('Split button dropdowns', () => {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']

    function renderDropdownButton (title, i) {
      return <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </SplitButton>
    }

    return <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
  })

  scenario('Sizing', () =>
    <div>
      <ButtonToolbar>
        <DropdownButton bsSize='large' title='Large button' id='dropdown-size-large'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>

      <ButtonToolbar>
        <DropdownButton title='Default button' id='dropdown-size-medium'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>

      <ButtonToolbar>
        <DropdownButton bsSize='small' title='Small button' id='dropdown-size-small'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>

      <ButtonToolbar>
        <DropdownButton bsSize='xsmall' title='Extra small button' id='dropdown-size-extra-small'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    </div>
  )

  scenario('No caret variation', () =>
    <ButtonToolbar>
      <DropdownButton bsStyle='default' title='No caret' noCaret id='dropdown-no-caret'>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    </ButtonToolbar>
  )

  scenario('Dropup variation', () =>
    <div>
      <ButtonToolbar>
        <SplitButton title='Dropup' dropup id='split-button-dropup'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </SplitButton>
      </ButtonToolbar>

      <ButtonToolbar>
        <SplitButton bsStyle='primary' title='Right dropup' dropup pullRight id='split-button-dropup-pull-right'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </SplitButton>
      </ButtonToolbar>
    </div>
  )

  scenario('Dropdown right variation', () =>
    <SplitButton title='Dropdown right' pullRight id='split-button-pull-right'>
      <MenuItem eventKey='1'>Action</MenuItem>
      <MenuItem eventKey='2'>Another action</MenuItem>
      <MenuItem eventKey='3'>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey='4'>Separated link</MenuItem>
    </SplitButton>
  )

  scenario('Dropdown customization', () =>
    <ButtonToolbar>
      <Dropdown id='dropdown-custom-1'>
        <Dropdown.Toggle>
          <Glyphicon glyph='star' />
          Pow! Zoom!
        </Dropdown.Toggle>
        <Dropdown.Menu className='super-colors'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3' active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id='dropdown-custom-2'>
        <Button bsStyle='info'>
          mix it up style-wise
        </Button>
        <Dropdown.Toggle bsStyle='success' />
        <Dropdown.Menu className='super-colors'>
          <MenuItem eventKey='1'>Action</MenuItem>
          <MenuItem eventKey='2'>Another action</MenuItem>
          <MenuItem eventKey='3' active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Separated link</MenuItem>
        </Dropdown.Menu>
      </Dropdown>

    </ButtonToolbar>
  )

  scenario('Custom dropdown components', () => {
    class CustomToggle extends React.Component {
      handleClick = (e) => {
        e.preventDefault()
        this.props.onClick(e)
      }

      render () {
        return (
          <a href='' onClick={this.handleClick}>
            {this.props.children}
          </a>
        )
      }
    }

    class CustomMenu extends React.Component {
      constructor (props, context) {
        super(props, context)

        this.onChange = e => this.setState({ value: e.target.value })

        this.state = { value: '' }
      }

      focusNext = () => {
        const input = ReactDOM.findDOMNode(this.input)

        if (input) {
          input.focus()
        }
      }

      render () {
        const { children } = this.props
        const { value } = this.state

        return (
          <div className='dropdown-menu' style={{ padding: '' }}>
            <FormControl
              ref={c => { this.input = c }}
              type='text'
              placeholder='Type to filter...'
              onChange={this.onChange}
              value={this.state.value}
            />
            <ul className='list-unstyled'>
              {React.Children.toArray(children).filter(child => (
                !value.trim() || child.props.children.indexOf(value) !== -1
              ))}
            </ul>
          </div>
        )
      }
    }

    return <Dropdown id='dropdown-custom-menu'>
      <CustomToggle bsRole='toggle'>
        Custom toggle
      </CustomToggle>

      <CustomMenu bsRole='menu'>
        <MenuItem eventKey='1'>Red</MenuItem>
        <MenuItem eventKey='2'>Blue</MenuItem>
        <MenuItem eventKey='3' active>Orange</MenuItem>
        <MenuItem eventKey='1'>Red-Orange</MenuItem>
      </CustomMenu>
    </Dropdown>
  })
})
