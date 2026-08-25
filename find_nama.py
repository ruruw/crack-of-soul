import re

with open('naskah/bersih.md', 'r') as f:
    lines = [l.strip() for l in f.readlines()]

for i, line in enumerate(lines[:50]):
    print(f"{i+1}: {line}")
