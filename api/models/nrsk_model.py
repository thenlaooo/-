from database import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text


class Nrsk(Base):
    __tablename__ = 'nrsk'
    # Идентификатор
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    # Название НРСК
    name = Column(String, nullable=False, unique=False)
    # Краткое описание
    short_description = Column(String)
    # Тип научной работы
    nrsk_type = Column(String)
    # ID Владелельца НРСК
    cadet_id = Column(Integer,  unique=False)
    # Имя пользователя кадета
    cadet_username = Column(String, nullable=False, unique=False)
    # ID Преподавателя
    professor_id = Column(Integer)
    # Имя пользвателя преподавателя
    professor_username = Column(String, unique=False)
    # Описание НРСК
    description = Column(String, unique=False)
    # Присутствует ли гриф секретности
    is_secret = Column(Boolean)
    # Дата создания
    created_at = Column(TIMESTAMP(timezone=True), server_default=text('now()'))
