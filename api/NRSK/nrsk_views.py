from database import get_db
from fastapi import APIRouter, Depends, Request
from api.models import nrsk_model, user_model
from api.schemas.users_schemas import DeleteUser, User, UserAuth
from api.schemas.nrks_schemas import AddNRSK, DeleteNRSK
from sqlalchemy.orm import Session

# Роут под НРСК
router = APIRouter()


class NRSKBuilder:
    @staticmethod
    def add_project(nrsk, db, username):
        query = db.query(nrsk_model.Nrsk).filter(nrsk_model.Nrsk.name == nrsk.name)
        if len(list(query)) != 0:
            return {'НРСК с таким названием уже существует.'}
        nrsk = nrsk_model.Nrsk(name=nrsk.name, cadet_username=username,
                               short_description=nrsk.short_description, nrsk_type=nrsk.nrsk_type,
                               is_secret=nrsk.is_secret)
        db.add(nrsk)
        db.commit()
        db.refresh(nrsk)
        return nrsk

    @staticmethod
    def delete_project(nrsk_name, db):
        nrsk = db.query(nrsk_model.Nrsk).filter(nrsk_model.Nrsk.name == nrsk_name).delete()
        db.commit()
        return 'НРСК было успешно удалено'


@router.post('/add_project')
async def add_nrsk(request: Request, nrsk: AddNRSK, db: Session = Depends(get_db)):
    username = request.cookies.get('username')
    return NRSKBuilder.add_project(nrsk, db, username)


@router.post('/remove_project')
async def delete_nrsk(nrsk_name: DeleteNRSK, db: Session = Depends(get_db)):
    return NRSKBuilder.delete_project(nrsk_name.name, db)


@router.get('/get_nrsk')
async def get_nrsk(request: Request, db: Session = Depends(get_db)):
    row = db.query(nrsk_model.Nrsk).filter(nrsk_model.Nrsk.cadet_username == request.cookies.get('username')).all()
    return row
