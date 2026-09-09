import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '@assets/pictures/logosmart.svg';

function Header() {
  return (
    <header className={`${styles.container}`}>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/starlight">Starlight</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/spotlight">Spotlight</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/alphabet/starlight">Вводный курс к Starlight</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/alphabet/spotlight">Вводный курс к Spotlight</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/games">Игры и тренажёры</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
