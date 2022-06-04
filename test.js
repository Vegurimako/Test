const { test, expect } = require('@playwright/test');

test('test_metaigra/missa', async ({ page }) => {

  await page.goto('/missa/');
  const title = page.locator('text=HELLO!').first();
  await expect(title).toHaveCount(1);

});

test('test_metaigra/NOT_missa', async ({ page }) => {

  await page.goto('/sample-page/');
  const title = page.locator('text=HELLO!').first();
  await expect(title).toHaveCount(0);

});