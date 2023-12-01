document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then(response => response.json())
      .then(data => {
        // Hier kannst du die Meldungen per alert ausgeben
        alert(data.message);
  
        // Optional: Weiterleitung zu einer Dankeschöner-Seite
       // window.location.href = "thank-you.html";
      })
      .catch(error => {
        console.error("Fehler beim Senden der Anfrage:", error);
        // Hier kannst du Fehlerhandhabung hinzufügen
      });
  });
  