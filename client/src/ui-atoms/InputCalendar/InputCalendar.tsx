// @ts-nocheck
import React, { FC } from 'react';
import moment, { Moment } from 'moment-timezone';

import { Calendar } from './Calendar';

type Props = {
  value: null | Moment;
  onChange: (value: null | Moment) => void;
};

export const InputCalendar: FC<Props> = ({
  value,
  onChange,
}) => (
  <Calendar
    month={value.toDate()}
    toMonth={new Date()}
    disabledDays={{ before: new Date() }}
    selectedDays={value.toDate()}
    onDayClick={(day, modifiers) => {
      if (modifiers.disabled) { return; }
      onChange(moment(day).startOf('day'));
    }}
  />
);
