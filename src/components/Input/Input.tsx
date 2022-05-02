import * as React from 'react';
import { StyledInput } from './Input.styled';

interface InputProps {
  value: string;
  onChange: (key: string) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <StyledInput
      type="text"
      required
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export default Input;
