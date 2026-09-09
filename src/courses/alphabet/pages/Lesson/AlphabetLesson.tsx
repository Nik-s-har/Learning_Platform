import { useParams } from 'react-router-dom';
import { LessonPlayer } from '@layout/Lesson';
import { alphabetTextbooks, isTextbookSlug } from '@alphabet/data';

function AlphabetLesson() {
  const { textbook, lessonId } = useParams<{
    textbook: string;
    lessonId: string;
  }>();

  if (!isTextbookSlug(textbook)) return null;

  const courseData = alphabetTextbooks[textbook].data;
  const lessonIndex = courseData.findIndex(
    (item) => item.id === Number(lessonId),
  );
  const lessonData = courseData[lessonIndex];

  if (!lessonData) return null;

  const nextLesson = courseData[lessonIndex + 1];

  return (
    <LessonPlayer
      key={`${textbook}-${lessonData.id}`}
      steps={lessonData.steps ?? []}
      lessonId={lessonData.id}
      courseMapHref={`/alphabet/${textbook}`}
      nextLessonHref={
        nextLesson ? `/alphabet/${textbook}/lesson/${nextLesson.id}` : undefined
      }
    />
  );
}

export default AlphabetLesson;
