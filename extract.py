import re

with open('TheCrackOfSoul-v2.html', 'r') as f:
    text = f.read()

m = re.search(r'(const NASKAH = \[.*?\];)', text, re.DOTALL)
if m:
    with open('naskah/game-data.js', 'w') as f:
        f.write(m.group(1))
    print("Extracted game-data.js")
else:
    print("Failed to find NASKAH")
