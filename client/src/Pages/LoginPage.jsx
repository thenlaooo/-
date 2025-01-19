import React from 'react';
import Logo from '../assets/images/logo-fso-russia.png'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "../App";

const LoginPage = () => {
	const navigate = useNavigate();
	const [username, setusername] = React.useState("");
	const [password, setpassword] = React.useState("");

	async function auth(e){
		e.preventDefault();

		const response = await axios.post(SERVER_URL + '/auth', {
			username: username,
			password: password
		})
		console.log(response.data);
	}
	return (
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
													<img className="fso-logo" src={Logo}/>
													<b>Академия ФСО России
													</b>
												</a>
											</div>
											<h1 className="h5 mb-1">Вход в аккаунт</h1>
											<p className="text-muted mb-4">Войдите в аккаунт с помощью логина и
												пароля</p>
											<form className="user" id="register-form">

												<div className="form-group">
													<input type="text" className="form-control form-control-user"
														   id="username" name="username"
														   placeholder="Имя пользователя" value={username} onChange={(e) => setusername(e.target.value)}/>
												</div>
												<div className="form-group">
													<input type="password" className="form-control form-control-user"
														   id="password" name="password" placeholder="пароль" value={password} onChange={(e) => setpassword(e.target.value)}/>
												</div>


												<div className="d-flex justify-content-center">
													<button className="btn btn-success" type="submit" value="submit"
													onClick={(e) => auth(e)}>
														<b>Авторизоваться</b></button>
												</div>
											</form>

											<div className="row mt-4">
												<div className="col-12 text-center">
													<p className="text-muted mb-0">Еще не зарегистрированы? <a
														style={{cursor:"pointer"}} onClick={() => navigate('/register')}
														className="text-muted font-weight-medium ml-1"><b>Зарегистрироваться</b></a>
													</p>
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

export default LoginPage;