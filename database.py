from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv, find_dotenv

# Загрузка переменного окружения
env_file = find_dotenv()
load_dotenv(env_file)
DATABASE_USERNAME = os.getenv('DATABASE_USERNAME')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')
DATABASE_HOST_PORT = os.getenv('DATABASE_HOST_PORT')
DATABASE_NAME = os.getenv('DATABASE_NAME')

# postgresql://postgres:postgres@localhost/fastapi
SQLALCHEMY_DATABASE_URL = f'postgresql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@{DATABASE_HOST_PORT}/{DATABASE_NAME}'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    print('Database connected')
    try:
        yield db
    finally:
        db.close()
