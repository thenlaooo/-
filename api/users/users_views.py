import jwt
import os
from api.users.crud import CRUD, Hasher
from database import get_db
from database import engine
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from datetime import timedelta, datetime
from dotenv import load_dotenv, find_dotenv
from api.models import nrsk_model, user_model
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI, Depends, HTTPException, APIRouter, Cookie, Request
from api.schemas.users_schemas import DeleteUser, User, UserAuth
from fastapi.responses import JSONResponse

router = APIRouter()

env_file = find_dotenv(f'.env.{os.getenv("ENV", "development")}')

# Load the environment variables from the .env file
load_dotenv(env_file)
nrsk_model.Base.metadata.create_all(bind=engine)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

# .env
SECRET_KEY = os.getenv('JWT_SECRET_KEY')
ALGORITHM = os.getenv('JWT_ALGORITHM')
EXPIRATION_ACCESS_TIME = timedelta(int(os.getenv('JWT_EXPIRATION_TIME_MINS')))
EXPIRATION_REFRESH_TIME = int(os.getenv('JWT_EXPIRATION_TIME_REFRESH_HOURS'))


class JWTAuth:
    @staticmethod
    def verify_jwt_token(token: str):
        try:
            decoded_data = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            return decoded_data
        except jwt.PyJWTError:
            return None

    @staticmethod
    def create_access_token(data: dict):
        expiration = datetime.utcnow() + EXPIRATION_ACCESS_TIME
        data.update({"exp": expiration})
        token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        return token

    @staticmethod
    def create_refresh_token(data: dict):
        print(type(EXPIRATION_REFRESH_TIME))
        to_encode = data.copy()
        expire = datetime.utcnow() + timedelta(hours=EXPIRATION_REFRESH_TIME)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt




# Все пользователи
@router.get('/get_users')
async def get_all_users(db: Session = Depends(get_db)):
    users = db.query(user_model.User).all()
    return users


# Удалить пользователя
@router.post('/remove_user')
async def remove_user(user: DeleteUser, db: Session = Depends(get_db)):
    return CRUD.delete_user(user, db)


# Регистрация пользователя
@router.post('/register')
async def create_user(user: User, db: Session = Depends(get_db)):
    query = db.query(user_model.User).filter(user_model.User.username == user.username)
    if len(list(query)) != 0:
        return {'message': 'Пользователь уже существует!',
                'status': 'false'}
    db_user = CRUD.create_user(user, db)
    # Генерация JWT токенов
    access_token = JWTAuth.create_access_token({"sub": user.username})
    refresh_token = JWTAuth.create_refresh_token({"sub": user.username})
    response = JSONResponse(content={'username': db_user.username,
                                     'military_rank': user.military_rank,
                                     'position': user.position,
                                     'group': user.group,
                                     'kafedra': user.kafedra,
                                     'is_staff': user.is_staff,
                                     'created_at': str(db_user.created_at),
                                     'access': str(access_token),
                                     'refresh': str(refresh_token),
                                     'status': 'true'})
    response.set_cookie(key='username', value=user.username, httponly=True, samesite='none', secure='none')
    response.set_cookie(key='access', value=access_token, httponly=True, samesite='none', secure='none')
    response.set_cookie(key='refresh', value=refresh_token, httponly=True, samesite='none', secure='none')
    return response


@router.post('/auth')
async def authorization(user: UserAuth, db: Session = Depends(get_db)):
    db_user = db.query(user_model.User).filter(user.username == user_model.User.username).first()
    # Проверка пароля
    if Hasher.verify_password(user.password, db_user.hashed_password):
        return 'Success'
    else:
        return 'False'
