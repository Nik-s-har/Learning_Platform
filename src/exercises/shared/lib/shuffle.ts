/** Перемешивает копию массива (Фишер—Йетс). Исходный массив не меняется. */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Режет массив на пачки заданного размера. */
export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (size <= 0) return [[...items]];
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}
