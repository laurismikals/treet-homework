// @ts-nocheck
import React, { FC, useState, useEffect } from 'react';
import { DateUtils } from 'react-day-picker';
import moment, { Moment } from 'moment-timezone';

import { Calendar } from './Calendar';

const transformMomentValueToJsDate = (value: {
  from: null | Moment;
  to: null | Moment;
}): { from: null | Date; to: null | Date } => {
  const { from, to } = { ...value };

  return {
    from: from ? from.toDate() : null,
    to: to ? to.toDate() : null,
  };
};

const transformJsDateValueToMoment = (value: {
  from: null | Date;
  to: null | Date;
}): {
  from: null | Moment;
  to: null | Moment;
} => {
  const { from, to } = { ...value };

  return {
    from: from === null
      ? null
      : moment(from)
        .endOf('day')
        .subtract(1, 'days')
        .add(1, 'seconds'),
    to: to === null
      ? null
      : moment(to).endOf('day'),
  };
};

const isSelectingFirstDay = (from: Date, to: null | Date, day: null | Date) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};

type Props = {
  value: {
    from: null | Moment;
    to: null | Moment;
  };
  onChange: (range: {
    from: null | Moment;
    to: null | Moment;
  }) => void;
};

export const InputCalendarRange: FC<Props> = ({
  value,
  onChange,
}) => {
  const newValue = transformMomentValueToJsDate(value);

  const [from, setFrom] = useState(newValue.from);
  const [to, setTo] = useState(newValue.to);
  const [enteredTo, setEnteredTo] = useState(newValue.to);
  const [toMonth, setToMonth] = useState(newValue.to);

  useEffect(() => {
    setToMonth(new Date());
  }, []);

  const reset = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  };

  return (
    <Calendar
      numberOfMonths={2}
      toMonth={toMonth}
      disabledDays={{ after: new Date() }}
      selectedDays={[from, { from, to: enteredTo }]}
      modifiers={{ start: from, end: enteredTo }}
      onDayClick={(day, modifiers) => {
        if (modifiers.disabled) { return; }
        if (from && to && day >= from && day <= to) {
          return reset();
        }
        if (isSelectingFirstDay(from, to, day)) {
          setFrom(day);
          setTo(null);
          setEnteredTo(null);
        } else {
          setTo(day);
          setEnteredTo(day);
          onChange(transformJsDateValueToMoment({ from, to: day }));
        }
      }}
      onDayMouseEnter={(day) => {
        if (!isSelectingFirstDay(from, to, day)) {
          setEnteredTo(day);
        }
      }}
      onDayMouseLeave={() => {
        if (!to) {
          setEnteredTo(null);
        }
      }}
    />
  );
};
