export type VerbGrade = 3 | 4 | 5 | 6 | 7;

export interface Verb {
  /** Класс, в котором глагол проходят по программе. */
  grade: VerbGrade;
  infinitive: string;
  past: string;
  participle: string;
  translation: string;
}

/** Фильтр списка глаголов: конкретный класс или все сразу. */
export type VerbFilter = VerbGrade | 'all';
