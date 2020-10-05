import React, { FC, ReactNode } from 'react';
import { useUID } from 'react-uid';

import { Label } from '../Label/Label';
import { Spacer } from '../Spacer/Spacer';
import { Loading } from '../Loading/Loading';

type CommonProps = {
  name: string;
  required?: boolean;
};

export type Props = CommonProps & {
  label: ReactNode;
  input: (batteries: CommonProps & { id: string }) => ReactNode;
  isLoading?: boolean;
};

export const InputBatteries: FC<Props> = ({
  input,
  label,
  name,
  required = false,
  isLoading,
}) => {
  const id = useUID();

  return (
    <Spacer column verticalSpace={6}>
      <Spacer horizontalSpace={6} verticalSpace={6}>
        <Label
          isRequired={required}
          htmlFor={id}
        >
          {label}
        </Label>
        {isLoading && <Loading size={14} />}
      </Spacer>
      {input({ id, name, required })}
    </Spacer>
  );
};
