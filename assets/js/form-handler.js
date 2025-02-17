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
  event.preventDefault(); // Previne reîncărcarea paginii
  const form = event.target;
  const formData = new FormData(form);
  const messageDiv = document.querySelector("#form-message");

  fetch("/", {
      method: "POST",
      body: formData,
  })
  .then(() => {
      messageDiv.textContent = "Formular trimis cu succes!"; // Mesaj de succes
      messageDiv.style.backgroundColor = "#2d8d9d"; // Fundal verde (culoare Netlify)
      messageDiv.style.color = "#fff"; // Text alb
      messageDiv.style.display = "block"; // Afișează div-ul
      // După 3 secunde, ascunde mesajul
      setTimeout(function() {
        messageDiv.style.display = "none"; // Ascunde div-ul
    }, 3000); // 3000 ms = 3 secunde

    form.reset(); // Resetează formularul
  })
  .catch((error) => {
      messageDiv.textContent = "Eroare la trimitere. Încearcă din nou."; // Mesaj de eroare
      messageDiv.style.backgroundColor = "#f44336"; // Fundal roșu pentru eroare
      messageDiv.style.color = "#fff"; // Text alb
      messageDiv.style.display = "block"; // Afișează div-ul
      // După 3 secunde, ascunde mesajul
      setTimeout(function() {
        messageDiv.style.display = "none"; // Ascunde div-ul
    }, 3000); // 3000 ms = 3 secunde
  });
});