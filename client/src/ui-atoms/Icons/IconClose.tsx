import React, { FC } from 'react';

import styles from './Icon.module.scss';

interface Props {
  size?: number;
}

export const IconClose: FC<Props> = ({ size }) => (
  <svg
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.root}
    style={!size ? {} : { width: size, height: size }}
  >
    <path d="M30 3.41052L26.5895 0L15 11.5895L3.41052 0L0 3.41052L11.5895 15L0 26.5895L3.41052 30L15 18.4105L26.5895 30L30 26.5895L18.4105 15L30 3.41052Z" />
  </svg>
);
