import re

with open('naskah/bersih.md', 'r') as f:
    lines = [l.strip() for l in f.readlines()]

def find_line(pattern, start_idx=0):
    for i in range(start_idx, len(lines)):
        if re.search(pattern, lines[i], re.I):
            return i + 1
    return -1

# Let's find the boundaries using very specific regexes!
b = {}
b["L1S1"] = find_line(r'Nadira adalah seorang siswi SMP yang sering merasa tidak percaya diri')
b["L1S2"] = find_line(r'Setelah jam pelajaran pertama selesai.*ke kantin')
b["L1S3"] = find_line(r'Setelah jam istirahat berakhir.*ke perpustakaan')
b["BOSS1"] = find_line(r'Nadira pulang dengan perasaan hancur.*Negative Thoughts')
if b["BOSS1"] == -1: b["BOSS1"] = find_line(r'Negative Thoughts')

b["L2S1"] = find_line(r'Alya diajak bermain oleh sekelompok teman kelasnya')
b["L2S2"] = find_line(r'Alya baru saja menerima bola dari temannya')
b["L2S3"] = find_line(r'Setelah kejadian.*Alya memutuskan untuk duduk istirahat')
b["BOSS2"] = find_line(r'Physical Trauma')

b["L3S1"] = find_line(r'Malam hari setelah kejadian.*Reyan sedang duduk di kamarnya')
b["L3S2"] = find_line(r'Keesokan paginya.*Reyan membuka media sosial')
b["L3S3"] = find_line(r'Beberapa hari berlalu.*Reyan berharap semuanya akan berhenti')
b["BOSSF"] = find_line(r'The Crack of Soul')

print(b)
