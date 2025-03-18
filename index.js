/**
 * Browser Tools Integration Example
 * 
 * This example demonstrates basic browser automation using Puppeteer
 */

const puppeteer = require('puppeteer');

/**
 * Main function that demonstrates browser automation capabilities
 */
async function main() {
  console.log('Starting browser automation...');
  
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false, // Set to true for production use
    defaultViewport: null, // Use default viewport size
    args: ['--start-maximized'] // Start with maximized window
  });
  
  try {
    // Open a new page
    const page = await browser.newPage();
    
    // Navigate to a website
    console.log('Navigating to example.com...');
    await page.goto('https://example.com');
    
    // Get page title
    const title = await page.title();
    console.log(`Page title: ${title}`);
    
    // Take a screenshot
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'example.png' });
    
    // Extract content
    const content = await page.evaluate(() => {
      // This function runs in the browser context
      const heading = document.querySelector('h1').innerText;
      const paragraph = document.querySelector('p').innerText;
      
      return {
        heading,
        paragraph
      };
    });
    
    console.log('Extracted content:');
    console.log(`Heading: ${content.heading}`);
    console.log(`Paragraph: ${content.paragraph}`);
    
    // Demonstrate form interaction (on a different site)
    console.log('Navigating to httpbin.org to test form submission...');
    await page.goto('https://httpbin.org/forms/post');
    
    // Fill out a form
    await page.type('input[name="custname"]', 'Test User');
    await page.select('select[name="custtel"]', 'USA');
    await page.type('input[name="custemail"]', 'test@example.com');
    await page.click('input[name="size"][value="medium"]');
    await page.click('input[name="topping"][value="bacon"]');
    await page.type('textarea[name="comments"]', 'This is a test submission');
    
    // Submit the form
    console.log('Submitting form...');
    await Promise.all([
      page.waitForNavigation(), // Wait for navigation to complete
      page.click('button[type="submit"]') // Click the submit button
    ]);
    
    // Confirm success
    console.log('Form submitted successfully!');
    
  } catch (error) {
    console.error('An error occurred during browser automation:', error);
  } finally {
    // Always close the browser
    await browser.close();
    console.log('Browser closed. Automation complete.');
  }
}

// Run the example
main().catch(console.error);