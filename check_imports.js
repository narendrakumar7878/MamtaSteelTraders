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
  const content = fs.readFileSync(path.join(basePath, file), 'utf8');
  
  // Find icons imported from lucide-react
  const importMatch = content.match(/import {([^}]+)} from "lucide-react"/);
  if (!importMatch) {
    console.log(`No lucide-react imports found in ${file}`);
    return;
  }
  
  const imports = importMatch[1].split(',').map(i => i.trim());
  
  // Find all components used in JSX <Icon ... />
  const usages = [...content.matchAll(/<([A-Z][a-zA-Z0-9]*)/g)].map(m => m[1]);
  
  // Filter out standard ones
  const standard = ['Link', 'ProductSEO', 'motion', 'Link', 'Star']; // Star might be local
  const usedIcons = [...new Set(usages.filter(u => !standard.includes(u)))];
  
  const missing = usedIcons.filter(u => !imports.includes(u));
  
  if (missing.length > 0) {
    console.log(`${file}: Missing imports for [${missing.join(', ')}]`);
  } else {
    console.log(`${file}: All icons imported correctly.`);
  }
});
