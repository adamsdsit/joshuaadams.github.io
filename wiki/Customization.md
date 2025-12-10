# Customization — Edit Content and Styling

This page explains where to change content and styles for the resume site.

Files of interest:

- `index.html` — main site content and sections. Update experience items, dates, education, certifications, and other text here. Sections have IDs (`#hero`, `#summary`, `#experience`, `#skills`, `#projects`, `#contact`) used by navigation and scripts.
- `resume.css` — modern styling for the resume page. Theme variables are defined at the top of the file and can be changed to adapt colors. Examples:

```css
/* in resume.css */
.theme-light{ --bg:#f8fafc; --surface:#ffffff; --text:#0b1220; --accent:#cc0000 }
```

- `resume.js` — JavaScript for theme toggle, smooth scrolling, and skill-bar animation. Skill percentages are stored in `data-pct` attributes on `.bar span` elements in `index.html`.
- `avatar.png` — headshot used in the hero. Replace this file with a new image (140×140 recommended) to update the photo.
- `resume.pdf` — if you want the Download button to provide a PDF, place a `resume.pdf` file in the repository root. If missing, the button falls back to the contact section.

Tips:

- Keep backups of `resume.pdf` before updating.
- When editing `index.html`, preserve the section `id` attributes so navigation and scripts keep working.
- For color adjustments, changing CSS variables in `resume.css` will provide a site-wide update.
