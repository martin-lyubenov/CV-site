import { RouterProvider, createHashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "./pages/Layout";
import HeaderPage from "./pages/Header";
import Error from "./pages/Error";
import Fallback from "./UI/Fallback";

const ProjectsPage = lazy(() => import("./pages/Projects"));
const EducationCareerPage = lazy(() => import("./pages/EducationCareer"));
const ContactsPage = lazy(() => import("./pages/Contacts"));

// hash router used as gh-pages does not support browser routing
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HeaderPage />,
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Fallback />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: "/education-career",
        element: (
          <Suspense fallback={<Fallback />}>
            <EducationCareerPage />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: (
          <Suspense fallback={<Fallback />}>
            <ContactsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
