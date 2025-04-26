import json
import os
import shutil
from jinja2 import Environment, FileSystemLoader, select_autoescape

# figure out where our repo root is (where this script lives)
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
CONTENT    = os.path.join(BASE_DIR, 'content')
TEMPLATES  = os.path.join(BASE_DIR, 'templates')
OUTPUT_DIR = os.path.join(BASE_DIR, 'docs')

# 1) load the site_data.json
with open(os.path.join(CONTENT, 'site_data.json'), encoding='utf-8') as f:
    data = json.load(f)

# 2) prepare Jinja
env = Environment(
    loader=FileSystemLoader(TEMPLATES),
    autoescape=select_autoescape(['html','xml'])
)

# 3) make sure docs/ exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 4) render each page
for key, page in data['pages'].items():
    html = env.get_template('base.html').render(
        site     = data['site'],
        page     = page,
        page_key = key
    )
    out_path = os.path.join(OUTPUT_DIR, page['output'])
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {page['output']}")

# 5) copy over all your static assets by resolving them from BASE_DIR
STATIC_FILES = [
    'styles.css',
    'scripts.js',
    'avatar.png',
    'CNAME',
    # add any other files (fonts/, favicons/, etc.) here
]

for fn in STATIC_FILES:
    src = os.path.join(BASE_DIR, fn)
    dst = os.path.join(OUTPUT_DIR, fn)
    shutil.copy(src, dst)
    print(f"Copied {fn} → docs/{fn}")

for fname in ('styles.css','scripts.js','avatar.png'):
    shutil.copyfile(fname, os.path.join('docs', fname))
    print(f"Copied {fname} → docs/{fname}")