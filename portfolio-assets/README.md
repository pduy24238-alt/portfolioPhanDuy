# Replaceable visual assets

Place manually supplied PNG artwork in this static site's `dist/portfolio-assets/` folder. These files are served at `/portfolio-assets/` (the equivalent of `public/portfolio-assets/` in a framework project).

- alien-grey-matter.png
- alien-brainstorm.png
- alien-upgrade.png
- alien-echo-echo.png
- alien-xlr8.png
- alien-diamondhead.png
- alien-big-chill.png
- alien-humungousaur.png

Use transparent PNGs. Missing artwork renders an intentionally abstract dark silhouette with a green contour, scanlines, DNA texture and small particle fragments. No original alien creatures are generated or integrated. Grey Matter, Brainstorm, Upgrade, Echo Echo and XLR8 label professional transformation modes; alien references remain visual metaphors.

Personal and mission photography filenames are listed in `../portfolioAssets.js`. Missing photos retain labeled visual-record slots. After adding files, run `node prepare-assets.cjs` from the portfolio folder and reload the page.

All eight alien PNGs supplied on 2026-10-02 are installed. The original double .png.png suffix is normalized to .png in this folder. CSS applies hologram treatments without editing the source image pixels.
