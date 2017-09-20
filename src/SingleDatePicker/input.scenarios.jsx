import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import SingleDatePickerWrapper from '.'

const scenario = (name, fn) => scenarioFn(name, fn)

const TestCustomInputIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    C
  </span>
)

context('SingleDatePicker - Input Props', () => {
  scenario('default', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
    />
  ))

  scenario('disabled', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      disabled
    />
  ))

  scenario('readOnly', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      readOnly
    />
  ))

  scenario('with clear dates button', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      showClearDate
    />
  ))

  scenario('reopens DayPicker on clear dates', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      showClearDate
      reopenPickerOnClearDate
    />
  ))

  scenario('with custom display format', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      displayFormat='MMM D'
    />
  ))

  scenario('with show calendar icon', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      showDefaultInputIcon
    />
  ))

  scenario('with custom show calendar icon', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))

  scenario('with screen reader message', () => (
    <SingleDatePickerWrapper
      initialDate={moment().add(3, 'days')}
      screenReaderInputMessage='Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc'
    />
  ))
})
