# Skill: Code Audit (`code-audit`)

Use this skill to inspect project health, code quality, build stability, dark mode theme consistency, and accessibility standards.

## Audit Checklist

1. **Static Analysis & Linting**:
   - Run `pnpm lint`.
   - Ensure zero errors or unused variables in all `.js` and `.jsx` files.

2. **Production Build Check**:
   - Run `pnpm build`.
   - Ensure Vite transforms all modules and produces optimized chunks in `dist/`.

3. **Dark Mode & Contrast Verification**:
   - Verify every page component passes `isDarkMode` down to subcomponents or handles body `dark` class appropriately.
   - Check text contrast against dark (`#121212` / `bg-gray-800` / `bg-gray-900`) and light (`bg-white` / `bg-[#F5F5F5]`) backgrounds.

4. **Responsive Layout Check**:
   - Verify responsive Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px).
   - Ensure grid column fallbacks handle single-column layouts on mobile viewports.

5. **Data Integrity**:
   - Check JSON files in `src/data/` (`speakers.json`, `tempat_wfc.json`) for valid syntax and complete fields.
