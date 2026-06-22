const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('src/app/uslugi', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

for (const dir of dirs) {
    const f = path.join('src/app/uslugi', dir, 'page.tsx');
    if (!fs.existsSync(f)) continue;

    let content = fs.readFileSync(f, 'utf8');
    
    // 1. Add my-[10px] to Hero section
    content = content.replace(/w-\[calc\(100%-20px\)\] mx-auto rounded-\[20px\]/g, 'w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]');
    
    // 2. Change grid columns
    content = content.replace(/lg:grid-cols-\[1fr_0\.9fr\]/g, 'lg:grid-cols-[1.2fr_1fr]');
    content = content.replace(/lg:grid-cols-\[55%_45%\]/g, 'lg:grid-cols-[1.2fr_1fr]');
    
    // 3. Change max-w-2xl to max-w-[800px]
    content = content.replace(/lg:max-w-2xl/g, 'lg:max-w-[800px]');
    
    // For marketing/page.tsx
    content = content.replace(/max-w-\[540px\]/g, 'max-w-[800px]');
    
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated ${f}`);
}
