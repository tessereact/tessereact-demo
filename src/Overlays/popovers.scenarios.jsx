import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Popover, Overlay, Button, ButtonToolbar, OverlayTrigger } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Overlays: Popovers', () => {
  scenario('Basic example', () =>
    <div style={{ height: 120 }}>
      <Popover
        id="popover-basic"
        placement="right"
        positionLeft={200}
        positionTop={50}
        title="Popover right"
      >
        And here's some <strong>amazing</strong> content. It's very engaging. right?
      </Popover>
    </div>
  )

  scenario('With OverlayTrigger', () => {
    const popoverLeft = (
      <Popover id="popover-positioned-left" title="Popover left">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverTop = (
      <Popover id="popover-positioned-top" title="Popover top">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverRight = (
      <Popover id="popover-positioned-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    return <ButtonToolbar>
      <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
    </ButtonToolbar>
  })

  scenario('Trigger behaviours', () => {
    const popoverClick = (
      <Popover id="popover-trigger-click" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverFocus = (
      <Popover id="popover-trigger-focus" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    return <ButtonToolbar>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
        <Button>Click</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
        <Button>Hover + Focus</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
        <Button>Focus</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
        <Button>Click w/rootClose</Button>
      </OverlayTrigger>
    </ButtonToolbar>
  })

  scenario('Popover component in container', class PopoverContainedExample extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.state = { show: false }
    }

    handleClick = (e) =>{
      this.setState({ target: e.target, show: !this.state.show })
    }

    render() {
      return <ButtonToolbar>
        <Button onClick={this.handleClick}>
          Holy guacamole!
        </Button>

        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
      </ButtonToolbar>
    }
  })

  scenario('Positioned popover components in scrolling container', () => {
    const popoverLeft = (
      <Popover id="popover-positioned-scrolling-left" title="Popover left">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverTop = (
      <Popover id="popover-positioned-scrolling-top" title="Popover top">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverBottom = (
      <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    const popoverRight = (
      <Popover id="popover-positioned-scrolling-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    )

    return <ButtonToolbar style={{ padding: '100px 0' }}>
      <OverlayTrigger container={this} trigger="click" placement="left" overlay={popoverLeft}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger container={this} trigger="click" placement="top" overlay={popoverTop}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger container={this} trigger="click" placement="right" overlay={popoverRight}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
    </ButtonToolbar>
  })
})
