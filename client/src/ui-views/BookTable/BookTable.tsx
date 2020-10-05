import React, { useState } from 'react';
import moment from 'moment-timezone';

import { HeaderSpace } from '../../ui-layout/Header/HeaderSpace';

import { Container } from '../../ui-atoms/Container/Container';
import { InputDate } from '../../ui-atoms/InputDate/InputDate';
import { InputBatteries } from '../../ui-atoms/InputBatteries/InputBatteries';
import { Spacer } from '../../ui-atoms/Spacer/Spacer';
import { Label } from '../../ui-atoms/Label/Label';
import { Button } from '../../ui-atoms/Button/Button';

import { Tables } from './Tables';

const BookTable = () => {
  const [date, setDate] = useState(moment().tz('Europe/Riga').endOf('day'));
  const [table, setTable] = useState(0);

  return (
    <div>
      <HeaderSpace />
      <Container>
        <form action="">
          <Spacer column verticalSpace={40}>
            <InputBatteries
              name="Date"
              required
              label="Date"
              input={(commonProps) => (
                <InputDate
                  {...commonProps}
                  value={date} onChange={setDate}
                />
              )}
            />
            <Label isRequired>Select a table</Label>
            <Tables value={table} onClick={setTable} />
            <Button>
              Book
            </Button>
          </Spacer>
        </form>
      </Container>
    </div>
  );
}

export default BookTable;
