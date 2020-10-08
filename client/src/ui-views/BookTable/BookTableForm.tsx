import React, { FC } from 'react';
import moment from 'moment-timezone';
import {
  Formik,
  Form,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';

import { InputDate } from '../../ui-atoms/InputDate/InputDate';
import { InputBatteries } from '../../ui-atoms/InputBatteries/InputBatteries';
import { Spacer } from '../../ui-atoms/Spacer/Spacer';
import { Label } from '../../ui-atoms/Label/Label';
import { Button } from '../../ui-atoms/Button/Button';
import { Error } from '../../ui-atoms/Error/Error';
import { makeToast } from '../../ui-atoms/Toast/Toast';

import { useAddOrder } from '../../queries/orders/useAddOrder';

import { Tables } from './Tables';

enum FIELD {
  DATE = 'date',
  TABLE = 'table',
}

type FormValues = {
  [FIELD.DATE]: string;
  [FIELD.TABLE]: string;
};

const InnerForm: FC<FormikProps<FormValues>> = ({
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  isSubmitting,
}) => {
  return (
    <Form autoComplete="off">
      <Spacer column verticalSpace={40}>
        <InputBatteries
          name={FIELD.DATE}
          required
          label="Picka a date"
          input={(commonProps) => (
            <div style={{ maxWidth: 200 }}>
              <InputDate
                {...commonProps}
                value={moment(values[FIELD.DATE])}
                onChange={(val) => {
                  setFieldValue(FIELD.DATE, val.toISOString());
                  setFieldTouched(FIELD.DATE);
                }}
              />
            </div>
          )}
        />
        <Spacer column verticalSpace={6}>
          <Label isRequired>Choose a table</Label>
          <Tables
            value={values[FIELD.TABLE]}
            onClick={(val) => setFieldValue(FIELD.TABLE, val)}
          />
          {touched[FIELD.TABLE] && errors[FIELD.TABLE] && (
            <Error message={errors[FIELD.TABLE] || ''} />
          )}
        </Spacer>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Next
        </Button>
      </Spacer>
    </Form>
  );
};

export const BookTableForm = () => {
  const [addOrder] = useAddOrder({
    onSuccess: ({ table, date }) => {
      makeToast.success(`You bookd Table ${table}. See you on ${moment(date).format('DD MMM')}`);
    },
    onError: (error) => makeToast.error(error.message),
  });

  return (
    <Formik
      initialValues={{
        [FIELD.DATE]: moment().tz('Europe/Riga').endOf('day').toISOString(),
        [FIELD.TABLE]: '',
      }}
      validationSchema={Yup.object().shape({
        [FIELD.DATE]: Yup.string().required('Required'),
        [FIELD.TABLE]: Yup.string().required('A table must be selected!'),
      })}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);

        await addOrder({
          date: values.date,
          table: Number(values.table),
        });

        actions.setSubmitting(false);
      }}
    >
      {(formikProps) => (
        <InnerForm {...formikProps} />
      )}
    </Formik>
  );
};
