import React, { FC } from 'react';
import {
  ToastContainer,
  ToastContainerProps,
  Slide,
  toast,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Toast: FC<ToastContainerProps> = ({
  closeOnClick = true,
  ...restProps
}) => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={closeOnClick}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition={Slide}
    {...restProps}
  />
);

export const makeToast = toast;
