from configparser import ConfigParser
from starlette.applications import Starlette
from starlette.routing import Route
from starlette.requests import Request
from starlette.responses import PlainTextResponse, JSONResponse, HTMLResponse, FileResponse, RedirectResponse
from starlette.templating import Jinja2Templates
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette.exceptions import HTTPException
import requests
from bs4 import BeautifulSoup
from starlette.routing import Mount
from starlette.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
import json
import uvicorn
# for getting video link
# from playwright.async_api import async_playwright

# For handling Login functionality
from starlette.middleware.sessions import SessionMiddleware
import pickle
from passlib.hash import bcrypt

templates=Jinja2Templates(directory="templates")

config = ConfigParser()
try:
    config.read("settings.ini")
except:
    print("Settings.ini format error")
    raise SystemExit()

website = config["web"]["site"]

# Load user data from file or initialize an empty dictionary
try:
    with open("users.txt", "rb") as file:
        users_data = pickle.load(file)
except FileNotFoundError:
    users_data = {}

async def save_users_data():
    # Save user data to the file
    with open("users.txt", "wb") as file:
        pickle.dump(users_data, file)

async def create_user(username: str, password: str):
    # Hash the password before storing it
    hashed_password = bcrypt.hash(password)
    
    # Store user data in the dictionary
    users_data[username] = {
        'username': username,
        'password': hashed_password
    }

    # Save the updated user data to the file
    await save_users_data()

async def get_user(username: str):
    # Retrieve user data from the dictionary
    return users_data.get(username)

async def home(request:Request):
    if request.method == "POST":
        pass
    URL = website
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    home_list = soup.find('main', attrs={'class': 'outter--container'})

    context = {"request":request, "home_list":home_list, "sample_text": "This is sampling"}
    return templates.TemplateResponse("index.html", context)

async def register(request: Request):
    if request.method == "POST":
        form = await request.form()
        username = form.get("username")
        password = form.get("password")

        await create_user(username, password)
        return RedirectResponse(url="/")

    return templates.TemplateResponse("register.html", {"request": request})

async def login(request: Request):
    print(request.method)
    if request.method == "POST":
        form = await request.form()
        username = form.get("username")
        password = form.get("password")

        user = await get_user(username)

        if user and bcrypt.verify(password, user['password']):
            request.session["user"] = user['username']
            return RedirectResponse(url="/")

    return templates.TemplateResponse("login.html", {"request": request})

async def logout(request: Request):
    request.session.pop("user", None)
    return RedirectResponse(url="/")

async def manifest(request:Request):
    return FileResponse("static/manifest.json", media_type="application/json")

async def service_worker(request:Request):
    return FileResponse("static/sw.js", media_type="application/javascript")

async def json_endpoint(request:Request):
    return JSONResponse(content={"message": "Json hello"})

async def trending_page(request:Request):
    URL = f"{website}/trending/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})

    context={"request":request, "trending_content":html_content}
    return templates.TemplateResponse("trending.html", context)

async def anime_detail_page(request:Request):
    anime_id = request.path_params.get("anime_id")
    anime_name = request.path_params.get("anime_name")

    URL = f"{website}/anime/{anime_id}/{anime_name}/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "anime_detail":html_content}
    return templates.TemplateResponse("details.html", context)

async def anime_detail_watch_page(request:Request):
    anime_id = request.path_params.get("anime_id")
    anime_name = request.path_params.get("anime_name")
    query_parameters = request.query_params

    URL = f"{website}/anime/{anime_id}/{anime_name}/watch/?{query_parameters}"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "anime_detail_watch":html_content}
    return templates.TemplateResponse("detail_watch.html", context)

async def anime_stream(request:Request):
    anime_id = request.path_params.get("anime_id")
    anime_name = request.path_params.get("anime_name")
    anime_episode = request.path_params.get("anime_episode")

    URL = f"{website}/watch/{anime_id}/{anime_name}/{anime_episode}/"
    response = requests.get(URL)

    if response.status_code != 200:
        return templates.TemplateResponse("error.html", context={"request":request, "message": "Not found"})
    
    soup = BeautifulSoup(response.content, 'html.parser')
    player_section = soup.find('section', attrs={'class': 'player--section'})
    inner_container = soup.find('div', attrs={'class': 'inner--container'})
    
    element_to_exclude = soup.find('div', attrs={'class': 'box m-10-t m-25-b p-15'})
    element_to_exclude.extract() # extract the element that is not required
    
    context = {"request":request, "player_section":player_section, "inner_container":inner_container}
    return templates.TemplateResponse("stream.html", context)

# async def video_scratcher(request:Request):
#     video_id = request.path_params.get("video_id")

#     URL = f"{website}/e/{video_id}/"
#     video_src = ''
#     async with async_playwright() as p:
#         browser = await p.chromium.launch()
#         context = await browser.new_context()
#         page = await context.new_page()

#         try:
#             await page.goto(URL)

#             # Wait for the video to load (adjust as needed)
#             await page.wait_for_timeout(500)

#             # Retrieve the .m3u8 link from network requests
#             m3u8_link = await page.evaluate('''() => {
#                 const performanceEntries = window.performance.getEntriesByType('resource');
#                 const m3u8Requests = performanceEntries.filter(entry => entry.name.endsWith('.m3u8'));
#                 return m3u8Requests.length > 0 ? m3u8Requests[0].name : null;
#             }''')

