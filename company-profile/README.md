# Advait Green Recycling — A4 Company Profile

14-page A4 company profile. Design tokens mirror the live site theme in
`frontend/src/app/globals.css` — deep-teal primary, green accent, neutral
greys, amber signal, and the Archivo / Instrument Sans / JetBrains Mono
type system.

## Files

| Path | What it is |
|---|---|
| `profile.html` | The document. Edit this. |
| `build.sh` | Renders `profile.html` → A4 PDF via headless Chrome. |
| `Advait_Green_Company_Profile.pdf` | Current output, 14 pages. |
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
01  Cover                          08  EPR compliance
02  Who we are + credentials       09  Secure data destruction
03  Vision, mission, values        10  Battery, solar & reverse logistics
04  Our journey                    11  Our process + why us + testimonials
05  Services overview              12  Infrastructure & capability
06  E-waste recycling              13  Certifications, impact, sectors
07  Plastic waste management       14  CSR & contact / back cover
```
