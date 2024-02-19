import eel
# Set web folder and optionally provide a list of options
eel.init('web', allowed_extensions=['.js', '.html'])

# Start the Eel app
eel.start('index.html', size=(800, 600), mode='chrome', port=8080, cmdline_args=['--incognito', '--no-experiments'])
