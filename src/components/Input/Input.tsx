import * as React from 'react';
import { StyledInput } from './Input.styled';

interface InputProps {
  value: string;
  setValue: (key: string) => void;
}

const Input = ({ value, setValue }: InputProps) => {
  return (
    <StyledInput
      type="text"
      required
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};

export default Input;
