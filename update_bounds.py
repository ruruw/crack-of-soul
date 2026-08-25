import re

with open('naskah/bersih.md', 'r') as f:
    lines = f.readlines()

def find_line(pattern, start=0):
    for i in range(start, len(lines)):
        if re.search(pattern, lines[i]):
            return i + 1
    return len(lines)

b = []
b.append(("L1S1", 1, find_line(r'^\s*Scene 2\b')))
b.append(("L1S2", b[-1][2], find_line(r'^\s*Scene 3\b')))
b.append(("L1S3", b[-1][2], find_line(r'^\s*Serangan 1\b')))
b.append(("BOSS1", b[-1][2], find_line(r'^\s*LEVEL 2\b')))
b.append(("L2S1", b[-1][2], find_line(r'^\s*Scene 2\b', b[-1][2])))
b.append(("L2S2", b[-1][2], find_line(r'^\s*Scene 3\b', b[-1][2])))
b.append(("L2S3", b[-1][2], find_line(r'^\s*Serangan 1\b', b[-1][2])))
b.append(("BOSS2", b[-1][2], find_line(r'^\s*LEVEL 3\b')))
b.append(("L3S1", b[-1][2], find_line(r'^\s*Scene 2\b', b[-1][2])))
b.append(("L3S2", b[-1][2], find_line(r'^\s*Alur cerita\b', b[-1][2])))
b.append(("L3S3", b[-1][2], find_line(r'^\s*Alur Final Boss\b')))
b.append(("BOSSF", b[-1][2], len(lines)))

for x in b:
    print(f"{x[0]}: {x[1]} - {x[2]}")
