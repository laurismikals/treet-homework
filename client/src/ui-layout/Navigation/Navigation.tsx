import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../constants/routes'

import styles from './Navigation.module.scss';

interface LinkProps {
  to: string;
  name: string;
  exact?: boolean;
}

const Link: FC<LinkProps> = ({
  to,
  name,
  exact = false,
}) => (
  <NavLink
    to={to}
    className={styles.link}
    activeClassName={styles.active}
    exact={exact}
  >
    {name}
  </NavLink>
);

export const Navigation = () => (
  <nav className={styles.root}>
    <ul className={styles.list}>
      <li>
        <Link
          to={ROUTES.HOME}
          name="Home"
          exact
        />
      </li>
      <li>
        <Link
          to={ROUTES.BOOK_TABLE}
          name="Book a table"
        />
      </li>
    </ul>
  </nav>
);
