# Skill: Add WFC Spot (`add-wfc-spot`)

Use this skill when adding a new Work From Cafe (WFC) or coworking spot recommendation to `src/data/tempat_wfc.json`.

## Objective
Record developer-friendly places around Central Lombok (Lombok Tengah) with facilities information (WiFi, power sockets, quietness, rate price).

## Data Schema (`src/data/tempat_wfc.json`)
```json
{
  "name": "Cafe Name",
  "lokasi": "https://maps.app.goo.gl/...",
  "wifi": true,
  "colokan": true,
  "toilet": true,
  "musholla": true,
  "background_music": false,
  "rate_harga": "$"
}
```

## Field Breakdown
- `name` (string): Official name of the venue.
- `lokasi` (string): Google Maps share URL.
- `wifi` (boolean): Fast/reliable WiFi available.
- `colokan` (boolean): Abundant electrical outlets for laptops.
- `toilet` (boolean): Clean restroom available.
- `musholla` (boolean): Prayer space on site or nearby.
- `background_music` (boolean): Loud background music (false = quiet/peaceful atmosphere).
- `rate_harga` (string): Price indicator (`$` affordable, `$$` moderate, `$$$` premium).

## Step-by-Step Instructions
1. Open `src/data/tempat_wfc.json`.
2. Append the new venue object to the JSON array.
3. Validate JSON formatting (ensure trailing commas are avoided).
4. Run `pnpm lint` and `pnpm build` to verify data load without syntax errors.
