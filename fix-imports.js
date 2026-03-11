const fs = require('fs');
const path = require('path');
const dir = './src/components/ui';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    // Match `from "something@version"` or `from 'something@version'`
    content = content.replace(/from\s+['"](@?[a-z0-9\-./]+)@[0-9.]+['"]/g, "from \"$1\"");
    fs.writeFileSync(filePath, content);
}
console.log("Fixed imports in " + files.length + " files.");
