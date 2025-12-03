# AGENTS.md

## Overview
This document outlines the roles and responsibilities of AI agents (e.g., Cursor, GitHub Copilot) in the development of this project, which uses React 19, TypeScript, Vite, pnpm, Shadcn/ui, Zustand, TailwindCSS, ahooks, Framer Motion, Sonner, Axios, BiomeJS, Zod, and react-transition-group. The directory structure is: `src/components`, `src/pages`, `src/hooks`, `src/config`, `src/i18n`, `src/assets`, `src/utils`, `src/stores`, `src/constant`, `src/request`.

## Agent Responsibilities

### Code Generation
- **Components**: Generate React components in `src/components/` using Shadcn/ui and TailwindCSS. Ensure TypeScript interfaces for props and Framer Motion or react-transition-group for animations.
  - Example: Generate a `Button.tsx` with Shadcn/ui’s `Button` component, typed props, and a fade-in animation.
- **Pages**: Create page components in `src/pages/` with proper routing setup (e.g., using `react-router-dom` if applicable).
- **Hooks**: Generate custom hooks in `src/hooks/` with ahooks utilities and TypeScript. Example: `useFetchUser` with `useRequest` from ahooks.
- **Stores**: Create Zustand stores in `src/stores/` with typed interfaces. Example: `authStore.ts` with login/logout actions.
- **API Services**: Generate Axios-based API services in `src/api/`. Include error handling and TypeScript types for responses.
- **Utilities**: Write helper functions in `src/utils/` (e.g., `formatDate.ts`).
- **Constants**: Define enums and static data in `src/constant/` (e.g., `apiEndpoints.ts`).
- **Form Validation**: Generate Zod schemas for forms, integrated with components or hooks.

### Code Formatting and Linting
- Use BiomeJS configuration (`biome.json`) for linting and formatting suggestions.
- Ensure generated code adheres to BiomeJS rules and TypeScript strict mode.
- Suggest running `pnpm biome format` and `pnpm biome check` before commits.

### Refactoring
- Suggest extracting repeated logic into custom hooks or utilities.
- Optimize performance by adding React.memo, useCallback, or useMemo where applicable.
- Refactor inline styles to TailwindCSS classes.
- Improve type safety by replacing `any` with specific types.

### Testing
- Generate unit tests for components, hooks, and utilities using Vitest.
- Example: Create a test file `src/components/Button.test.tsx` to test rendering and interactions.

### Documentation
- Generate inline comments for complex logic in components, hooks, and utilities.
- Update `README.md` or other documentation files with setup instructions or component usage.
- Suggest JSDoc for exported functions, hooks, and components.

### Internationalization
- Generate translation files in `src/i18n/` (e.g., `en.json`) and suggest `react-i18next` setup.
- Ensure components use `useTranslation` for localized text.

### Error Handling
- Suggest centralized error handling in `src/utils/errorHandler.ts` for API requests.
- Generate Sonner toast notifications for user-facing error messages.

### Accessibility
- Ensure generated components follow a11y guidelines (e.g., ARIA attributes, keyboard navigation).
- Suggest improvements for Shadcn/ui components to enhance accessibility.

## Guidelines for Agents
- **Consistency**: Adhere to the project’s directory structure and naming conventions (e.g., PascalCase for components, camelCase for hooks).
- **Type Safety**: Use TypeScript for all generated code. Define interfaces for props, state, and API responses.
- **Performance**: Avoid unnecessary re-renders by using React.memo and hooks like useCallback.
- **Styling**: Use TailwindCSS classes exclusively unless dynamic styles are required.
- **Animations**: Integrate Framer Motion or react-transition-group for smooth transitions.
- **Notifications**: Use Sonner for success/error messages.
- **Validation**: Use Zod for form validation with clear error messages.
- **Dependencies**: Only suggest dependencies from the defined stack (e.g., no Redux, use Zustand).

## Example Prompts for Agents
- "Generate a Shadcn/ui Button component with a Framer Motion fade-in animation in `src/components/ui/Button.tsx`."
- "Create a Zustand store for user authentication in `src/stores/authStore.ts` with TypeScript."
- "Write an Axios service in `src/api/userApi.ts` to fetch user data with error handling."
- "Generate a Zod schema for a login form and integrate it with a form component in `src/components/auth/LoginForm.tsx`."
- "Add a unit test for a custom hook in `src/hooks/useFetchUser.test.ts` using Vitest."

## Notes
- Agents should check `.cursor/rules` for detailed project guidelines.
- Run `pnpm biome check` to validate code before suggesting changes.
- Ensure all generated code is compatible with Vite and React 19.
- Avoid suggesting external dependencies outside the specified stack.