import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.border};
  font-size: 20px;
  outline: none;
`;
