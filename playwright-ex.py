from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto('https://yugenanime.tv/e/MTg0NjR8MQ==/')

        # Wait for the video to load (adjust as needed)
        page.wait_for_timeout(500)

        # Retrieve the .m3u8 link from network requests
        m3u8_link = page.evaluate('''() => {
            const performanceEntries = window.performance.getEntriesByType('resource');
            const m3u8Requests = performanceEntries.filter(entry => entry.name.endsWith('.m3u8'));
            return m3u8Requests.length > 0 ? m3u8Requests[0].name : null;
        }''')

        if m3u8_link:
            print('Original .m3u8 link:', m3u8_link)
        else:
            print('No .m3u8 link found in network requests.')

    finally:
        browser.close()
