import { useContext } from 'react';
import { AppContext } from '../../Context';
import Tweet, { TweetProps } from '../Tweet/Tweet';
import { Wrapper } from './Feed.styled';
import EmptyState from '../EmptyState/EmptyState';

const Feed = () => {
  const { tweets } = useContext(AppContext);

  const feedContent = () => {
    if (tweets?.length === 0) {
      return <EmptyState />;
    }

    return tweets?.map(({ authorName, tweetContent, creationDate }: TweetProps, ind: number) => (
      <Tweet key={ind} authorName={authorName} tweetContent={tweetContent} creationDate={creationDate} />
    ));
  };

  return <Wrapper>{feedContent()}</Wrapper>;
};

export default Feed;
