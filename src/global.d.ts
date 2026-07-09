// Yandex.Metrika global counter function injected by the snippet in index.html.
declare function ym(
  counterId: number,
  action: string,
  ...params: unknown[]
): void;

interface Window {
  ym?: typeof ym;
}
