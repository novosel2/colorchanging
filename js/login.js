const hardcodedInformation = {
	username: 'test',
	password: 'password'
}

if (localStorage.getItem('isAuthenticated') === 'true') {
	window.location.href = 'index.html';
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
	event.preventDefault();
	
	const usernameInput = document.getElementById('username').value;
	const passwordInput = document.getElementById('password').value;
	
	if (usernameInput === hardcodedInformation.username && passwordInput === hardcodedInformation.password) {
		localStorage.setItem('isAuthenticated', 'true');
		window.location.href = 'index.html';
	} else {
		const message = document.getElementById('message');
		message.innerHTML = 'Invalid username or password';
		message.style.color = 'red';
		
		usernameInput.value = '';
		passwordInput.value = '';
	}
})