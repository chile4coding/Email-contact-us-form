const clientName = document.querySelector("#name");
const clientEmail = document.querySelector("#email");
const clientMessage = document.querySelector("#message");
const form = document.querySelector("form");

const resetInputField = function () {
  clientEmail.value = clientMessage.value = clientName.value = "";
};

function sendMail(e) {
  e.preventDefault();
  let params = {
    from_name: clientName.value,
    email_id: clientEmail.value,
    message: clientMessage.value,
  };
  if(clientEmail.value){
  emailjs.send("service_90gz9v7", "template_n4nwibo", params).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );

  resetInputField()
}
}

form.addEventListener('submit', sendMail)
