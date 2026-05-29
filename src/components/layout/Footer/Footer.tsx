import styles from './Footer.module.css';
import Logo from '@assets/pictures/logo.png';
import { VKIcon, DzenIcon, MailIcon, PinterestIcon } from '../../icons';

// TODO: Можно сократить функцию: если списки меню и социальных сетей переделать метод map массива
function Footer() {
  return (
    <footer className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.about}>
          <img src={Logo} alt="Logo" />
          <p>
            Интерактивная платформа для детей 7-9 лет, которая превращает
            изучение английского в увлекательное приключение.
          </p>
        </div>
        <nav>
          <h4>Меню</h4>
          <ul className={styles.menu}>
            <li>Главная</li>
            <li>Курс Алфавит</li>
            <li>Блог</li>
          </ul>
        </nav>
        <nav className={styles.contacts}>
          <h4>Контакты</h4>
          <ul className={styles.contactsList}>
            <li>
              <a
                href="https://vk.com"
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
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                title="Pinterest"
              >
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a
                href="https://dzen.ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                title="Яндекс Дзен"
              >
                <DzenIcon />
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@englishmagic.ru"
                className={styles.socialButton}
                title="Email"
              >
                <MailIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className={styles.rights}>© 2026 ИграйУчи. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
