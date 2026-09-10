#!/usr/bin/env bash
# Renders pitch-deck.html -> 16:9 PDF via headless Chrome.
# Kept separate from build.sh so the A4 profile pipeline is untouched.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="${1:-Advait_Green_Pitch_Deck.pdf}"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --allow-file-access-from-files \
  --virtual-time-budget=20000 \
  --print-to-pdf="$OUT" "file://$PWD/pitch-deck.html" 2>/dev/null
echo "wrote $PWD/$OUT"
