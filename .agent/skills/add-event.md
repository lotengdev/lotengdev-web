# Skill: Add Event (`add-event`)

Use this skill when publishing a new upcoming event or archiving a past event on the website.

## Objective
Add event details, event poster/banner image, date, description, and link to the Event page.

## Event Data Structure
When storing or listing events, maintain the following standard fields:
```json
{
  "id": "event-slug-or-id",
  "title": "Lotengdev Online Meetup #X: Topic Title",
  "date": "2026-08-15",
  "time": "19:30 WITA",
  "location": "Google Meet / YouTube Live / Offline Spot Name",
  "image": "/images/events/event-banner.png",
  "recordingUrl": "https://youtube.com/watch?v=...",
  "registrationUrl": "https://s.id/lotengdev-meetup-x",
  "isUpcoming": false
}
```

## Step-by-Step Instructions

1. **Prepare Assets**:
   - Save event banner/poster inside `public/images/events/` (recommended dimensions: 16:9 ratio or square poster).

2. **Update Event Data / Page Component**:
   - Locate `src/pages/event/index.jsx` or event data source (`src/data/events.json`).
   - Add the new event item with proper title, banner image path, play icon overlay (if video recording exists), and link.

3. **Check Framer Motion Animation**:
   - Ensure the event card is wrapped with `Motion.div` for initial fade-in/slide-in transition.

4. **Verify Dark Mode & Responsive Layout**:
   - Test mobile (1-column), tablet (2/3-column), and desktop (4-column) display.
   - Verify card backgrounds and text contrast in both Light and Dark modes.

5. **Validation**:
   - Execute `pnpm lint` and `pnpm build`.
