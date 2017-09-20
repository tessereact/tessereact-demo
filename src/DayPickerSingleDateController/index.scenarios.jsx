import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import { isSameDay, isInclusivelyAfterDay } from 'react-dates'
import { VERTICAL_ORIENTATION } from 'react-dates/constants'
import DayPickerSingleDateControllerWrapper from '.'

const scenario = (name, fn) => scenarioFn(name, fn)

const action = () => null

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

const datesList = [
  moment(),
  moment().add(1, 'days'),
  moment().add(3, 'days'),
  moment().add(9, 'days'),
  moment().add(10, 'days'),
  moment().add(11, 'days'),
  moment().add(12, 'days'),
  moment().add(13, 'days')
]

context('DayPickerSingleDateController', () => {
  scenario('default', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
    />
  ))

  scenario('with custom input', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      showInput
    />
  ))

  scenario('non-english locale', () => {
    moment.locale('zh-cn')
    return (
      <DayPickerSingleDateControllerWrapper
        onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
        onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
        onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
        monthFormat='YYYY[年]MMMM'
      />
    )
  })

  scenario('single month', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      numberOfMonths={1}
    />
  ))

  scenario('3 months', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      numberOfMonths={3}
    />
  ))

  scenario('vertical', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      orientation={VERTICAL_ORIENTATION}
    />
  ))

  scenario('with custom month navigation', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  ))

  scenario('with outside days enabled', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      numberOfMonths={1}
      enableOutsideDays
    />
  ))

  scenario('with month specified on open', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      initialVisibleMonth={() => moment().add(10, 'months')}
    />
  ))

  scenario('allows all days, including past days', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      isOutsideRange={() => false}
    />
  ))

  scenario('allows next two weeks only', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      isOutsideRange={day =>
        !isInclusivelyAfterDay(day, moment()) ||
        isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
      }
    />
  ))

  scenario('with some blocked dates', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
    />
  ))

  scenario('with some highlighted dates', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
    />
  ))

  scenario('blocks fridays', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      isDayBlocked={day => moment.weekdays(day.weekday()) === 'Friday'}
    />
  ))

  scenario('with custom daily details', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      renderDay={day => day.format('ddd')}
    />
  ))

  scenario('with info panel', () => (
    <DayPickerSingleDateControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
    />
  ))
})
