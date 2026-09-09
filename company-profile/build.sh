#!/usr/bin/env bash
# Renders profile.html -> A4 PDF via headless Chrome.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="${1:-Advait_Green_Company_Profile.pdf}"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --allow-file-access-from-files \
  --virtual-time-budget=20000 \
  --print-to-pdf="$OUT" "file://$PWD/profile.html" 2>/dev/null
echo "wrote $PWD/$OUT"
