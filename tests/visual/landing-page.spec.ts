import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

// Dynamic import for pixelmatch (ES module)
const getPixelmatch = async () => {
  const { default: pixelmatch } = await import('pixelmatch');
  return pixelmatch;
};

// Test configurations for different breakpoints
const breakpoints = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 768 },
  { name: 'large-desktop', width: 1320, height: 900 },
  { name: 'xl-desktop', width: 1400, height: 900 },
];

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the landing page
    await page.goto('/');
    // Wait for any animations or loading to complete
    await page.waitForLoadState('networkidle');
    // Wait a bit more for any CSS transitions
    await page.waitForTimeout(1000);
  });

  for (const breakpoint of breakpoints) {
    test(`Landing page visual test - ${breakpoint.name}`, async ({ page }) => {
      // Set viewport size
      await page.setViewportSize({ 
        width: breakpoint.width, 
        height: breakpoint.height 
      });

      // Wait for layout to settle
      await page.waitForTimeout(500);

      // Take screenshot of the full page
      const screenshot = await page.screenshot({ 
        fullPage: true,
        animations: 'disabled',
      });

      // Save the current screenshot
      const currentPath = path.join(screenshotsDir, `landing-${breakpoint.name}-current.png`);
      fs.writeFileSync(currentPath, screenshot);

      // Check if baseline exists
      const baselinePath = path.join(screenshotsDir, `landing-${breakpoint.name}-baseline.png`);
      
      if (!fs.existsSync(baselinePath)) {
        // If no baseline exists, save current as baseline
        fs.writeFileSync(baselinePath, screenshot);
        console.log(`Baseline created for ${breakpoint.name} breakpoint`);
        return;
      }

      // Compare with baseline
      const baseline = fs.readFileSync(baselinePath);
      
      // Convert images to PNG and get dimensions
      const currentImg = await sharp(screenshot).raw().toBuffer({ resolveWithObject: true });
      const baselineImg = await sharp(baseline).raw().toBuffer({ resolveWithObject: true });

      // Ensure both images have the same dimensions
      const width = Math.min(currentImg.info.width, baselineImg.info.width);
      const height = Math.min(currentImg.info.height, baselineImg.info.height);

      const currentResized = await sharp(screenshot)
        .resize(width, height)
        .raw()
        .toBuffer();

      const baselineResized = await sharp(baseline)
        .resize(width, height)
        .raw()
        .toBuffer();      // Create diff image buffer
      const diffBuffer = Buffer.alloc(width * height * 3);

      // Get pixelmatch function
      const pixelmatch = await getPixelmatch();

      // Compare images
      const numDiffPixels = pixelmatch(
        baselineResized,
        currentResized,
        diffBuffer,
        width,
        height,
        {
          threshold: 0.1, // Sensitivity threshold (0-1)
          alpha: 0.1,
          includeAA: true, // Include anti-aliasing
        }
      );

      // Calculate diff percentage
      const totalPixels = width * height;
      const diffPercentage = (numDiffPixels / totalPixels) * 100;

      console.log(`${breakpoint.name}: ${numDiffPixels} different pixels (${diffPercentage.toFixed(2)}%)`);

      // Save diff image if there are differences
      if (numDiffPixels > 0) {
        const diffPath = path.join(screenshotsDir, `landing-${breakpoint.name}-diff.png`);
        await sharp(diffBuffer, {
          raw: {
            width,
            height,
            channels: 3
          }
        })
        .png()
        .toFile(diffPath);

        console.log(`Diff image saved: ${diffPath}`);
      }

      // Assert that differences are within acceptable range (e.g., 1%)
      expect(diffPercentage).toBeLessThan(1);
    });
  }

  test('Section backgrounds are responsive', async ({ page }) => {
    const sections = [
      '.hero-section',
      '.features-section', 
      '.testimonials-section',
      '.download-section'
    ];

    for (const breakpoint of breakpoints) {
      await page.setViewportSize({ 
        width: breakpoint.width, 
        height: breakpoint.height 
      });

      await page.waitForTimeout(500);

      for (const selector of sections) {
        const element = page.locator(selector).first();
        if (await element.count() > 0) {
          const bgColor = await element.evaluate((el) => {
            return window.getComputedStyle(el).backgroundColor;
          });

          // Check background color based on breakpoint
          if (breakpoint.width < 768) {
            // Mobile should have #EEEFF7 background
            expect(bgColor).toContain('238, 239, 247'); // RGB values for #EEEFF7
          } else {
            // Desktop should have white background
            expect(bgColor).toContain('255, 255, 255'); // RGB values for white
          }
        }
      }
    }
  });

  test('Header stays fixed on scroll', async ({ page }) => {
    for (const breakpoint of breakpoints) {
      await page.setViewportSize({ 
        width: breakpoint.width, 
        height: breakpoint.height 
      });

      const header = page.locator('header');
      
      // Get initial header position
      const initialPosition = await header.evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return { top: rect.top, position: window.getComputedStyle(el).position };
      });

      // Scroll down
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(300);

      // Check header is still at top and has fixed position
      const scrolledPosition = await header.evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return { top: rect.top, position: window.getComputedStyle(el).position };
      });

      expect(scrolledPosition.position).toBe('fixed');
      expect(scrolledPosition.top).toBe(0);
    }
  });

  test('Typography scales correctly across breakpoints', async ({ page }) => {
    const textElements = [
      { selector: 'h1', expectedSizes: { mobile: '32px', desktop: '64px', xl: '86px' } },
      { selector: 'h2', expectedSizes: { mobile: '24px', desktop: '48px', xl: '56px' } },
      { selector: 'p', expectedSizes: { mobile: '16px', desktop: '18px', xl: '20px' } }
    ];

    for (const breakpoint of breakpoints) {
      await page.setViewportSize({ 
        width: breakpoint.width, 
        height: breakpoint.height 
      });

      await page.waitForTimeout(500);

      for (const textElement of textElements) {
        const element = page.locator(textElement.selector).first();
        if (await element.count() > 0) {
          const fontSize = await element.evaluate((el) => {
            return window.getComputedStyle(el).fontSize;
          });

          // Check if font size is appropriate for breakpoint
          let expectedSize: string;
          if (breakpoint.width >= 1400) {
            expectedSize = textElement.expectedSizes.xl;
          } else if (breakpoint.width >= 768) {
            expectedSize = textElement.expectedSizes.desktop;
          } else {
            expectedSize = textElement.expectedSizes.mobile;
          }

          // Allow some tolerance for font size calculations
          const expectedPx = parseInt(expectedSize);
          const actualPx = parseInt(fontSize);
          expect(Math.abs(actualPx - expectedPx)).toBeLessThan(5);
        }
      }
    }
  });
});
