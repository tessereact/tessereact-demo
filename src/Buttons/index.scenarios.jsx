import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Button, ButtonToolbar } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Button', () => {
  scenario('Types', () =>
    <ButtonToolbar>
      {/* Standard button */}
      <Button>Default</Button>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <Button bsStyle='primary'>Primary</Button>

      {/* Indicates a successful or positive action */}
      <Button bsStyle='success'>Success</Button>

      {/* Contextual button for informational alert messages */}
      <Button bsStyle='info'>Info</Button>

      {/* Indicates caution should be taken with this action */}
      <Button bsStyle='warning'>Warning</Button>

      {/* Indicates a dangerous or potentially negative action */}
      <Button bsStyle='danger'>Danger</Button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <Button bsStyle='link'>Link</Button>
    </ButtonToolbar>
  )

  scenario('Sizes', () =>
    <div>
      <ButtonToolbar>
        <Button bsStyle='primary' bsSize='large'>Large button</Button>
        <Button bsSize='large'>Large button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle='primary'>Default button</Button>
        <Button>Default button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle='primary' bsSize='small'>Small button</Button>
        <Button bsSize='small'>Small button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle='primary' bsSize='xsmall'>Extra small button</Button>
        <Button bsSize='xsmall'>Extra small button</Button>
      </ButtonToolbar>
    </div>
  )

  scenario('Block level button', () => {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div className='well' style={wellStyles}>
      <Button bsStyle='primary' bsSize='large' block>Block level button</Button>
      <Button bsSize='large' block>Block level button</Button>
    </div>
  })

  scenario('Active state', () =>
    <ButtonToolbar>
      <Button bsStyle='primary' bsSize='large' active>Primary button</Button>
      <Button bsSize='large' active>Button</Button>
    </ButtonToolbar>
  )

  scenario('Button tags', () =>
    <ButtonToolbar>
      <Button href='#'>Link</Button>
      <Button>Button</Button>
    </ButtonToolbar>
  )

  scenario('Disabled state', () =>
    <ButtonToolbar>
      <Button bsStyle='primary' bsSize='large' disabled>Primary button</Button>
      <Button bsSize='large' disabled>Button</Button>
    </ButtonToolbar>
  )

  scenario('Button loading state', class LoadingButton extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        isLoading: false
      }
    }

    render () {
      const isLoading = this.state.isLoading
      return (
        <Button
          bsStyle='primary'
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}>
          {isLoading ? 'Loading...' : 'Loading state'}
        </Button>
      )
    }

    handleClick = () => {
      this.setState({isLoading: true})

      // This probably where you would have an `ajax` call
      setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({isLoading: false})
      }, 2000)
    }
  })
})
