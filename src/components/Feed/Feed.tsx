import { useContext } from 'react';
import { TweetsContext } from '../../TweetsContext';
import TweetBox, { Tweet } from '../TweetBox/TweetBox';
import { Wrapper } from './Feed.styled';
import EmptyState from '../EmptyState/EmptyState';

const Feed = () => {
  const { tweets } = useContext(TweetsContext);

  const feedContent = () => {
    if (!tweets || tweets?.length === 0) {
      return <EmptyState />;
    }

    return tweets?.map(({ authorName, tweetContent, creationDate }: Tweet, ind: number) => (
      <TweetBox key={ind} authorName={authorName} tweetContent={tweetContent} creationDate={creationDate} />
    ));
  };

  return <Wrapper>{feedContent()}</Wrapper>;
};

export default Feed;
