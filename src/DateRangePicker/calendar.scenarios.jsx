import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import { VERTICAL_ORIENTATION, ANCHOR_RIGHT, OPEN_UP } from 'react-dates/constants'
import DateRangePickerWrapper from '.'

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

context('DateRangePicker - Calendar Props', () => {
  scenario('default', () => (
    <DateRangePickerWrapper autoFocus />
  ))

  scenario('open up', () => (
    <div style={{ marginTop: '450px' }}>
      <DateRangePickerWrapper
        openDirection={OPEN_UP}
        autoFocus
      />
    </div>
  ))

  scenario('single month', () => (
    <DateRangePickerWrapper numberOfMonths={1} autoFocus />
  ))

  scenario('3 months', () => (
    <DateRangePickerWrapper numberOfMonths={3} autoFocus />
  ))

  scenario('with custom day size', () => (
    <DateRangePickerWrapper daySize={50} autoFocus />
  ))

  scenario('anchored right', () => (
    <div style={{ float: 'right' }}>
      <DateRangePickerWrapper
        anchorDirection={ANCHOR_RIGHT}
        autoFocus
      />
    </div>
  ))

  scenario('vertical', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      autoFocus
    />
  ))

  scenario('vertical anchored right', () => (
    <div style={{ float: 'right' }}>
      <DateRangePickerWrapper
        orientation={VERTICAL_ORIENTATION}
        anchorDirection={ANCHOR_RIGHT}
        autoFocus
      />
    </div>
  ))

  scenario('horizontal with portal', () => (
    <DateRangePickerWrapper
      withPortal
      autoFocus
    />
  ))

  scenario('horizontal with fullscreen portal', () => (
    <DateRangePickerWrapper withFullScreenPortal autoFocus />
  ))
  scenario('vertical with full screen portal', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      withFullScreenPortal
      autoFocus
    />
  ))

  scenario('does not autoclose the DayPicker on date selection', () => (
    <DateRangePickerWrapper
      keepOpenOnDateSelect
      autoFocus
    />
  ))

  scenario('with custom month navigation', () => (
    <DateRangePickerWrapper
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
      autoFocus
    />
  ))

  scenario('with outside days enabled', () => (
    <DateRangePickerWrapper
      numberOfMonths={1}
      enableOutsideDays
      autoFocus
    />
  ))

  scenario('with month specified on open', () => (
    <DateRangePickerWrapper
      initialVisibleMonth={() => moment().add(10, 'months')}
      autoFocus
    />
  ))

  scenario('with info panel', () => (
    <DateRangePickerWrapper
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))

  scenario('with keyboard shorcuts panel hidden', () => (
    <DateRangePickerWrapper
      hideKeyboardShortcutsPanel
      autoFocus
    />
  ))

  scenario('with RTL support (and anchor right)', () => (
    <div style={{ float: 'right' }}>
      <DateRangePickerWrapper
        anchorDirection={ANCHOR_RIGHT}
        isRTL
        autoFocus
      />
    </div>
  ))

  scenario('vertical with RTL support', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      isRTL
      autoFocus
    />
  ))

  scenario('with custom first day of week', () => (
    <DateRangePickerWrapper
      firstDayOfWeek={3}
      autoFocus
    />
  ))
})
