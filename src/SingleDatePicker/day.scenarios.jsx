import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import { isInclusivelyAfterDay, isSameDay } from 'react-dates'
import SingleDatePickerWrapper from '.'

const scenario = (name, fn) => scenarioFn(name, fn)

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

context('SingleDatePicker - Day Props', () => {
  scenario('default', () => (
    <SingleDatePickerWrapper autoFocus />
  ))

  scenario('allows all days, including past days', () => (
    <SingleDatePickerWrapper
      isOutsideRange={() => false}
      autoFocus
    />
  ))

  scenario('allows next two weeks only', () => (
    <SingleDatePickerWrapper
      isOutsideRange={day =>
        !isInclusivelyAfterDay(day, moment()) ||
        isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
      }
      autoFocus
    />
  ))

  scenario('with some blocked dates', () => (
    <SingleDatePickerWrapper
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))

  scenario('with some highlighted dates', () => (
    <SingleDatePickerWrapper
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))

  scenario('blocks fridays', () => (
    <SingleDatePickerWrapper
      isDayBlocked={day => moment.weekdays(day.weekday()) === 'Friday'}
      autoFocus
    />
  ))

  scenario('with custom daily details', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
      renderDay={day => day.format('ddd')}
      autoFocus
    />
  ))
})
