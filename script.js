document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let score = 0;

  // Boucle sur les 7 questions
  for (let i = 1; i <= 7; i++) {
    let radios = document.getElementsByName("q" + i);
    for (let radio of radios) {
      if (radio.checked) {
        score += parseInt(radio.value);
      }
    }
  }

  // Attribution du profil en fonction du score
  let profil = "";
  if (score <= 2) {
    profil = "<strong>Utilisateur.trice IA Assisté·e / Dépendant·e</strong><br><em>Vous déléguez beaucoup à l’IA et risquez de perdre en autonomie critique…</em>";
  } else if (score <= 4) {
    profil = "<strong>Utilisateur.trice IA Équilibré·e / Collaboratif·ve</strong><br><em>Vous combinez efficacité et regard critique sur l’IA.</em>";
  } else {
    profil = "<strong>Utilisateur.trice IA Autonome / Esprit Critique</strong><br><em>L’IA ne remplace pas votre réflexion. Vous gardez la maîtrise !</em>";
  }

  // Affichage du score et du profil
  document.getElementById("result").innerHTML =
    `<h2>Votre score : ${score}/7</h2><p>${profil}</p>`;
});

