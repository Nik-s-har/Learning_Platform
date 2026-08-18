import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lesson from '@layout/Lesson';
import { alphabetTextbooks, isTextbookSlug } from '@alphabet/data';
import type { CourseData, LessonData } from '@app-types/lesson';

interface LessonPlayerProps {
  lessonData: LessonData;
  courseData: CourseData;
  textbook: string;
}

function LessonPlayer({ lessonData, courseData, textbook }: LessonPlayerProps) {
  const steps = lessonData.steps ?? [];
  const [currentStep, setCurrentStep] = useState(0);
  const [stepState, setStepState] = useState<boolean[]>(() =>
    Array(steps.length).fill(false),
  );

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

  const currentLessonIndex = courseData.findIndex(
    (item) => item.id === lessonData.id,
  );
  const nextLesson = courseData[currentLessonIndex + 1];

  return (
    <Lesson
      lessonId={lessonData.id}
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
      courseMapHref={`/alphabet/${textbook}`}
      nextLessonHref={
        nextLesson ? `/alphabet/${textbook}/lesson/${nextLesson.id}` : undefined
      }
      isLastStep={activeStep === steps.length - 1}
      submitLabel={activeStep === steps.length - 1 ? 'Я выполнил!' : undefined}
    />
  );
}

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

  if (!lessonData || !courseData || !isTextbookSlug(textbook)) return null;

  return (
    <LessonPlayer
      key={`${textbook}-${lessonData.id}`}
      lessonData={lessonData}
      courseData={courseData}
      textbook={textbook}
    />
  );
}

export default AlphabetLesson;
