import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Table.module.scss';

type Props = {
  name: string;
  isSelected: boolean;
  onClick: () => void;
};

export const Table: FC<Props> = ({ name, isSelected, onClick }) => (
  <button
    type="button"
    className={classNames(styles.root, { [styles.isSelected]: isSelected })}
    onClick={onClick}
  >
    {name}
  </button>
);
