import re

with open('dist/index.html', 'r') as f:
    html = f.read()

pwa_code = """
<link rel="manifest" href="/manifest.json">
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
</script>
"""

# Insert before </head>
html = html.replace('</head>', pwa_code + '</head>')

with open('dist/index.html', 'w') as f:
    f.write(html)
