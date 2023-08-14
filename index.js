const scriptURL = 'https://script.google.com/macros/s/AKfycbyFjcsfGQDxVY9ymJBFtdeP9h8-AB2MQ9DTQhdz7U2_EZ-YLt9ZTXXV7Jst0GTKzjRU/exec" method="post'
const form = document.form['const-form']
form.addEventListener('submit' , e=> {
	e.preventDefault()
	fetch(scriptURL, {
		method: 'post' , body: new FormData(form)
	})
	.then(response => alert("Thank You for your response"))
	.then(() => {window.location.reload();})
	.catch(erroe => console.error('Error!' , error.message))
})
