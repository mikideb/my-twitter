import { useContext } from 'react';
import { Wrapper, Title, MainText } from './EmptyState.styled';
import Button from '../Button/Button';
import { TweetsContext } from '../../TweetsContext';

const TITLE = 'Welcome to Twitter!';
const MAIN_TEXT =
  "This is the best place to see what's happening in your world. Find some people and topics to follow now.";
const BUTTON_TEXT = 'Tweet something!';

const EmptyState = () => {
  const { tweetContentFieldRef } = useContext(TweetsContext);

  return (
    <Wrapper>
      <Title>{TITLE}</Title>
      <MainText>{MAIN_TEXT}</MainText>
      <Button text={BUTTON_TEXT} onClick={() => tweetContentFieldRef?.current?.focus()} />
    </Wrapper>
  );
};

export default EmptyState;
