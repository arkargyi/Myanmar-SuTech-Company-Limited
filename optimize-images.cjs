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

      // Replace Unsplash URLs
      if (content.includes('q=80&w=2070&auto=format&fit=crop')) {
        content = content.replace(/q=80&w=2070&auto=format&fit=crop/g, 'q=75&w=1200&auto=format,compress&fit=crop');
        modified = true;
      }
      if (content.includes('q=80&w=2069&auto=format&fit=crop')) {
        content = content.replace(/q=80&w=2069&auto=format&fit=crop/g, 'q=75&w=1200&auto=format,compress&fit=crop');
        modified = true;
      }

      // Add loading="lazy" and decoding="async" to img tags
      // But we shouldn't add it to hero images (first image in Home, About, etc.)
      // Let's just do a simple replace for img tags that don't have it, but it's tricky with regex.
      // I'll just do the URL replacements for now, and maybe add loading="lazy" manually or with a better regex.
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('./src');
