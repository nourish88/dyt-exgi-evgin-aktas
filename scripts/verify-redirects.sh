#!/usr/bin/env bash
# Post-deploy redirect verification.
# Each variant must reach https://ezgievginaktas.com/ in a SINGLE 301/308 hop.
# Usage: ./scripts/verify-redirects.sh

set -u

CANONICAL="https://ezgievginaktas.com/"
SOURCES=(
  "http://ezgievginaktas.com"
  "http://www.ezgievginaktas.com"
  "https://www.ezgievginaktas.com"
)

fail=0

printf "%-40s %-10s %-10s %s\n" "SOURCE" "STATUS" "HOPS" "FINAL"
printf "%-40s %-10s %-10s %s\n" "------" "------" "----" "-----"

for url in "${SOURCES[@]}"; do
  # -L follows redirects so we can count hops via num_redirects.
  read -r status hops final < <(
    curl -sI -L -o /dev/null \
      -w "%{http_code} %{num_redirects} %{url_effective}\n" \
      "$url"
  )

  # First-hop status (without -L) — should be 301 (or 308).
  first_status=$(curl -sI -o /dev/null -w "%{http_code}" "$url")

  expected_final="$CANONICAL"
  ok="OK"
  if [[ "$final" != "$expected_final" ]]; then
    ok="FAIL(final)"
    fail=1
  elif [[ "$hops" != "1" ]]; then
    ok="FAIL(chain:$hops)"
    fail=1
  elif [[ "$first_status" != "301" && "$first_status" != "308" ]]; then
    ok="FAIL(first:$first_status)"
    fail=1
  fi

  printf "%-40s %-10s %-10s %s [%s]\n" "$url" "$first_status" "$hops" "$final" "$ok"
done

# Verify HSTS on canonical
hsts=$(curl -sI "$CANONICAL" | awk -F': ' 'tolower($1)=="strict-transport-security"{print $2}' | tr -d '\r')
if [[ -z "$hsts" ]]; then
  echo "HSTS: MISSING on $CANONICAL"
  fail=1
else
  echo "HSTS: $hsts"
fi

exit $fail
