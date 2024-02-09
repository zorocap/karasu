from selenium import webdriver

url = 'https://example.com'  # Replace with the URL of the website you are interested in

# Set up a headless browser (you may need to download the appropriate webdriver for your browser)
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # Run in headless mode (without opening a browser window)
driver = webdriver.Chrome(executable_path='/path/to/chromedriver', options=options)

# Load the webpage
driver.get(url)

# Wait for the page to load (you might need to adjust the wait time based on the webpage)
driver.implicitly_wait(10)

# Use JavaScript to retrieve the actual URL from the blob
actual_url_script = """
var xhr = new XMLHttpRequest();
xhr.open('GET', 'your_blob_url', true);
xhr.responseType = 'blob';
xhr.onload = function() {
    var reader = new FileReader();
    reader.onload = function(e){
        console.log(reader.result);
    }
    reader.readAsText(xhr.response);
};
xhr.send();
"""

actual_url = driver.execute_script(actual_url_script)

# Print the retrieved actual URL
print('Actual URL:', actual_url)

# Close the browser
driver.quit()
