import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const shouldInclude = (src) => {
  const base = path.basename(src);
  return base !== '.DS_Store' && base !== 'Thumbs.db';
};

// Clean previous output
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

// 1. Copy root portal page -> dist/index.html
const portalSrc = path.join(root, 'site', 'index.html');
if (!fs.existsSync(portalSrc)) {
  throw new Error(`Missing portal page: ${portalSrc}`);
}
fs.copyFileSync(portalSrc, path.join(distDir, 'index.html'));

// 2. Copy each village static site into clean subpaths without spaces
const targets = [
  {
    name: 'RELIGHT (Pasir Wetan)',
    from: path.join(root, 'Pasir Wetan', 'netlify-pasir-wetan'),
    to: path.join(distDir, 'pasir-wetan'),
  },
  {
    name: 'DAUNARA (Cinanjung)',
    from: path.join(root, 'Cinanjung', 'netlify-cinanjung'),
    to: path.join(distDir, 'cinanjung'),
  },
];

for (const { name, from, to } of targets) {
  if (!fs.existsSync(from)) {
    throw new Error(`Missing source directory for ${name}: ${from}`);
  }
  fs.cpSync(from, to, { recursive: true, filter: shouldInclude });
  console.log(`[OK] ${name} -> /${path.relative(distDir, to).replaceAll('\\', '/')}/`);
}

console.log('[DONE] Build complete in dist/');