#             if m3u8_link:
#                 video_src = m3u8_link
#                 # video_src = False
#             else:
#                 video_src = False

#         finally:
#             await browser.close()
#     # context = {"request":request, "video_src": video_src}
#     # return PlainTextResponse(content=video_src)
#     return JSONResponse(content={"message": video_src})

async def simple_plawright_run():
    async with async_playwright() as p:
        # Launch a browser (you can specify 'firefox' or 'webkit' instead of 'chromium' if desired)
        browser = await p.chromium.launch()

        # Create a new page
        page = await browser.new_page()

        # Navigate to google.com
        await page.goto("https://www.google.com")

        # Wait for a moment (you can add more logic here if needed)
        await page.wait_for_timeout(300)

        # Close the browser
        await browser.close()

async def anime_discover(request:Request):
    # URL = f"{website}/discover/"
    # response = requests.get(URL)
    # soup = BeautifulSoup(response.content, 'html.parser')
    # html_content = soup.find('main', attrs={'class': 'outter--container'})
    # context = {"request":request, "discover_content":html_content}
    # return templates.TemplateResponse("discover.html", context)
    query_parameters = request.query_params
    URL = f"{website}/api/discover/?{query_parameters}"
    response = requests.get(URL)
    byte_str = response.content
    # Convert bytes to string
    api_response_str = byte_str.decode('utf-8')

    # Remove unnecessary escape sequences
    api_response_str = api_response_str.replace('\\n', '')

    # Convert the string to a JSON object
    api_response_json = json.loads(api_response_str)
    api_anime_count = api_response_json['count']
    api_anime_content = api_response_json['query']
    api_anime_pagination = api_response_json['pagination']
    context = {"request":request, "anime_count": api_anime_count, "discover_content":api_anime_content, "pagination": api_anime_pagination}
    return templates.TemplateResponse("discover.html", context)

async def api_discover(request:Request):
    query_parameters = request.query_params
    URL = f"{website}/api/discover/?{query_parameters}"
    response = requests.get(URL)
    byte_str = response.content
    # Convert bytes to string
    api_response_str = byte_str.decode('utf-8')

    # Remove unnecessary escape sequences
    api_response_str = api_response_str.replace('\\n', '')

    # Convert the string to a JSON object
    api_response_json = json.loads(api_response_str)

    return JSONResponse(content=api_response_json)

async def latest_anime(request:Request):
    page = request.query_params.get("page")
    URL = f"{website}/latest/?page={page}"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "latest_page":html_content}
    return templates.TemplateResponse("latest.html", context)
        
async def api_search(request:Request):
    query_parameters = request.query_params
    URL = f"{website}/api/search/?{query_parameters}"
    response = requests.get(URL)
    byte_str = response.content
    # Convert bytes to string
    api_response_str = byte_str.decode('utf-8')

    # Remove unnecessary escape sequences
    api_response_str = api_response_str.replace('\\n', '')

    # Convert the string to a JSON object
    api_response_json = json.loads(api_response_str)

    return JSONResponse(content=api_response_json)

async def schedule_json(request:Request):
    URL = f"{website}/schedule.json"
    response = requests.get(URL)
    byte_str = response.content
    
    # Convert bytes to string
    api_response_str = byte_str.decode('utf-8')

    # Remove unnecessary escape sequences
    api_response_str = api_response_str.replace('\\n', '')

    # Convert the string to a JSON object
    api_response_json = json.loads(api_response_str)
    # return PlainTextResponse(content=byte_str)
    return JSONResponse(content=api_response_json)

async def not_found(request, exc):
    # return HTMLResponse("<h1>404 Not Found</h1>", status_code=404)
    return templates.TemplateResponse("error.html", context={"request":request})

routes = [
    Mount('/static', app=StaticFiles(directory='static'), name="static"),
    Route("/", endpoint=home, methods=["GET", "POST"]),
    Route("/register", endpoint=register, methods=["GET", "POST"]),
    Route("/login", endpoint=login, methods=["GET", "POST"]),
    Route("/logout", endpoint=logout, methods=["GET"]),
    Route("/manifest.json", manifest),
    Route("/sw.js", service_worker),
    Route("/json", endpoint=json_endpoint),
    Route("/trending/", endpoint=trending_page),
    Route("/anime/{anime_id:int}/{anime_name:str}/", endpoint=anime_detail_page),
    Route("/anime/{anime_id:int}/{anime_name:str}/watch/", endpoint=anime_detail_watch_page),
    Route("/watch/{anime_id:int}/{anime_name:str}/{anime_episode:int}/", endpoint=anime_stream),
    Route("/discover/", endpoint=anime_discover),
    Route("/api/discover/", endpoint=api_discover),
    Route("/latest/", endpoint=latest_anime),
    Route("/api/search/", endpoint=api_search),
    Route("/schedule.json", endpoint=schedule_json),
    # Route("/e/{video_id:str}/", endpoint=video_scratcher)
]

app = Starlette(
    debug=False,
    routes=routes
)

# Middleware for TrustedHostMiddleware
app.add_middleware(TrustedHostMiddleware, allowed_hosts=["*"])
app.add_middleware(SessionMiddleware, secret_key="your-secret-key")
app.add_exception_handler(HTTPException, not_found)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],  # Add your frontend origin(s) here
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def on_startup():
    print("Starlette application started successfully.")
    # Run Playwright actions on startup
    await simple_plawright_run()

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)
