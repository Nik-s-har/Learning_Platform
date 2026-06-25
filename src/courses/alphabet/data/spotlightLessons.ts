import type { CourseData } from '@app-types/lesson';
import { mediaUrl } from '@utils/media';
import ABC from '@assets/pictures/ABC.png';

// TODO: Spotlight content — структурная заглушка, заполнить видео и Wordwall-ссылки.
// Структура повторяет alphabetLessons.ts (Starlight): уроки c id, title, image,
// content и опциональным массивом steps (video | exercise).
export const spotlightLessons: CourseData = [
  {
    id: 1,
    title: 'Урок 1',
    image: ABC,
    content: 'A, B, C, D',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L1_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/ru/embed/e1e2d86678774a9d9901f63a48cf0341?themeId=1&templateId=3&fontStackId=0&autoplay=1',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L1_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/c6468d02ab074b1495a61854f33efc23?themeId=1&templateId=82&fontStackId=0',
        aboutLesson: 'Послушай слово и поймай правильную картинку',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/849658d2d957425a983b5c6a69682481?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини картинку и букву',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L1_ex3.mp4'),
        aboutLesson: 'Смотри видео и выполняй задание 4 в рабочей тетради',
      },

      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/e5270e2e83974a6eb37dbae6f804ccf3?themeId=45&templateId=3&fontStackId=21',
        aboutLesson: 'Найди пару: соедини заглавную и строчную букву',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L1_ex5.mp4'),
        aboutLesson: 'Смотри видео и повторяй',
      },

      {
        title: 'Упражнение 5',
        type: 'exercise',
        src: 'https://wordwall.net/embed/95aa480820c64793b23750b9bc6bc2a6?themeId=62&templateId=70&fontStackId=21',
        aboutLesson: 'Прочитай слова',
      },
      {
        title: 'Видео 5',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L1_ex4.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 5 и 6 в рабочей тетради',
      },
      {
        title: 'Упражнение 6',
        type: 'exercise',
        src: 'https://wordwall.net/embed/ba1ae68ff8ac45efba388806bc13743c?themeId=1&templateId=38&fontStackId=0',
        aboutLesson: 'Послушай и составь слово',
      },
    ],
  },
  {
    id: 2,
    title: 'Урок 2',
    image: ABC,
    content: 'E, F, G',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L2_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/0f4de313a6aa4b42a79b9b821dc537ba?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L2_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/809eaeba9fb5480689b6c867f67df085?themeId=1&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай правильное слово',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/79d4f9db27b446faa3aa3d1fd83affda?themeId=1&templateId=36&fontStackId=0',
        aboutLesson: 'Вставь в слово правильную букву',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L2_ex3.mp4'),
        aboutLesson: 'Смотри видео и выполняй задание 4 в рабочей тетради',
      },

      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/0278e863b213453593ec2a6fdd6a4a60?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Заглавные и строчные буквы: найди пару',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L2_ex6.mp4'),
        aboutLesson: 'Прочитай слова',
      },
      {
        title: 'Упражнение 5',
        type: 'exercise',
        src: 'https://wordwall.net/embed/282c1e05229e4809886d7c3a1505aee8?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Послушай и выбери правильное слово',
      },
      {
        title: 'Упражнение 6',
        type: 'exercise',
        src: 'https://wordwall.net/embed/6b22656316e446b0818b9e6956677766?themeId=65&templateId=25&fontStackId=0',
        aboutLesson:
          'Найди пары рифмующихся слов. Выполни упражнение 7 в рабочей тетради',
      },
    ],
  },
  {
    id: 3,
    title: 'Урок 3',
    image: ABC,
    content: 'Повторяем A-G',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L3_ex1.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },

      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/6f810760e83f47cd93d7cbab4f8278c2?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини картинку и букву',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/04d48638d5bf460ea820c6a23ed4dc94?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини картинку и слово',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/baf5153fca9f45c7813003e654fc5f1a?themeId=55&templateId=71&fontStackId=0',
        aboutLesson:
          'Собери в каждый сундук монеты с соответствующими строчными буквами ',
      },
      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/aaf96990533a4bb59cf5d3e3e3657de8?themeId=46&templateId=48&fontStackId=0',
        aboutLesson:
          'Направляй самолётик к облакам с правильными буквами. Не задевай неправильные',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L2_ex6.mp4'),
        aboutLesson: 'Прочитай слова',
      },

      {
        title: 'Упражнение 5',
        type: 'exercise',
        src: 'https://wordwall.net/embed/307d4e263d4242a3baa925494dde5d51?themeId=1&templateId=22&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 4 в рабочей тетради, а потом сделай это задание и проверь ',
      },
      {
        title: 'Упражнение 6',
        type: 'exercise',
        src: 'https://wordwall.net/embed/d498cae6d84f4c2396912f978c548e2f?themeId=1&templateId=36&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 5 в рабочей тетради, а потом сделай это задание и проверь',
      },
    ],
  },
  {
    id: 4,
    title: 'Урок 4',
    image: ABC,
    content: 'H, I, J',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L4_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/10641c1830de42b89c95d086dd5ee92b?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L4_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/496f08f103234a66a8a5d7bd8b5ec04c?themeId=1&templateId=25&fontStackId=21',
        aboutLesson: 'Заглавные и строчные буквы: найди пару',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/ac108769862240efaa2493e4da523b39?themeId=1&templateId=2&fontStackId=21',
        aboutLesson: 'Подбери к каждой картинке заглавную и строчную букву',
      },
      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/3644304c327a44fcadecb29fee11aaff?themeId=46&templateId=82&fontStackId=21',
        aboutLesson: 'Поймай картинку, соответствующую букве',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L4_ex5.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 5',
        type: 'exercise',
        src: 'https://wordwall.net/embed/f1d350ce60c64d3b96af2afea7d3d699?themeId=1&templateId=5&fontStackId=21',
        aboutLesson: 'Послушай и выбери правильное слово',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L4_ex6.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },

      {
        title: 'Упражнение 6',
        type: 'exercise',
        src: 'https://wordwall.net/embed/1cec7c7484234bb8a6ac8eb414f733d8?themeId=45&templateId=72&fontStackId=0',
        aboutLesson: 'Составь предложение',
      },
    ],
  },
  {
    id: 5,
    title: 'Урок 5',
    image: ABC,
    content: 'Повторяем A-J',
    steps: [
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/72447b69eb2f4110bdf71545d721cd15?themeId=1&templateId=5&fontStackId=0',
        aboutLesson:
          'Выбери пару (такое же слово, написанное строчными буквами)',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/1ee15c789cc94706aaf4de706d38a77e?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пару',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/a9c4180e36b64b9a8308e6edfcae5944?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Выбери лишнее слово',
      },
    ],
  },
  {
    id: 6,
    title: 'Урок 6',
    image: ABC,
    content: 'K, L, M',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L6_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/5b0e5fecdbeb4c8b9909c1cd1484374d?themeId=1&templateId=3&fontStackId=21',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/ec450aeab8d24499987b4afe274eb603?themeId=66&templateId=49&fontStackId=21',
        aboutLesson: 'Добеги до зоны с правильным ответом, избегая врагов',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/9fef39d821204e32adcfd819d63fdcb0?themeId=21&templateId=68&fontStackId=21',
        aboutLesson:
          'Изображение открывается постепенно. Нажми на кнопку, как только сможешь ответить на вопрос и выбери ответ',
      },
      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/7f9454ac2d2942d6a6f50b639fb330e3?themeId=1&templateId=2&fontStackId=0',
        aboutLesson:
          'Соедини заглавную и строчную букву с соответствующей картинкой',
      },

      {
        title: 'Упражнение 5',
        type: 'exercise',
        src: 'https://wordwall.net/embed/9534f107762542e4a5fb14587c30af45?themeId=1&templateId=5&fontStackId=21',
        aboutLesson: 'Послушай и выбери правильный ответ',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L6_ex5.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 6',
        type: 'exercise',
        src: 'https://wordwall.net/embed/2cc86390c64c4793876bd8d79295b9b3?themeId=1&templateId=45&fontStackId=21',
        aboutLesson: 'Нажимай только на букву L l',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L6_ex6.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },

      {
        title: 'Упражнение 7',
        type: 'exercise',
        src: 'https://wordwall.net/embed/5be4f549bb314895bd9ff9a73074f7bc?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини рифмующиеся слова',
      },
      {
        title: 'Упражнение 8',
        type: 'exercise',
        src: 'https://wordwall.net/embed/b493b16343604acb8d959fd5a5ce4a8f?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини одиноаковые слова',
      },
    ],
  },
  {
    id: 7,
    title: 'Урок 7',
    image: ABC,
    content: 'Повторяем A-M',
    steps: [
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/81c697145e934ac1b0ce551be11c583b?themeId=1&templateId=36&fontStackId=0',
        aboutLesson: 'Выбери правильную букву',
      },
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L7_ex3.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/c13195644017412dbdaccf618a329384?themeId=45&templateId=72&fontStackId=0',
        aboutLesson: 'Составь предложения и прочитай их',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/4d75f7badfe844c9af4095e82d3ffbf2?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Подбери рифму',
      },
      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/aaddc88c3da84561a9514bcd0f3e33a7?themeId=1&templateId=38&fontStackId=0',
        aboutLesson: 'Послушай и составь слово',
      },
    ],
  },
  {
    id: 8,
    title: 'Урок 8',
    image: ABC,
    content: 'N, O, P',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L8_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/69be545d76e34a86a20c3bbd403e2aa4?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини букву и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L8_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'exercise',
        src: 'https://wordwall.net/embed/bb685df77307431494ae6455cd758936?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Выбери правильную букву',
      },
      {
        title: 'Упражнение 3',
        type: 'exercise',
        src: 'https://wordwall.net/embed/fc9ebe02145442a98ab8b1ddd7945ab2?themeId=65&templateId=25&fontStackId=0',
        aboutLesson: 'Подбери пару',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L8_ex5.mp4'),
        aboutLesson: 'Прочитай слова',
      },
      {
        title: 'Упражнение 4',
        type: 'exercise',
        src: 'https://wordwall.net/embed/95b90695f4214964aff20f87b438173a?themeId=65&templateId=70&fontStackId=0',
        aboutLesson: 'прочитай слова',
      },

      {
        title: 'Упражнение 5',
        type: 'exercise',
        src: 'https://wordwall.net/embed/be83e40ceba3470ea47ba7c792dc37e2?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пары рифмующихся слов',
      },
      {
        title: 'Упражнение 6',
        type: 'exercise',
        src: 'https://wordwall.net/embed/3fd01b68c5a048b2972ed16afde26afd?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Выбери слово, которое рифмуется',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L8_ex6.mp4'),
        aboutLesson: 'Прочитай предложения',
      },
      {
        title: 'Упражнение 7',
        type: 'exercise',
        src: 'https://wordwall.net/embed/cc0cfb0d0d204d1eba537e4bdddc8423?themeId=45&templateId=72&fontStackId=0',
        aboutLesson: 'Составь предложения',
      },
      {
        title: 'Упражнение 8',
        type: 'exercise',
        src: 'https://wordwall.net/embed/e8f9815b9cba4290852990f69da960d7?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Выбери такое же слово',
      },
    ],
  },
  {
    id: 9,
    title: 'Урок 9',
    image: ABC,
    content: 'Повторяем A-P',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L9_ex1.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },
      {
        title: 'Упражнение 1',
        type: 'exercise',
        src: 'https://wordwall.net/embed/5d83215942f747719c69251144191ca9?themeId=45&templateId=72&fontStackId=15',
        aboutLesson: 'Составь слово, которое рифмуется',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L9_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 4-6 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/4f7ed8f24e974c4e946ad2d28656c4d5?themeId=1&templateId=5&fontStackId=21',
        aboutLesson: 'Выбери слово, которое не рифмуется с остальными',
      },

      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L9_ex7.mp4'),
        aboutLesson: 'Прочитай предложение',
      },
      {
        title: 'Упражнение 3 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/2246069332024bbb9d3ed44fd432af6d?themeId=1&templateId=38&fontStackId=0',
        aboutLesson: 'Составь слово',
      },
      {
        title: 'Упражнение 4 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/4c9e9874d82b449199f134c7f427bce3?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пары одинаковых слов',
      },
      {
        title: 'Упражнение 5 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/beea6e127a7045f3935786405fee6ea6?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай такое же слово',
      },

      {
        title: 'Упражнение 6 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/35e3224a2f0e415aa5acd14952ac9ba4?themeId=45&templateId=72&fontStackId=0',
        aboutLesson: 'Составь предложение',
      },
    ],
  },
  {
    id: 10,
    title: 'Урок 10',
    image: ABC,
    content: 'Q, R, S, T',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L10_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/ac6bc0891997424d818b3fa89f5e9cd0?themeId=1&templateId=2&fontStackId=0',
        aboutLesson: 'Соедини заглавную и строчную буквы с картинкой',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L10_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/afa8d5dc34f74d85a3618843475da85f?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Упражнение 3 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/a9c9e4246e1f4817a3da091d149072ec?themeId=65&templateId=46&fontStackId=0',
        aboutLesson: 'Выбери правильное слово',
      },
      {
        title: 'Упражнение 4 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/b7e34f18604e49b7927a24ff0a2e22aa?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай правильную картинку',
      },
      {
        title: 'Упражнение 5 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/62c2c955f9c4444f8e2314c4a917667b?themeId=1&templateId=38&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 5 в рабочей тетради, затем сделай это задание',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L10_ex6.mp4'),
        aboutLesson:
          'Выполни упражнение 6 в рабочей тетради, затем посмотри видео и проверь',
      },
      {
        title: 'Упражнение 6 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/5ff6c4f5fc8f49f88bab8c3c7c0968d4?themeId=65&templateId=70&fontStackId=0',
        aboutLesson: 'Прочитай',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L10_ex8.mp4'),
        aboutLesson: 'Посмотри видео и прочитай тредложение',
      },
      {
        title: 'Упражнение 7 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/2dce13a406b148a99807734145319920?themeId=1&templateId=3&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 8 в рабочей тетради, затем сделай это задание и проверь',
      },
    ],
  },
  {
    id: 11,
    title: 'Урок 11',
    image: ABC,
    content: 'Повторяем A-T',
    steps: [
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/0d3e803a9e9e4284ae9dc92992606235?themeId=2&templateId=10&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 1 в рабочей тетради, затем сделай это задание и проверь',
      },
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L11_ex2.mp4'),
        aboutLesson:
          'Выполни упражнение 2 в рабочей тетради, затем посмотри видео и проверь',
      },
    ],
  },
  {
    id: 12,
    title: 'Урок 12',
    image: ABC,
    content: 'U, V, W',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L12_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/52113151cd60445cb3c75e8d0651b53f?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L12_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-5 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/ee009ee5665d425294b90e1dbea78eaa?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай правильное слово',
      },
      {
        title: 'Упражнение 3 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/716512f4b69b44a79ac1e89b193c3561?themeId=1&templateId=38&fontStackId=0',
        aboutLesson: 'Составь слово',
      },
    ],
  },
  {
    id: 13,
    title: 'Урок 13',
    image: ABC,
    content: 'Повторяем A-W',
    steps: [
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/5057ff5998164d4e92447b4a22c92125?themeId=1&templateId=3&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 1 в рабочей тетради, затем сделай это задание и проверь',
      },
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L13_ex2.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 2 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/04efc23737bf43dfa1b817d44ec938fc?themeId=65&templateId=70&fontStackId=0',
        aboutLesson: 'Прочитай слова',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L13_ex3.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 3 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/99f2b7a6524e449c8853e9bddcaa4e68?themeId=65&templateId=38&fontStackId=0',
        aboutLesson: 'Послушай и составь слово',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L13_ex4.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
    ],
  },
  {
    id: 14,
    title: 'Урок 14',
    image: ABC,
    content: 'X, Y, Z',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L14_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: 'https://wordwall.net/embed/a4eac9e901a446e787ca41bd1276efba?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L14_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-5 в рабочей тетради',
      },
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: '',
        aboutLesson: '',
      },
      {
        title: 'Упражнение 1 ',
        type: 'exercise',
        src: '',
        aboutLesson: '',
      },
    ],
  },
];
