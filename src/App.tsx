import TweetPoster from './components/TweetPoster/TweetPoster';
import Layout from './components/Layout/Layout';
import Feed from './components/Feed/Feed';
import GlobalStyle from './styles/GlobalStyle';
import { ContextProvider } from './Context';

function App() {
  return (
    <ContextProvider>
      <Layout>
        <GlobalStyle />
        <TweetPoster />
        <Feed />
      </Layout>
    </ContextProvider>
  );
}

export default App;
