'use strict';

const fs = require('fs');
const path = require('path');

const jsdocToMarkdown = require('jsdoc-to-markdown');
const prettier = require('prettier');

const TITLE = 'DOCS';

const sourceRelativePath = process.argv[2] || '../src';
const docsRelativePath = process.argv[3] || '../DOCS.md';

const SOURCE_DIR = path.normalize(path.join(__dirname, sourceRelativePath));
const DOCS_PATH = path.normalize(path.join(__dirname, docsRelativePath));

try {
  fs.accessSync(SOURCE_DIR);
} catch (err) {
  console.log(`--- creating ${sourceRelativePath} directory ---`);
  fs.mkdirSync(SOURCE_DIR);
}

let newToc = '';

let newDocs = '';

const appendToDocs = (absolutePath, depth = 1) => {
  const indent = new Array(depth).join('  ');
  const headerLevel = new Array(depth).join('#');
  const paths = fs.readdirSync(absolutePath);

  for (let nextPath of paths) {
    const subPath = path.normalize(path.join(absolutePath, nextPath));

    const isDirectory = fs.statSync(subPath).isDirectory();
    if (isDirectory) {
      newToc += `\n${indent}- [${nextPath}](#${nextPath})`;

      const readmePath = path.join(subPath, 'README.md');
      const hasReadme =
        fs.existsSync(readmePath) &&
        fs.statSync(readmePath).isFile() &&
        path.extname(readmePath) === '.md';
      if (hasReadme) {
        const readmeSrc = fs.readFileSync(readmePath);
        newDocs += `\n\n---\n\n${readmeSrc}`;
      } else {
        newDocs += `\n\n---\n\n${headerLevel} ${nextPath}`;
      }

      appendToDocs(subPath, depth + 1);

      newDocs += `\n\n[TOP](#${TITLE.split(' ').join('-')})\n\n---\n`;

      continue;
    }

    const isNotJavaScript = path.extname(subPath) !== '.js';
    if (isNotJavaScript) {
      continue;
    }

    const splitAbsPath = subPath.split(path.sep);
    const relativePath = splitAbsPath
      .slice(splitAbsPath.length - (depth + 1), splitAbsPath.length)
      .join(path.sep);

    const docs = jsdocToMarkdown.renderSync({ files: subPath });
    const kindlessDocs = docs.replace(/\*\*Kind[^\n]+/g, '');
    newDocs +=
      '\n\n---\n\n' +
      `${headerLevel}# [./${relativePath}](./${relativePath}?study)\n\n` +
      kindlessDocs;

    newToc += `\n${indent}- [${nextPath}](#${relativePath
      .split('.')
      .join('')
      .split('/')
      .join('')})`;
  }
};

appendToDocs(SOURCE_DIR);

const oldReadme = fs.existsSync(DOCS_PATH)
  ? fs.readFileSync(DOCS_PATH, 'utf-8')
  : '';

const tocRegex = /(<!--[ \t]*BEGIN TOC[ \t]*-->)([\s\S]*)(<!--[ \t]*END TOC[ \t]*-->)/;
const tocReplacer = `<!-- BEGIN TOC -->${newToc}\n\n<!-- END TOC -->`;
const tocedReadme = oldReadme.match(tocRegex)
  ? oldReadme.replace(tocRegex, tocReplacer)
  : `${tocReplacer}\n\n${oldReadme}`;

const titleRegex = /(<!--[ \t]*BEGIN TITLE[ \t]*-->)([\s\S]*)(<!--[ \t]*END TITLE[ \t]*-->)/;
const titleReplacer = `<!-- BEGIN TITLE -->\n# ${TITLE}\n\n<!-- END TITLE -->`;
const titledReadme = tocedReadme.match(titleRegex)
  ? tocedReadme.replace(titleRegex, titleReplacer)
  : `${titleReplacer}\n\n${tocedReadme}`;

const docsRegex = /(<!--[ \t]*BEGIN DOCS[ \t]*-->)([\s\S]*)(<!--[ \t]*END DOCS[ \t]*-->)/;
const docsReplacer = `<!-- BEGIN DOCS -->${newDocs}\n\n<!-- END DOCS -->`;
const newDocsDocument = titledReadme.match(docsRegex)
  ? titledReadme.replace(docsRegex, docsReplacer)
  : `${titledReadme}\n\n${docsReplacer}`;

let formattedDocs = newDocsDocument;
try {
  formattedDocs = prettier.format(formattedDocs, {
    parser: 'markdown',
  });
} catch (o_0) {}

fs.writeFileSync(DOCS_PATH, formattedDocs, 'utf-8');
