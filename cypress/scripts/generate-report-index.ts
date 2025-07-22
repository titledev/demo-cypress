import * as fs from 'fs';
import * as path from 'path';

const reportsDir = path.join(__dirname, '../reports');
const indexPath = path.join(reportsDir, 'index.html');

const files = fs.readdirSync(reportsDir).filter(f => f !== 'index.html');

const links = files.map(file => `<li><a href="./${file}" target="_blank">${file}</a></li>`).join('\n');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cypress Reports Index</title>
</head>
<body>
  <h1>Cypress Reports</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>
`;

fs.writeFileSync(indexPath, html);
console.log('Generated index.html for reports');