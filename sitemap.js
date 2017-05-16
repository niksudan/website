const fs = require('fs');
const xml = require('xml');
const projects = require('./src/data/projects');
console.log('Generating a new sitemap...');

// Generate the XML markup
const markup = {
  urlset: [
    { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } }
  ],
};

/**
 * Add a new URL to the markup
 * @param {String} path
 * @param {String}
 */
const addUrl = (path, date) => {
  markup.urlset.push({ url: [
    { loc: `https://niks.space/${path}` },
  ] });
};

// Add URLs
addUrl('');
addUrl('about');
projects.forEach((project) => {
  addUrl(project.slug);
});

// Write the XML file
const content = xml(markup, { declaration: true });
fs.writeFile('./public/sitemap.xml', content);
