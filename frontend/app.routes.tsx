import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Links from './paginas/Links';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Links />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
