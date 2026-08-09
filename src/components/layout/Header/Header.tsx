import { NavLink } from 'react-router-dom';
import { alphabetTextbooks } from '@alphabet/data';
import { trainers } from '@trainers/index';
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
          {Object.entries(alphabetTextbooks).map(([slug, { menuLabel }]) => (
            <li key={slug} className={styles.menuItem}>
              <NavLink to={`/alphabet/${slug}`}>{menuLabel}</NavLink>
            </li>
          ))}
          {trainers.map((trainer) => (
            <li key={trainer.slug} className={styles.menuItem}>
              <NavLink to={trainer.path}>{trainer.menuLabel}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
