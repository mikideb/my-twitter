import { StyledButton } from './Button.styled';

interface ButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const Button = ({ text, onClick, isDisabled = false }: ButtonProps) => {
  console.log(`isDisabled`, isDisabled);
  return (
    <StyledButton onClick={onClick} isDisabled={isDisabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
