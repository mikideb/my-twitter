import React, { useState, useContext } from 'react';
import { Wrapper, BottomContainer, CharsCounter } from './TweetPoster.styled';
import AutoResizeTextarea from '../AutoResizeTextarea/AutoResizeTextarea';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { TweetsContext } from '../../TweetsContext';
import { format } from 'date-fns';

const CHARS_LIMIT = 280;

const TweetPoster = () => {
  const [authorName, setAuthorName] = useState<string>('');
  const [tweetContent, setTweetContent] = useState<string>('');

  const { tweets, setTweets } = useContext(TweetsContext);

  const isButtonDisabled = tweetContent.length > CHARS_LIMIT || tweetContent.length === 0 || authorName.length === 0;

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(event.target.value);
  };

  const handleClick = () => {
    if (isButtonDisabled) {
      return;
    }

    const creationDate = format(new Date(), 'h:mm b - LLL d, yyyy');
    const newTweet = { authorName, tweetContent, creationDate };

    setTweets([newTweet, ...tweets]);
    setAuthorName('');
    setTweetContent('');
  };

  const calculateAvailableChars = (): number => {
    return CHARS_LIMIT - tweetContent.length;
  };

  return (
    <Wrapper>
      <Input value={authorName} onChange={setAuthorName} />
      <AutoResizeTextarea value={tweetContent} onChange={handleTextAreaChange} />
      <BottomContainer>
        <CharsCounter numberOfAvailableChars={calculateAvailableChars()}>{calculateAvailableChars()}</CharsCounter>
        <Button text="Tweet" onClick={handleClick} isDisabled={isButtonDisabled} />
      </BottomContainer>
    </Wrapper>
  );
};

export default TweetPoster;
