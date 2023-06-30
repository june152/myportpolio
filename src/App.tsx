import React, { useEffect } from 'react';
import './App.css';
import { TRACKING_ID } from "./data/tracking";
import ReactGA from "react-ga4";
import { Routes, Route, useRoutes, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
  }, [])

  const routes = useRoutes([
    {
      path: "*",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/home/1" replace />,
        },
        { path: ":page", element: <Homepage /> },
      ]
    },
    {
      path: "/about/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/about/1" replace />,
        },
        { path: ":page", element: <About /> },
      ]
    },
    {
      path: "/projects/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/projects/1" replace />,
        },
        { path: ":page", element: <Projects /> },
      ]
    },
  ])

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
