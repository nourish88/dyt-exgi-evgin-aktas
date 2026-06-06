import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        filelist = walkSync(filepath, filelist);
      }
    } else {
      if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.js') || filepath.endsWith('.md')) {
        filelist.push(filepath);
      }
    }
  }
  return filelist;
}

const files = walkSync('.');
let changedFiles = 0;

for (const file of files) {
  // Exclude next.config.ts to avoid breaking the redirect rule
  if (file === 'next.config.ts' || file === 'scripts/replace-online-diyet-url.mjs') continue;

  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes('/online-diyet-ankara')) {
    content = content.replace(/\/online-diyet-ankara/g, '/online-diyetisyen');
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log(`Replaced in: ${file}`);
  }
}
console.log(`Total files changed: ${changedFiles}`);
