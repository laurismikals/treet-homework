import React, { FC } from 'react';

import { Table } from './Table';

import styles from './Tables.module.scss';

type CreateArray = (length: number) => Array<number>;
export const createArray: CreateArray = (length) => Array.from(Array(length).keys());

const tables = createArray(7);

type Props = {
  value: number | string;
  onClick: (value: string) => void;
};

export const Tables: FC<Props> = ({ value, onClick }) => (
  <div className={styles.root}>
    {tables.map((item) => (
      <Table
        key={item}
        name={`Table ${item + 1}`}
        isSelected={Number(value) === item + 1}
        onClick={() => {
          const oldValue = Number(value);
          const newValue = item + 1;

          onClick(oldValue === newValue ? '' : `${newValue}`);
        }}
      />
    ))}
  </div>
);