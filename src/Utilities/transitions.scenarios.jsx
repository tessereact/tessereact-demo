import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Button, Collapse, Well, Fade } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Transitions', () => {
  scenario('Collapse', class CollapseExample extends React.Component {
    constructor (...args) {
      super(...args)

      this.state = {}
    }

    render () {
      return (
        <div>
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            click
          </Button>
          <Collapse in={this.state.open}>
            <div>
              <Well>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </Well>
            </div>
          </Collapse>
        </div>
      )
    }
  })

  scenario('Fade', class FadeExample extends React.Component {
    constructor (...args) {
      super(...args)
      this.state = {}
    }

    render () {
      return (
        <div>
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            click
          </Button>
          <Fade in={this.state.open}>
            <div>
              <Well>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </Well>
            </div>
          </Fade>
        </div>
      )
    }
  })
})
