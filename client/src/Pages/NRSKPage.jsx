import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "../components/Header";

const NRSKPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1)

    const renderTabContentByActiveTab = () => {
        switch (activeTab) {
            case 1:
                return (
                    <div style={{
                        display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-start',
                    }}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Название НРСК: </span>
                            <input type="text" className="form-control" placeholder="" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Краткое
                                описание</label>
                            <textarea className="form-control"
                                      id="exampleFormControlTextarea1" rows="3"
                                      placeholder="Максимум 255 символов"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Тип научной
                                работы</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Реферат</option>
                                <option>Статья</option>
                                <option>Программа для ЭВМ</option>
                                <option>Другое</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                       id="checkmeout0"/>
                                <label className="custom-control-label"
                                       htmlFor="checkmeout0">Присутствует гриф
                                    секретности</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success" type="submit"
                                    value="submit"><b>Сохранить</b></button>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div style={{gap: '10px'}}>
                        <input type="file" className="dropify" data-default-file="assets/images/media/sm-6.jpg"/>
                    <div className="d-flex justify-content-center" style={{marginBottom: '20px'}}>
                        <button className="btn btn-success" type="submit"
                                value="submit"><b>Сохранить</b></button>
                    </div>
                        </div>
                )
            case 3:
                return (
                    <div className="d-flex align-items-center row-gap-3" style={{gap: '5px'}}>
                        <span>text 3</span>
                        <input style={{width: '300px'}} type="text" className="form-control" placeholder="Username"
                               aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                )
        }
    }
    return (
        <div>
            <Header/>
            <div class="card">
                <div class="card-body">

                    <div class="row">
                        <div class="col-sm-2 mb-2 mb-sm-0">
                            <div class="nav flex-column nav-pills" style={{gap: '10px', marginTop: '62px'}}
                                 id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button type="button" className="btn btn-primary"
                                        onClick={() => setActiveTab(1)}>Основные настройки
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => setActiveTab(2)}>Работа
                                    с файлами
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => setActiveTab(3)}>Дополнительно
                                </button>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <h4 className="card-title">Панель управления НРСК</h4>
                            <p className="card-subtitle mb-4">Example of vertical left side tabs.</p>

                            <div class="tab-content" id="v-pills-tabContent"
                                 style={{display: 'flex', justifyContent: 'center'}}>
                                {renderTabContentByActiveTab()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default NRSKPage;