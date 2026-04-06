const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Replace <img ... /> with <img loading="lazy" decoding="async" ... />
      // But only if it doesn't already have loading="lazy"
      // And we might want to skip the first image in the file (hero image)
      
      let imgCount = 0;
      content = content.replace(/<img\s([^>]+)>/g, (match, p1) => {
        imgCount++;
        // Skip first image (hero image) for LCP optimization
        if (imgCount === 1) return match;
        
        if (!p1.includes('loading=')) {
          modified = true;
          return `<img loading="lazy" decoding="async" ${p1}>`;
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('./src');
