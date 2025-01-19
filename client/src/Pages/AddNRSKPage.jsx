import React from 'react';
import Logo from '../assets/images/logo-fso-russia.png'
import {redirect, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import {SERVER_URL} from "../App";

const AddNRSKPage = () => {
	const navigate = useNavigate();
    const [name, setname] = React.useState("");
	const [short_description, setshort_description] = React.useState("");
    const [nrsk_type, setnrsk_type] = React.useState("Реферат");
    const [is_secret, setis_secret] = React.useState(false);
    async function addNRSK(e){
		e.preventDefault();
		const response = await axios.post(SERVER_URL + '/add_project', {
			name: name,
			short_description: short_description,
            nrsk_type: nrsk_type,
            is_secret: is_secret
		},
            {withCredentials: true})
		if (response.status === 200) {
            navigate('/my_nrsk')
        }
	}
	return (
        <div>
            <Header/>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="d-flex align-items-center min-vh-100">
                                <div className="w-80 d-block bg-white ">
                                    <div>
                                        <div>
                                            <div className="p-5">
                                                <div className="text-center mb-5">
                                                    <a style={{cursor:"pointer"}} onClick={() => navigate('/')}
                                                       className="text-dark font-size-22 font-family-secondary">
                                                        <img className="fso-logo"
                                                             src={Logo}/> <b>Академия ФСО
                                                        России
                                                    </b>
                                                    </a>
                                                </div>
                                                <h1 className="h5 mb-1">Добавить научную работу</h1>
                                                <p className="text-muted mb-4">Загрузите свою научную работу в пару
                                                    кликов</p>
                                                <form className="user" id="register-form">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user"
                                                               id="name" name="name" placeholder="Название" value={name} onChange={(e) => setname(e.target.value)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlTextarea1">Краткое
                                                            описание</label>
                                                        <textarea className="form-control"
                                                                  id="exampleFormControlTextarea1" rows="3"
                                                                  placeholder="Максимум 255 символов" value={short_description} onChange={(e) => setshort_description(e.target.value)} ></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlSelect1">Тип научной
                                                            работы</label>
                                                        <select className="form-control" id="exampleFormControlSelect1" value={nrsk_type} onChange={(e) => setnrsk_type(e.target.value)}>
                                                            <option>Реферат</option>
                                                            <option>Статья</option>
                                                            <option>Программа для ЭВМ</option>
                                                            <option>Другое</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="checkmeout0" value={is_secret} onChange={() => setis_secret(!is_secret)}/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="checkmeout0">Присутствует гриф
                                                                секретности</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button className="btn btn-success" type="submit"
                                                                value="submit" onClick={(e) => addNRSK(e)}><b>Добавить</b></button>
                                                    </div>

                                                </form>

                                                <div className="row mt-4">
                                                    <div className="col-12 text-center">
                                                        <p className="text-muted mb-0">Передумали добавлять НРСК? <a
                                                            style={{cursor:"pointer"}} onClick={() => navigate('/')}
                                                            className="text-muted font-weight-medium ml-1"><b>Вернуться
                                                            в главное меню</b></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNRSKPage;