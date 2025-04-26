import json
import os
import shutil
from jinja2 import Environment, FileSystemLoader, select_autoescape

# load your config
with open('content/site_data.json', encoding='utf-8') as f:
    data = json.load(f)

# set up Jinja
env = Environment(
    loader=FileSystemLoader('templates'),
    autoescape=select_autoescape(['html','xml'])
)

# make sure docs/ exists
os.makedirs('docs', exist_ok=True)

# render all pages
for key, page in data['pages'].items():
    out_file = page['output']
    html = env.get_template('base.html').render(
      site=data['site'],
      page=page,
      page_key=key
    )
    with open(os.path.join('docs', out_file), 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {out_file}")

# ————————————————
# copy your static assets into docs/
# ————————————————
STATIC_FILES = [
  'styles.css',
  'scripts.js',
  'avatar.png',
  'CNAME',            # if you have a custom domain
  # add any other files (fonts, favicons, etc.) here
]

for fn in STATIC_FILES:
    src = fn
    dst = os.path.join('docs', fn)
    shutil.copy(src, dst)
    print(f"Copied {fn} → docs/{fn}")