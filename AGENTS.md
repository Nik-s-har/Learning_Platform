# Learning Platform: project context

## Purpose and stack

- Russian-language learning platform for children's English courses.
- Single-page application built with React 19, TypeScript (strict mode), Vite, and React Router.
- Supabase provides email/password authentication. Storybook is used for isolated UI development.
- Styling uses colocated CSS Modules for components plus global tokens/styles in `src/styles`.

## Commands

- `npm run dev` — start the Vite development server.
- `npm run build` — TypeScript project build followed by the production Vite build.
- `npm run lint` — run ESLint, including Prettier and Storybook rules.
- `npm run format` — format TS, TSX, CSS, and Markdown files under `src`.
- `npm run storybook` — run Storybook on port 6006.
- `npm run build-storybook` — build static Storybook output.
- There is currently no automated test command or test suite.

## Application structure

- `src/main.tsx` loads global styles and renders `App` in `StrictMode`.
- `src/App.tsx` wraps the router in `AuthProvider`.
- `src/router.tsx` is the top-level route table. `Layout` supplies the shared header/footer.
- Public routes are `/` and `/login`. Alphabet course routes are protected by `ProtectedRoute` and redirect unauthenticated users to `/login`.
- Course-specific code lives under `src/courses/<course>`; reusable page sections live in `src/components/layout`, smaller reusable pieces in `src/components/ui`, and exercise implementations in `src/exercises`.
- Most component directories expose a barrel `index.ts`; follow the neighboring component's pattern when adding one.
- `src/types/lesson.ts` owns the course/lesson data contracts.

## Alphabet course

- Routes are `/alphabet/:textbook` (roadmap) and `/alphabet/:textbook/lesson/:lessonId` (lesson player).
- `src/courses/alphabet/data/index.ts` is the textbook registry. A textbook entry has a menu label and `CourseData`; its key becomes the URL slug.
- `starlight` uses `alphabetCourseData` from `alphabetLessons.ts`; `spotlight` uses the incomplete placeholder data in `spotlightLessons.ts`.
- A lesson has numeric `id`, `title`, `content`, imported `image`, and optional `steps`.
- Every step currently requires `title`, `type` (`video` or `exercise`), `src`, and `aboutLesson`.
- Video sources should be built with `mediaUrl(relativePath)`. Exercises currently use Wordwall embed URLs directly.
- The lesson player chooses data from the textbook registry, renders video/exercise steps, and keeps completion/current-step state locally. Progress is not persisted and resets when the lesson changes or the page reloads.
- The roadmap currently marks every lesson as `unlock`; there is no persisted unlock/completion model yet.
- Empty or missing lesson steps currently cause the lesson page to render nothing.

## Authentication and environment

- `src/context/AuthContext.tsx` exposes the Supabase user, loading state, sign-in, sign-up, and sign-out.
- `src/lib/supabase.ts` creates the browser client.
- Required local variables (kept in ignored `.env.local`) are `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_MEDIA_BASE_URL`.
- `src/utils/media.ts` joins `VITE_MEDIA_BASE_URL` with a relative media path. Do not hardcode secrets or commit `.env.local`.

## Code conventions

- Use the aliases configured in `tsconfig.app.json`: `@assets`, `@context`, `@pages`, `@ui`, `@layout`, `@app-types`, `@alphabet`, `@styles`, `@lib`, and `@utils`.
- Formatting is 2 spaces, semicolons, single quotes, trailing commas, and parenthesized arrow parameters.
- Use `import type` for type-only imports (`verbatimModuleSyntax` is enabled).
- Keep user-facing copy in Russian unless the surrounding feature requires another language.
- Add or update a colocated `*.stories.tsx` when changing the public behavior of a reusable visual component.
- Treat `src/courses/*/data` as content as well as code: preserve IDs, object shape, commas/brackets, step order, media paths, and embed URLs when editing lesson text.

## Important caveats

- The root `README.md` is still mostly the default Vite README and is not the architectural source of truth.
- `docs/content-guide.md` is intended for non-programmer content editors, but examples can lag behind the TypeScript types. In particular, current `LessonStepData` requires `title`; verify against `src/types/lesson.ts` and neighboring live data.
- Content data and UI code may be edited concurrently. Preserve unrelated working-tree changes and inspect the diff before modifying shared files, especially `alphabetLessons.ts`.

## Before handing off changes

- Run `npm run build` for TypeScript/application changes.
- Run `npm run lint` for code or style changes; distinguish pre-existing failures from failures introduced by the task.
- For content-only lesson edits, at minimum run the build so malformed lesson objects are caught.
- Summarize changed files and checks run; do not commit, push, discard, or overwrite unrelated user changes unless explicitly asked.
