$("#saveInfoForm").submit(function(event) {
	event.preventDefault();
	let nome = $("#nome").val();
	let cpf = $("#cpf").val();
	let email = $("#email").val();

	localStorage.set('@preenche/userData', {nome: nome, cpf: cpf, email: email})
	console.log(nome, cpf, email)
  
  alert("Handler for .submit() called.");
});