# Life Decision Simulator

A website where a user enters two choices (for example "Buy a bike" and
"Use public transport") and gets a simple side-by-side comparison of
monthly cost, yearly cost, time, maintenance and convenience.

## How to run
No installation needed. Double-click `index.html` to open it in any
modern browser (Chrome, Edge, Firefox). An internet connection is only
used to load the Google Fonts; without it the page falls back to
system fonts.

## Files
| File | Purpose |
|---|---|
| `index.html` | Page structure (header, input panels, settings, results) |
| `style.css` | Layout, colours, light and dark themes, mobile view |
| `script.js` | Input handling, calculations, comparison logic, chart drawing |

## Features
- Two editable choices with upfront cost, monthly running cost, yearly
  maintenance, daily travel time and a 1 to 5 convenience rating
- Live results: comparison table, verdict, overall score bar
- Cost chart over time (SVG) with the break-even point marked
- Priority setting: Balanced, Saving money, Saving time, Convenience
- Currency selector, Swap choices, Reset, dark mode, mobile layout

## Formulas (see `calc()` in script.js)
- Monthly cost = running cost + maintenance / 12
- Yearly cost = running cost x 12 + maintenance
- Total over N years = upfront cost + yearly cost x N
- Time per year (hours) = minutes per day x days per month x 12 / 60
- Break-even year = upfront difference / yearly cost difference

## Overall score
Each factor becomes a share between the two choices (lower is better for
cost and time, higher is better for convenience). The shares are weighted
by the selected priority (see `WEIGHTS` in script.js). If the two scores
differ by less than 4 points, the result is "Too close to call".

## Tech stack
HTML, CSS, JavaScript (no frameworks, no backend), SVG for the chart.
