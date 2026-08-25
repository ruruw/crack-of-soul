import re

with open('naskah/bersih.md', 'r') as f:
    text = f.read()

# Add \n\n before ** if it looks like a speaker tag or choice
text = re.sub(r'([^\n])\s+(\*\*(?:[A-Z0-9].*?|Narasi.*?)\*\*:?)', r'\1\n\n\2', text)
text = re.sub(r'([^\n])\s+(\*\*[1-9]\..*?\*\*)', r'\1\n\n\2', text)

with open('naskah/bersih.md', 'w') as f:
    f.write(text)
