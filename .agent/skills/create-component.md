# Skill: Create Component (`create-component`)

Use this skill when scaffolding or adding a new reusable React component to `src/components/`.

## Component Template Structure

Place new components in `src/components/ComponentName/index.jsx` or `src/components/ComponentName.jsx`.

```jsx
import { Motion } from '@/pages/framer-motion';
// import { LucideIcon } from 'lucide-react';

export function ExampleComponent({ isDarkMode, title, children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-2xl transition-colors ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </Motion.div>
  );
}

export default ExampleComponent;
```

## Guidelines & Requirements

1. **Styling**:
   - Always use Tailwind CSS utility classes.
   - Support dark mode using `isDarkMode` prop or Tailwind `dark:` classes (when body theme class is toggled).

2. **Icons**:
   - Standardize on `react-icons/fa6` for all UI and brand icons across the project.

3. **Animations**:
   - Wrap dynamic UI containers in Framer Motion components (`Motion.div`, `Motion.section`).

4. **Exports**:
   - Provide both named export `export function ComponentName` and default export `export default ComponentName` where applicable for seamless imports.

5. **Linting Check**:
   - Run `pnpm lint` after creating the component file.
