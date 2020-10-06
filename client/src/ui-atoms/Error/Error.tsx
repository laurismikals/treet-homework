import React, { FC } from 'react';

import styles from './Error.module.scss';

type Props = {
  message: string;
};

export const Error: FC<Props> = ({ message }) => (
  <p className={styles.root}>{message}</p>
);