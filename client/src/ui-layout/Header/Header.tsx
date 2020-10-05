import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container } from '../../ui-atoms/Container/Container';
import { Logo } from '../../ui-atoms/Logo/Logo';

import styles from './Header.module.scss';

import { ROUTES } from '../../constants/routes';

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
  const { pathname } = useLocation();

  const scroll = useScrollPosition();

  const opacity = pathname === ROUTES.HOME ? Math.min(scroll * 100 / 500 / 100, 1) : 1;

  return (
    <header className={styles.root} style={{ backgroundColor: `rgba(124, 79, 224, ${opacity})` }}>
      <Container>
        <div className={styles.content}>
          <Link to={ROUTES.HOME} className={styles.link}>
            <Logo />
          </Link>
        </div>
      </Container>
    </header>
  );
};
