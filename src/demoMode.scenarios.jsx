import React from 'react'
import ReactDOM from 'react-dom'
import snapshots from './demoModeSnapshots.json'
import defaultScreenshotURL from './assets/placeholder.png'

import closeableAlertsIPhone from './demoModeScreenshots/closeableAlertsIPhone.gif'
import closeableAlertsXGA from './demoModeScreenshots/closeableAlertsXGA.gif'
import disabledButtonIPhone from './demoModeScreenshots/disabledButtonIPhone.gif'
import disabledButtonXGA from './demoModeScreenshots/disabledButtonXGA.gif'
import signInIPhone from './demoModeScreenshots/signInIPhone.gif'
import signInXGA from './demoModeScreenshots/signInXGA.gif'
import navbarIPhone from './demoModeScreenshots/navbarIPhone.gif'
import navbarXGA from './demoModeScreenshots/navbarXGA.gif'
import paginationIPhone from './demoModeScreenshots/paginationIPhone.gif'
import paginationXGA from './demoModeScreenshots/paginationXGA.gif'
import modalIPhone from './demoModeScreenshots/modalIPhone.gif'
import modalXGA from './demoModeScreenshots/modalXGA.gif'

import forkMeImg from './assets/forkme.png'

const description = `
  <div style="padding: 20px;">
    <p>This demo works properly only in Google Chrome.</p>
    <p>Reload to reset accepted scenarios.</p>
  </div>
`

// Not in iframe
if (!/\/scenarios\/[^/]+\/view/.test(window.location.href)) {
  const wrapperElement = document.createElement('div')
  document.body.appendChild(wrapperElement)
  ReactDOM.render(
    <a href='https://github.com/tessereact/tessereact'>
      <img
        style={{position: 'absolute', bottom: 0, right: 0, border: 0, zIndex: 999999}}
        src={forkMeImg}
        alt='Fork me on GitHub'
      />
    </a>,
    wrapperElement
  )
}

window.__tessereactDemoMode = {
  description,
  snapshots,
  defaultScreenshotURL,
  screenshots: {
    'Alerts/Closeable alerts/0': closeableAlertsIPhone,
    'Alerts/Closeable alerts/1': closeableAlertsXGA,
    'Button/Disabled state/0': disabledButtonIPhone,
    'Button/Disabled state/1': disabledButtonXGA,
    'Forms: Form layouts/Horizontal/0': signInIPhone,
    'Forms: Form layouts/Horizontal/1': signInXGA,
    'Navigation: Navbars/Responsive/0': navbarIPhone,
    'Navigation: Navbars/Responsive/1': navbarXGA,
    'Navigation: Pagination/More options/0': paginationIPhone,
    'Navigation: Pagination/More options/1': paginationXGA,
    'Overlays: Modals/Static markup/0': modalIPhone,
    'Overlays: Modals/Static markup/1': modalXGA
  }
}
