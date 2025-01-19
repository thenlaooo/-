from pathlib import Path
import jwt
import os
from fastapi_admin.template import templates
from starlette.requests import Request
from starlette.responses import RedirectResponse
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates
from database import get_db
from database import engine
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from datetime import timedelta, datetime
from dotenv import load_dotenv, find_dotenv
from api.models import nrsk_model, user_model
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI, Depends, HTTPException
from api.schemas.users_schemas import DeleteUser, User, UserAuth
from api.users.users_views import router as router_users
from api.NRSK.nrsk_views import router as router_nrsk
from fastapi.responses import RedirectResponse
# Admin panel FastAPI
from fastapi_admin.app import app as admin_app
from fastapi.middleware.cors import CORSMiddleware
# BASE ADDRES: 127.0.0.1:8000

# Find the correct .env file based on the current environment
env_file = find_dotenv(f'.env.{os.getenv("ENV", "development")}')

# Load the environment variables from the .env file
load_dotenv(env_file)
nrsk_model.Base.metadata.create_all(bind=engine)
app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.mount("/assets", StaticFiles(directory='site/Admin/horizontal/assets'))
templates = Jinja2Templates(directory="site")

# Подключение роутов
app.include_router(router_users)
app.include_router(router_nrsk)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
# .env
SECRET_KEY = os.getenv('JWT_SECRET_KEY')
ALGORITHM = os.getenv('JWT_ALGORITHM')
EXPIRATION_TIME = timedelta(int(os.getenv('JWT_EXPIRATION_TIME_MINS')))



# Error handlers
@app.exception_handler(404)
async def handle_404(
        request: Request,
        data
):
    return templates.TemplateResponse(
        'Admin/horizontal/auth-404.html', {'request': request})
