const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'));
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
    res.end(html);
  });
  await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on('pageerror', e => pageErrors.push(e.message));
    await page.goto('http://127.0.0.1:4173/');
    await page.locator('#toolGrid .tool').first().waitFor();

    for (const category of ['AI Systems', 'AI Models', 'Developer Tools', 'Research', 'Favorites', 'All']) {
      const button = page.locator('#categoryNav button[data-category]').filter({ hasText: category }).first();
      await button.click();
      await page.waitForFunction(expected => document.querySelector('#sectionTitle').textContent === expected, category === 'All' ? 'All tools' : category === 'Favorites' ? 'Your favorites' : category);
      if (category === 'AI Systems' || category === 'AI Models' || category === 'Developer Tools' || category === 'Research') {
        if (await page.locator('#toolGrid .tool').count() < 1) throw new Error(category + ' click did not filter any tools');
      }
    }

    await page.locator('#categoryNav button[data-category="All"]').click();
    const favoriteButton = page.locator('#toolGrid .tool').first().locator('button[data-act="fav"]');
    const before = await favoriteButton.textContent();
    await favoriteButton.click();
    const after = await page.locator('#toolGrid .tool').first().locator('button[data-act="fav"]').textContent();
    if (before === after) throw new Error('Favorite star did not change immediately after click');
    await page.locator('#categoryNav button[data-category="Favorites"]').click();
    if (await page.locator('#toolGrid .tool').count() < 1) throw new Error('Favorites category did not show favorited tools');
    if (pageErrors.length) throw new Error('Browser JavaScript errors: ' + pageErrors.join('; '));
    console.log('PASS: Workspace categories, category filtering, Favorites navigation, and immediate favorite-star update');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(e => { console.error(e); process.exit(1); });
