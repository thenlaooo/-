from pydantic import BaseModel


# Схема для регистрации научной работы
class AddNRSK(BaseModel):
    name: str
    short_description: str
    nrsk_type: str
    is_secret: bool


# Схема для удаления научной работы
class DeleteNRSK(BaseModel):
    name: str
