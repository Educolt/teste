import Profile from './components/Profile';
import Feed from './components/Feed'
import { GlobalStyle } from './styles/global';
import { AppContainer } from './styles/App';

function App() {
  return (
    <AppContainer>
      <Profile/>
      <Feed/>
      <Profile/>
      <GlobalStyle/>
    </AppContainer>
  );
}

export default App;
