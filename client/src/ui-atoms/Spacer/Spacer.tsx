import React, { FC, ReactNode, Children } from 'react';
import classNames from 'classnames';

import styles from './Spacer.module.scss';

interface Props {
  children: ReactNode;
  horizontalSpace?: number;
  verticalSpace?: number;
  noWrap?: boolean;
  spaceBetween?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  column?: boolean;
  columnReverse?: boolean;
  isInsideText?: boolean;
}

export const Spacer: FC<Props> = ({
  children,
  horizontalSpace = 12,
  verticalSpace = 12,
  noWrap = false,
  spaceBetween = false,
  alignCenter = false,
  alignEnd = false,
  justifyCenter = false,
  justifyEnd = false,
  column = false,
  columnReverse = false,
  isInsideText = false,
}) => {
  const halfHorizontalSpace = horizontalSpace / 2;
  const halfVerticalSpace = verticalSpace / 2;
  const Element = isInsideText ? 'span' : 'div';

  return (
    <Element
      className={classNames({
        [styles.root]: true,
        [styles.noWrap]: noWrap,
        [styles.spaceBetween]: spaceBetween,
        [styles.alignCenter]: alignCenter,
        [styles.alignEnd]: alignEnd,
        [styles.justifyCenter]: justifyCenter,
        [styles.justifyEnd]: justifyEnd,
        [styles.column]: column,
        [styles.columnReverse]: columnReverse,
      })}
      style={{
        marginTop: -halfVerticalSpace,
        marginBottom: -halfVerticalSpace,
        marginRight: -halfHorizontalSpace,
        marginLeft: -halfHorizontalSpace,
      }}
    >
      {Children.map(children, (child) => child && (
        <Element
          className={styles.item}
          style={{
            paddingTop: halfVerticalSpace,
            paddingBottom: halfVerticalSpace,
            paddingRight: halfHorizontalSpace,
            paddingLeft: halfHorizontalSpace,
          }}
        >
          {child}
        </Element>
      ))}
    </Element>
  );
};
