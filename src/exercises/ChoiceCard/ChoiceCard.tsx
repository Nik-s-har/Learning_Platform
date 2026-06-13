import { useState } from 'react';
import ChoiceCardUI from './ChoiceCardUI';
import type ChoiceCardsData from './ChoiceCardTypes';

interface ChoiceCardProps {
  data: ChoiceCardsData;
}

function ChoiceCard({ data }: ChoiceCardProps) {
  const [currentStep, setCurrentStep] = useState(0);

  function handleChoice() {
    setCurrentStep((s) => Math.min(s + 1, data.steps.length));
  }

  return (
    <ChoiceCardUI
      data={data.steps[currentStep]}
      currentStep={currentStep}
      totalSteps={data.steps.length}
      onChoice={handleChoice}
    />
  );
}

export default ChoiceCard;
