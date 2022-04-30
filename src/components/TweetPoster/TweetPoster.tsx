import React, { useState, useContext, useEffect } from 'react';
import { Wrapper, BottomContainer, CharsCounter } from './TweetPoster.styled';
import AutoResizeTextarea from '../AutoResizeTextarea/AutoResizeTextarea';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { AppContext } from '../../Context';
import { format } from 'date-fns';

const CHARS_LIMIT = 280;

const TweetPoster = () => {
  const [authorName, setAuthorName] = useState<string>('');
  const [tweetContent, setTweetContent] = useState<string>('');
  const [numberOfAvailableChars, setNumberOfAvailableChars] = useState<number>(CHARS_LIMIT);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);

  const { tweets, setTweets } = useContext(AppContext);

  useEffect(() => {
    if (numberOfAvailableChars === CHARS_LIMIT || numberOfAvailableChars < 0) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [authorName, tweetContent]);

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(event.target.value);
    setNumberOfAvailableChars(CHARS_LIMIT - event.target.value.length);
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

  return (
    <Wrapper>
      <Input value={authorName} setValue={setAuthorName} />
      <AutoResizeTextarea value={tweetContent} setValue={setTweetContent} onChange={textAreaChange} />
      <BottomContainer>
        <CharsCounter numberOfAvailableChars={numberOfAvailableChars}>{numberOfAvailableChars}</CharsCounter>
        <Button text="Tweet" onClick={handleClick} isDisabled={isButtonDisabled} />
      </BottomContainer>
    </Wrapper>
  );
};

export default TweetPoster;
