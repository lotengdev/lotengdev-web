# Skill: Add Speaker (`add-speaker`)

Use this skill when adding a new speaker profile to the Lombok Tengah Developer Community website.

## Objective
Add a new speaker entry into `src/data/speakers.json` and ensure proper image assets and profile details are provided.

## Data Schema (`src/data/speakers.json`)
```json
{
  "name": "Full Name",
  "jobTitle": "Role / Position (e.g., Senior Frontend Engineer @ Company)",
  "photo": "/images/speakers/speaker-name.png",
  "linkedin": "https://linkedin.com/in/username",
  "github": "https://github.com/username",
  "website": "https://example.com"
}
```

## Step-by-Step Instructions

1. **Verify Speaker Details**:
   - `name`: Full name of the speaker.
   - `jobTitle`: Title/company or specialization.
   - `linkedin`, `github`, `website`: Optional social URLs (leave as `""` if omitted).

2. **Add Image Asset**:
   - Place the speaker image in `public/images/` (or `public/images/speakers/`).
   - Format: Square aspect ratio (min 300x300px), JPG/PNG/WebP.
   - Set `"photo"` path relative to root `public/` folder, e.g. `"/images/speaker-name.png"`.

3. **Update Data File**:
   - Open `src/data/speakers.json`.
   - Append the new speaker object into the `"speakers"` array.

4. **Verify Rendering**:
   - Open `src/pages/speaker/index.jsx`.
   - Check if speakers are dynamically loaded from `src/data/speakers.json` or update state if rendering hardcoded arrays.

5. **Validate Build & Quality**:
   - Run `pnpm lint` to ensure JSON syntax and JavaScript files remain clean.
   - Run `pnpm build` to confirm static asset imports resolve correctly.
