const fs = require('fs');
const path = require('path');

const files = [
  'hex-head-bolts.tsx',
  'socket-cap-screws.tsx',
  'flange-bolts.tsx',
  'u-bolts.tsx',
  'foundation-anchor-bolts.tsx',
  'j-bolts.tsx'
];

const basePath = 'd:/MAMTA STEEL/MAMTA STEEL/lastupdated filecode mamtasteel/SteelTradeConnect-1/client/src/pages/product/fasteners/ss-bolts/';

files.forEach(file => {
  let content = fs.readFileSync(path.join(basePath, file), 'utf8');
  
  const importMatch = content.match(/import {([^}]+)} from "lucide-react"/);
  if (!importMatch) return;
  
  let imports = importMatch[1].split(',').map(i => i.trim());
  let newImports = imports.filter(icon => {
    // Check if icon is used in JSX or as a variable
    const regex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(regex);
    return matches && matches.length > 1; // 1 for the import itself, >1 for usage
  });
  
  if (newImports.length !== imports.length) {
    const newImportString = `import { ${newImports.join(', ')} } from "lucide-react";`;
    content = content.replace(importMatch[0], newImportString);
    fs.writeFileSync(path.join(basePath, file), content);
    console.log(`Cleaned up imports in ${file}`);
  }
});
