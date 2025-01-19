import React from 'react';
import Logo from '../assets/images/logo-fso-russia.png'
import axios from "axios";
import {SERVER_URL} from "../App";
import {useNavigate} from "react-router-dom";


const RegisterPage = () => {
	const navigate = useNavigate();
	const [firstName, setfirstName] = React.useState("");
	const [lastName, setlastName] = React.useState("");
	const [email, setemail] = React.useState("");
	const [password, setpassword] = React.useState("");
	const [repeatPassword, setrepeatPassword] = React.useState("");
	const [username, setusername] = React.useState("");
	const [position, setposition] = React.useState("Курсант");
	const [militaryRank, setmilitaryRank] = React.useState("Нет");
	const [kafedra, setkafedra] = React.useState("Нет");
	const [group, setgroup] = React.useState("");

	async function register(e){
		e.preventDefault()
		console.log(militaryRank, kafedra, position)
		if (password !== repeatPassword) {
			alert('Пароли должны совападать')
		} else {
		const response = await axios.post(SERVER_URL + '/register', {
			username: username,
			military_rank: militaryRank,
    		position: position,
     		group: group,
     		kafedra: kafedra,
     		is_staff: false,
     		password: password,
			first_name: firstName,
			last_name: lastName
		},
            {withCredentials: true})
		console.log(response.data);
	}}
	return (
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
													<img className="fso-logo" src={Logo}/>
													<b>Академия ФСО России
													</b>
												</a>
											</div>
											<h1 className="h5 mb-1">Создать Аккаунт</h1>
											<p className="text-muted mb-4">Всё еще нет аккаунта? Создайте его всего за
												пару минут</p>
											<form className="user" id="register-form">
												<div className="form-group row">
													<div className="col-sm-6 mb-3 mb-sm-0">
														<input type="text" className="form-control form-control-user"
															   id="firstName" name="firstName" placeholder="Имя" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
													</div>
													<div className="col-sm-6">
														<input type="text" className="form-control form-control-user"
															   id="lastName" name="lastName" placeholder="Фамилия" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
													</div>
												</div>
												<div className="form-group">
													<input type="email" className="form-control form-control-user"
														   id="email" name="email" placeholder="Email адрес" value={email} onChange={(e) => setemail(e.target.value)}/>
												</div>
												<div className="form-group row">
													<div className="col-sm-6 mb-3 mb-sm-0">
														<input type="password"
															   className="form-control form-control-user" id="password"
															   name="password" placeholder="Пароль" value={password}
															   onChange={(e) => setpassword(e.target.value)}/>
													</div>
													<div className="col-sm-6">
														<input type="password"
															   className="form-control form-control-user"
															   id="repeatPassword" name="repeatPassword"
															   placeholder="Повторите пароль" value={repeatPassword}
															   onChange={(e) => setrepeatPassword(e.target.value)}/>
													</div>
												</div>
												<div className="form-group">
													<input type="text" className="form-control form-control-user"
														   id="username" name="username"
														   placeholder="Имя пользователя" value={username} onChange={(e) => setusername(e.target.value)}/>
												</div>
												<div className="form-group">
													<label htmlFor="exampleFormControlSelect1">Зарегистрироваться
														как:</label>
													<select className="form-control" id="exampleFormControlSelect1"
															name="position" value={position} onChange={(e) => setposition(e.target.value)}>
														<option>Курсант</option>
														<option>Преподаватель</option>
													</select>
												</div>
												<div className="form-group">
													<label htmlFor="exampleFormControlSelect1">Воинское звание</label>
													<select className="form-control" id="exampleFormControlSelect2"
															name="military_rank" value={militaryRank} onChange={(e) => setmilitaryRank(e.target.value)}>
														<option>Нет</option>
														<option>Рядовой</option>
														<option>Младший сержант</option>
														<option>Сержант</option>
														<option>Старший сержант</option>
														<option>Прапорщик</option>
														<option>Старший прапорщик</option>
														<option>Лейтенант</option>
														<option>Старший лейтенант</option>
														<option>Капитан</option>
														<option>Майор</option>
														<option>Подполковник</option>
														<option>Полковник</option>
													</select>
												</div>
												<div className="form-group">
													<label htmlFor="exampleFormControlSelect1">Кафедра</label>
													<select className="form-control" id="exampleFormControlSelect3"
															name="kafedra" value={kafedra} onChange={(e) => setkafedra(e.target.value)}>
														<option>Нет</option>
														<option>31</option>
														<option>33</option>
														<option>41</option>
														<option>43</option>
														<option>21</option>
														<option>1</option>
													</select>
												</div>
												<div className="form-group">
													<input type="text" className="form-control form-control-user"
														   id="group" name="group"
														   placeholder="Учебная группа (Необязательно)" value={group} onChange={(e) => setgroup(e.target.value)}/>
												</div>
												<div className="d-flex justify-content-center">
													<button className="btn btn-success" type="submit" value="submit"
															id="register_btn" onClick={(e) => register(e)}><b>Зарегистрироваться</b></button>
												</div>
											</form>

											<div className="row mt-4">
												<div className="col-12 text-center">
													<p className="text-muted mb-0">У вас уже есть аккаунт?
														 <b onClick={() => navigate('/login')} style={{cursor:"pointer"}}> Войти</b>
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
		</div>
	);
};

export default RegisterPage;