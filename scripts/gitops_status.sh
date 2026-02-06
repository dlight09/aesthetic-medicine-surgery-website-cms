#!/usr/bin/env bash
set -euo pipefail

echo "Git status"
git status -sb

echo
echo "Remotes"
git remote -v || true

echo
echo "Current branch"
git branch --show-current

if command -v gh >/dev/null 2>&1; then
  echo
  echo "GitHub CLI auth status"
  gh auth status || true
else
  echo
  echo "NOTE: 'gh' not installed; skipping GitHub checks."
fi
