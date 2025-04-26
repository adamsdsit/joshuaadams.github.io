import json, jinja2, os
import os
from jinja2 import Environment, FileSystemLoader

# Load site configuration
with open('content/site_data.json', encoding='utf-8') as f:
    data = json.load(f)

# Prepare Jinja2 environment
env = Environment(loader=FileSystemLoader('templates'), autoescape=True)

# Ensure output directory exists
os.makedirs('docs', exist_ok=True)

# Render each page defined in the JSON
for page in data['pages']:
    output_filename = page['output']
    template_name = page['template']

    # Build the rendering context
    context = {
        'site': data['site'],    # global site settings
        'page': page             # per-page metadata
    }

    # Render base template (which includes nav, sections, footer)
    template = env.get_template('base.html')
    rendered_html = template.render(**context)

    # Write to the docs/ folder
    out_path = os.path.join('docs', output_filename)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(rendered_html)

print("Site generated successfully! Check the docs/ folder.")
