import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { compress } from 'brotli';

const brotliSettings = {
    extension: 'br',
    skipLarger: true,
    mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
    quality: 10, // 0 - 11,
    lgwin: 12, // default
    threshold: 10240
};

readdirSync('dist/juhosattila.github.io/').forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
        const result = compress(readFileSync('dist/juhosattila.github.io/' + file), brotliSettings);
        writeFileSync('dist/juhosattila.github.io/' + file + '.br', result);
    }
});