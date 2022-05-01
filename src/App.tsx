import TweetPoster from './components/TweetPoster/TweetPoster';
import Layout from './components/Layout/Layout';
import Feed from './components/Feed/Feed';
import GlobalStyle from './styles/GlobalStyle';
import { TweetsContextProvider } from './TweetsContext';

function App() {
  return (
    <TweetsContextProvider>
      <Layout>
        <GlobalStyle />
        <TweetPoster />
        <Feed />
      </Layout>
    </TweetsContextProvider>
  );
}

export default App;
