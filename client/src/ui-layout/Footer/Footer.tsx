import React, { FC } from 'react';

import { Container } from '../../ui-atoms/Container/Container';

import styles from './Footer.module.scss';

export const Footer: FC = ({ children }) => (
  <footer className={styles.root}>
    <Container>
      Visas tiesības aizsargātas © 2020
    </Container>
  </footer>
);
