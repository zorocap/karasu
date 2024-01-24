# # Install necessary dependencies
# !apt-get update
# !apt-get install -y chromium-chromedriver
# !cp /usr/lib/chromium-browser/chromedriver /usr/bin

# # Install Selenium
# !pip install selenium

# Import required libraries
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument('--headless')  # Run Chrome in headless mode (no UI)
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# Create a new Chrome browser instance
driver = webdriver.Chrome(options=chrome_options)

try:
    # Navigate to your website
    driver.get('https://yugenanime.tv/e/MTg3NDV8NA==/')

    # Play the video (assuming it's auto-playing, if not, trigger the play action)
    # Replace 'play-button-selector' with the actual selector for the play button
    # play_button = driver.find_element_by_css_selector('play-button-selector')
    # play_button.click()

    # Wait for some time to let the video load (you may need to adjust the duration)
    time.sleep(5)

    # Retrieve the network requests
    network_requests = driver.execute_script("return window.performance.getEntriesByType('resource');")

    # Filter out requests with .m3u8 extension
    m3u8_requests = [request['name'] for request in network_requests if request['name'].endswith('.m3u8')]

    if m3u8_requests:
        print('Original .m3u8 link:', m3u8_requests[0])
    else:
        print('No .m3u8 link found in network requests.')

finally:
    # Close the browser
    driver.quit()
