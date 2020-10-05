import React, { FC, useState } from 'react';
import { Moment } from 'moment-timezone';

import { CustomDateDialog } from './CustomDateDialog';

import styles from './InputDate.module.scss';

type Props = {
  value: Moment;
  labelledby?: string;
  onChange: (value: Moment) => void;
};

export const InputDate: FC<Props> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.root}
        onClick={() => setIsOpen(true)}
      >
        {value.format('DD MMM, YYYY')}
      </button>
      <CustomDateDialog
        value={value}
        isOpen={isOpen}
        header="Date"
        onClose={() => setIsOpen(false)}
        onChange={onChange}
      />
    </>
  );
};
