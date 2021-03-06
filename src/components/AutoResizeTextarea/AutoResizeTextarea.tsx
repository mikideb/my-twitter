import React, { useContext } from 'react';
import { StyledTextarea } from './AutoResizeTextarea.styled';
import { TweetsContext } from '../../TweetsContext';

interface AutoResizeTextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoResizeTextarea = ({ value, onChange }: AutoResizeTextareaProps) => {
  const { tweetContentFieldRef } = useContext(TweetsContext);

  React.useEffect(() => {
    if (tweetContentFieldRef && tweetContentFieldRef.current) {
      tweetContentFieldRef.current.style.height = '40px';
      const scrollHeight = tweetContentFieldRef.current.scrollHeight;
      tweetContentFieldRef.current.style.height = scrollHeight + 'px';
    }
  }, [value, tweetContentFieldRef]);

  return (
    <StyledTextarea
      placeholder="What's happening?"
      required
      ref={tweetContentFieldRef}
      onChange={onChange}
      value={value}
    />
  );
};

export default AutoResizeTextarea;
