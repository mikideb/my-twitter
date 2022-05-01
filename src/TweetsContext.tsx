import { createContext, useState, useRef } from 'react';
import { Tweet } from './components/TweetBox/TweetBox';

interface ContextProviderProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

export const TweetsContext = createContext<any>(null);

export const TweetsContextProvider = ({ children }: ContextProviderProps) => {
  const [tweets, setTweets] = useState<Array<Tweet>>([]);

  const tweetContentFieldRef = useRef<HTMLTextAreaElement>(null);

  return (
    <TweetsContext.Provider value={{ tweets, setTweets, tweetContentFieldRef }}>{children}</TweetsContext.Provider>
  );
};
