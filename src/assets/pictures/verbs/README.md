# Картинки глаголов

Сюда кладутся фотографии-иллюстрации для тренажёра неправильных глаголов.

- имя файла = инфинитив глагола: `tear.jpg`, `steal.jpg`, `come.jpg`;
- поддерживаются `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`;
- файлы подхватываются автоматически (`import.meta.glob` в
  `src/trainers/irregularVerbs/data/media.ts`), ничего регистрировать не нужно;
- если картинки для глагола нет, тренажёр показывает эмодзи.

Извлечь картинки из исходного `Irregular_verbs.html`:

```bash
node scripts/extract-verb-images.mjs Irregular_verbs.html
```
