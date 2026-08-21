import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// '/' для прода (Яндекс Облако), '/Learning_Platform/' для GitHub Pages —
// подставляется через переменную окружения в CI.
const basePath = process.env.VITE_BASE_PATH ?? '/';
const isProdSite = basePath === '/';

// Вырезает счётчик Яндекс.Метрики из index.html, чтобы визиты на тестовый
// сайт (GitHub Pages) не попадали в статистику прода.
function stripYandexMetrika(): Plugin {
  return {
    name: 'strip-yandex-metrika',
    transformIndexHtml(html) {
      return html.replace(
        /[ \t]*<!-- Yandex\.Metrika counter -->[\s\S]*?<!-- \/Yandex\.Metrika counter -->\n?/,
        '',
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tsconfigPaths({ root: __dirname }),
    ...(isProdSite ? [] : [stripYandexMetrika()]),
  ],
});
