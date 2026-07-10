import os

base = r'C:\Users\Aarav K\Desktop\persev-rebuild\persev-2026-website\public'
tag = '<script src="/static/page-transitions.js?v=20260426a"></script>'

files = [
    'landing.html',
    'index.html',
    'leaderboard.html',
    'events.html',
    'organizing-committee.html',
    'links.html',
    'locations.html'
]

for fname in files:
    fpath = os.path.join(base, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'page-transitions.js' in content:
        print(fname + ' already has it')
        continue
    
    if '</body>' in content:
        content = content.replace('</body>', tag + '\n</body>', 1)
    elif '</html>' in content:
        content = content.replace('</html>', tag + '\n</html>', 1)
    else:
        content = content + '\n' + tag
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(fname + ' inserted')
