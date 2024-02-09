import eel
import subprocess

# Set web folder and optionally provide a list of options
eel.init('web', allowed_extensions=['.js', '.html'])

@eel.expose
def open_facebook():
    # Adjust the URL and browser command as needed
    url = 'https://www.facebook.com'
    
    # # Use subprocess to open Brave with the specified URL
    # subprocess.run(['brave', '--new-window', '--incognito', url])

# Start the Eel app
eel.start('index.html', size=(800, 600), mode='chrome', port=8080, cmdline_suffix='--new-window --incognito')
