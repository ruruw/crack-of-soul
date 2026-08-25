import re

with open('naskah/bersih.md', 'r') as f:
    lines = f.readlines()

def print_match(pattern):
    print(f"\nSearching for: {pattern}")
    for i, line in enumerate(lines):
        if re.search(pattern, line, re.I):
            print(f"Line {i+1}: {line.strip()}")

print_match(r'Kantin')
print_match(r'Perpustakaan')
print_match(r'Level\s*2')
print_match(r'Level\s*3')
print_match(r'Boss\s*1')
print_match(r'Boss\s*2')
print_match(r'Final\s*Boss')
print_match(r'Serangan\s*1\b')

