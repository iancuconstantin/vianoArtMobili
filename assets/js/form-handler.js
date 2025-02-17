// document.addEventListener("DOMContentLoaded", function () {
//     const handleSubmit = event => {
//       event.preventDefault(); // Prevent default form submission
  
//       const myForm = event.target;
//       const formData = new FormData(myForm);

//       console.log("verificare: ", formData);
  
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//       })
//         .then(() => alert("Mulțumim! Mesajul a fost trimis cu succes."))
//         .catch(error => alert("Eroare la trimiterea formularului: " + error));
//     };
  
//     document.querySelector("#contact-form").addEventListener("submit", handleSubmit);
//   });

document.querySelector("#newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const messageDiv = document.querySelector("#form-message");

  fetch("/", {
      method: "POST",
      body: formData,
  })
  .then(() => {
      messageDiv.textContent = "Formular trimis cu succes!";
      messageDiv.style.backgroundColor = "#B19777";
      messageDiv.style.color = "#fff";
      messageDiv.style.display = "block";
      
      setTimeout(function() {
        messageDiv.style.display = "none";
    }, 3000);

    form.reset();
  })
  .catch((error) => {
      messageDiv.textContent = "Eroare la trimitere. Încearcă din nou.";
      messageDiv.style.backgroundColor = "#f44336";
      messageDiv.style.color = "#fff";
      messageDiv.style.display = "block";
      
      setTimeout(function() {
        messageDiv.style.display = "none";
    }, 3000);
  });
});