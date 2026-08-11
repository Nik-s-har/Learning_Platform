import styles from './Footer.module.css';
import Logo from '@assets/pictures/logosmartfooter.svg';
import { VKIcon, PinterestIcon } from '../../icons';
import { Link } from 'react-router-dom';

// TODO: Можно сократить функцию: если списки меню и социальных сетей переделать метод map массива
function Footer() {
  return (
    <footer className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.about}>
          <img src={Logo} alt="Logo" />
          <p>
            Интерактивная платформа для детей, которая превращает изучение
            школьного английского в увлекательное приключение.
          </p>
        </div>
        <nav>
          <h4>Меню</h4>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/alphabet/starlight">Вводный курс к Starlight</Link>
            </li>
            <li>
              <Link to="/alphabet/spotlight">Вводный курс к Spotlight</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.contacts}>
          <h4>Контакты</h4>
          <ul className={styles.contactsList}>
            <li>
              <a
                href="https://vk.com/englishwith_ov"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                title="VK"
              >
                <VKIcon />
              </a>
            </li>
            <li>
              <a
                href="https://ru.pinterest.com/Englishwith_OV_"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                title="Pinterest"
              >
                <PinterestIcon />
              </a>
            </li>
          </ul>
          <a
            href="https://yoomoney.ru/to/4100119570310935"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.donateButton}
          >
            ❤️ Поддержать проект
          </a>
        </nav>
      </div>
      <div className={styles.rights}>
        <Link to="/privacy" className={styles.privacyLink}>
          Политика конфиденциальности
        </Link>
        <span> · © {new Date().getFullYear()} Smart Tutor Kids</span>
      </div>
    </footer>
  );
}

export default Footer;
