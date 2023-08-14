const scriptURL = 'https://script.google.com/macros/s/AKfycby7ANBRNCw_TBwN7PXGmZXt-CwjI-8p6oekIrp_eU_aOByJPu1sOmgYew93vUxyb4ga/exec'
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
