import React, { FC } from 'react';
import { Moment } from 'moment-timezone';

import { Dialog } from '../Dialog/Dialog';

import { InputCalendar } from '../InputCalendar/InputCalendar';

type Props = {
  value: Moment;
  header: string;
  isOpen: boolean;
  onChange: (range: Moment) => void;
  onClose: () => void;
};

export const CustomDateDialog: FC<Props> = ({
  value,
  header,
  isOpen,
  onChange,
  onClose,
}) => (
  <Dialog
    isOpen={isOpen}
    header={header}
    width={320}
    onClose={onClose}
  >
    <InputCalendar
      value={value}
      onChange={(val) => {
        if (val !== null) {
          onChange(val);
        } else {
          onChange(value);
        }
        onClose();
      }}
    />
  </Dialog>
);
