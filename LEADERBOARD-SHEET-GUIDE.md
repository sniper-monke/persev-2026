# Linking the Leaderboard to a Google Sheet

The leaderboard on `/leaderboard` reads its scores from a Google Sheet.
Your boss edits the sheet; the website picks up the changes automatically
(every ~30 seconds, no page reload needed).

There are two one-time tasks:

1. **Your boss** sets up the sheet with the two columns below.
2. **You** publish the sheet to the web and paste one link into the code.

---

## 1. Set up the sheet (boss)

Create a Google Sheet (or upload the existing Excel file into Google
Sheets: File → Import → Upload). Use **two columns**:

| Column A | Column B |
|----------|----------|
| School code / name | Total points |

Row 1 can be a header, e.g. `School` and `Points`, or just start the data
on row 1 with no header. **Anything else in the sheet is ignored.**

Example:

| A | B |
|---|---|
| Bombay Scottish | 240 |
| DPS | 210 |
| St. Xavier's | 195 |

> When a score changes, just edit the number in column B. Save is automatic
> (Google saves continuously). The site updates on its own within ~1 minute.

---

## 2. Which column is which? (how the site decides)

The site does **not** require a fixed layout — it auto-detects the columns
by reading the **header row**:

- **School code/name column** is detected by these header words:
  `school`, `team`, `name`, `institution`, `code`
- **Points/scores column** is detected by these header words:
  `points`, `point`, `score`, `scores`, `total`, `marks`, `pts`

Any of these layouts work, in any column order:

| Layout | Header row | What shows on the leaderboard |
|---|---|---|
| Standard | `School` `,` `Points` | A = school, B = points |
| Swapped | `Points` `,` `School` | A = points, B = school |
| Extra columns | `School Code`, `School Name`, `Total Points` | First column matching "school" wins → **School Code** is shown |

Rules:

- If the **header row** doesn't match any keyword (or there is no header),
  the site falls back to **1st column = school code, 2nd column = points**.
- The **school code/name is whatever the "school" column shows** (e.g. `DPS`
  or `Bombay Scottish`). Pick one; it's what visitors will see.
- Scores must be **plain numbers** (no `,`, no `$`, no `PTS` suffix).
- Blank rows and blank cells are ignored automatically.
- If the header words are in a non-English language (e.g. `Escuela`,
  `Puntos`), it won't auto-detect — just rename the header to `School` and
  `Points`, or make sure the first data column is the school and the second
  is points.

### Sheet is column-based instead? (one school per column)

Some sheets store schools across **columns** rather than rows — e.g.
school codes on row 1 (`C1:AO1`) and the final scores on row 40
(`C40:AO40`). That works too: in `leaderboard.html` keep
`LEADERBOARD_TRANSPOSED = true` (set `false` for the normal one-per-row
layout above).

- The loader finds the **names row** (the first row with several
  non-numeric entries) and the **scores row** (the last row that is mostly
  numbers), then pairs each column together.
- Rows between them are ignored, so new events can be added above the
  scores row freely without breaking anything.
- Any edit to a school code or its score cell is picked up automatically
  on the next refresh (~30s).

---

## 3. Publish the sheet to the web (you)

This creates a public link the website can read. **No Google account or
login is needed by visitors.**

1. Open the sheet in Google Sheets (desktop browser).
2. Menu: **File → Share → Publish to web**.
3. In the dialog:
   - **Link**: choose the tab that has the scores (usually the first one).
   - **Format**: choose **CSV**.
4. Click **Publish**. Confirm if asked.
5. Copy the link. It looks like:
   `https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv`

> "Publish to web" makes the sheet readable by anyone with the link.
> It is NOT the same as Share → General access. If your boss says the sheet
> must stay completely private, this approach won't work — see
> "Private sheet?" below.

---

## 4. Paste the link into the code (you)

1. Open `persev-2026-website/public/leaderboard.html`.
2. Find this line (near the `GOOGLE SHEETS LIVE DATA` section):

   ```js
   const LEADERBOARD_SHEET_CSV = "";
   ```

3. Paste the published CSV link between the quotes:

   ```js
   const LEADERBOARD_SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv";
   ```

   > **Multiple tabs?** The export serves the **first tab** by default. To
   > read a different tab, append the tab's `gid` to a direct export URL:
   > `https://docs.google.com/spreadsheets/d/<id>/export?format=csv&gid=<gid>`.
   > The current config uses `gid=85932739` for the **SCORES** tab.

4. (Optional) Change how often it refreshes, default 30 seconds:

   ```js
   const LEADERBOARD_REFRESH_MS = 30000;
   ```

5. Save the file.

---

## 5. Verify it works

```bash
npm start        # from the repo root
```

Open `http://localhost:3000/leaderboard`:

- The table + top-3 podium show the schools and points from the sheet.
- Edit a score in the sheet → within ~30–60 seconds the page updates on its
  own (no reload). Google takes a few seconds to propagate "published" data.
- If the sheet link is empty or unreachable, the page falls back to the
  hardcoded seed data — it never shows a blank/broken leaderboard.

---

## Troubleshooting

- **Page shows old/seed data**: the link is probably empty or wrong. Check
  the `LEADERBOARD_SHEET_CSV` value, and that the sheet is **published**
  (File → Share → Publish to web) — "Anyone with link can view" alone is not
  enough.
- **Some schools missing**: blank cells or non-numeric scores in column B.
  Ensure every school has a number.
- **Header row shown as a school**: this happens when the header words don't
  match the keyword list (see the table above). Rename the header to
  `School` / `Points`.
- **Updates take a while**: Google's publish cache can lag up to ~1 minute.
  The site polls every 30s; combined delay is at most ~1.5 min.
- **Private sheet?**: "Publish to web" exposes scores to anyone with the
  link (still anonymous — no sign-in needed). If that is unacceptable, the
  site would need a server-side Google Sheets API connection (service
  account) instead. Ask the team before building that.
