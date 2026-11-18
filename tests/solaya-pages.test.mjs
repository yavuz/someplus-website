import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = path => fs.readFileSync(new URL('../' + path, import.meta.url), 'utf8');
test('landing replaces coming-soon copy with store actions in both languages', () => {
  const source = read('components/solaya-page.tsx');
  assert.doesNotMatch(source, /Yakında App|Coming soon|Android sürümü hazırlanıyor|Android version is on its way/);
  assert.match(source, /SolayaStoreLinks/);
});
test('download route loads redirect and offers manual store links', () => {
  const source = read('app/solaya/get/page.tsx');
  assert.match(source, /solaya-redirect.js/);
  assert.match(source, /SolayaStoreLinks/);
  assert.match(source, /index: false/);
});
