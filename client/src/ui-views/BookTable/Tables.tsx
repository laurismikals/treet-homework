import React, { FC } from 'react';

import { Table } from './Table';

import styles from './Tables.module.scss';

type CreateArray = (length: number) => Array<number>;
export const createArray: CreateArray = (length) => Array.from(Array(length).keys());

const tables = createArray(7);

type Props = {
  value: number;
  onClick: (value: number) => void;
};

export const Tables: FC<Props> = ({ value, onClick }) => {
  return (
    <div className={styles.root}>
      {tables.map((item) => (
        <Table
          key={item}
          name={`Table ${item + 1}`}
          isSelected={value === item + 1}
          onClick={() => onClick(item + 1)}
        />
      ))}
    </div>
  );
};