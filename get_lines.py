import re

with open('naskah/bersih.md', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if re.search(r'^\s*Scene 2\b', line, re.I):
        print(f"Scene 2: {i+1}")
    if re.search(r'^\s*Scene 3\b', line, re.I):
        print(f"Scene 3: {i+1}")
    if re.search(r'^\s*Serangan 1\b', line, re.I):
        print(f"Serangan 1: {i+1}")
    if re.search(r'^\s*LEVEL 2\b', line, re.I):
        print(f"LEVEL 2: {i+1}")
    if re.search(r'^\s*LEVEL 3\b', line, re.I):
        print(f"LEVEL 3: {i+1}")
    if re.search(r'^\s*Alur cerita\b', line, re.I):
        print(f"Alur cerita: {i+1}")
    if re.search(r'^\s*Alur Final Boss\b', line, re.I):
        print(f"Alur Final Boss: {i+1}")
    if re.search(r'^\s*Narasi Akhir\b', line, re.I):
        print(f"Narasi Akhir: {i+1}")
