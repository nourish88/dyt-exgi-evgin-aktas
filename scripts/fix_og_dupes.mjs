import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else {
      if (filepath.endsWith('page.tsx')) {
        filelist.push(filepath);
      }
    }
  }
  return filelist;
}

const pages = walkSync('src/app');
let changedFiles = 0;

for (const page of pages) {
  let content = fs.readFileSync(page, 'utf-8');
  let originalContent = content;

  // We find openGraph: { ... } block
  content = content.replace(/openGraph:\s*\{([^}]*)\}/g, (match, inner) => {
    // inside inner, we replace duplicated type and url
    let lines = inner.split('\n');
    let hasType = false;
    let hasUrl = false;
    let newLines = [];
    
    for (let line of lines) {
      if (line.trim().startsWith('type:')) {
        if (hasType) continue; // skip duplicate
        hasType = true;
      }
      if (line.trim().startsWith('url:')) {
        if (hasUrl) continue; // skip duplicate
        hasUrl = true;
      }
      newLines.push(line);
    }
    
    return `openGraph: {${newLines.join('\n')}}`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(page, content);
    changedFiles++;
    console.log(`Fixed duplicates in: ${page}`);
  }
}

console.log(`Total fixed: ${changedFiles}`);
