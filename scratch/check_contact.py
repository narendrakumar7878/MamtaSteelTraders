
import os

file_path = r"d:\MAMTA STEEL\MAMTA STEEL\lastupdated filecode mamtasteel\SteelTradeConnect-1\client\src\pages\Contact.tsx"

with open(file_path, "rb") as f:
    content = f.read()

# Check for non-ASCII characters outside of common ones
print(f"File Size: {len(content)} bytes")

try:
    decoded = content.decode('utf-8')
    print("Successfully decoded as UTF-8")
except Exception as e:
    print(f"Failed to decode as UTF-8: {e}")
    exit(1)

# Basic Tag Counter
tags = ["<main", "</main", "<section", "</section", "<div", "</div", "<motion.div", "</motion.div", "<Helmet", "</Helmet", "<SEOHead", "<Button", "</Button", "<form", "</form"]
counts = {tag: decoded.count(tag) for tag in tags}

print("\n--- Tag Counts ---")
for tag, count in counts.items():
    print(f"{tag}: {count}")

# Check for specific suspicious patterns
# Non-breaking space: \xc2\xa0
if b'\xc2\xa0' in content:
    print("\nWARNING: Found non-breaking space (\\xc2\\xa0)")

# Check for unclosed ternary or parens
open_parens = decoded.count('(')
close_parens = decoded.count(')')
print(f"\nParentheses: ( {open_parens} / ) {close_parens}")

open_curlies = decoded.count('{')
close_curlies = decoded.count('}')
print(f"Curlies: {{ {open_curlies} / }} {close_curlies}")
