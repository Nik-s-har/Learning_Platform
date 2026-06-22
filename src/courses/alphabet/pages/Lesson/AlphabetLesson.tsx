import { useEffect, useState } from 'react';
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
  const [stepState, setStepState] = useState<boolean[]>([]);

  useEffect(() => {
    setCurrentStep(0);
    setStepState(Array(lessonData?.steps?.length ?? 0).fill(false));
  }, [lessonIdNum, lessonData?.steps?.length]);

  if (!lessonData) return null;

  const steps = lessonData.steps ?? [];
  if (steps.length === 0) return null;

  const activeStep = Math.min(currentStep, steps.length - 1);
  const { type, src, aboutLesson } = steps[activeStep];

  const handleComplete = () => {
    setStepState((prev) => {
      const updated = [...prev];
      updated[activeStep] = true;
      return updated;
    });
    if (activeStep < steps.length - 1) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleSelectStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  const courseMapHref = isTextbookSlug(textbook) ? `/alphabet/${textbook}` : undefined;
  const currentLessonIndex = courseData?.findIndex((item) => item.id === lessonIdNum) ?? -1;
  const nextLesson = currentLessonIndex >= 0 ? courseData?.[currentLessonIndex + 1] : undefined;
  const nextLessonHref = isTextbookSlug(textbook) && nextLesson ? `/alphabet/${textbook}/lesson/${nextLesson.id}` : undefined;

  return (
    <Lesson
      lessonId={lessonIdNum}
      stepState={stepState}
      activeStep={activeStep}
      type={type}
      src={src}
      aboutLesson={aboutLesson}
      onComplete={handleComplete}
      onSelectStep={handleSelectStep}
      onBack={() => {
        /* back button is handled by Lesson via default navigation */
      }}
      courseMapHref={courseMapHref}
      nextLessonHref={nextLessonHref}
      isLastStep={activeStep === steps.length - 1}
      submitLabel={activeStep === steps.length - 1 ? 'Я выполнил!' : undefined}
    />
  );
}

export default AlphabetLesson;
