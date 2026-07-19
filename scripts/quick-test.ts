import { chromium } from "playwright";

async function main() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log("Navigating to /assessments...");
    await page.goto("http://localhost:6789/assessments", { waitUntil: "networkidle", timeout: 15000 });
    console.log("Page loaded, URL:", page.url());
    
    // Wait for React to render
    await page.waitForTimeout(3000);
    
    // Debug: what's on the page?
    const bodyText = await page.locator("body").innerText();
    console.log("Body text (first 500 chars):", bodyText.substring(0, 500));
    
    // Check for links
    const allLinks = await page.locator("a").evaluateAll((els: HTMLAnchorElement[]) => 
      els.map(e => ({ href: e.getAttribute("href"), text: e.textContent?.trim().substring(0, 50) }))
    );
    console.log("All links:", JSON.stringify(allLinks, null, 2));
    
    // Take screenshot
    await page.screenshot({ path: "/work/viktor-spaces/hbd-website/tmp/debug-assessments.png", fullPage: true });
    console.log("📸 debug-assessments.png");
    
    // Try navigating to a tool page directly
    await page.goto("http://localhost:6789/assessments/five-pillars", { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(3000);
    console.log("\nDirect tool page URL:", page.url());
    const toolBodyText = await page.locator("body").innerText();
    console.log("Tool page body (first 500 chars):", toolBodyText.substring(0, 500));
    
    await page.screenshot({ path: "/work/viktor-spaces/hbd-website/tmp/debug-tool-page.png", fullPage: true });
    console.log("📸 debug-tool-page.png");
    
    console.log("\n✅ Done!");
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
