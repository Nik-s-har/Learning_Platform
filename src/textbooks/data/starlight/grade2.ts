import type { GradeData } from '@textbooks/types/textbook';
import { mediaUrl } from '@utils/media';

export const starlightGrade2: GradeData = {
  grade: 2,
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
                type: 'wordwall',
                src: 'https://wordwall.net/ru/embed/e1e2d86678774a9d9901f63a48cf0341?themeId=1&templateId=3&fontStackId=0&autoplay=1',
                aboutLesson: 'Соедини слово и картинку',
              },
              {
                title: 'Карточки',
                type: 'exercise',
                engine: 'flashcards',
                aboutLesson: 'Нажми на карточку, чтобы увидеть перевод',
                cards: [
                  {
                    id: 'kind',
                    front: 'kind',
                    back: 'добрый',
                    speech: ['kind'],
                  },
                  {
                    id: 'clever',
                    front: 'clever',
                    back: 'умный',
                    speech: ['clever'],
                  },
                  {
                    id: 'brave',
                    front: 'brave',
                    back: 'смелый',
                    speech: ['brave'],
                  },
                  {
                    id: 'shy',
                    front: 'shy',
                    back: 'застенчивый',
                    speech: ['shy'],
                  },
                  {
                    id: 'funny',
                    front: 'funny',
                    back: 'весёлый',
                    speech: ['funny'],
                  },
                  {
                    id: 'polite',
                    front: 'polite',
                    back: 'вежливый',
                    speech: ['polite'],
                  },
                ],
              },
              {
                title: 'Выбери перевод',
                type: 'exercise',
                engine: 'quizChoice',
                aboutLesson: 'Нажми на правильный вариант',
                questions: [
                  {
                    id: 'kind',
                    prompt: 'kind',
                    options: [
                      { id: 'a', content: 'добрый', correct: true },
                      { id: 'b', content: 'смелый', correct: false },
                      { id: 'c', content: 'вежливый', correct: false },
                    ],
                  },
                  {
                    id: 'clever',
                    prompt: 'clever',
                    options: [
                      { id: 'a', content: 'весёлый', correct: false },
                      { id: 'b', content: 'умный', correct: true },
                      { id: 'c', content: 'застенчивый', correct: false },
                    ],
                  },
                  {
                    id: 'brave',
                    prompt: 'brave',
                    options: [
                      { id: 'a', content: 'смелый', correct: true },
                      { id: 'b', content: 'добрый', correct: false },
                      { id: 'c', content: 'умный', correct: false },
                    ],
                  },
                ],
              },
              {
                title: 'Найди пару',
                type: 'exercise',
                engine: 'matchPairs',
                aboutLesson: 'Выбери слово слева, затем его перевод справа',
                batchSize: 3,
                pairs: [
                  { id: 'kind', left: 'kind', right: 'добрый' },
                  { id: 'clever', left: 'clever', right: 'умный' },
                  { id: 'brave', left: 'brave', right: 'смелый' },
                  { id: 'shy', left: 'shy', right: 'застенчивый' },
                  { id: 'funny', left: 'funny', right: 'весёлый' },
                  { id: 'polite', left: 'polite', right: 'вежливый' },
                ],
              },
              {
                title: 'Мемори',
                type: 'exercise',
                engine: 'memoryGame',
                aboutLesson: 'Запомни, где какая карточка, и открой пару',
                batchSize: 3,
                pairs: [
                  { id: 'kind', a: '😊 kind', b: 'добрый' },
                  { id: 'clever', a: '🤓 clever', b: 'умный' },
                  { id: 'brave', a: '🦁 brave', b: 'смелый' },
                  { id: 'shy', a: '🙈 shy', b: 'застенчивый' },
                  { id: 'funny', a: '🤡 funny', b: 'весёлый' },
                  { id: 'polite', a: '🙇 polite', b: 'вежливый' },
                ],
              },
              {
                title: 'Составь слово',
                type: 'exercise',
                engine: 'wordBuilder',
                aboutLesson: 'Собери английское слово из букв',
                items: [
                  {
                    id: 'kind',
                    answer: 'kind',
                    slots: [
                      { label: 'Перевод', value: 'добрый' },
                      { label: 'English', target: true },
                    ],
                  },
                  {
                    id: 'clever',
                    answer: 'clever',
                    slots: [
                      { label: 'Перевод', value: 'умный' },
                      { label: 'English', target: true },
                    ],
                  },
                  {
                    id: 'polite',
                    answer: 'polite',
                    slots: [
                      { label: 'Перевод', value: 'вежливый' },
                      { label: 'English', target: true },
                    ],
                  },
                ],
              },
              {
                title: 'Разложи по колонкам',
                type: 'exercise',
                engine: 'sortTable',
                aboutLesson: 'Поставь перевод и антоним рядом со словом',
                batchSize: 3,
                columns: [
                  { id: 'english', label: 'English' },
                  { id: 'russian', label: 'Перевод' },
                  { id: 'opposite', label: 'Antonym' },
                ],
                rows: [
                  {
                    id: 'kind',
                    cells: [
                      { columnId: 'english', value: 'kind', fixed: true },
                      { columnId: 'russian', value: 'добрый' },
                      { columnId: 'opposite', value: 'unkind' },
                    ],
                  },
                  {
                    id: 'clever',
                    cells: [
                      { columnId: 'english', value: 'clever', fixed: true },
                      { columnId: 'russian', value: 'умный' },
                      { columnId: 'opposite', value: 'silly' },
                    ],
                  },
                  {
                    id: 'brave',
                    cells: [
                      { columnId: 'english', value: 'brave', fixed: true },
                      { columnId: 'russian', value: 'смелый' },
                      { columnId: 'opposite', value: 'afraid' },
                    ],
                  },
                ],
              },
              {
                title: 'Найди одинаковое',
                type: 'exercise',
                engine: 'spotIt',
                aboutLesson: 'Найди картинку, которая есть на обеих карточках',
                items: [
                  { id: 'kind', picture: '😊', label: 'kind' },
                  { id: 'clever', picture: '🤓', label: 'clever' },
                  { id: 'brave', picture: '🦁', label: 'brave' },
                  { id: 'shy', picture: '🙈', label: 'shy' },
                  { id: 'funny', picture: '🤡', label: 'funny' },
                  { id: 'polite', picture: '🙇', label: 'polite' },
                ],
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
