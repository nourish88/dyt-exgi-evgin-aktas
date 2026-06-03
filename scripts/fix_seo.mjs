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

  // Fix Alternates
  content = content.replace(
    /alternates:\s*\{\s*canonical:\s*([^,}]+)\s*\},?/g,
    (match, canonicalUrl) => {
      if (match.includes('languages:')) return match;
      return `alternates: {
    canonical: ${canonicalUrl},
    languages: {
      "tr-TR": ${canonicalUrl},
      "x-default": ${canonicalUrl},
    },
  },`;
    }
  );

  // Auto-shorten descriptions (if > 150 chars)
  content = content.replace(/description:\s*["']([^"']{160,})["']/g, (match, desc) => {
    // We will just let the user know we found long descriptions. 
    // Automated truncating is risky for meaning. I'll just print them out for now.
    console.log(`[LONG DESCRIPTION] ${page}: ${desc.substring(0, 50)}...`);
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(page, content);
    changedFiles++;
    console.log(`Updated: ${page}`);
  }
}

console.log(`Total files updated: ${changedFiles}`);
