import json
import re

with open('naskah/game-data.js', 'r') as f:
    text = f.read()

# text is like `const NASKAH = [...];`
m = re.match(r'const NASKAH = (\[.*\]);', text, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    
    def fix_lines(lines):
        for i in range(len(lines)):
            # Fix Nadira/Alya lines that end with **Teman Baik:
            if lines[i].get('text') and lines[i]['text'].endswith('**Teman Baik:'):
                lines[i]['text'] = lines[i]['text'].replace('* **Teman Baik:', '').replace('**Teman Baik:', '').strip()
                if i + 1 < len(lines) and lines[i+1].get('who') is None:
                    lines[i+1]['who'] = 'Teman Baik'
            
            # Fix Narasi Penutup merged
            if lines[i].get('text') and '**Narasi Penutup' in lines[i]['text']:
                lines[i]['text'] = re.sub(r'\*\*\s*Narasi Penutup:?.*', '', lines[i]['text']).strip()
                if i + 1 < len(lines):
                    lines[i+1]['who'] = None
                    
            # Fix **2. Membalas ejekan mereka**
            if lines[i].get('text') and '**2. Membalas ejekan mereka' in lines[i]['text']:
                lines[i]['text'] = lines[i]['text'].replace('**2. Membalas ejekan mereka**', '').strip()

            # Fix **Teman X:** merged at the end
            m_teman = re.search(r'\*\*\s*(Teman\s*\w*):?', lines[i].get('text', ''))
            if m_teman:
                speaker = m_teman.group(1)
                lines[i]['text'] = lines[i]['text'][:m_teman.start()].strip()
                if i + 1 < len(lines) and lines[i+1].get('who') is None:
                    lines[i+1]['who'] = speaker

    for scene in data:
        if 'varian' in scene:
            for v_name, v_data in scene['varian'].items():
                if 'intro' in v_data:
                    fix_lines(v_data['intro'])
                if 'opsi' in v_data:
                    for opsi in v_data['opsi']:
                        if 'lines' in opsi:
                            fix_lines(opsi['lines'])
                            
    out_js = 'const NASKAH = ' + json.dumps(data, ensure_ascii=False) + ';'
    with open('naskah/game-data.js', 'w') as f:
        f.write(out_js)
    print("Fixed game-data.js")
