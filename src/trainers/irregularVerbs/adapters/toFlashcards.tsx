import type { FlashcardItem } from '@exercises/Flashcards';
import {
  FormsFace,
  TranslationFace,
  RecallFrontFace,
  RecallBackFace,
} from '../components/VerbCardFaces';
import { verbSpeech } from './speech';
import type { Verb } from '../types';

/** Карточки: три формы → картинка и перевод, с озвучкой. */
export function toFlashcards(verbs: Verb[]): FlashcardItem[] {
  return verbs.map((verb) => ({
    id: verb.infinitive,
    front: <FormsFace verb={verb} />,
    back: <TranslationFace verb={verb} />,
    speech: verbSpeech(verb),
  }));
}

/** Вспомни форму: картинка и инфинитив → вторая и третья формы. */
export function toRecallCards(verbs: Verb[]): FlashcardItem[] {
  return verbs.map((verb) => ({
    id: verb.infinitive,
    front: <RecallFrontFace verb={verb} />,
    back: <RecallBackFace verb={verb} />,
  }));
}
