import React, { FC } from 'react';

import styles from './Loading.module.scss';

interface Props {
  size?: number;
}

export const Loading: FC<Props> = ({ size = 16 }) => (
  <div style={{ fontSize: `${size}px` }}>
    <div className={styles.root}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
