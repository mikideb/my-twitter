import { Wrapper, AuthorName, TweetContent, TweetDate } from './TweetBox.styled';

export interface Tweet {
  authorName: string;
  tweetContent: string;
  creationDate: string;
}

const TweetBox = ({ authorName, tweetContent, creationDate }: Tweet) => {
  return (
    <Wrapper>
      <AuthorName>{authorName}</AuthorName>
      <TweetContent>{tweetContent}</TweetContent>
      <TweetDate>{creationDate}</TweetDate>
    </Wrapper>
  );
};

export default TweetBox;
