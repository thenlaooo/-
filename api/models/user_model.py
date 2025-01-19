from database import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    # Имя
    first_name = Column(String)
    # Фамилия
    last_name = Column(String)
    username = Column(String, nullable=False, unique=True)
    # Воинское звание
    military_rank = Column(String, nullable=False)
    # Должность
    position = Column(String, nullable=False)
    # Учебная группа
    group = Column(String, unique=False, default='')
    # Номер кафедры
    kafedra = Column(String, unique=False, default=None)
    # Является ли администратором
    is_staff = Column(Boolean)

    hashed_password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=text('now()'))
