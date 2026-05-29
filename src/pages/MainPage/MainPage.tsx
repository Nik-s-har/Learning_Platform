import Welcome from '@layout/Welcome';
import AboutTeacher from '@layout/AboutTeacher';
import Alphabet from '@layout/Alphabet/Alphabet';

export function MainPage() {
  return (
    <main>
      <Welcome />
      <AboutTeacher />
      <Alphabet />
    </main>
  );
}
