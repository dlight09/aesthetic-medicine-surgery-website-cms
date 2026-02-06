#!/usr/bin/env bash
set -euo pipefail

# Blocks shipping a medical site with placeholder contact information.
# Update these patterns if placeholders change.

PLACEHOLDER_PATTERNS=(
  "\\+216 99 999 999"
  "21699999999"
  "99 Rue Exemple"
  "Lun-Ven 09:00-18:00"
)

found=0
for pat in "${PLACEHOLDER_PATTERNS[@]}"; do
  if command -v rg >/dev/null 2>&1; then
    if rg -n --hidden \
      --glob "!.git/**" \
      --glob "!scripts/**" \
      --glob "!docs/**" \
      --glob "!agentic/**" \
      --glob "!.github/**" \
      "$pat" . >/dev/null 2>&1; then
      echo "Found placeholder pattern: $pat"
      rg -n --hidden \
        --glob "!.git/**" \
        --glob "!scripts/**" \
        --glob "!docs/**" \
        --glob "!agentic/**" \
        --glob "!.github/**" \
        "$pat" . || true
      echo
      found=1
    fi
  else
    # Fallback: python scan (no external deps).
    set +e
    python3 - <<PY
import os, re, sys

pat = re.compile(r"$pat")
root = "."
any_hit = False

for dirpath, dirnames, filenames in os.walk(root):
    dirnames[:] = [d for d in dirnames if d not in (".git", "scripts", "docs", "agentic", ".github")]
    for fn in filenames:
        path = os.path.join(dirpath, fn)
        try:
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                for i, line in enumerate(f, start=1):
                    if pat.search(line):
                        any_hit = True
                        sys.stdout.write(f"{path}:{i}:{line}")
        except IsADirectoryError:
            continue
        except OSError:
            continue

sys.exit(1 if any_hit else 0)
PY
    rc=$?
    set -e
    if [[ "$rc" -ne 0 ]]; then
      echo "Found placeholder pattern: $pat"
      echo
      found=1
    fi
  fi
done

if [[ "$found" -eq 1 ]]; then
  echo "FAIL: Replace placeholders before release." >&2
  exit 1
fi

echo "OK: No placeholder contact/address patterns found."
