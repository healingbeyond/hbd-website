import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TMP_DIR = join(__dirname, "..", "tmp");

const APP_URL = process.env.APP_URL || "http://localhost:4173";

async function main() {
  console.log("🧪 Running: Tool Pages Test\n");
  
  await mkdir(TMP_DIR, { recursive: true });
  
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to assessments page
    await page.goto(`${APP_URL}/assessments`, { waitUntil: "networkidle", timeout: 15000 });
    console.log(`On assessments page: ${page.url()}`);

    // Check that the assessments page has card links (not accordions)
    const linkCount = await page.locator('a[href^="/assessments/"]').count();
    console.log(`Found ${linkCount} tool card links`);
    if (linkCount !== 5) {
      throw new Error(`Expected 5 tool card links, got ${linkCount}`);
    }

    // Take screenshot of assessments listing
    await page.screenshot({ path: join(TMP_DIR, "assessments-listing.png"), fullPage: true });
    console.log("📸 Screenshot: assessments-listing.png");

    // Click the Five Pillars card
    await page.locator('a[href="/assessments/five-pillars"]').click();
    await page.waitForLoadState("networkidle");

    const url = page.url();
    console.log(`After click: ${url}`);
    if (!url.includes("/assessments/five-pillars")) {
      throw new Error(`Expected /assessments/five-pillars, got ${url}`);
    }

    // Should see the title
    const title = await page.locator("h1").textContent();
    console.log(`Page title: ${title}`);
    if (!title?.includes("Five Pillars Assessment")) {
      throw new Error(`Expected Five Pillars Assessment title, got: ${title}`);
    }

    // Should have a back link
    const backLink = page.locator('a[href="/assessments"]');
    if (!(await backLink.isVisible())) {
      throw new Error("Back link not visible");
    }

    // Should have an iframe
    const iframe = page.locator("iframe");
    if (!(await iframe.isVisible())) {
      throw new Error("Iframe not visible on tool page");
    }

    const iframeSrc = await iframe.getAttribute("src");
    console.log(`Iframe src: ${iframeSrc}`);
    if (!iframeSrc?.includes("five-pillars-assessment")) {
      throw new Error(`Unexpected iframe src: ${iframeSrc}`);
    }

    // Take screenshot of tool page
    await page.screenshot({ path: join(TMP_DIR, "tool-page-five-pillars.png"), fullPage: true });
    console.log("📸 Screenshot: tool-page-five-pillars.png");

    // Go back
    await backLink.click();
    await page.waitForLoadState("networkidle");
    console.log(`Back URL: ${page.url()}`);

    // Test BCW Journal page
    await page.locator('a[href="/assessments/bcw-journal"]').click();
    await page.waitForLoadState("networkidle");

    const journalTitle = await page.locator("h1").textContent();
    console.log(`Journal page title: ${journalTitle}`);
    if (!journalTitle?.includes("Black Coffee & Wisdom Journal")) {
      throw new Error(`Expected Black Coffee & Wisdom Journal title, got: ${journalTitle}`);
    }

    await page.screenshot({ path: join(TMP_DIR, "tool-page-journal.png"), fullPage: true });
    console.log("📸 Screenshot: tool-page-journal.png");

    console.log("\n✅ All tool page tests passed!\n");
  } catch (error) {
    console.error("\n❌ Test FAILED\n");
    console.error(error instanceof Error ? error.message : error);
    await page.screenshot({ path: join(TMP_DIR, "error.png"), fullPage: true });
    throw error;
  } finally {
    await browser.close();
  }
}

main().catch(() => process.exit(1));
