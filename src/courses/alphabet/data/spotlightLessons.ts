import type { CourseData } from '@app-types/lesson';
import { mediaUrl } from '@utils/media';
import ABC from '@assets/pictures/ABC_Spotlight.png';

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
        src: mediaUrl('courses/introduction/starlight/video/SL1_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/9ec82313195d4d12bd6b06630f8fa0b8?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL1_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/078b3b85466443bd9d9b9599a5fee58c?themeId=1&templateId=82&fontStackId=0',
        aboutLesson: 'Послушай слово и поймай правильную картинку',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/d76e6b8fcdfb4249b4971e12646bf713?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини картинку и букву',
      },

      {
        title: 'Упражнение 4',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/b87b1d987b5948d389ff91a81092f0b2?themeId=45&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пару: соедини заглавную и строчную букву',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L1_ex5.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 5 в рабочей тетради',
      },

      {
        title: 'Упражнение 5',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/95aa480820c64793b23750b9bc6bc2a6?themeId=62&templateId=70&fontStackId=21',
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 5 в рабочей тетради',
      },

      {
        title: 'Упражнение 6',
        type: 'wordwall',
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
        src: mediaUrl('courses/introduction/starlight/video/SL2_ ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/ac8798d09cce42e6b9a8753bbb4083a3?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL2_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-5 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/7a86372d74cf46f298b7e9b8f531c5ec?themeId=1&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай правильное слово',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/ef3bd5aaa7cc499f83ae1606f5ef1538?themeId=1&templateId=36&fontStackId=0',
        aboutLesson: 'Вставь в слово правильную букву',
      },
      {
        title: 'Упражнение 4',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/06685e6cafab473b95f9be7c14bf2d2d?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Заглавные и строчные буквы: найди пару',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L2_ex6.mp4'),
        aboutLesson: 'Прочитай слова. Упражнение 6 в рабочей тетради.',
      },
      {
        title: 'Упражнение 5',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/282c1e05229e4809886d7c3a1505aee8?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Послушай и выбери правильное слово',
      },
      {
        title: 'Упражнение 6',
        type: 'wordwall',
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
        src: mediaUrl('courses/introduction/starlight/video/SL3_ex1.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },

      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/2d99da6b37ad4c8d8dbf1dfb2802b2e9?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини картинку и букву',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/1795d571fb5d42cc852abbaca9aad40b?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини картинку и слово',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/baf5153fca9f45c7813003e654fc5f1a?themeId=55&templateId=71&fontStackId=0',
        aboutLesson:
          'Собери в каждый сундук монеты с соответствующими строчными буквами ',
      },
      {
        title: 'Упражнение 4',
        type: 'wordwall',
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
        type: 'wordwall',
        src: 'https://wordwall.net/embed/9cb14954c45d4e37960949c7875841c7?themeId=1&templateId=36&fontStackId=0',
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
        src: mediaUrl('courses/introduction/starlight/video/SL4_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/2f435c5c0c424a83a9eae7ac03e51438?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL4_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/6de5d5c6e4ee4fcea86fe7fb2f189458?themeId=1&templateId=25&fontStackId=0',
        aboutLesson: 'Заглавные и строчные буквы: найди пару',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/9abd7f43e0bf4ef18adfc80902f622c9?themeId=1&templateId=2&fontStackId=0',
        aboutLesson: 'Подбери к каждой картинке заглавную и строчную букву',
      },
      {
        title: 'Упражнение 4',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/705371417b244efd96e7a2ded21361ad?themeId=46&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай картинку, соответствующую букве',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L4_ex5.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 5 в рабочей тетради',
      },
      {
        title: 'Упражнение 5',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/f1d350ce60c64d3b96af2afea7d3d699?themeId=1&templateId=5&fontStackId=21',
        aboutLesson: 'Послушай и выбери правильное слово',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L4_ex6.mp4'),
        aboutLesson:
          'Прочитай предложение. Выполни упражнение 6 в рабочей тетради',
      },

      {
        title: 'Упражнение 6',
        type: 'wordwall',
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
        type: 'wordwall',
        src: 'https://wordwall.net/embed/72447b69eb2f4110bdf71545d721cd15?themeId=1&templateId=5&fontStackId=0',
        aboutLesson:
          'Выбери пару (такое же слово, написанное строчными буквами)',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/1ee15c789cc94706aaf4de706d38a77e?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пару',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/a9c4180e36b64b9a8308e6edfcae5944?themeId=1&templateId=5&fontStackId=0',
        aboutLesson:
          'Выбери лишнее слово. Выполни упражнение 4 в рабочей тетради, а потом сделай это задание и проверь',
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
        src: mediaUrl('courses/introduction/starlight/video/SL6_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/99ac600cf1db44aeb6e2074743ccc60c?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL6_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/8485aad49d314c9cabdf422d33a7853c?themeId=66&templateId=49&fontStackId=0',
        aboutLesson: 'Добеги до зоны с правильным ответом, избегая врагов',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/3ff83864104345bbb8cc1460ac016b3f?themeId=21&templateId=68&fontStackId=0',
        aboutLesson:
          'Изображение открывается постепенно. Нажми на кнопку, как только сможешь ответить на вопрос и выбери ответ',
      },
      {
        title: 'Упражнение 4',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/71f133b4b6de4b0bb6e7b48060cee918?themeId=1&templateId=2&fontStackId=0',
        aboutLesson:
          'Соедини заглавную и строчную букву с соответствующей картинкой',
      },

      {
        title: 'Упражнение 5',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/99dfd28072e04fc29f43133e34bfdb88?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Послушай и выбери правильный ответ',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L6_ex5.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 5 в рабочей тетради',
      },
      {
        title: 'Упражнение 6',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/2cc86390c64c4793876bd8d79295b9b3?themeId=1&templateId=45&fontStackId=21',
        aboutLesson: 'Нажимай только на букву L l',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L6_ex6.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 6 в рабочей тетради',
      },

      {
        title: 'Упражнение 7',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/5be4f549bb314895bd9ff9a73074f7bc?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини рифмующиеся слова',
      },
      {
        title: 'Упражнение 8',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/b493b16343604acb8d959fd5a5ce4a8f?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини одинаковые слова',
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
        type: 'wordwall',
        src: 'https://wordwall.net/embed/4ddcdf5c51c040979bee64ecf41f7e8b?themeId=1&templateId=36&fontStackId=0',
        aboutLesson: 'Выбери правильную букву',
      },
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L7_ex3.mp4'),
        aboutLesson:
          'Послушай и прочитай предложения. Выполни упражнение 3 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/c13195644017412dbdaccf618a329384?themeId=45&templateId=72&fontStackId=0',
        aboutLesson: 'Составь предложения и прочитай их',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/4d75f7badfe844c9af4095e82d3ffbf2?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Подбери рифму',
      },
      {
        title: 'Упражнение 4',
        type: 'wordwall',
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
        src: mediaUrl('courses/introduction/starlight/video/SL8_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/280e846fe66048248697b2b8694c0a13?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини букву и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL8_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/437411d2075d44079e5eac755a704464?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Выбери правильную букву',
      },
      {
        title: 'Упражнение 3',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/bed36ca589bd4485bf58451e126903c9?themeId=65&templateId=25&fontStackId=0',
        aboutLesson: 'Подбери пару',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L8_ex5.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 5 в рабочей тетради',
      },
      {
        title: 'Упражнение 4',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/95b90695f4214964aff20f87b438173a?themeId=65&templateId=70&fontStackId=0',
        aboutLesson: 'Прочитай слова',
      },

      {
        title: 'Упражнение 5',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/be83e40ceba3470ea47ba7c792dc37e2?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пары рифмующихся слов',
      },
      {
        title: 'Упражнение 6',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/3fd01b68c5a048b2972ed16afde26afd?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Выбери слово, которое рифмуется',
      },
      {
        title: 'Видео 4',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L8_ex6.mp4'),
        aboutLesson:
          'Прочитай предложения. Выполни упражнение 6 в рабочей тетради',
      },
      {
        title: 'Упражнение 7',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/cc0cfb0d0d204d1eba537e4bdddc8423?themeId=45&templateId=72&fontStackId=0',
        aboutLesson: 'Составь предложения',
      },
      {
        title: 'Упражнение 8',
        type: 'wordwall',
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
        src: mediaUrl('courses/introduction/starlight/video/SL9_ex1.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },
      {
        title: 'Упражнение 1',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/5d83215942f747719c69251144191ca9?themeId=45&templateId=72&fontStackId=15',
        aboutLesson: 'Составь слово, которое рифмуется',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL9_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 4-6 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'wordwall',
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
        type: 'wordwall',
        src: 'https://wordwall.net/embed/6ba28d59d479413a8f6e408fe54bc0d5?themeId=1&templateId=38&fontStackId=0',
        aboutLesson: 'Составь слово',
      },
      {
        title: 'Упражнение 4 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/4c9e9874d82b449199f134c7f427bce3?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Найди пары одинаковых слов',
      },
      {
        title: 'Упражнение 5 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/beea6e127a7045f3935786405fee6ea6?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай такое же слово',
      },

      {
        title: 'Упражнение 6 ',
        type: 'wordwall',
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
        src: mediaUrl('courses/introduction/starlight/video/SL10_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/583743c5d59e4e658053b8b9680b3621?themeId=1&templateId=2&fontStackId=0',
        aboutLesson: 'Соедини заглавную и строчную буквы с картинкой',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL10_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/5dfea6e062ef4bca921c61634671e8ae?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Упражнение 3 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/533f026983ed40b69f84d1ec003520ec?themeId=65&templateId=46&fontStackId=0',
        aboutLesson: 'Выбери правильное слово',
      },
      {
        title: 'Упражнение 4 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/7171c604b3c644a0b0894470e7e0868e?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай правильную картинку',
      },
      {
        title: 'Упражнение 5 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/54fe97334fc146d8b532774dc7f9dc64?themeId=1&templateId=38&fontStackId=0',
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
        type: 'wordwall',
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
        type: 'wordwall',
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
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L11_ex2.mp4'),
        aboutLesson:
          'Выполни упражнение 1 в рабочей тетради, затем посмотри видео и проверь',
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
        src: mediaUrl('courses/introduction/starlight/video/SL12_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/b16353fb44b540c8bb4d38dc6b1ad2f1?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL12_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-5 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/299cfd281e144df38642728d87a056a1?themeId=27&templateId=82&fontStackId=0" width=',
        aboutLesson: 'Поймай правильное слово',
      },
      {
        title: 'Упражнение 3 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/c7b8ac2a0d1a4217b06290ac2ee0f078?themeId=1&templateId=38&fontStackId=0',
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
        type: 'wordwall',
        src: 'https://wordwall.net/embed/5d3da4b7edbf48db9f241cc92e255cba?themeId=1&templateId=3&fontStackId=0',
        aboutLesson:
          'Выполни упражнение 1 в рабочей тетради, затем сделай это задание и проверь',
      },
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L13_ex2.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 2 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/04efc23737bf43dfa1b817d44ec938fc?themeId=65&templateId=70&fontStackId=0',
        aboutLesson: 'Прочитай слова',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L13_ex3.mp4'),
        aboutLesson:
          'Послушай и прочитай слова. Выполни упражнение 3 в рабочей тетради',
      },
      {
        title: 'Упражнение 3 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/99f2b7a6524e449c8853e9bddcaa4e68?themeId=65&templateId=38&fontStackId=0',
        aboutLesson: 'Послушай и составь слово',
      },
      {
        title: 'Видео 3',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L13_ex4.mp4'),
        aboutLesson:
          'Послушай и прочитай предложения. Выполни упражнение 4 в рабочей тетради',
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
        src: mediaUrl('courses/introduction/starlight/video/SL14_ex1.mp4'),
        aboutLesson: 'Смотри, слушай и повторяй',
      },
      {
        title: 'Упражнение 1 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/f52ecf145f3745baae67958f7153e6ed?themeId=1&templateId=3&fontStackId=0',
        aboutLesson: 'Соедини слово и картинку',
      },
      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/SL14_ex002.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-4 в рабочей тетради',
      },
      {
        title: 'Упражнение 2 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/c8f0ad4431ed41009c1cd3cc56d0d50a?themeId=27&templateId=82&fontStackId=0',
        aboutLesson: 'Поймай правильное слово',
      },

      {
        title: 'Видео 2',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L14_ex2.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 5-7 в рабочей тетради',
      },
      {
        title: 'Упражнение 3 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/01d1fa7c18aa4d0b87dcf6f2ab7de529?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Послушай и выбери правильное слово',
      },
    ],
  },
  {
    id: 15,
    title: 'Урок 15',
    image: ABC,
    content: 'Повторяем A-Z',
    steps: [
      {
        title: 'Видео 1',
        type: 'video',
        src: mediaUrl('courses/introduction/starlight/video/L15.mp4'),
        aboutLesson: 'Смотри видео и выполняй задания 1-3 в рабочей тетради',
      },
      {
        title: 'Упражнение 1 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/fb459e519be34c34abf1056dc43dac4b?themeId=1&templateId=46&fontStackId=0',
        aboutLesson: 'Выбери слово, которое рифмуется',
      },

      {
        title: 'Упражнение 2 ',
        type: 'wordwall',
        src: 'https://wordwall.net/embed/1cca792138e64019a069c5b7c4c61864?themeId=1&templateId=5&fontStackId=0',
        aboutLesson: 'Прочитай вопрос и выбери правильный ответ',
      },
    ],
  },
];
