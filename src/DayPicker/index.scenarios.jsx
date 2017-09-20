import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { DayPicker } from 'react-dates'
import { VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE } from 'react-dates/constants'

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

context('DayPicker', () => {
  scenario('default', () => (
    <DayPicker />
  ))

  scenario('with custom day size', () => (
    <DayPicker daySize={50} />
  ))

  scenario('single month', () => (
    <DayPicker numberOfMonths={1} />
  ))

  scenario('3 months', () => (
    <DayPicker numberOfMonths={3} />
  ))

  scenario('vertical', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
    />
  ))

  scenario('vertically scrollable with 12 months', () => (
    <div
      style={{
        height: 568,
        width: 320
      }}
    >
      <DayPicker
        numberOfMonths={12}
        orientation={VERTICAL_SCROLLABLE}
      />
    </div>
  ))

  scenario('vertical with custom day size', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
      daySize={50}
    />
  ))

  scenario('with custom arrows', () => (
    <DayPicker
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  ))

  scenario('with custom details', () => (
    <DayPicker
      renderDay={day => (day.day() % 6 === 5 ? '😻' : day.format('D'))}
    />
  ))

  scenario('vertical with fixed-width container', () => (
    <div style={{ width: '400px' }}>
      <DayPicker
        numberOfMonths={2}
        orientation={VERTICAL_ORIENTATION}
      />
    </div>
  ))

  scenario('with info panel', () => (
    <DayPicker
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
    />
  ))

  scenario('with custom week day format', () => (
    <DayPicker
      weekDayFormat='ddd'
    />
  ))
})
