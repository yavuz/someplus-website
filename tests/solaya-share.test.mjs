import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('download page declares app sharing metadata', () => {
 const s=fs.readFileSync(new URL('../app/solaya/get/page.tsx',import.meta.url),'utf8');
 for(const key of ['openGraph:', 'twitter:', 'apple-itunes-app', 'google-play-app', '/images/solaya/icon.png', 'https://someplus.work/solaya/get/']) assert.ok(s.includes(key), `Missing ${key}`);
});
