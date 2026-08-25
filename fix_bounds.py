import json, re

data_js = open('naskah/game-data.js').read()
m = re.search(r'const NASKAH = (\[.*\]);', data_js, re.DOTALL)
scenes = json.loads(m.group(1))

with open('naskah/bersih.md', 'r') as f:
    lines = [l.strip() for l in f.readlines()]

bounds = []
def find_line(text, start_idx):
    if not text: return start_idx
    t = text[:30].strip(' *"“”')
    for i in range(start_idx, len(lines)):
        if t in lines[i]:
            return i
    return start_idx

curr_idx = 0
for s in scenes:
    start_line = curr_idx
    if s['tipe'] == 'boss':
        if s['giliran']:
            first_text = s['giliran'][0].get('serangan', '')
            start_line = find_line(first_text, curr_idx)
        while start_line > 0 and not re.search(r'Boss|Serangan', lines[start_line-1], re.I):
            start_line -= 1
    else:
        v = list(s['varian'].values())[0]
        if v['intro']:
            first_text = v['intro'][0].get('text', '')
            start_line = find_line(first_text, curr_idx)
            while start_line > 0 and not re.search(r'Scene|Level|Alur', lines[start_line-1], re.I):
                start_line -= 1
    
    bounds.append({'id': s['id'], 'start': start_line + 1})
    curr_idx = start_line + 1

with open('naskah/parse.py', 'r') as f:
    parse_lines = f.readlines()

new_parse = []
z_idx = 0
in_zones = False
for p in parse_lines:
    if p.strip() == 'ZONES = [':
        in_zones = True
        new_parse.append(p)
    elif in_zones and p.strip() == ']':
        in_zones = False
        new_parse.append(p)
    elif in_zones:
        if z_idx < len(bounds):
            start = bounds[z_idx]['start']
            end = bounds[z_idx+1]['start'] - 1 if z_idx + 1 < len(bounds) else len(lines)
            m = re.match(r'^(\s*\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,)\s*\d+\s*,\s*\d+\s*(\),?.*)$', p)
            if m:
                new_parse.append(f"{m.group(1)}{start},{end}{m.group(2)}\n")
            else:
                new_parse.append(p)
            z_idx += 1
    else:
        new_parse.append(p)

with open('naskah/parse.py', 'w') as f:
    f.writelines(new_parse)

