
const button = document.getElementById('register_btn')
const form = document.getElementById('register-form')
button.addEventListener('click', async (event) => {
  event.preventDefault();
  const formData = new FormData(form)

  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const password = formData.get('password')
  const repeatPassword = formData.get('repeatPassword')
  const username = formData.get('username')
  const position = formData.get('position')
  const military_rank = formData.get('military_rank')
  const kafedra = formData.get('kafedra')
  const group = formData.get('group')

  // Проверка пароля
  if (password !== repeatPassword) {
  alert('Пароли должны совпадать');
} else {
  fetch('http://127.0.0.1:8000/register', {
    method: 'POST',
    headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
    'username': username,
    'military_rank': military_rank,
    'position': position,
    'group': group,
    'kafedra': kafedra,
    'is_staff': 'false',
    'password': password
  })
  })
  .then(function (data) {
    data.json().then(function (data) {
      // Работа с JSON объектом data
      if (data['status'] === 'true') {
        console.log('Редирект на главную страницу');
      } else {
        console.log('Валидация данных')
      }
    })
  })
  .catch(function (error) {
    console.log('Request failure: ', error);
});
}
})