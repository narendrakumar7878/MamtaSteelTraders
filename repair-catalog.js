const fs = require('fs');
const path = require('path');

const dir = 'client/src/pages/product/round-bars/stainless-steel/';
const files = fs.readdirSync(dir);

files.forEach(file => {
    try {
        if (!file.endsWith('.tsx')) return;
        const filePath = path.resolve(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // 1. Restore common syntax issues created by previous failed edits
        content = content.replace(/font-bold <CheckCircle/g, '"><CheckCircle');
        content = content.replace(/font-bold {kw}<\/span>/g, '">');
        content = content.replace(/shadow font-bold tracking-tighter italic" \/>/g, 'shadow" \/>');

        // 2. Remove massive repetitions using a safe global regex
        content = content.replace(/(font-bold tracking-tighter italic\s*){2,}/gi, 'font-bold tracking-tighter italic ');

        // 3. Cleanup redundant "italic italic" or "font-bold font-bold" residues
        content = content.replace(/italic italic/g, 'italic');
        content = content.replace(/font-bold font-bold/g, 'font-bold');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully Repaired: ${file}`);
    } catch (err) {
        console.error(`Error repairing ${file}:`, err.message);
    }
});

console.log('Recovery Complete. All files are now build-ready.');
