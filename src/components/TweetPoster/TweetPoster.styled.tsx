import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  border: 1px solid ${colors.border};
  padding: 20px 30px;
  border-radius: 20px;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  margin-top: 10px;
`;

export const CharsCounter = styled.span<{
  numberOfAvailableChars: number;
}>`
  color: ${({ numberOfAvailableChars }) => (numberOfAvailableChars < 0 ? colors.warning : 'inherit')};
  border-right: 1px solid ${colors.border};
  padding: 10px;
`;
