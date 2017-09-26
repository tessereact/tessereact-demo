import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Tooltip, Button, ButtonToolbar, OverlayTrigger } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Overlays: Tooltips', () => {
  scenario('Basic example', () =>
    <div>
      <Tooltip placement="right" className="in" id="tooltip-right">
        Tooltip right
      </Tooltip>

      <Tooltip placement="top" className="in" id="tooltip-top">
        Tooltip top
      </Tooltip>

      <Tooltip placement="left" className="in" id="tooltip-left">
        Tooltip left
      </Tooltip>

      <Tooltip placement="bottom" className="in" id="tooltip-bottom">
        Tooltip bottom
      </Tooltip>
    </div>
  )

  scenario('With OverlayTrigger', () => {
    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    )

    return <ButtonToolbar>
      <OverlayTrigger placement="left" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>

      <OverlayTrigger placement="right" overlay={tooltip}>
        <Button bsStyle="default">Holy guacamole!</Button>
      </OverlayTrigger>
    </ButtonToolbar>
  })

  scenario('In text copy', () => {
    class LinkWithTooltip extends React.Component {
      render() {
        const tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

        return <OverlayTrigger
          overlay={tooltip} placement="top"
          delayShow={300} delayHide={150}
        >
          <a href={this.props.href}>{this.props.children}</a>
        </OverlayTrigger>
      }
    }

    return <p className="muted" style={{ marginBottom: 0 }}>
      Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip> haven't
      heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's
      fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip>
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four
      loko mcsweeney's cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>,
      scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip> freegan
      cred raw denim single-origin coffee viral.
    </p>
  })
})
