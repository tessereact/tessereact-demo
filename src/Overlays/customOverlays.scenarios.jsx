import React from 'react'
import ReactDOM from 'react-dom'
import { context, scenario as scenarioFn } from 'tessereact'
import { Overlay, Tooltip, Button } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Overlays: Custom Overlays', () => {
  scenario('Custom overlay example', class OverlayExample extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = { show: true }
    }

    toggle = () => {
      this.setState({ show: !this.state.show })
    }

    render () {
      const sharedProps = {
        show: this.state.show,
        container: this,
        target: () => ReactDOM.findDOMNode(this.refs.target)
      }

      return (
        <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
          <Button ref='target' onClick={this.toggle}>
            Click me!
          </Button>

          <Overlay {...sharedProps} placement='left'>
            <Tooltip id='overload-left'>Tooltip overload!</Tooltip>
          </Overlay>
          <Overlay {...sharedProps} placement='top'>
            <Tooltip id='overload-top'>Tooltip overload!</Tooltip>
          </Overlay>
          <Overlay {...sharedProps} placement='right'>
            <Tooltip id='overload-right'>Tooltip overload!</Tooltip>
          </Overlay>
          <Overlay {...sharedProps} placement='bottom'>
            <Tooltip id='overload-bottom'>Tooltip overload!</Tooltip>
          </Overlay>
        </div>
      )
    }
  })

  scenario('Use Overlay instead of Tooltip and Popover', () => {
    class CustomPopover extends React.Component {
      render () {
        return (
          <div
            style={{
              ...this.props.style,
              position: 'absolute',
              backgroundColor: '#EEE',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              border: '1px solid #CCC',
              borderRadius: 3,
              marginLeft: -5,
              marginTop: 5,
              padding: 10
            }}
          >
            <strong>Holy guacamole!</strong> Check this info.
          </div>
        )
      }
    }

    class OverlayCustom extends React.Component {
      constructor (props, context) {
        super(props, context)
        this.state = { show: true }
      }

      toggle () {
        this.setState({ show: !this.state.show })
      }

      render () {
        return (
          <div style={{ height: 100, position: 'relative' }}>
            <Button ref='target' onClick={this.toggle}>
              I am an Overlay target
            </Button>

            <Overlay
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              placement='right'
              container={this}
              target={() => ReactDOM.findDOMNode(this.refs.target)}
            >
              <CustomPopover />
            </Overlay>
          </div>
        )
      }
    }

    return <OverlayCustom />
  })
})
