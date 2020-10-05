/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, ReactNode, LabelHTMLAttributes } from 'react';

import styles from './Label.module.scss';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  isRequired?: boolean;
}

export const Label: FC<Props> = ({
  children,
  isRequired = false,
  ...restProps
}) => (
  <label
    {...restProps}
    className={styles.root}
  >
    {children}
    {isRequired && <span className={styles.asterix}> *</span>}
  </label>
);
