from fastapi import Depends
from passlib.context import CryptContext
from database import get_db
from api.models import user_model

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


class Hasher:
    @staticmethod
    def verify_password(plain_password, hashed_password):
        return pwd_context.verify(plain_password, hashed_password)

    @staticmethod
    def get_password_hash(password):
        return pwd_context.hash(password)


# Create/Read/Update/Delete
class CRUD:
    @staticmethod
    def create_user(user, db):
        hashed_password = Hasher.get_password_hash(user.password)
        db_user = user_model.User(username=user.username, hashed_password=hashed_password,
                                  military_rank=user.military_rank,
                                  position=user.position, kafedra=user.kafedra,
                                  is_staff=user.is_staff, group=user.group, first_name=user.first_name,
                                  last_name=user.last_name)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    @staticmethod
    def delete_user(user, db):
        user = db.query(user_model.User).filter(user.username == user_model.User.username).delete()
        db.commit()
        return 'User was deleted successfully'
