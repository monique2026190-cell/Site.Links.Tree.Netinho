import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Links from './paginas/Links';
import Ebook from './paginas/Ebook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Links />,
  },
  {
    path: "/ebook",
    element: <Ebook />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
