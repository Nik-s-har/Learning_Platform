import type { GradeData } from '@textbooks/types/textbook';
import { mediaUrl } from '@utils/media';

export const starlightGrade4: GradeData = {
  grade: 4,
  modules: [
    {
      id: 1,
      title: 'Hello Again!',
      accent: 'blue',
      topics: {
        vocabulary: [
          {
            slug: 'personality-adjectives',
            title: 'Personality adjectives',
            aboutTopic: 'Прилагательные характера',
            steps: [
              {
                title: 'Видео 1',
                type: 'video',
                src: mediaUrl(
                  'courses/introduction/starlight/video/L1_ex1.mp4',
                ),
                aboutLesson: 'Смотри, слушай и повторяй',
              },
              {
                title: 'Упражнение 1',
                type: 'exercise',
                src: 'https://wordwall.net/ru/embed/e1e2d86678774a9d9901f63a48cf0341?themeId=1&templateId=3&fontStackId=0&autoplay=1',
                aboutLesson: 'Соедини слово и картинку',
              },
            ],
          },
          { slug: 'physical-appearance', title: 'Physical appearance' },
          { slug: 'school-vocabulary', title: 'School vocabulary' },
        ],
        grammar: [
          { slug: 'to-be-have-got', title: 'To be / Have got (revision)' },
          { slug: 'comparatives', title: 'Comparatives' },
          { slug: 'irregular-plurals', title: 'Irregular plurals' },
        ],
        practice: [
          { slug: 'describe-a-friend', title: 'Describe a friend' },
          { slug: 'class-profile', title: 'Class profile' },
          { slug: 'who-am-i', title: 'Who am I? game' },
        ],
      },
    },
    {
      id: 2,
      title: 'Around the World',
      accent: 'violet',
      topics: {
        vocabulary: [
          {
            slug: 'countries-nationalities',
            title: 'Countries & nationalities',
          },
          { slug: 'capital-cities', title: 'Capital cities' },
          { slug: 'landmarks', title: 'Landmarks' },
        ],
        grammar: [
          {
            slug: 'present-simple-revision',
            title: 'Present Simple (revision)',
          },
          { slug: 'prepositions-of-place', title: 'Prepositions of place' },
          { slug: 'superlatives', title: 'Superlatives' },
        ],
        practice: [
          { slug: 'country-fact-file', title: 'Country fact file' },
          { slug: 'world-quiz', title: 'World quiz' },
          {
            slug: 'dream-destination-postcard',
            title: 'Dream destination postcard',
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Wild Animals',
      accent: 'green',
      topics: {
        vocabulary: [
          { slug: 'animal-habitats', title: 'Animal habitats' },
          { slug: 'animal-actions', title: 'Animal actions' },
          { slug: 'describing-animals', title: 'Describing animals' },
        ],
        grammar: [
          { slug: 'can-cant-ability', title: "Can / Can't for ability" },
          { slug: 'present-simple-3rd', title: 'Present Simple (3rd person)' },
          { slug: 'adverbs-of-manner', title: 'Adverbs of manner' },
        ],
        practice: [
          { slug: 'animal-fact-file', title: 'Animal fact file' },
          { slug: 'animal-quiz', title: 'Animal quiz' },
          { slug: 'design-a-wildlife-park', title: 'Design a wildlife park' },
        ],
      },
    },
    {
      id: 4,
      title: 'Our Planet',
      accent: 'orange',
      topics: {
        vocabulary: [
          { slug: 'environment-nature', title: 'Environment & nature' },
          { slug: 'ecological-problems', title: 'Ecological problems' },
          { slug: 'recycling', title: 'Recycling' },
        ],
        grammar: [
          { slug: 'must-mustnt', title: "Must / Mustn't" },
          { slug: 'should-shouldnt', title: "Should / Shouldn't" },
          { slug: 'imperative-revision', title: 'Imperative (revision)' },
        ],
        practice: [
          { slug: 'eco-poster', title: 'Eco-poster' },
          { slug: 'green-classroom-rules', title: 'Green classroom rules' },
          { slug: 'recycling-guide', title: 'Recycling guide' },
        ],
      },
    },
    {
      id: 5,
      title: 'People & Places',
      accent: 'pink',
      topics: {
        vocabulary: [
          { slug: 'professions', title: 'Professions' },
          { slug: 'daily-routines', title: 'Daily routines' },
          { slug: 'places-of-work', title: 'Places of work' },
        ],
        grammar: [
          {
            slug: 'past-simple-to-be',
            title: 'Past Simple: to be (was / were)',
          },
          { slug: 'past-simple-regular', title: 'Past Simple: regular verbs' },
          { slug: 'time-expressions', title: 'Time expressions' },
        ],
        practice: [
          { slug: 'famous-person-biography', title: 'Famous person biography' },
          { slug: 'my-day-in-the-past', title: 'My day in the past' },
          { slug: 'profession-interview', title: 'Profession interview' },
        ],
      },
    },
  ],
};
