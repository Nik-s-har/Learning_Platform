import type { SpotItItem } from '@exercises/SpotIt';
import VerbPicture from '../components/VerbPicture';
import type { Verb } from '../types';

/** Spot it: только картинки глаголов. */
export function toSpotIt(verbs: Verb[]): SpotItItem[] {
  return verbs.map((verb) => ({
    id: verb.infinitive,
    picture: <VerbPicture infinitive={verb.infinitive} size="lg" />,
    label: verb.infinitive,
  }));
}
