import { createBrowserRouter } from 'react-router-dom';
import Layout from '@layout/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { PrivacyPage } from './pages/PrivacyPage/PrivacyPage';
import { alphabetRoutes } from '@alphabet/routes.tsx';
import { trainerRoutes } from '@trainers/routes.tsx';
import { GamePage } from '@pages/GamePage/GamePage';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/privacy', element: <PrivacyPage /> },
        { path: '/games', element: <GamePage /> },
        ...alphabetRoutes,
        ...trainerRoutes,
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
