import re

with open('naskah/bersih.md', 'r') as f:
    text = f.read()

# The script did:
# idx = line.rfind(m.group(2))
# new_lines.append(line[:idx].strip() + '\n\n')
# new_lines.append(line[idx:].strip() + '\n')
# So it changed `text"* **Speaker:` to `text"*\n\n**Speaker:\n`
# We can find `\*\n\n\*\*` or `\"\n\n\*\*` and replace with `* **` or `" **`

text = re.sub(r'(\*|\"|\w)\n\n(\*\*)', r'\1 \2', text)

with open('naskah/bersih.md', 'w') as f:
    f.write(text)
