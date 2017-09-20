import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import DateRangePickerWrapper from '.'

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

const TestCustomArrowIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    {'--->'}
  </span>
)

const TestCustomCloseIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >'X'</span>
)

context('DateRangePicker - Input Props', () => {
  scenario('default', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
    />
  ))

  scenario('disabled', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
      disabled
    />
  ))

  scenario('readOnly', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
      readOnly
    />
  ))

  scenario('with clear dates button', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
    />
  ))

  scenario('reopens DayPicker on clear dates', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      reopenPickerOnClearDates
    />
  ))

  scenario('with custom display format', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      displayFormat='MMM D'
    />
  ))

  scenario('with show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showDefaultInputIcon
    />
  ))

  scenario('with custom show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))

  scenario('with custom arrow icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      customArrowIcon={<TestCustomArrowIcon />}
    />
  ))

  scenario('with custom close icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      customCloseIcon={<TestCustomCloseIcon />}
    />
  ))

  scenario('with screen reader message', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      screenReaderInputMessage='Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc'
    />
  ))
})
