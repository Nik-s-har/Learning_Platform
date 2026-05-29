import { createBrowserRouter } from 'react-router-dom';
import Layout from '@layout/Layout/Layout';
import { ProtectedRoute } from '@layout/ProtectedRoute/ProtectedRoute';
import { MainPage } from './pages/MainPage/MainPage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { alphabetRoutes } from '@alphabet/routes.tsx';

const protectedAlphabetRoutes = alphabetRoutes.map(route => ({
  ...route,
  element: <ProtectedRoute>{route.element}</ProtectedRoute>,
}));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/login', element: <AuthPage /> },
      ...protectedAlphabetRoutes,
    ],
  },
]);

export default router;
