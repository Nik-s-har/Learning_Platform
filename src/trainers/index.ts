import { irregularVerbsTrainer } from './irregularVerbs/data';

export interface TrainerMeta {
  slug: string;
  path: string;
  /** Подпись в шапке сайта. */
  menuLabel: string;
  title: string;
  description: string;
}

/**
 * Реестр тренажёров. Меню и будущий каталог строятся из него,
 * добавление нового тренажёра — одна строка здесь плюс его routes.tsx.
 */
export const trainers: TrainerMeta[] = [irregularVerbsTrainer];
