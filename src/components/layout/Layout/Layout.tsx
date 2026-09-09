// src/components/layout/Layout/Layout.tsx
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const YANDEX_METRIKA_ID = 110517675;

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Register an SPA page view in Yandex.Metrika on every route change.
    window.ym?.(YANDEX_METRIKA_ID, 'hit', window.location.href);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
