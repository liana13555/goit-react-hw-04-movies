import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import { Container } from './App.styled';
import Spinner from '../Loader/Loader';
// import HomePage from '../../views/HomePage/HomePage.jsx';
// import MoviesPage from '../../views/MoviesPage/MoviesPage.jsx';
// import MovieDetailsPage from '../../views/MovieDetailsPage/MovieDetailsPage';
// import NotFoundView from '../../views/NotFoundView/NotFoundView';

const AsyncHomePage = lazy(() => import('../../views/HomePage/HomePage.jsx'/* webpackChunkName: "home-page" */));
const AsyncMoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage.jsx'/* webpackChunkName: "movies-page" */));
const AsyncMovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage/MovieDetailsPage.jsx'/* webpackChunkName: "movie-details-page" */));
const AsyncNotFoundView = lazy(() => import('../../views/NotFoundView/NotFoundView.jsx'/* webpackChunkName: "not-found-view-page" */));

export default function App() {
  return (
    <Container className="App">
      <Navigation />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies" exact component={AsyncMoviesPage}/>
          <Route path="/movies/:movieId"  component={AsyncMovieDetailsPage} />
          <Route  component={AsyncNotFoundView}/>
        </Switch>
      </Suspense>

    </Container>
  );
}