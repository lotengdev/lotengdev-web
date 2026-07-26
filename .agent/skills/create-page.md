# Skill: Create Page (`create-page`)

Use this skill when adding a new view page or route to the Lotengdev website.

## Workflow Summary

1. **Create Page Folder & Component**:
   - Location: `src/pages/[pagename]/index.jsx`
   - Define export function receiving `{ isDarkMode }`.

2. **Template**:
```jsx
import { Motion } from '../framer-motion';

export function NewPage({ isDarkMode }) {
  return (
    <div className={`pt-14 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <section className="container mx-auto px-4 py-12 text-center">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#41B883]"
        >
          Page Title
        </Motion.h1>
      </section>
    </div>
  );
}
```

3. **Register Route in `src/App.jsx`**:
   - Import the page component:
     `import { NewPage } from './pages/newPage/index.jsx';`
   - Add `<Route path="/new-path" element={<NewPage isDarkMode={isDarkMode} />} />` inside `<Routes>`.

4. **Update Navigation Link in `src/components/Navbar/index.jsx`**:
   - Add entry to navigation items list so users can navigate to the page.

5. **Verification**:
   - Run `pnpm lint` and `pnpm build` to confirm routing and imports build cleanly.
