import React from 'react';

import { IconCandy } from '../Icons/IconCandy';
import { Spacer } from '../Spacer/Spacer';

import styles from './Logo.module.scss';

export const Logo = () => (
  <div className={styles.root}>
    <Spacer noWrap alignCenter>
      Treat <IconCandy />
    </Spacer>
  </div>
);