import { useEffect, useState } from 'react';
import './App.css';
import { TRACKING_ID } from "./data/tracking";
import ReactGA from "react-ga4";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import ViewCert from './pages/ViewCert';
import NavBar, { NavActive } from './components/common/NavBar';
import Footer from './components/common/Footer';
import ContactDialog from './components/common/ContactDialog';

function App() {
  const [activePage, setActivePage] = useState<NavActive>("home")
  const location = useLocation()
  const [modalVisible, setModalVisible] = useState(false)
  const handleModalToggle = (isVisible : boolean) => {
    setModalVisible(isVisible)
  }

  useEffect(() => {
    if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
  }, [])

  useEffect(() => {
    if (location.pathname.includes("home")) {
      setActivePage("home")
    } else if (location.pathname.includes("about")) {
      setActivePage("about")
    } else if (location.pathname.includes("projects")) {
      setActivePage("projects")
    } else if (location.pathname.includes("certificates")) {
      setActivePage("certificates")
    } else if (location.pathname.includes("viewcert")) {
      setActivePage("certificates")
    }
  }, [location])

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
      <NavBar active={activePage} handleModalToggle={handleModalToggle} />
      {routes}
      <div className="page-footer">
          <Footer handleModalToggle={handleModalToggle} />
      </div>
      {
        modalVisible && (
          <ContactDialog handleModalToggle={handleModalToggle} />
        )
      }      
    </div>
  );
}

export default App;
