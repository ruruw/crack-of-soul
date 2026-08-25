import re

with open('naskah/bersih.md', 'r') as f:
    lines = [l.strip() for l in f.readlines()]

def print_line(pattern):
    for i, line in enumerate(lines):
        if re.search(pattern, line, re.I):
            print(f"{i+1}: {line}")
            return
    print(f"NOT FOUND: {pattern}")

print_line(r'adalah seorang siswi SMP') # L1S1
print_line(r'diajak bermain oleh') # L2S1
print_line(r'baru saja menerima bola') # L2S2
print_line(r'memutuskan untuk duduk istirahat') # L2S3
print_line(r'Physical Trauma') # BOSS2
print_line(r'Malam hari setelah kejadian') # L3S1
print_line(r'Keesokan paginya.*membuka media sosial') # L3S2
