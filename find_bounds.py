import re

with open('naskah/bersih.md', 'r') as f:
    lines = f.readlines()

def print_match(pattern, name):
    for i, line in enumerate(lines):
        if re.search(pattern, line, re.I):
            print(f"{name}: {i+1}")
            break

print("--- BOUNDARY MARKERS ---")
for i, line in enumerate(lines):
    if re.match(r'^\s*Scene 2\b', line, re.I):
        print(f"Scene 2 (L1S2): {i+1}")
    elif re.match(r'^\s*Scene 3\b', line, re.I):
        print(f"Scene 3 (L1S3): {i+1}")
    elif re.match(r'^\s*Serangan 1\b', line, re.I):
        print(f"Serangan 1 (BOSS1): {i+1}")
    elif re.match(r'^\s*LEVEL 2\b', line, re.I):
        print(f"LEVEL 2 (L2S1): {i+1}")
    elif re.match(r'^\s*LEVEL 3\b', line, re.I):
        print(f"LEVEL 3 (L3S1): {i+1}")
    elif re.match(r'^\s*Alur cerita\b', line, re.I):
        print(f"Alur cerita: {i+1}")
    elif re.match(r'^\s*Alur Final Boss\b', line, re.I):
        print(f"Alur Final Boss (BOSSF): {i+1}")

