import { shuffle } from '@exercises/shared';
import type { MemoryPair } from '@exercises/MemoryGame';
import {
  MemoryPictureFace,
  MemoryFormsFace,
} from '../components/VerbCardFaces';
import type { Verb } from '../types';

/** Мемори: картинка с инфинитивом и парная карточка с двумя формами. */
export function toMemoryGame(verbs: Verb[]): MemoryPair[] {
  return shuffle(verbs).map((verb) => ({
    id: verb.infinitive,
    a: <MemoryPictureFace verb={verb} />,
    b: <MemoryFormsFace verb={verb} />,
  }));
}
