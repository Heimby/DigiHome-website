# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## DigiHome - Rental Management System

DigiHome is a full-stack rental management system with a React frontend, ASP.NET Core backend, and Postgres database.

## Development Commands

### Frontend (Main - React Router v7)

```bash
cd frontend/
npm run dev          # Start development server
npm run build        # Production build
npm run test         # Run tests with Vitest
npm run typecheck    # TypeScript checking + route generation
npm run openapi-ts   # Generate TypeScript types from OpenAPI spec
```

### Core Domain

The application manages car sales with these key entities:

- **Opportunities**: Sales leads/opportunities with states and assigned agents
- **Cars**: Vehicle inventory with details and valuations
- **Agents**: Sales representatives managing opportunities
- **Owners**: Vehicle owners/customers
- **Conversation**: Customer communication with sales agents

### Key Features

- Dashboard with opportunity funnel visualization
- Admin interface for managing agents and opportunity states
- Real-time updates via Dotnet signalR
- Responsive design with mobile support
- Authentication via Dotnet Identity
- **Internationalization (i18n)**: Full bilingual support (English/Norwegian) with react-i18next

## Code Conventions

### TypeScript Standards

- Always use TypeScript with strict typing
- Use JSDoc instead of comments for documentation
- Only use "//" comments for inline explanations
- Use double quotes for strings
- Prefer `const` for variables that aren't reassigned
- Use functions over arrow functions -> `async function myFunction() {}` instead of `const myFunction = async () => {}`
- Use direct returns in forEach lambdas where possible

### React Patterns

- Components under 300 lines - split if longer
- Single responsibility per component
- PascalCase for components, camelCase for files/functions
- Extract custom hooks for logic over 50 lines or reused logic
- Watch for infinite useEffect loops
- Use time utilities from `~/utils/timeUtils`

### Icons

- Use `@fortawesome` for icons
- Multiple icon packages with different styles:
  @fortawesome/fontawesome-svg-core
  @fortawesome/free-brands-svg-icons
  @fortawesome/free-regular-svg-icons
  @fortawesome/free-solid-svg-icons
- Example usage:

```TS
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon={faLock} />
```

### Styling (TailwindCSS + DaisyUI)

- Class order: Layout → Positioning → Box model → Typography → Visual → Misc
- Prefer DaisyUI components over custom Tailwind combinations
- Use DaisyUI theme variables instead of hardcoded colors

Example: `flex items-center justify-between w-full p-4 text-lg font-semibold bg-blue-500 rounded-lg transition-colors`

### Component Structure Order

1. Imports (external first, then internal)
2. Type definitions
3. Component logic
4. Return statement
5. Default export

## Project Structure

### Frontend (`/frontend/`)

- `app/components/` - Reusable UI components
- `app/hooks/` - Custom React hooks for data fetching (useOpportunities, useAgents, etc.)
- `app/routes/` - File-based routing structure
- `app/utils/` - Utility functions
- `types/` - TypeScript type definitions
- `app/api-gen/` - OpenAPI TypeScript types
- `app/i18n/` - Internationalization configuration and locale files

## Testing

- Use Vitest for frontend testing
- Test user interactions, not implementation details
- Mock external dependencies
- Test error states and edge cases
- Write unit tests for all utility functions

## Backend API interaction

- Custom hooks abstract API operations (`useOpportunities`, `useAgents`, etc.)
- Use the generated OpenAPI fetch functions for API calls ex: `getApiOpportunityAgentByAgentId({path: { agentId: filters.agentId }})`, never perform direct fetch calls towards the backend
  - Generate new openAPI types with `npm run openapi-ts` after backend changes
- Never hardcode API URLs, the openapi-ts functions will handle it
- Never use `fetch` directly, always use the generated API functions from `app/api-gen/`

## Internationalization (i18n)

The application supports full bilingual functionality (English/Norwegian) using react-i18next:

### Implementation Patterns

- **Translation Hook**: Use `useTranslation()` hook in components
- **Translation Function**: Call `t("namespace.key")` for all user-facing text
- **TypeScript Safety**: Norwegian locale extends English locale type for consistency
- **Language Switching**: LanguageSelector component with persistent localStorage

### File Structure

- `app/i18n/config.ts` - i18next configuration with language detection
- `app/i18n/locales/en.ts` - English translations (base locale with type definitions)
- `app/i18n/locales/no.ts` - Norwegian translations (extends English type)

### Usage Examples

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("common.title")}</h1>
      <p>{t("home.description")}</p>
      <button>{t("common.save")}</button>
    </div>
  );
}
```

### Guidelines

- **Never hardcode user-facing text** - Always use translation keys
- **Consistent naming** - Follow established namespace patterns
- **Both locales** - Always add keys to both en.ts and no.ts files
- **Type safety** - Norwegian locale must implement all English keys for TypeScript compliance
- Never use alerts, always use toast notifications or in form text feedback for user feedback
