import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { ResponsiveEmbed } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Media content: Responsive embed', () => {
  scenario('Responsive embed', () =>
    <div style={{width: 660, height: 'auto'}}>
      <ResponsiveEmbed a16by9>
        <embed type="image/svg+xml" src="/assets/TheresaKnott_castle.svg" />
      </ResponsiveEmbed>
    </div>
  )
})
