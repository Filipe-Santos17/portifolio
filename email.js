addEventListener('load', emailFunction)

function emailFunction(){

  const form = document.querySelector("[contact-form]")
  form.addEventListener("submit", sendEmail)
  
  function sendEmail(e){
    e.preventDefault();
    //this.contact_number.value = (Math.random() * 100000) | 0;// these IDs from the previous steps

    //const params = {
    //  name: form.querySelector("#user_name").value,
    //  email: form.querySelector("#user_email").value,
    //  message: form.querySelector("#user_msg").value,
    //};

    const public_key = '9CKz7AEqjP2VKaFIO'
    const service_Id = "service_5lyfthm"  
    const template_Id = "template_nurcb83"
    
    emailjs.sendForm(service_Id, template_Id, form, public_key)
    .then(alert("email send")) //Melhorar o alert
    .catch(error => console.log(`Error: ${error}`))
  }
} 