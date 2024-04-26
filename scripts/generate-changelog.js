const fs = require('fs');
const path = require('path');
const { marked, parse } = require('marked');

const changelog = fs.readFileSync(path.join(__dirname, '../CHANGELOG.md'), { encoding: 'utf-8' });

const changelogTemplateFile = path.join(__dirname, '../src/app/app/changelog.component.html');
const changelogTemplate = fs.readFileSync(changelogTemplateFile, { encoding: 'utf-8' });

const CustomTagRegex = /<(\s*\w*(-\w*)+\s*)>/g;
marked.use({
  renderer: {
    html: (html) => html.replace(CustomTagRegex, '&lt;$1&gt;'),
    link: (href, title, text) => `<a href="${href}" target="_blank"${title ? ` title="${title}"` : ''}>${text}</a>`,
  },
});
const content = parse(changelog);
fs.writeFileSync(
    changelogTemplateFile,
    changelogTemplate.replace('{{content}}', content),
);
