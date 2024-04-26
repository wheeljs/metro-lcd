const fs = require('fs');
const path = require('path');
const { marked, parse } = require('marked');

const changelog = fs.readFileSync(path.join(__dirname, '../CHANGELOG.md'), { encoding: 'utf-8' });

const changelogTemplateFile = path.join(__dirname, '../src/app/app/changelog.component.html');

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
    `<div mat-dialog-title>Changelog</div>
<mat-dialog-content>
  <article ngNonBindable>${content}</article>
</mat-dialog-content>
<mat-dialog-actions>
  <a
    href="//github.com/wheeljs/metro-lcd/compare/v1.0.0...main"
    target="_blank"
    referrerpolicy="no-referrer"
    style="margin-right: auto;"
  >Full Changelog</a>
  <button mat-stroked-button mat-dialog-close>OK</button>
</mat-dialog-actions>`,
);
