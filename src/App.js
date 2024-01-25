import './App.css';
import Landing from './views/landing';
import { Routes, Route } from 'react-router-dom';
import { useMain } from './services';
import React, { Fragment, useEffect, useState } from 'react';
import WOW from "wowjs"
import { allThemes } from './constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PortfolioForm = React.lazy(() => import('./views/portfolio-form'))

function App() {
  const { getRoutes, msg } = useMain()
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    //  animation initilizer
    new WOW.WOW({
      live: false
    }).init();

    // get routes
    getAllRoutes()
  }, [])

  const getAllRoutes = async () => {
    const res = await getRoutes()
    if (res?.status) {
      setRoutes(res?.data)
    }
  }

  const getTheme = (val) => {
    const th = allThemes?.find(t => t.theme == val)
    return th.Component
  }
  return (
    <div id="app">
      <Routes>
        <Route
          path="/setup"
          element={
            <React.Suspense fallback={<>...</>}>
              <PortfolioForm />
            </React.Suspense>
          } />

        {
          routes?.map((item) => (
            <Fragment key={item.username}>
              <Route
                path={`/${item.username}`}
                element={
                  <React.Suspense fallback={<>...</>}>
                    {getTheme(item.theme)}
                  </React.Suspense>
                } />
            </Fragment>
          ))
        }
        <Route path="/" element={<Landing />} />

        <Route path="*" element={<>Page not found</>} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
