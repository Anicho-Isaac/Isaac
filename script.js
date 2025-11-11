const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const joinBtn = document.getElementById('joinCallBtn');

loginBtn.addEventListener('click', () => {
	auth.signInWithEmailAndPassword(email.value, password.value)
		.then(() => alert('Logged in!'))
		.catch(() => {
			auth.createUserWithEmailAndPassword(email.value, password.value)
				.then(() => alert('Account created!'))
				.catch(err => alert(err.message));
		});
});

joinBtn.addEventListener('click', () => {
	window.location.href = "call.html";
});