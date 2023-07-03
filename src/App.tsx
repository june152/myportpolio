import { useEffect } from 'react';
import './App.css';
import { TRACKING_ID } from "./data/tracking";
import ReactGA from "react-ga4";
import { useRoutes, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import ViewCert from './pages/ViewCert';

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
    {
      path: "/certificates/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/certificates/1" replace />,
        },
        { path: ":page", element: <Certificates /> },
      ]
    },
    {
      path: "/contact/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/contact/1" replace />,
        },
        { path: ":page", element: <Contact /> },
      ]
    },
    {
      path: "/viewcert/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/viewcert/1" replace />,
        },
        { path: ":page", element: <ViewCert /> },
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
