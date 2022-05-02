import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  width: 100%;
  border-bottom: 1px solid ${colors.border};
`;

export const AuthorName = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;

export const TweetContent = styled.p`
  font-size: 28px;
`;

export const TweetDate = styled.p`
  font-size: 15px;
  color: ${colors.darkBlue};
`;
