import { createContext, useState, useRef, useEffect } from 'react';
import { Tweet } from './components/TweetBox/TweetBox';

interface ContextProviderProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

export const TweetsContext = createContext<any>(null);

export const TweetsContextProvider = ({ children }: ContextProviderProps) => {
  const localStorageData = JSON.parse(localStorage.getItem('tweets') as string);
  const tweetsInitialState = localStorageData || [];

  const [tweets, setTweets] = useState<Array<Tweet>>(tweetsInitialState);

  const tweetContentFieldRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  return (
    <TweetsContext.Provider value={{ tweets, setTweets, tweetContentFieldRef }}>{children}</TweetsContext.Provider>
  );
};
