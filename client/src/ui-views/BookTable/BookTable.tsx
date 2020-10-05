import React, { useState } from 'react';
import moment from 'moment-timezone';

import { HeaderSpace } from '../../ui-layout/Header/HeaderSpace';

import { Container } from '../../ui-atoms/Container/Container';
import { InputDate } from '../../ui-atoms/InputDate/InputDate';

const BookTable = () => {
  const [date, setDate] = useState(moment().tz('Europe/Riga').endOf('day'));

  return (
    <div>
      <HeaderSpace />
      <Container>
        <InputDate value={date} onChange={setDate} />
        Book a table
      </Container>
    </div>
  );
}

export default BookTable;
