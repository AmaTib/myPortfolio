import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { ProjectsPage } from "./pages/ProjectsPage.tsx";
import { AboutPage } from "./pages/About.tsx";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        { path: "projects", element: <ProjectsPage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
  ],
  { basename: "/" }
);
