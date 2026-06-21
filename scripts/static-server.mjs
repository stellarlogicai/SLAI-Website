import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT || 4173);
const autoExitArg = process.argv.find((arg) => arg.startsWith('--auto-exit-ms='));
const autoExitMs = autoExitArg ? Number(autoExitArg.replace('--auto-exit-ms=', '')) : 0;
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    const pathname = decodeURIComponent(url.pathname);
    let filePath = path.join(root, pathname === '/' ? 'index.html' : pathname);

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    try {
      const fileStat = await stat(filePath);
      if (fileStat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } catch {
      filePath = path.join(root, 'index.html');
    }

    const file = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream',
    });
    response.end(file);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Server error');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`SLAI website preview: http://127.0.0.1:${port}/`);
});

if (autoExitMs > 0) {
  setTimeout(shutdown, autoExitMs);
}

function shutdown() {
  server.close(() => {
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
