import React, {Component} from 'react';
import Logo from "../assets/images/logo-fso-russia.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
      <div>
          <div id="layout-wrapper">

              <div className="main-content">

                  <header id="page-topbar">
                      <div className="header">
                          <div className="navbar-brand-box d-flex align-items-left">
                              <a onClick={() => navigate('/')} className="logo" style={{cursor: "pointer"}}>
                                  <img className="fso-logo" src={Logo}/>
                                  <span>
                                    Академия ФСО России
                                </span>
                              </a>

                          </div>
                          <div className="header__buttons">
                              <div className="header__auth">
                                  <button type="button" className="btn btn-secondary"
                                          onClick={() => navigate('/login')}>Авторизация
                                  </button>
                                  <button type="button" className="btn btn-secondary"
                                          onClick={() => navigate('/register')}>Регистрация
                                  </button>
                              </div>
                          </div>
                      </div>


                  </header>
              </div>
          </div>
          <div className="topnav">
              <div className="container-fluid">
                  <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                      <div className="collapse navbar-collapse" id="topnav-menu-content">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a className="nav-link" style={{cursor:"pointer"}} onClick={() => navigate('/')}>
                                      <i className="mdi mdi-view-dashboard mr-2"></i>Главная страница
                                  </a>
                              </li>

                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components"
                                     role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="mdi mdi-format-underline mr-2"></i>Добавить
                                      <div className="arrow-down"></div>
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="topnav-components">
                                      <a style={{cursor:"pointer"}} onClick={() => navigate('/add_nrsk')} className="dropdown-item">Научная
                                          работа</a>
                                  </div>
                              </li>

                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle arrow-none" id="topnav-pages" style={{cursor:"pointer"}} onClick={() => navigate('/my_nrsk')}
                                     role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="mdi mdi-google-pages mr-2"></i>Ваши работы <div></div>
                                  </a>
                              </li>

                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                     role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="mdi mdi-poll mr-2"></i>Статистика <div
                                      className="arrow-down"></div>
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                      <a href="charts-morris.html" className="dropdown-item">Morris</a>
                                      <a href="charts-google.html" className="dropdown-item">Google</a>
                                      <a href="charts-chartjs.html" className="dropdown-item">Chartjs</a>
                                      <a href="charts-sparkline.html" className="dropdown-item">Sparkline</a>
                                      <a href="charts-knob.html" className="dropdown-item">Jquery Knob</a>
                                  </div>
                              </li>


                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more"
                                     role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="mdi mdi-share-variant mr-2"></i>Другое <div
                                      className="arrow-down"></div>
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="topnav-more">
                                      <a href="charts-morris.html" className="dropdown-item">Об авторах</a>
                                      <a href="charts-morris.html" className="dropdown-item">О приложении</a>
                                  </div>
                              </li>

                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  );
};

export default Header;