const questions = [
  {
    text: "1. Vous venez d'utiliser un outil d'IA pour rédiger un résumé détaillé d'un document complexe. Quelques heures plus tard, un collègue vous demande une information clé de ce résumé.",
    answers: [
      { text: "a) Vous parvenez facilement à vous souvenir de la phrase exacte ou de l'information précise, comme si vous l'aviez écrite vous-même.", value: 1 },
      { text: "b) Vous avez du mal à vous souvenir des détails exacts et sentez que vous auriez besoin de consulter à nouveau le résumé ou l'IA.", value: 0 }
    ]
  },
  {
    text: "2. Vous avez créé une présentation avec l'aide substantielle d'une IA. Lorsque quelqu'un vous félicite pour votre travail, vous vous demandez à quel point le travail est réellement le vôtre ?",
    answers: [
      { text: "a) Non car vous ressentez un fort sentiment d'appropriation et de fierté pour l'ensemble du travail, considérant que l'IA n'était qu'un outil à votre service, votre touche personnelle ayant primé sur l'apport de l'IA.", value: 1 },
      { text: "b) Oui, vous avez un sentiment d'appartenance faible, attribuant une part significative, voire la majorité, du travail à l'IA (par exemple, vous pensez \"c'est surtout l'IA qui a tout fait, j'ai juste peaufiné\"), percevant l'œuvre comme moins originale.", value: 0 }
    ]
  },
  {
    text: "3. Vous êtes en train de rédiger un document important et décidez d'utiliser une IA pour générer les premières ébauches ou des sections entières.",
    answers: [
      { text: "a) Votre rôle principal passe de l'exécution de l'écriture à la supervision, à la direction et à l'affinage constant du résultat de l'IA. Par exemple, en posant des questions de clarification, en demandant des reformulations spécifiques, en guidant l'IA vers des sources de données précises.", value: 1 },
      { text: "b) Vous laissez l'IA s'occuper de la majeure partie de la rédaction percevant l'IA comme un substitut majeur à votre travail d'exécution. Les activités d'analyse, de synthèse et d'évaluation exigent maintenant moins d'effort grâce à l’IA.", value: 0 }
    ]
  },
  {
    text: "4. On vous demande de produire une idée qui se veut particulièrement créative ou innovante, par exemple, un concept pour une nouvelle campagne de publicité.",
    answers: [
      { text: "a) Vous utilisez l'IA pour générer des idées ou des ébauches (par exemple, en demandant à l'IA des slogans publicitaires), ce qui vous permet d’atteindre rapidement le but demandé.", value: 0 },
      { text: "b) Vous avez déjà une grande partie du projet en tête et vous demandez à l’IA d’organiser vos idées. Cela vous permet de garder votre idée de départ mais cela vous prend plus de temps.", value: 1 }
    ]
  },
  {
    text: "5. Extraordinaire ! L'IA produit un résultat qui correspond parfaitement à ce que vous attendiez pour une tâche, par exemple, une proposition de solution pour un problème récurrent. Vous êtes très satisfait.e.",
    answers: [
      { text: "a) Vous êtes bluffé.e par la puissance de l’IA, sa fluidité d’interaction et vous vous empressez de montrer aux collègues ce que l’IA a produit comme réponse.", value: 0 },
      { text: "b) Vous préférez évaluer le résultat d’abord en le mettant à l’épreuve même si cela prend plus de temps. Sait-on jamais que l’IA se serait trompée. Personne n’est infaillible après tout.", value: 1 }
    ]
  },
  {
    text: "6. Vous rencontrez un problème d’organisation depuis très longtemps dans le service dans lequel vous travaillez et vous décidez de prendre le problème à bras le corps avec l’aide de l’IA :",
    answers: [
      { text: "a) Vous demandez à l'IA une solution qui soit la plus efficace possible, puis vous vous concentrez sur la manière de l'intégrer directement dans votre processus de travail.", value: 0 },
      { text: "b) Vous analysez le problème en profondeur par vous-même, en utilisant l'IA uniquement pour obtenir des perspectives ou des informations complémentaires.", value: 1 }
    ]
  },
  {
    text: "7. Vous avez une charge de travail très élevée, et l'IA vous permet de générer rapidement des ébauches de documents, vous faisant gagner un temps précieux.",
    answers: [
      { text: "a) Vous utilisez le temps gagné pour une réflexion sur d'autres aspects du projet et vous assurer de la qualité supérieure du travail.", value: 1 },
      { text: "b) Vous appréciez le gain de temps et vous vous concentrez sur l'achèvement rapide de la tâche, sans nécessairement approfondir d'autres aspects.", value: 0 }
    ]
  }
];

