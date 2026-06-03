import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else {
      if (filepath.endsWith('.tsx')) {
        filelist.push(filepath);
      }
    }
  }
  return filelist;
}

const pages = walkSync('src');

for (const page of pages) {
  let content = fs.readFileSync(page, 'utf-8');
  let h1Count = (content.match(/<h1/g) || []).length;
  if (h1Count > 1) {
    console.log(`${page} has ${h1Count} H1 tags`);
  }
}
