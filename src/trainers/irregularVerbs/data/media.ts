/**
 * Картинки и эмодзи для глаголов.
 *
 * Приоритет как в исходном тренажёре: фотография → эмодзи.
 * Фотографии подхватываются автоматически из src/assets/pictures/verbs/,
 * имя файла должно совпадать с инфинитивом: tear.jpg, steal.jpg и т.д.
 * Пока папка пуста, тренажёр работает на эмодзи.
 */

const imageModules = import.meta.glob(
  '../../../assets/pictures/verbs/*.{jpg,jpeg,png,webp,svg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const verbImages: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const fileName = path.split('/').pop() ?? '';
    return [fileName.replace(/\.[^.]+$/, ''), url];
  }),
);

/** Эмодзи-иллюстрация для каждого глагола. */
const verbEmoji: Record<string, string> = {
  be: '🧍',
  come: '🚪',
  find: '🔍',
  get: '📥',
  go: '🚶',
  have: '🤲',
  make: '🛠️',
  say: '💬',
  see: '👀',
  tell: '🗣️',
  buy: '🛍️',
  do: '✅',
  draw: '🎨',
  drink: '🥤',
  eat: '🍽️',
  give: '🎁',
  leave: '🏃',
  meet: '🤝',
  put: '📦',
  ride: '🐎',
  run: '🏃',
  sing: '🎤',
  sleep: '😴',
  swim: '🏊',
  take: '✋',
  think: '🤔',
  win: '🏆',
  write: '✍️',
  become: '🦋',
  begin: '▶️',
  break: '💔',
  bring: '📦',
  build: '🏠',
  can: '💪',
  catch: '🥎',
  choose: '☑️',
  cost: '💰',
  cut: '✂️',
  dream: '💭',
  drive: '🚗',
  fall: '🍂',
  feed: '🥣',
  feel: '❤️',
  fly: '✈️',
  forget: '❓',
  forgive: '🫶',
  hear: '👂',
  hide: '🙈',
  keep: '🔐',
  know: '🧠',
  learn: '📚',
  let: '🟢',
  lose: '📉',
  mean: '💡',
  pay: '💳',
  read: '📖',
  sell: '🏷️',
  send: '📨',
  set: '⚙️',
  show: '🖼️',
  sit: '🪑',
  speak: '🗣️',
  spend: '🪙',
  stand: '🧍',
  stick: '📌',
  teach: '👩‍🏫',
  understand: '💡',
  wake: '⏰',
  wear: '👕',
  beat: '🥁',
  bite: '🦷',
  blow: '🌬️',
  burn: '🔥',
  fight: '🥊',
  forbid: '🚫',
  freeze: '🧊',
  grow: '🌱',
  hang: '🖼️',
  hit: '🔨',
  hold: '🤲',
  smell: '👃',
  spell: '🔤',
  throw: '🤾',
  bend: '↪️',
  deal: '🤝',
  dig: '⛏️',
  hurt: '🩹',
  lead: '🧭',
  lend: '🤲',
  ring: '🔔',
  rise: '📈',
  shake: '🫨',
  shine: '☀️',
  shoot: '🏹',
  shut: '🚪',
  sink: '⚓',
  steal: '🥷',
  sting: '🐝',
  sweep: '🧹',
  tear: '📄',
};

const FALLBACK_EMOJI = '✨';

export type VerbMedia =
  | { kind: 'image'; src: string }
  | { kind: 'emoji'; char: string };

/** Что показывать для глагола: фотографию, если она есть, иначе эмодзи. */
export function getVerbMedia(infinitive: string): VerbMedia {
  const image = verbImages[infinitive];
  if (image) return { kind: 'image', src: image };
  return { kind: 'emoji', char: verbEmoji[infinitive] ?? FALLBACK_EMOJI };
}
