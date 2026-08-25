import re

with open('naskah/bersih.md', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if re.search(r'^\s*(Scene|Level|Alur|Serangan\s+1\b|Serangan\s+Terakhir\b)', line, re.I):
        print(f"{i+1}: {line.strip()}")
