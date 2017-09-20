import React from 'react'
import moment from 'moment'
import momentJalaali from 'moment-jalaali'
import { context, scenario as scenarioFn } from 'tessereact'
import SingleDatePickerWrapper from '.'

const scenario = (name, fn) => scenarioFn(name, fn)

const TestInput = props => (
  <div style={{ marginTop: 16 }} >
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

context('SingleDatePicker', () => {
  scenario('default', () => (
    <SingleDatePickerWrapper />
  ))

  scenario('as part of a form', () => (
    <div>
      <SingleDatePickerWrapper />
      <TestInput placeholder='Input 1' />
      <TestInput placeholder='Input 2' />
      <TestInput placeholder='Input 3' />
    </div>
  ))

  scenario('non-english locale (Chinese)', () => {
    moment.locale('zh-cn')
    return (
      <SingleDatePickerWrapper
        placeholder='入住日期'
        monthFormat='YYYY[年]MMMM'
        phrases={{
          closeDatePicker: '关闭',
          clearDate: '清除日期'
        }}
      />
    )
  })

  scenario('non-english locale (Persian)', () => {
    moment.locale('fa')
    return (
      <SingleDatePickerWrapper
        placeholder='تقویم فارسی'
        renderMonth={month => momentJalaali(month).format('jMMMM jYYYY')}
        renderDay={day => momentJalaali(day).format('jD')}
      />
    )
  })
})
