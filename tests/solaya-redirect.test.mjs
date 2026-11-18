import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const apple = 'https://apps.apple.com/tr/app/solaya-time-to-go-outside/id6834972254';
const google = 'https://play.google.com/store/apps/details?id=app.solaya';
for (const [name, userAgent, platform, maxTouchPoints, expected] of [
  ['Android', 'Mozilla/5.0 (Linux; Android 15; Pixel 9)', 'Linux armv8l', 5, google],
  ['iPhone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', 'iPhone', 5, apple],
  ['iPad', 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)', 'iPad', 5, apple],
  ['iPod', 'Mozilla/5.0 (iPod touch; CPU iPhone OS 15_0)', 'iPod', 5, apple],
  ['desktop-mode iPad', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)', 'MacIntel', 5, apple],
  ['Mac desktop', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)', 'MacIntel', 0, null],
  ['Windows desktop', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Win32', 0, null],
  ['unknown device', '', '', 0, null],
]) {
  test(name, () => {
    let destination = null;
    vm.runInNewContext(fs.readFileSync(new URL('../public/solaya-redirect.js', import.meta.url), 'utf8'), {
      navigator: { userAgent, platform, maxTouchPoints },
      window: { location: { replace: (url) => { destination = url; } } },
    });
    assert.equal(destination, expected);
  });
}
