import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/useAuth';
import Button from '@ui/button';
import styles from './AuthPage.module.css';

type Mode = 'login' | 'signup';

export function AuthPage() {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const error =
      mode === 'login'
        ? await signIn(email, password)
        : await signUp(email, password);

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (mode === 'signup') {
      setErrorMessage(
        'Проверьте почту — мы отправили письмо для подтверждения.',
      );
      return;
    }

    void navigate('/');
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'login' ? 'signup' : 'login'));
    setErrorMessage('');
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          {mode === 'login' ? 'Войти' : 'Создать аккаунт'}
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>

          <label className={styles.label}>
            Пароль
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={
                mode === 'login' ? 'current-password' : 'new-password'
              }
              minLength={6}
            />
          </label>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <Button
            type="submit"
            variant="primary"
            colorScheme="blueWhite"
            disabled={loading}
          >
            {loading
              ? 'Загрузка...'
              : mode === 'login'
                ? 'Войти'
                : 'Зарегистрироваться'}
          </Button>
        </form>

        <button className={styles.toggle} onClick={toggleMode}>
          {mode === 'login'
            ? 'Нет аккаунта? Зарегистрироваться'
            : 'Уже есть аккаунт? Войти'}
        </button>
      </div>
    </main>
  );
}
