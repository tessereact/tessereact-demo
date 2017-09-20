import React from 'react'
import moment from 'moment'
import momentJalaali from 'moment-jalaali'
import { context, scenario as scenarioFn } from 'tessereact'
import DateRangePickerWrapper from '.'

const scenario = (name, fn) => scenarioFn(name, fn)

const TestInput = props => (
  <div style={{ marginTop: 16 }}>
    <input
      {...props}
      type='text'
      style={{
        height: 48,
        width: 284,
        fontSize: 18,
        fontWeight: 200,
        padding: '12px 16px'
      }}
    />
  </div>
)

class TestWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showDatePicker: false
    }
  }

  render () {
    const { showDatePicker } = this.state
    const display = showDatePicker ? 'block' : 'none'
    return (
      <div>
        <button
          type='button'
          onClick={() => this.setState({ showDatePicker: !showDatePicker })}
        >
          Show me!
        </button>

        <div style={{ display }}>
          <DateRangePickerWrapper />
        </div>
      </div>
    )
  }
}

context('DateRangePicker', () => {
  scenario('default', () => (
    <DateRangePickerWrapper />
  ))

  scenario('hidden with display: none', () => (
    <TestWrapper />
  ))

  scenario('as part of a form', () => (
    <div>
      <DateRangePickerWrapper />
      <TestInput placeholder='Input 1' />
      <TestInput placeholder='Input 2' />
      <TestInput placeholder='Input 3' />
    </div>
  ))

  scenario('non-english locale', () => {
    moment.locale('zh-cn')
    return (
      <DateRangePickerWrapper
        showClearDates
        startDatePlaceholderText='入住日期'
        endDatePlaceholderText='退房日期'
        monthFormat='YYYY[年]MMMM'
        phrases={{
          closeDatePicker: '关闭',
          clearDates: '清除日期'
        }}
      />
    )
  })

  scenario('non-english locale (Persian)', () => {
    moment.locale('fa')
    return (
      <DateRangePickerWrapper
        placeholder='تقویم فارسی'
        renderMonth={month => momentJalaali(month).format('jMMMM jYYYY')}
        renderDay={day => momentJalaali(day).format('jD')}
      />
    )
  })
})
