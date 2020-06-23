let today = new Date().toISOString().split('T')[0];
document.querySelector("#calendar").setAttribute('min', today);


let form = document.getElementById('f2');

function mySubmitMessage() {
  if (form.checkValidity()) {
    alert("Your application has been received!");
  }

}