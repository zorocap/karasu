from starlette.applications import Starlette
from starlette.routing import Route
from starlette.requests import Request
from starlette.responses import PlainTextResponse, JSONResponse, HTMLResponse
from starlette.templating import Jinja2Templates
import requests
from bs4 import BeautifulSoup
from starlette.routing import Mount
from starlette.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
import json
import uvicorn

templates=Jinja2Templates(directory="templates")

async def home(request:Request):
    URL = "https://yugenanime.tv/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    home_list = soup.find('main', attrs={'class': 'outter--container'})

    context = {"request":request, "home_list":home_list, "sample_text": "This is sampling"}
    return templates.TemplateResponse("index.html", context)

async def index(request:Request):
    student_id = request.path_params.get("student_id")

    student_name = request.query_params.get("student_name") or "World"
    return PlainTextResponse(content=f"Hello {student_name}")

async def json_endpoint(request:Request):
    return JSONResponse(content={"message": "Json hello"})

async def trending_page(request:Request):
    URL = "https://yugenanime.tv/trending/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})

    context={"request":request, "trending_content":html_content}
    return templates.TemplateResponse("trending.html", context)

async def anime_detail_page(request:Request):
    anime_id = request.path_params.get("anime_id")
    anime_name = request.path_params.get("anime_name")

    URL = f"https://yugenanime.tv/anime/{anime_id}/{anime_name}/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "anime_detail":html_content}
    return templates.TemplateResponse("details.html", context)

async def anime_detail_watch_page(request:Request):
    anime_id = request.path_params.get("anime_id")
    anime_name = request.path_params.get("anime_name")

    URL = f"https://yugenanime.tv/anime/{anime_id}/{anime_name}/watch/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "anime_detail_watch":html_content}
    return templates.TemplateResponse("detail_watch.html", context)

async def anime_stream(request:Request):
    anime_id = request.path_params.get("anime_id")
    anime_name = request.path_params.get("anime_name")
    anime_episode = request.path_params.get("anime_episode")

    URL = f"https://yugenanime.tv/watch/{anime_id}/{anime_name}/{anime_episode}/"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "stream_content":html_content}
    return templates.TemplateResponse("stream.html", context)

async def anime_discover(request:Request):
    # URL = f"https://yugenanime.tv/discover/"
    # response = requests.get(URL)
    # soup = BeautifulSoup(response.content, 'html.parser')
    # html_content = soup.find('main', attrs={'class': 'outter--container'})
    # context = {"request":request, "discover_content":html_content}
    # return templates.TemplateResponse("discover.html", context)
    query_parameters = request.query_params
    URL = f"https://yugenanime.tv/api/discover/?{query_parameters}"
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
    URL = f"https://yugenanime.tv/api/discover/?{query_parameters}"
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
    URL = f"https://yugenanime.tv/latest/?page={page}"
    response = requests.get(URL)
    soup = BeautifulSoup(response.content, 'html.parser')
    html_content = soup.find('main', attrs={'class': 'outter--container'})
    context = {"request":request, "latest_page":html_content}
    return templates.TemplateResponse("latest.html", context)
        
async def api_search(request:Request):
    query_parameters = request.query_params
    URL = f"https://yugenanime.tv/api/search/?{query_parameters}"
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
    URL = f"https://yugenanime.tv/schedule.json"
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

routes = [
    Mount('/static', app=StaticFiles(directory='static'), name="static"),
    Route("/", endpoint=home),
    Route("/{student_id:int}", endpoint=index),
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
]

app = Starlette(
    debug=True,
    routes=routes
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],  # Add your frontend origin(s) here
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)