import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const StyledButton = styled.button<{ isDisabled: boolean }>`
  color: ${colors.white};
  background-color: ${({ isDisabled }) => (isDisabled ? '#84c4ec' : '#1da1f2')};
  border: none;
  padding: 0 16px;
  height: 36px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 15px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`;
