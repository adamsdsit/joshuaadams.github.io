export default function sitemap() {
  const base = 'https://joshuaadams.dev';
  const lastmod = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: lastmod, priority: 1.0 },
    { url: `${base}/projects/`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/teaching/`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/experience/`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/education/`, lastModified: lastmod, priority: 0.7 },
    { url: `${base}/certifications/`, lastModified: lastmod, priority: 0.6 },
    { url: `${base}/awards/`, lastModified: lastmod, priority: 0.6 },
    { url: `${base}/skills/`, lastModified: lastmod, priority: 0.5 },
    {
      url: `${base}/cloud-security-compliance/`,
      lastModified: lastmod,
      priority: 0.7,
    },
  ];
}
