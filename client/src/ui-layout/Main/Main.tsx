import React, { FC } from 'react';

import styles from './Main.module.scss';

export const Main: FC = ({ children }) => (
  <main className={styles.root}>
    {children}
  </main>
);
