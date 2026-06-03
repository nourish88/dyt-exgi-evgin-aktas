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

  // We need to find the PAGE_URL variable or parse canonical if it's there
  let canonicalMatch = content.match(/canonical:\s*(["'][^"']+["']|PAGE_URL)/);
  if (canonicalMatch && content.includes('openGraph: {')) {
    let canonical = canonicalMatch[1];
    
    // Inject type and url if missing
    content = content.replace(/openGraph:\s*\{/g, (match) => {
      let injection = `${match}\n    type: "website",\n    url: ${canonical},`;
      // We don't want to double inject
      return injection;
    });

    // Cleanup double injections just in case they were already there
    content = content.replace(/type:\s*"website",\s*type:\s*"website",/g, 'type: "website",');
    content = content.replace(/url:\s*(["'][^"']+["']|PAGE_URL),\s*url:\s*(["'][^"']+["']|PAGE_URL),/g, `url: ${canonical},`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(page, content);
    changedFiles++;
    console.log(`Updated OG: ${page}`);
  }
}

console.log(`Total OG files updated: ${changedFiles}`);
