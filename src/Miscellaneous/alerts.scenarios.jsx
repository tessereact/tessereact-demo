import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Alert, Button } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Alerts', () => {
  scenario('Basic example', () =>
    <Alert bsStyle='warning'>
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
    </Alert>
  )

  scenario('Closeable alerts', class AlertDismissable extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        alertVisible: true
      }
    }

    render () {
      if (this.state.alertVisible) {
        return (
          <Alert bsStyle='danger'>
            <h4>Oh snap! You got an error!</h4>
            <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>
              <Button bsStyle='danger'>Take this action</Button>
              <span> or </span>
              <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
            </p>
          </Alert>
        )
      }

      return (
        <Button onClick={this.handleAlertShow}>Show Alert</Button>
      )
    }

    handleAlertDismiss = () => {
      this.setState({alertVisible: false})
    }

    handleAlertShow = () => {
      this.setState({alertVisible: true})
    }
  })
})
