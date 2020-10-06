import React from 'react';

import { HeaderSpace } from '../../ui-layout/Header/HeaderSpace';

import { Container } from '../../ui-atoms/Container/Container';

import { BookTableForm } from './BookTableForm';

const BookTable = () => (
  <div>
    <HeaderSpace />
    <Container>
      <BookTableForm />
    </Container>
  </div>
);

export default BookTable;
