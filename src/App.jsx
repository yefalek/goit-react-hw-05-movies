import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Container from '';
import AppBar from '';
import Loader from '';
import Footer from '';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "HomeView" */),);
const MoviesView = lazy(() => import('./' /*  webpackChunkName: "MoviesView" */),);
const MovieDetailsPage = lazy(() => import('' /* webpackChunkName: "MovieDetailsPage" */),);
const NotFoundView = lazy(() => import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),);

export default function App() {
  return (
    <>
      <Container>
        <AppBar/>
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
