import { useParams } from 'react-router-dom';
import { LessonPlayer } from '@layout/Lesson';
import {
  findGrade,
  findModule,
  findTopic,
  flattenTopics,
  hasContent,
  isTextbookSlug,
  textbooks,
  topicPath,
} from '@textbooks/index';

/** Страница темы: /starlight/4/1/personality-adjectives */
export function TopicLesson() {
  const params = useParams<{
    textbook: string;
    grade: string;
    module: string;
    topic: string;
  }>();

  if (!isTextbookSlug(params.textbook)) return null;

  const textbook = textbooks[params.textbook];
  const grade = findGrade(textbook, params.grade);
  const module = grade && findModule(grade, params.module);
  const found = module && findTopic(module, params.topic);

  if (!grade || !module || !found) return null;

  const { topic } = found;

  // Следующая тема модуля, у которой уже есть наполнение.
  const topics = flattenTopics(module);
  const next = topics
    .slice(topics.findIndex((item) => item.slug === topic.slug) + 1)
    .find(hasContent);

  return (
    <LessonPlayer
      key={topicPath(textbook.slug, grade.grade, module.id, topic.slug)}
      steps={topic.steps ?? []}
      title={topic.title}
      courseMapHref={`/${textbook.slug}`}
      nextLessonHref={
        next
          ? topicPath(textbook.slug, grade.grade, module.id, next.slug)
          : undefined
      }
    />
  );
}

export default TopicLesson;
