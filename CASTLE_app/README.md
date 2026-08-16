# CASTLE — deploy & update guide

**CASTLE** = Centralized Archive & Systems Tracking for Local Engineering.
A static PWA (GitHub Pages) that reads one JSON per vehicle. No backend, no build step.

## First-time setup (do once)

1. **Extract both zips into your repo root.** After extracting, the repo should look like:
   ```
   index.html   manifest.json   sw.js   icon-192.png   icon-512.png
   data/
     index.json  reports.json  timeline.json  architect.json  photos.json
     vehicles/  ex1.json ex2.json ex3.json ex4.json gx04.json lx23.json tx04.json vx13.json
   ```
   `CASTLE_app.zip` → the 5 root files.  `CASTLE_data.zip` → the whole `data/` folder.

2. **Turn on GitHub Pages:** repo → Settings → Pages → Source = deploy from `main` (root).

3. Open the Pages URL on your phone → browser menu → **Add to Home Screen**. It installs as an app and works offline.

## Updating a vehicle (paste-and-commit)

1. Claude gives you an updated `data/vehicles/<id>.json`.
2. On GitHub (website works from your phone): open that file → edit (pencil) → paste → **Commit**.
3. Reopen CASTLE (it fetches data fresh on every load). Done.

To add a new vehicle: create `data/vehicles/<newid>.json` **and** add a line to `data/index.json` under `vehicles`.

## What's in this pass (functionality + basic GUI only)

- Fleet registry (by class + taxonomy)
- Full vehicle entries: specs, components, capabilities, modules, **calculations (the math, shown)**, blueprint, comparisons (fleet + external), deep sections, decisions, open items, changelog
- Engineering Reports (read-only), Timeline, Chief Architect log (text + local voice recording), Photos (local), Import/Backup
- **IFO = placeholder** (buttons + reserved hooks only). The interactive exploded views, animations, and mini-missions are the next pass — and are yours to build (art/voice/hotspots).

The pretty UI, the 2.5D vehicles, and the animations come later. This pass is the working skeleton.
