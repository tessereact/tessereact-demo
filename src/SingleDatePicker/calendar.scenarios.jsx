import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import { VERTICAL_ORIENTATION, ANCHOR_RIGHT, OPEN_UP } from 'react-dates/constants'
import SingleDatePickerWrapper from '.'

const scenario = (name, fn) => scenarioFn(name, fn)

const TestPrevIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    Prev
  </span>
)

const TestNextIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    Next
  </span>
)

const TestCustomInfoPanel = () => (
  <div
    style={{
      padding: '10px 21px',
      borderTop: '1px solid #dce0e0',
      color: '#484848'
    }}
  >
    &#x2755; Some useful info here
  </div>
)

context('SingleDatePicker - Calendar Props', () => {
  scenario('default', () => (
    <SingleDatePickerWrapper autoFocus />
  ))

  scenario('open up', () => (
    <div style={{ marginTop: '450px' }}>
      <SingleDatePickerWrapper
        openDirection={OPEN_UP}
        autoFocus
      />
    </div>
  ))

  scenario('single month', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
      autoFocus
    />
  ))

  scenario('with custom day size', () => (
    <SingleDatePickerWrapper daySize={50} autoFocus />
  ))

  scenario('anchored right', () => (
    <div style={{ float: 'right' }}>
      <SingleDatePickerWrapper
        anchorDirection={ANCHOR_RIGHT}
        autoFocus
      />
    </div>
  ))

  scenario('vertical', () => (
    <SingleDatePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      autoFocus
    />
  ))

  scenario('horizontal with portal', () => (
    <SingleDatePickerWrapper
      withPortal
      autoFocus
    />
  ))

  scenario('horizontal with fullscreen portal', () => (
    <SingleDatePickerWrapper withFullScreenPortal autoFocus />
  ))

  scenario('vertical with full screen portal', () => (
    <SingleDatePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      withFullScreenPortal
      autoFocus
    />
  ))

  scenario('does not autoclose the DayPicker on date selection', () => (
    <SingleDatePickerWrapper
      keepOpenOnDateSelect
      autoFocus
    />
  ))

  scenario('with month specified on open', () => (
    <SingleDatePickerWrapper
      initialVisibleMonth={() => moment().add(10, 'months')}
      autoFocus
    />
  ))

  scenario('with custom arrows', () => (
    <SingleDatePickerWrapper
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
      autoFocus
    />
  ))

  scenario('with outside days enabled', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
      enableOutsideDays
      autoFocus
    />
  ))

  scenario('with info panel', () => (
    <SingleDatePickerWrapper
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))

  scenario('with keyboard shorcuts panel hidden', () => (
    <SingleDatePickerWrapper
      hideKeyboardShortcutsPanel
      autoFocus
    />
  ))

  scenario('with RTL support', () => (
    <SingleDatePickerWrapper
      isRTL
      autoFocus
    />
  ))

  scenario('with custom first day of week', () => (
    <SingleDatePickerWrapper
      firstDayOfWeek={3}
      autoFocus
    />
  ))
})
