import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lesson from '@layout/Lesson';
import { alphabetTextbooks, isTextbookSlug } from '@alphabet/data';

function AlphabetLesson() {
  const { textbook, lessonId } = useParams<{
    textbook: string;
    lessonId: string;
  }>();
  const lessonIdNum = Number(lessonId);
  const courseData = isTextbookSlug(textbook)
    ? alphabetTextbooks[textbook].data
    : undefined;
  const lessonData = courseData?.find((item) => item.id === lessonIdNum);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepState, setStepState] = useState<boolean[]>(
    Array(lessonData?.steps?.length ?? 0).fill(false),
  );

  if (!lessonData) return null;

  const { steps } = lessonData;

  if (!steps || steps.length === 0) return null;

  const handleComplete = () => {
    setStepState((prev) => {
      const updated = [...prev];
      updated[currentStep] = true;
      return updated;
    });
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const { type, src, aboutLesson } = steps[currentStep];

  return (
    <Lesson
      lessonId={lessonIdNum}
      stepState={stepState}
      type={type}
      src={src}
      aboutLesson={aboutLesson}
      onComplete={handleComplete}
    />
  );
}

export default AlphabetLesson;