// Explications/conseils personnalisés pour chaque profil :
const profils = [
  {
    title: "Utilisateur·trice IA Assisté·e / Dépendant·e",
    condition: score => score <= 2,
    explanation: "Vous déléguez beaucoup à l’IA : elle fait l’essentiel du travail de réflexion, ce qui peut limiter votre développement d’esprit critique et d’autonomie à long terme.",
    conseils: `
    <ul style="text-align:left;">
      <li>Essayez de garder l’habitude d’analyser et de vérifier ce que l’IA propose, même si cela prend du temps.</li>
      <li>Utilisez l’IA comme tremplin, pas comme béquille : reformulez ses réponses à votre manière.</li>
      <li>Pensez à garder la main sur la créativité et la structuration des idées.</li>
    </ul>
    `
  },
  {
    title: "Utilisateur·trice IA Équilibré·e / Collaboratif·ve",
    condition: score => score <= 4,
    explanation: "Vous profitez de l’IA pour gagner du temps et améliorer vos productions, tout en gardant un certain recul critique. C’est une approche pragmatique et efficace !",
    conseils: `
    <ul style="text-align:left;">
      <li>Poursuivez cet équilibre : continuez à questionner les résultats, mais sachez aussi exploiter la puissance de l’IA pour explorer de nouvelles pistes.</li>
      <li>Essayez parfois de réinvestir le temps gagné dans la vérification ou l’apprentissage de nouvelles compétences.</li>
      <li>Testez de nouvelles méthodes pour mieux exploiter l’IA sans vous reposer uniquement sur elle.</li>
    </ul>
    `
  },
  {
    title: "Utilisateur·trice IA Autonome / Esprit Critique",
    condition: score => score <= 7,
    explanation: "Vous restez acteur·rice de votre travail avec l’IA : elle ne remplace pas votre réflexion, elle l’enrichit. Vous vérifiez, vous synthétisez, vous améliorez : bravo !",
    conseils: `
    <ul style="text-align:left;">
      <li>Gardez cette dynamique : l’IA doit rester un outil à votre service, jamais un substitut total.</li>
      <li>Partagez vos méthodes avec d’autres pour diffuser une utilisation responsable de l’IA.</li>
      <li>Continuez à diversifier les usages de l’IA, sans perdre votre esprit d’analyse !</li>
    </ul>
    `
  }
];

let current = 0;
let score = 0;
let answers = [];

function showQuestion(index) {
  const quizDiv = document.getElementById('quiz');
  const q = questions[index];
  quizDiv.innerHTML = `
    <div class="question-text">${q.text}</div>
    <div>
      ${q.answers.map((a, i) => `
        <div class="answer" data-index="${i}">${a.text}</div>
      `).join('')}
    </div>
    <button id="nextBtn" disabled>Suivant</button>
    <div style="margin-top:14px;text-align:right;font-size:0.97em;color:#6777a7;">${index+1} / ${questions.length}</div>
  `;

  // gestion sélection
  let selected = null;
  document.querySelectorAll('.answer').forEach(el => {
    el.addEventListener('click', function() {
      document.querySelectorAll('.answer').forEach(a => a.classList.remove('selected'));
      this.classList.add('selected');
      selected = parseInt(this.getAttribute('data-index'));
      document.getElementById('nextBtn').disabled = false;
    });
  });

  document.getElementById('nextBtn').onclick = function() {
    if (selected !== null) {
      answers[index] = q.answers[selected].value;
      score += q.answers[selected].value;
      if (index < questions.length - 1) {
        current++;
        showQuestion(current);
      } else {
        showResult();
      }
    }
  }
}

function showResult() {
  document.getElementById('quiz').style.display = "none";
  let profil = profils.find(p => p.condition(score));
  document.getElementById('result').innerHTML = `
    <div class="profil-title">${profil.title}</div>
    <div style="margin-bottom:17px;">Score : <b>${score}</b> / 7</div>
    <div style="margin-bottom:20px;">${profil.explanation}</div>
    <div><b>Conseils pour progresser :</b>${profil.conseils}</div>
    <button style="margin-top:35px;" onclick="window.location.reload()">Recommencer le questionnaire</button>
  `;
}

window.onload = function() {
  showQuestion(current);
}
