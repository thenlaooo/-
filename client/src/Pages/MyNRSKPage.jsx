import React, {useEffect} from 'react';
import Logo from '../assets/images/logo-fso-russia.png'
import {redirect, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import {SERVER_URL} from "../App";
import AddNRSKPage from "./AddNRSKPage";
import moment from "moment";

const MyNRSKPage = () => {
    const navigate = useNavigate();
    const [data, setdata] = React.useState([]);
    async function get_nrsk() {
        const response = await axios.get(SERVER_URL + '/get_nrsk', {
            withCredentials: true,
        })
        console.log(response.data);
        setdata(response.data);
    }

useEffect(() => {
        get_nrsk();
    }, []);
    return (
        <div>
            <Header/>
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0 font-size-18">Ваши научные работы</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Ваши работы</a></li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Basic Data Table</h4>
                                    <p className="card-subtitle mb-4">
                                        DataTables has most features enabled by default, so all you need to do to use it
                                        with
                                        your own tables is to call the construction
                                        function:
                                        <code>$().DataTable();</code>.
                                    </p>

                                    <table id="basic-datatable" className="table dt-responsive nowrap">
                                        <thead>
                                        <tr>
                                            <th>Название</th>
                                            <th>Крактое описание</th>
                                            <th>Гриф секретности</th>
                                            <th>Дата создания</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data?.map((item, index) => (<tr>
                                            <td>{item.name}</td>
                                            <td>{item.short_description}</td>
                                            <td>{item.is_secret.toString()}</td>
                                            <td>{moment(item.created_at).format('DD.MM.YYYY HH:mm')}</td>
                                            <td>
                                                <button type="button"
                                                        className="btn btn-outline-primary waves-effect waves-light">Выбрать</button>
                                            </td>
                                        </tr>))}
                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MyNRSKPage;