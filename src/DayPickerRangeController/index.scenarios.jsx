import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import { isSameDay, isInclusivelyAfterDay } from 'react-dates'
import { VERTICAL_ORIENTATION } from 'react-dates/constants'
import DayPickerRangeControllerWrapper from '.'

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

context('DayPickerRangeController', () => {
  scenario('default', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
    />
  ))

  scenario('with custom inputs', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      showInputs
    />
  ))

  scenario('non-english locale', () => {
    moment.locale('zh-cn')
    return (
      <DayPickerRangeControllerWrapper
        onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
        onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
        onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
        monthFormat='YYYY[年]MMMM'
      />
    )
  })

  scenario('single month', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      numberOfMonths={1}
    />
  ))

  scenario('3 months', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      numberOfMonths={3}
    />
  ))

  scenario('vertical', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      orientation={VERTICAL_ORIENTATION}
    />
  ))

  scenario('with custom month navigation', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  ))

  scenario('with outside days enabled', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      numberOfMonths={1}
      enableOutsideDays
    />
  ))

  scenario('with month specified on open', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      initialVisibleMonth={() => moment().add(10, 'months')}
    />
  ))

  scenario('with minimum nights set', () => (
    <DayPickerRangeControllerWrapper
      minimumNights={3}
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      initialStartDate={moment().add(3, 'days')}
      autoFocusEndDate
    />
  ))

  scenario('allows single day range', () => (
    <DayPickerRangeControllerWrapper
      minimumNights={0}
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      initialStartDate={moment().add(3, 'days')}
      autoFocusEndDate
    />
  ))

  scenario('allows all days, including past days', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isOutsideRange={() => false}
    />
  ))

  scenario('allows next two weeks only', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isOutsideRange={day =>
        !isInclusivelyAfterDay(day, moment()) ||
        isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
      }
    />
  ))

  scenario('with some blocked dates', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
    />
  ))

  scenario('with some highlighted dates', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
    />
  ))

  scenario('blocks fridays', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isDayBlocked={day => moment.weekdays(day.weekday()) === 'Friday'}
    />
  ))

  scenario('with custom daily details', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      renderDay={day => day.format('ddd')}
    />
  ))

  scenario('with info panel', () => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
    />
  ))
})
