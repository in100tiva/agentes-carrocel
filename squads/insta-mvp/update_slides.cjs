const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'output', 'o-bcrypt-ainda-e-seguro-veja-quando-usar-argon2-em-projetos_2026-03-22', 'v1', 'slides');

for (let i = 1; i <= 7; i++) {
    const file = path.join(dir, `slide-0${i}.html`);
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Font links
        content = content.replace(
            /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:wght@400;600;700&family=Permanent\+Marker&display=swap" rel="stylesheet">/g,
            '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@900&display=swap" rel="stylesheet">'
        );
        
        // CSS family
        content = content.replace(
            /font-family:\s*"Permanent Marker",\s*cursive;/g,
            'font-family: "Montserrat", sans-serif;'
        );
        
        // Background fallback
        if (!content.includes('background-color: #2D2A3E;')) {
            content = content.replace(
                /\.bg-mascot\s*\{/,
                '.bg-mascot {\n    background-color: #2D2A3E;'
            );
        }

        // Modify inline style to use multiple backgrounds so gradient shows if image fails or before it loads
        content = content.replace(
            /style="background-image:\s*url\('([^']+)'\);"/g,
            'style="background-image: url(\'$1\'), radial-gradient(circle at center, #3a2e5d 0%, #0a0a0a 100%);"'
        );

        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
