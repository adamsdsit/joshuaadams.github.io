import os, json
from jinja2 import Environment, FileSystemLoader, select_autoescape

CONTENT_DIR  = 'content'
TEMPLATE_DIR = 'templates'
OUTPUT_DIR   = 'docs'       # we'll generate to /docs for GitHub Pages

# Load data
with open(f'{CONTENT_DIR}/site_data.json') as f:
    data = json.load(f)

# Jinja2 setup
env = Environment(loader=FileSystemLoader(TEMPLATE_DIR),
                  autoescape=select_autoescape(['html']))

def generate(key, spec):
    tpl = env.get_template('base.html')
    context = dict(site=data['site'], page=spec)
    html = tpl.render(**context)
    out_path = os.path.join(OUTPUT_DIR, spec['output'])
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    for key,spec in data['pages'].items():
        generate(key, spec)
