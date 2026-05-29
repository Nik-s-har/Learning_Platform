type Card = {
  content: string;
  isTrue: boolean;
};

export interface ChoiceCardStep {
  soundURL: string;
  cards: Card[];
}

export default interface ChoiceCardsData {
  steps: ChoiceCardStep[];
}
