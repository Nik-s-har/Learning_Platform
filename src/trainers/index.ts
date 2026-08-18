import { irregularVerbsTrainer } from './irregularVerbs/data';
import {
  starlightAlphabetCard,
  starlightAlphabetTrainer,
} from './starlightAlphabet/data';
import {
  spotlightAlphabetCard,
  spotlightAlphabetTrainer,
} from './spotlightAlphabet/data';

export interface TrainerMeta {
  slug: string;
  path: string;
  /** Подпись в шапке сайта. */
  menuLabel: string;
  title: string;
  description: string;
  cardImage: string;
}

/**
 * Реестр тренажёров. Меню и будущий каталог строятся из него,
 * добавление нового тренажёра — одна строка здесь плюс его routes.tsx.
 */
export const trainers: TrainerMeta[] = [
  irregularVerbsTrainer,
  {
    ...starlightAlphabetTrainer,
    cardImage: starlightAlphabetCard,
  },
  {
    ...spotlightAlphabetTrainer,
    cardImage: spotlightAlphabetCard,
  },
];
