import re

with open('naskah/bersih.md', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Match patterns like: text"* **Speaker:** or text"* **2. Option**
    # We want to split before the **
    m = re.search(r'(\*|\"|\w)(?:\s+)(\*\*(?:[A-Z0-9].*?|Narasi.*?)\*\*:?.*)$', line.strip())
    if m and not line.strip().startswith('**'):
        # Split it!
        idx = line.rfind(m.group(2))
        new_lines.append(line[:idx].strip() + '\n\n')
        new_lines.append(line[idx:].strip() + '\n')
    else:
        new_lines.append(line)

with open('naskah/bersih.md', 'w') as f:
    f.writelines(new_lines)
