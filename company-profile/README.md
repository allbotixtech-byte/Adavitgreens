# Advait Green Recycling — A4 Company Profile

15-page A4 **landscape** company profile. Design tokens mirror the live site theme in
`frontend/theme.config.js` — deep-teal primary, green accent, neutral
greys, amber signal, and the Archivo / Instrument Sans / JetBrains Mono
type system.

## Two deliverables

| Document | Format | Source | Build |
|---|---|---|---|
| **Company profile** | A4 landscape, 15 pp. | `profile.html` | `./build.sh` |
| **Pitch deck** (MBB format) | 16:9, 15 slides | `pitch-deck.html` | `./build-deck.sh` |

The profile is the design-led brochure. The deck is the consulting-format version —
action titles that state the conclusion, pyramid structure (situation → complication →
resolution), numbered exhibits, a "so what" takeaway band on every slide, and a source
line. Use the deck for client and investor meetings; use the profile as a leave-behind.

## Files

| Path | What it is |
|---|---|
| `profile.html` | The document. Edit this. |
| `build.sh` | Renders `profile.html` → A4 PDF via headless Chrome. |
| `Advait_Green_Company_Profile.pdf` | Current output, 15 pages, A4 landscape. |
| `assets/fonts/` | Archivo, Instrument Sans, JetBrains Mono (variable TTFs). |
| `assets/img/` | Logo lockup, emblem, and photography from `frontend/public/images`. |

## Rebuild

```bash
./build.sh                      # -> Advait_Green_Company_Profile.pdf
./build.sh Some_Other_Name.pdf  # custom output name
```

Requires Google Chrome at `/Applications/Google Chrome.app`. Open
`profile.html` in a browser to preview while editing.

## Placeholders

Every unknown value is wrapped in `<span class="ph">…</span>` and renders in
amber with a dashed underline, so nothing ships by accident. Find them all:

```bash
grep -o 'class="ph">[^<]*' profile.html | sort | uniq -c | sort -rn
```

Replace the span with plain text once you have the real value.

## Page order

```
01  Cover                          09  Plastic waste management
02  Contents                       10  Extended producer responsibility
03  Section divider — we are       11  Secure data destruction
04  Who we are + credentials       12  Battery, solar & reverse logistics
05  Vision, mission, values        13  Gate to certificate + why us
06  Our journey                    14  Infrastructure, credentials & impact
07  Services overview              15  Community & contact / back cover
08  E-waste recycling
```
