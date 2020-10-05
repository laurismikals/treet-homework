import React, { FC } from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import styles from './Calendar.module.scss';

export const Calendar: FC<DayPickerProps> = (props) => (
  <DayPicker
    {...props}
    className={styles.root}
  />
);
