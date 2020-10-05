/* eslint-disable react/button-has-type */
import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { Loading } from '../Loading/Loading';
import { Spacer } from '../Spacer/Spacer';

import styles from './Button.module.scss';

export enum BUTTON_THEME {
  PRIMARY = 'primary',
}

export enum BUTTON_SIZE {
  NORMAL = 'normal',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: BUTTON_THEME;
  size?: BUTTON_SIZE;
  isLoading?: boolean;
  isActive?: boolean;
}

export const Button: FC<Props> = ({
  children,
  theme = BUTTON_THEME.PRIMARY,
  isLoading = false,
  isActive = false,
  ...restProps
}) => (
  <button
    {...restProps}
    className={classNames(
      styles.root,
      styles[theme],
      { [styles.active]: isActive },
    )}
  >
    <Spacer alignCenter horizontalSpace={6} noWrap isInsideText>
      {children}
      {isLoading && <Loading size={14} />}
    </Spacer>
  </button>
);
