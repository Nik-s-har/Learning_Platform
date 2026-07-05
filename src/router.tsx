import { createBrowserRouter } from 'react-router-dom';
import Layout from '@layout/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { alphabetRoutes } from '@alphabet/routes.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: '/', element: <MainPage /> }, ...alphabetRoutes],
  },
]);

export default router;
