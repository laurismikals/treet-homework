import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './constants/routes';

import { Header } from './ui-layout/Header/Header';
import { Main } from './ui-layout/Main/Main';
import { Footer } from './ui-layout/Footer/Footer';

import { Loading } from './ui-atoms/Loading/Loading';

const BookTable = lazy(() => import('./ui-views/BookTable/BookTable'));
const Home = lazy(() => import('./ui-views/Home/Home'));

const SuspenseFallback = () => (
  <div
    style={{
      width: '100%',
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Loading size={30} />
  </div>
);

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<SuspenseFallback />}>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home />
            </Route>
            <Route path={ROUTES.BOOK_TABLE} exact>
              <BookTable />
            </Route>
          </Switch>
        </Suspense>
      </Main>
      <Footer>
        footer
      </Footer>
    </>
  );
}
