import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Outlet } from "react-router-dom";
import About from "./components/About/About";
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects/ThreeDimensionalProjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Wordle from "./components/Wordle/Wordle";
import Experience from "./components/Experience/Experience";

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
        path: "/home",
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
