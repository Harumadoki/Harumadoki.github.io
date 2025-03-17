import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Outlet } from "react-router-dom";
import About from "./components/About/About";
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects/ThreeDimensionalProjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import Wordle from "./components/Wordle/Wordle";

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
        element: <Presentation />,
      },
      {
        path: "/presentation",
        element: <Presentation />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
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
        path: "/presentation",
        element: <Presentation />,
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
