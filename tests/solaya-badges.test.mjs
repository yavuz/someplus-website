import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('store actions use localized official badge images, not custom text buttons', () => {
  const source = fs.readFileSync(new URL('../components/solaya-store-links.tsx', import.meta.url), 'utf8');
  assert.match(source, /app-store-\$\{locale\}\.svg/);
  assert.match(source, /google-play-\$\{locale\}\.png/);
  assert.doesNotMatch(source, /<small>|<span>App Store/);
});
