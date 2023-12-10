import './styles/index.css';
import Landing from './views/landing';
import { Routes, Route } from 'react-router-dom';
import { useMain } from './services';
import React, { Fragment, useEffect } from 'react';
import WOW from "wowjs"
import Cursor from './shared/cursor';

const PortfolioForm = React.lazy(() => import('./views/portfolio-form'))
const Default = React.lazy(() => import('./views/portfolio-themes/default'));
const Calm = React.lazy(() => import('./views/portfolio-themes/calm'));

function App() {
  const { routes, msg } = useMain()

  useEffect(() => {
    //  animetion initilizer
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <div id="app">
      {
        msg?.length > 0 && msg?.map((item, idx) => (
          <div className='toast wow slideInRight' key={idx}>
            <div className='toast-body'>
              <span>{item.message}</span>
            </div>
          </div>
        ))}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/setup"
          element={
            <React.Suspense fallback={<>...</>}>
              <PortfolioForm />
            </React.Suspense>
          } />

        {
          routes?.map((item) => (
            <Fragment key={item.docId}>
              {
                item.themeId === 0 ?
                  <Route
                    path={`/${item.route}`}
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <Default />
                      </React.Suspense>
                    } /> :
                  item.themeId === 1 ?
                    <Route
                      path={`/${item.route}`}
                      element={
                        <React.Suspense fallback={<>...</>}>
                          <Calm />
                        </React.Suspense>
                      } /> : ""

              }
            </Fragment>
          ))
        }
        <Route path="*" element={<>hello</>} />

      </Routes>
      {/* <Cursor /> */}
    </div>
  );
}

export default App;
