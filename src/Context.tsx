import { createContext, useState, useRef } from 'react';
import { TweetProps } from './components/Tweet/Tweet';

interface ContextProviderProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

export const AppContext = createContext<any>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [tweets, setTweets] = useState<Array<TweetProps>>([]);

  const tweetContentFieldRef = useRef<HTMLTextAreaElement>(null);

  return <AppContext.Provider value={{ tweets, setTweets, tweetContentFieldRef }}>{children}</AppContext.Provider>;
};
