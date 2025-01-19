from pydantic import BaseModel


# Схема для регистрации пользователя
class User(BaseModel):
    first_name: str
    last_name: str
    username: str
    password: str
    military_rank: str
    position: str
    group: str
    kafedra: str
    is_staff: bool


# Схема авторизации пользователя
class UserAuth(BaseModel):
    username: str
    password: str


# Схема для удаления пользователя
class DeleteUser(BaseModel):
    username: str
