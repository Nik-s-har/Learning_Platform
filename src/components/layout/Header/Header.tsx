import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { alphabetTextbooks } from '@alphabet/data';
import styles from './Header.module.css';
import Logo from '@assets/pictures/logo.png';
import Button from '@ui/button';

function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = async () => {
    if (user) {
      await signOut();
    } else {
      void navigate('/login');
    }
  };

  return (
    <header className={`${styles.container}`}>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="/">Главная</NavLink>
          </li>
          {Object.entries(alphabetTextbooks).map(([slug, { menuLabel }]) => (
            <li key={slug} className={styles.menuItem}>
              <NavLink to={`/alphabet/${slug}`}>{menuLabel}</NavLink>
            </li>
          ))}
          <li className={styles.menuItem}>Блог</li>
        </ul>
      </nav>
      <Button
        variant="secondary"
        colorScheme="blueWhite"
        onClick={handleAuthClick}
      >
        {user ? 'Выйти' : 'Войти'}
      </Button>
    </header>
  );
}

export default Header;
