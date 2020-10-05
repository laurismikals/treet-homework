import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import styles from './Welcome.module.scss';

export const Welcome = () => (
  <section className={styles.root}>
    <div className={styles.colorfulOverlay} />
    <div className={styles.shape}>
      <svg viewBox="0 0 1920 310" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(0.000000, -554.000000)" fill="#FFFFFF">
            <path d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395" />
          </g>
        </g>
      </svg>
    </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Treat yourself with a <br/> chocolate cake</h1>
        <Link className={styles.link} to={ROUTES.BOOK_TABLE}>
          BOOK A TABLE!
        </Link>
      </div>
  </section>
);