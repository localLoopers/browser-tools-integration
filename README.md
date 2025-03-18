# Browser Tools Integration Project

This project integrates with browser automation tools to enable web scraping, testing, and browser-based interactions through code.

## Setup

This project uses MCP (Model Control Protocol) servers to enable various functionalities:

### GitHub Integration
- Uses the Smithery GitHub API client for GitHub interactions
- Authenticates using a personal access token

### Browser Tools
- Uses `@agentdeskai/browser-tools-server` for browser automation
- Runs on port 3025 - ensure this port is free before starting

## Installation

1. Clone this repository
2. Make sure you have Node.js installed
3. Install dependencies:
   ```
   npm install
   ```

## Usage

The browser tools server provides capabilities for:
- Opening and controlling browser windows
- Navigating to websites
- Interacting with page elements
- Taking screenshots
- Extracting data from web pages

## Important Notes

- The browser-tools-server runs on port 3025. Make sure to terminate any processes running on this port before starting.
- Browser automation requires a compatible browser to be installed on your system.

## Getting Started

```javascript
// Example code for using the browser tools
const puppeteer = require('puppeteer');

async function example() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  
  // Extract page title
  const title = await page.title();
  console.log(`Page title: ${title}`);
  
  // Take a screenshot
  await page.screenshot({ path: 'example.png' });
  
  await browser.close();
}

// Run the example
example();
```

## Debugging

If you encounter issues:
1. Check that port 3025 is available
2. Verify browser tools server is running
3. Use console.log statements to trace execution flow

## Further Learning Resources

- [Puppeteer Documentation](https://pptr.dev/)
- [Browser Automation Guide](https://developers.google.com/web/tools/puppeteer)
- [Web Scraping Best Practices](https://www.scrapehero.com/how-to-prevent-getting-blacklisted-while-scraping/)