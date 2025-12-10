export default function sitemap(){
  const base = 'https://joshuaadams.dev';
  const lastmod = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: lastmod, priority: 1.0 },
    { url: `${base}/projects/`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/teaching/`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/cloud-security-compliance/`, lastModified: lastmod, priority: 0.7 },
  ];
}
