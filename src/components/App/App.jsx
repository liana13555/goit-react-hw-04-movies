import { Switch, Route } from 'react-router-dom';
import { Container } from './App.styled';
import Navigation from '../Navigation/Navigation.jsx';
import HomePage from '../../views/HomePage/HomePage.jsx';
import MoviesPage from '../../views/MoviesPage/MoviesPage.jsx';
import NotFoundView from '../../views/NotFoundView/NotFoundView';

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      
    </Container>
  );
}

export default App;
