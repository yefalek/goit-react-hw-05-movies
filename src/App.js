import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';
import HeaderNav from './components/HeaderNav';
import Loader from './components/Loader';
import Footer from './components/Footer';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "HomeView" */),);
const MoviesView = lazy(() => import('./components/MoviesView/MoviesView' /*  webpackChunkName: "MoviesView" */),);
const MovieDetailsPage = lazy(() => import('./components/MoviesView/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),);
const NotFoundView = lazy(() => import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),);

export default function App() {
  return (
    <>
      <Container>
        <HeaderNav/>
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route path='/' exact><HomeView /></Route>
              <Route path='/movies' exact><MoviesView /></Route>
              <Route path='/movies/:slug'><MovieDetailsPage /></Route>
              <Route><NotFoundView/></Route>
            </Switch>
          </Suspense>
        <ToastContainer autoClose={2000}/>
      </Container>
      <Footer/>
    </>
  );
}
