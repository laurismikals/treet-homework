import React, { useEffect, useState } from 'react';

import { Container } from '../../ui-atoms/Container/Container';
import { Logo } from '../../ui-atoms/Logo/Logo';

import styles from './Header.module.scss';

const useScrollPosition = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const scrollHandler = () => setScroll(window.scrollY);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return scroll;
};

export const Header = () => {
  const scroll = useScrollPosition();

  const opacity = Math.min(scroll * 100 / 500 / 100, 1);

  return (
    <header className={styles.root} style={{ backgroundColor: `rgba(124, 79, 224, ${opacity})` }}>
      <Container>
        <div className={styles.content}>
          <Logo />
        </div>
      </Container>
    </header>
  );
};
