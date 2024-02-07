const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
});

function sendMail() {
	let parms = {
		name : document.getElementById('name').value,
		email : document.getElementById('email').value,
		subject : document.getElementById('subject').value,
		message : document.getElementById('message').value,
	}

	emailjs.send("service_syp1l1e", "template_0ykeerj", parms).then(alert("Email Sent!"));
	form.reset();
}