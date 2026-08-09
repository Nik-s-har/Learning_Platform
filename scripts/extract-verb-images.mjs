#!/usr/bin/env node
/**
 * Достаёт base64-картинки глаголов из исходного HTML-тренажёра
 * и раскладывает их файлами в src/assets/pictures/verbs/.
 *
 * Запуск:
 *   node scripts/extract-verb-images.mjs Irregular_verbs.html
 *
 * После этого тренажёр подхватит картинки сам — правки в коде не нужны.
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = resolve(projectRoot, 'src/assets/pictures/verbs');

const sourcePath = process.argv[2];
if (!sourcePath) {
  console.error('Укажите путь к HTML: node scripts/extract-verb-images.mjs Irregular_verbs.html');
  process.exit(1);
}

const html = readFileSync(resolve(process.cwd(), sourcePath), 'utf8');

const start = html.indexOf('const CUSTOM_IMAGES=');
if (start === -1) {
  console.error('В файле не найден блок CUSTOM_IMAGES.');
  process.exit(1);
}
const end = html.indexOf('};', start);
const block = html.slice(start, end);

const entryPattern = /"([a-z]+)"\s*:\s*"data:image\/([a-z]+);base64,([^"]+)"/g;
const extensions = { jpeg: 'jpg', jpg: 'jpg', png: 'png', webp: 'webp' };

mkdirSync(outputDir, { recursive: true });

let count = 0;
for (const [, verb, mime, base64] of block.matchAll(entryPattern)) {
  const extension = extensions[mime] ?? mime;
  const filePath = resolve(outputDir, `${verb}.${extension}`);
  writeFileSync(filePath, Buffer.from(base64, 'base64'));
  console.log(`  ${verb}.${extension}`);
  count += 1;
}

console.log(
  count > 0
    ? `\nГотово: сохранено картинок — ${count}.`
    : '\nКартинки не найдены: проверьте формат исходного файла.',
);
