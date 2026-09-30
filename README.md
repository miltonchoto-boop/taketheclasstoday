# Take The Class Today — cinematic prototype

**Brand:** VIP Safety Group / Take The Class Today  
**Status:** On-box HTML/CSS/JS prototype + GitHub Pages preview — **do not flip DNS / Carrd** without Milton  
**Date:** Wed Sep 30, 2026 (ET) · VIP watermark pass ~6:55 AM ET

## Preview

```text
/workspace/cinematic-sites/ttct/index.html
```

Live GitHub Pages (Carrd domain untouched):

```text
https://miltonchoto-boop.github.io/taketheclasstoday/
```

Screenshots:

- `preview-desktop.webp` — ~1440×900 viewport capture  
- `preview-mobile.webp` — ~390×844 viewport capture  

## What’s in this build

| File | Role |
|------|------|
| `index.html` | Semantic scroll chapters |
| `styles.css` | Night-blue + coral · Fraunces + Plus Jakarta Sans · sticky chapters |
| `app.js` | Reveals, nav highlight, how-step scrub, progress bar, mobile sticky CTA |
| `assets/vip-mark.svg` | Soft V / chevron brand mark for watermark + header |
| `README.md` | This file |

### Scroll chapters

1. **Hero / Offer** — NY defensive driving promise (10% · 3 years · up to 4 points), Danny tel  
2. **Start** — Lead form visual placeholder + TicketSchool affiliate CTA (`?affiliate=423`)  
3. **How it works** — Enroll → Finish ~6 hrs → Send certificate (sticky + step highlight)  
4. **Who it’s for** — Discount / points / both (NY-only; no Improv)  
5. **Danny** — “The Dash Cam Installer” · `tel:` / `sms:` **(516) 668-3494**  
6. **Fine print** — PIRP / VIP / Choto Agency disclosure  

### Design notes (polish)

- Palette: night `#070F1C` / `#0B1F3A` → blue wash `#4F86F0` · coral `#E6496F`  
- Type: **Fraunces** (display) + **Plus Jakarta Sans** (UI)  
- Motion: restrained fade/slide; scroll progress; how-step highlight; `prefers-reduced-motion`  
- **VIP Safety Group watermark** — large faded Archivo Black text + soft V mark behind hero / start / Danny / fine (Carrd-era style; soft side-mask so mobile doesn’t hard-clip)  
- Header VIP badge uses same mark weight + faint V behind “VIP”  
- Forms look real but are not wired; TicketSchool + Danny CTAs are live links  
- No invented reviews, prices, or licenses  

## Out of scope

- DNS / Carrd live domain changes  
- Invented reviews, rates, or licenses  
