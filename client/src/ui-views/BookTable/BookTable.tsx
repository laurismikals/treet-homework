import React from 'react';

import { HeaderSpace } from '../../ui-layout/Header/HeaderSpace';

import { Container } from '../../ui-atoms/Container/Container';
import { Spacer } from '../../ui-atoms/Spacer/Spacer';

import { BookTableForm } from './BookTableForm';

const BookTable = () => (
  <div>
    <HeaderSpace />
    <Container>
      <Spacer column verticalSpace={20}>
        <h1>Book a table</h1>
        <BookTableForm />
      </Spacer>
    </Container>
  </div>
);

export default BookTable;
