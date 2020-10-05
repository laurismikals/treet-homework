import React, { ReactNode, FC, useEffect } from 'react';
import { noop } from 'lodash/fp';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { getScrollbarWidth } from '../../helpers/getScrollbarWidth';

import { IconClose } from '../Icons/IconClose';

import './Dialog.scss';
import styles from './Dialog.module.scss';

const scrollbarWidth = getScrollbarWidth();

interface Props {
  children: ReactNode;
  header?: string;
  dialogName?: string;
  width?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Dialog: FC<Props> = ({
  children,
  header,
  dialogName,
  width = 640,
  isOpen = false,
  onClose = noop,
}) => {
  useEffect(() => {
    document.body.style.paddingRight = !isOpen ? '' : `${scrollbarWidth}px`;
  }, [isOpen]);

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={(e) => {
        // @ts-ignore
        if (e?.key === 'Escape') {
          onClose();
        }
      }}
    >
      <DialogContent
        aria-label={dialogName || header || 'Dialog'}
        style={{ width }}
      >
        <div className={styles.root}>
          <div className={styles.header}>
            <div>
              {header && (
                <h2>{header}</h2>
              )}
            </div>
            {onClose !== noop && (
              <button
                aria-label="Close"
                className={styles.close}
                type="button"
                onClick={onClose}
              >
                <IconClose size={12} />
              </button>
            )}
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};
