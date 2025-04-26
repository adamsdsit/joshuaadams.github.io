import json
import os
from jinja2 import Environment, FileSystemLoader, select_autoescape

# Load site configuration
with open('content/site_data.json', encoding='utf-8') as f:
    data = json.load(f)

# Prepare Jinja2 environment
env = Environment(
    loader=FileSystemLoader('templates'),
    autoescape=select_autoescape(['html', 'xml'])
)

# Ensure output directory exists
os.makedirs('docs', exist_ok=True)

# Render each page
for key, page in data['pages'].items():
    output_filename = page['output']
    template_name   = page['template']  # not used directly, since base.html uses page.template

    # Build the rendering context
    context = {
        'site':   data['site'],  # global site settings
        'page':   page,          # per-page metadata
        'page_key': key
    }

    # Render the base template (which includes nav, the correct section partial, and footer)
    rendered_html = env.get_template('base.html').render(**context)

    # Write to the docs/ folder
    out_path = os.path.join('docs', output_filename)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(rendered_html)

    print(f"Generated {output_filename}")