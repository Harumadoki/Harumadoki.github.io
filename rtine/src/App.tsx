import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Navigate, Outlet } from "react-router-dom";
import About from "./components/About/About";
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects/ThreeDimensionalProjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Wordle from "./components/Wordle/Wordle";
import Experience from "./components/Experience/Experience";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { useEffect, useState } from "react";
import ProfessionalExperiences from "./components/ProfessionalExperiences/ProfessionalExperiences";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tf1",
        element: <Experience experienceId="tf1" />,
      },
      {
        path: "/elengy",
        element: <Experience experienceId="elengy" />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/personal-projects",
        element: <Projects isPersonal={true} />,
      },
      {
        path: "/3dProjects",
        element: <ThreeDimensionalProjects />,
      },
      {
        path: "/wordle",
        element: <Wordle />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/friendlysport",
        element: <ProjectDetails experienceId="friendlySport" />,
      },
      {
        path: "/professional-experiences",
        element: <ProfessionalExperiences />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const IntroScreen = () => {
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    setTimeout(() => setFade("fade-out"), 200); // Start fade-out at 800ms
  }, []);

  return (
    <div className={`intro-screen ${fade}`}>
      <p className="logo">r.</p>
    </div>
  );
};

const MainScreen = () => {
  const [fade, setFade] = useState("fade-out");

  useEffect(() => {
    setTimeout(() => setFade("fade-in"), 0);
  }, []);

  return (
    <div className={`main-screen ${fade}`}>
      <RouterProvider router={router} />
    </div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 950); // Total duration (1s + fade-out time)

    return () => clearTimeout(timer);
  }, []);

  return <>{showIntro ? <IntroScreen /> : <MainScreen />}</>;
};

export default App;
