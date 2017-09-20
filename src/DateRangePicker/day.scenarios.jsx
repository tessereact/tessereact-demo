import React from 'react'
import moment from 'moment'
import { context, scenario as scenarioFn } from 'tessereact'
import { isSameDay, isInclusivelyAfterDay } from 'react-dates'
import DateRangePickerWrapper from '.'

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

context('DateRangePicker - Day Props', () => {
  scenario('default', () => (
    <DateRangePickerWrapper autoFocus />
  ))

  scenario('with minimum nights set', () => (
    <DateRangePickerWrapper
      minimumNights={3}
      initialStartDate={moment().add(3, 'days')}
      autoFocusEndDate
    />
  ))

  scenario('allows single day range', () => (
    <DateRangePickerWrapper
      minimumNights={0}
      initialStartDate={moment().add(3, 'days')}
      autoFocusEndDate
    />
  ))

  scenario('allows all days, including past days', () => (
    <DateRangePickerWrapper
      isOutsideRange={() => false}
      autoFocus
    />
  ))

  scenario('allows next two weeks only', () => (
    <DateRangePickerWrapper
      isOutsideRange={day =>
        !isInclusivelyAfterDay(day, moment()) ||
        isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
      }
      autoFocus
    />
  ))

  scenario('with some blocked dates', () => (
    <DateRangePickerWrapper
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))

  scenario('with some highlighted dates', () => (
    <DateRangePickerWrapper
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))

  scenario('blocks fridays', () => (
    <DateRangePickerWrapper
      isDayBlocked={day => moment.weekdays(day.weekday()) === 'Friday'}
      autoFocus
    />
  ))

  scenario('with custom daily details', () => (
    <DateRangePickerWrapper
      renderDay={day => day.format('ddd')}
      autoFocus
    />
  ))
})
