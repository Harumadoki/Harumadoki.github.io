import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Outlet } from "react-router-dom";
import About from "./components/About/About";
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects/ThreeDimensionalProjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

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
        element: <Projects />,
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
        path: "/Home",
        element: <HomePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
