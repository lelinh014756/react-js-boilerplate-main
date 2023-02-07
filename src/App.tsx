/* eslint-disable tailwindcss/no-custom-classname */
import './styles/global.css';

import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import { privateRoutes, publicRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <div className="__app">
        <Routes>
          {[...privateRoutes, ...publicRoutes].map((route, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let Layout: any;

            if (route.layout !== undefined) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            } else {
              Layout = DefaultLayout;
            }

            const Page = route.component;

            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
