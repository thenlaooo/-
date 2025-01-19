import React, {useEffect} from 'react';
import Logo from '../assets/images/logo-fso-russia.png';
import MainImg from '../assets/images/main_page_img.jpg';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import axios from "axios";
import {SERVER_URL} from "../App";


const MainPage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Header/>
			<div className="page-content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-12">
							<div className="page-title-box d-flex align-items-center justify-content-between">
								<h4 className="mb-0 font-size-18">Главная страница</h4>

								<div className="page-title-right">
									<ol className="breadcrumb m-0">
										<li className="breadcrumb-item"><a href="javascript: void(0);">ФСО России</a>
										</li>
										<li className="breadcrumb-item active">Главная страница</li>
									</ol>
								</div>

							</div>
						</div>
					</div>


					<div className="row">

						<div className="col-md-4">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Для чего нужно это приложение?</h5>
									<p className="card-text">Это приложение позволит курсантам и преподавателям легко и
										быстро
										манипулировать
										научными работами.</p>
									<p className="card-text">
										<small className="text-muted">Выпуск молодых офицеров академии</small>
									</p>
								</div>
								<img className="card-img-bottom img-fluid" src={ MainImg }
									 alt="Card image cap"/>
							</div>
						</div>


						<div className="col-xl-6">
							<div className="card">
								<div className="card-body">

									<h4 className="card-title">Как использовать приложение?</h4>
									<p className="card-subtitle mb-4">Простое руководство к использованию</p>

									<ul className="nav nav-tabs mb-3">
										<li className="nav-item">
											<a href="#home" data-toggle="tab" aria-expanded="false"
											   className="nav-link">
												<i className="mdi mdi-home-variant d-lg-none d-block"></i>
												<span className="d-none d-lg-block">Пользователь</span>
											</a>
										</li>
										<li className="nav-item">
											<a href="#profile" data-toggle="tab" aria-expanded="true"
											   className="nav-link active">
												<i className="mdi mdi-account-circle d-lg-none d-block"></i>
												<span className="d-none d-lg-block">НРСК</span>
											</a>
										</li>
										<li className="nav-item">
											<a href="#settings" data-toggle="tab" aria-expanded="false"
											   className="nav-link">
												<i className="mdi mdi-settings-outline d-lg-none d-block"></i>
												<span className="d-none d-lg-block">Для чего это всё?</span>
											</a>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane" id="home">
											<p>Для того чтобы пользоваться полным функционалом сайта требуется
												регистрация. Её должны
												проходить как курсанты, так и преподаватели. Это нужно для того чтобы вы
												могли привязать НРСК
												к своему собственному аккаунту.</p>
											<p className="mb-0">Пользователи также имеют возможность просматривать
												некоторые НРСК, которые
												курсанты могут выложить в свободный доступ благодаря удобному
												функционалу. Конечно, ваши
												проекты хранятся на академическом сервере и никто кроме вас не сможет
												получить ним доступ.</p>
										</div>
										<div className="tab-pane show active" id="profile">
											<p>Сайт предназначен для удобного управления вашими научными работами,
												которые вы регистрируете
												в академии.</p>
											<p className="mb-0">После создания научной работы у вас появится возможность
												добавить своего
												преподавателя, чтобы он имел доступ к вашему проекту. Естественно, вы
												можете в любое время как
												скачать, так и загрузить ваши проекты благодаря встроенному функционалу
												на панели управления
												проектом.</p>
										</div>
										<div className="tab-pane" id="settings">
											<p>Это приложение - способ избавиться от проблем с перекидыванием файлов
												преподавателю, хранения
												научных работ на флешках (которые часто ломаются), а также возможность
												удобно работать сразу с
												несколькими НРСК одновременно. Чудесно, не правда ли?</p>
										</div>
									</div>

								</div>
							</div>
						</div>


					</div>
				</div>
				<footer className="footer">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<div className="text-center text-lg-left">
									2024 © Академия Федеральной Службы Охраны Россиийской Федерации.
								</div>
							</div>
							<div className="col-md-6">
								<div className="text-right d-none d-lg-block">
									Разработан JuicexCom
								</div>
							</div>
						</div>
					</div>
				</footer>

			</div>
		</div>
	);
};

export default MainPage;