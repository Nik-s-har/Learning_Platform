import { useState } from 'react';
import { useRoundState, useSpeech } from '@exercises/shared';
import FlashcardsUI from './FlashcardsUI';
import type { FlashcardsProps } from './FlashcardsTypes';

/**
 * Стопка переворачиваемых карточек с опциональной озвучкой.
 * Одним движком закрываются и «Карточки», и «Вспомни форму глагола» —
 * различие только в содержимом сторон, которое готовит адаптер.
 */
function Flashcards({
  cards,
  title,
  instruction,
  speechLabel = 'Прослушать',
  onFinish,
}: FlashcardsProps) {
  const [index, setIndex] = useState(0);
  // Первая карточка видна сразу, поэтому она уже в списке просмотренных.
  const [viewed, setViewed] = useState<string[]>(() =>
    cards[0] ? [cards[0].id] : [],
  );
  const { speak, cancel } = useSpeech();

  // Переворот сбрасывается сам, как только меняется карточка.
  const [isFlipped, setIsFlipped] = useRoundState(index, false);

  const total = cards.length;
  const card = cards[index];

  if (!card) return null;

  const goTo = (nextIndex: number) => {
    cancel();
    setIndex(nextIndex);

    if (!viewed.includes(cards[nextIndex].id)) {
      const nextViewed = [...viewed, cards[nextIndex].id];
      setViewed(nextViewed);
      if (nextViewed.length === total) onFinish?.({ score: total, total });
    }
  };

  return (
    <FlashcardsUI
      card={card}
      index={index}
      total={total}
      isFlipped={isFlipped}
      title={title}
      instruction={instruction}
      speechLabel={speechLabel}
      canSpeak={Boolean(card.speech?.length)}
      isFirst={index === 0}
      isLast={index === total - 1}
      onFlip={() => setIsFlipped((flipped) => !flipped)}
      onSpeak={() => card.speech && speak(card.speech)}
      onPrev={() => index > 0 && goTo(index - 1)}
      onNext={() => goTo(index === total - 1 ? 0 : index + 1)}
    />
  );
}

export default Flashcards;
