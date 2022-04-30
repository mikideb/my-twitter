import { Wrapper, AuthorName, TweetContent, TweetDate } from './Tweet.styled';

export interface TweetProps {
  authorName: string;
  tweetContent: string;
  creationDate: string;
}

const Tweet = ({ authorName, tweetContent, creationDate }: TweetProps) => {
  return (
    <Wrapper>
      <AuthorName>{authorName}</AuthorName>
      <TweetContent>{tweetContent}</TweetContent>
      <TweetDate>{creationDate}</TweetDate>
    </Wrapper>
  );
};

export default Tweet;
