const questions = [
  {
    text: "🤔 Vous venez d'utiliser un outil d'IA pour rédiger un résumé détaillé d'un document complexe. Quelques heures plus tard, un collègue vous demande une information clé de ce résumé.",
    answers: [
      { text: "Vous parvenez facilement à vous souvenir de la phrase exacte ou de l'information précise, comme si vous l'aviez écrite vous-même.", value: 1 },
      { text: "Vous avez du mal à vous souvenir des détails exacts et sentez que vous auriez besoin de consulter à nouveau le résumé ou l'IA.", value: 0 }
    ]
  },
  {
    text: "👤 Vous avez créé une présentation avec l'aide substantielle d'une IA. Lorsque quelqu'un vous félicite pour votre travail, vous vous demandez à quel point le travail est réellement le vôtre ?",
    answers: [
      { text: "Non car vous ressentez un fort sentiment d'appropriation et de fierté pour l'ensemble du travail, considérant que l'IA n'était qu'un outil à votre service, votre touche personnelle ayant primé sur l'apport de l'IA.", value: 1 },
      { text: "Oui, vous avez un sentiment d'appartenance faible, attribuant une part significative, voire la majorité, du travail à l'IA (par exemple, vous pensez \"c'est surtout l'IA qui a tout fait, j'ai juste peaufiné\"), percevant l'œuvre comme moins originale.", value: 0 }
    ]
  },
  {
    text: "📝 Vous êtes en train de rédiger un document important et décidez d'utiliser une IA pour générer les premières ébauches ou des sections entières.",
    answers: [
      { text: "Votre rôle principal passe de l'exécution de l'écriture à la supervision, à la direction et à l'affinage constant du résultat de l'IA. Par exemple, en posant des questions de clarification, en demandant des reformulations spécifiques, en guidant l'IA vers des sources de données précises.", value: 1 },
      { text: "Vous laissez l'IA s'occuper de la majeure partie de la rédaction percevant l'IA comme un substitut majeur à votre travail d'exécution. Les activités d'analyse, de synthèse et d'évaluation exigent maintenant moins d'effort grâce à l’IA.", value: 0 }
    ]
  },
  {
    text: "🎨 On vous demande de produire une idée qui se veut particulièrement créative ou innovante, par exemple, un concept pour une nouvelle campagne de publicité.",
    answers: [
      { text: "Vous utilisez l'IA pour générer des idées ou des ébauches (par exemple, en demandant à l'IA des slogans publicitaires), ce qui vous permet d’atteindre rapidement le but demandé.", value: 0 },
      { text: "Vous avez déjà une grande partie du projet en tête et vous demandez à l’IA d’organiser vos idées. Cela vous permet de garder votre idée de départ mais cela vous prend plus de temps.", value: 1 }
    ]
  },
  {
    text: "✨ Extraordinaire ! L'IA produit un résultat qui correspond parfaitement à ce que vous attendiez pour une tâche, par exemple, une proposition de solution pour un problème récurrent. Vous êtes très satisfait.e.",
    answers: [
      { text: "Vous êtes bluffé.e par la puissance de l’IA, sa fluidité d’interaction et vous vous empressez de montrer aux collègues ce que l’IA a produit comme réponse.", value: 0 },
      { text: "Vous préférez évaluer le résultat d’abord en le mettant à l’épreuve même si cela prend plus de temps. Sait-on jamais que l’IA se serait trompée. Personne n’est infaillible après tout.", value: 1 }
    ]
  },
  {
    text: "🔍 Vous rencontrez un problème d’organisation depuis très longtemps dans le service dans lequel vous travaillez et vous décidez de prendre le problème à bras le corps avec l’aide de l’IA :",
    answers: [
      { text: "Vous demandez à l'IA une solution qui soit la plus efficace possible, puis vous vous concentrez sur la manière de l'intégrer directement dans votre processus de travail.", value: 0 },
      { text: "Vous analysez le problème en profondeur par vous-même, en utilisant l'IA uniquement pour obtenir des perspectives ou des informations complémentaires.", value: 1 }
    ]
  },
  {
    text: "⏳ Vous avez une charge de travail très élevée, et l'IA vous permet de générer rapidement des ébauches de documents, vous faisant gagner un temps précieux.",
    answers: [
      { text: "Vous utilisez le temps gagné pour une réflexion sur d'autres aspects du projet et vous assurer de la qualité supérieure du travail.", value: 1 },
      { text: "Vous appréciez le gain de temps et vous vous concentrez sur l'achèvement rapide de la tâche, sans nécessairement approfondir d'autres aspects.", value: 0 }
    ]
  }
];

const profils = [
  {
    title: "Utilisateur·trice IA Assisté·e / Dépendant·e 😬",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:1.13em;margin-bottom:15px;">
        <b>Vous déléguez beaucoup à l’IA.</b> À force de lui confier vos tâches cognitives, votre mémoire, votre sens critique et votre implication risquent de s’émousser. À court terme, c’est pratique ; à long terme, cela peut fragiliser votre capacité à défendre vos idées et à penser de façon autonome.
      </div>
      <div style="margin-bottom:13px;">
        <b>Pour progresser :</b>
        <ul style="text-align:left; margin-top:6px;">
          <li>Reformulez systématiquement les réponses de l’IA avec vos propres mots.</li>
          <li>Avant de demander à l’IA, essayez de réfléchir seul·e à la question.</li>
          <li>Consacrez chaque jour une tâche “sans IA” pour entraîner votre réflexion personnelle.</li>
        </ul>
      </div>
      <div style="margin-top:20px; font-style:italic; color:#c62828;">
        Conseil bonus : La meilleure façon d’apprendre d’un outil, c’est de rester plus fort·e que lui !
      </div>
    `
  },
  {
    title: "Utilisateur·trice IA Équilibré·e / Collaboratif·ve 🤝",
    color: "#e3f2fd",
    border: "#1976d2",
    explanation: `
      <div style="font-size:1.13em;margin-bottom:15px;">
        <b>Vous exploitez l’IA comme partenaire</b> : elle vous fait gagner du temps, vous inspire, mais vous gardez un rôle actif. Vous vérifiez, complétez, déléguez à bon escient. Cet équilibre protège votre esprit critique tout en bénéficiant de l’efficacité offerte par l’IA.
      </div>
      <div style="margin-bottom:13px;">
        <b>Pour aller plus loin :</b>
        <ul style="text-align:left; margin-top:6px;">
          <li>Réinvestissez le temps gagné pour apprendre ou explorer de nouvelles solutions.</li>
          <li>Challengez parfois les réponses de l’IA (demandez des alternatives ou des explications).</li>
          <li>Partagez vos méthodes avec d’autres pour enrichir vos usages !</li>
        </ul>
      </div>
      <div style="margin-top:20px; font-style:italic; color:#1976d2;">
        Conseil bonus : Variez les usages de l’IA pour garder votre curiosité active.
      </div>
    `
  },
  {
    title: "Utilisateur·trice IA Autonome / Esprit Critique 🏆",
    color: "#e7fbe7",
    border: "#388e3c",
    explanation: `
      <div style="font-size:1.15em;margin-bottom:17px;">
        <b>Félicitations !</b> Vous utilisez l’IA comme un·e pro : elle ne remplace jamais votre réflexion, elle la complète et la stimule. Vous contrôlez, questionnez, vérifiez : la décision finale vous appartient toujours.
      </div>
      <div style="margin-bottom:13px;">
        <b>Pour continuer sur cette lancée :</b>
        <ul style="text-align:left; margin-top:6px;">
          <li>Transmettez vos réflexes critiques à votre entourage : soyez un·e ambassadeur·rice de l’IA responsable.</li>
          <li>Testez de nouveaux outils IA, pour rester à la pointe tout en gardant votre discernement.</li>
          <li>Ne négligez jamais la relecture humaine, même après une proposition parfaite de l’IA.</li>
        </ul>
      </div>
      <div style="margin-top:20px; font-style:italic; color:#388e3c;">
        Conseil bonus : Faites de l’IA une source d’inspiration… mais continuez à penser librement !
      </div>
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
    <form id="answers-form">
      ${q.answers.map((a, i) => `
        <label class="checkbox-label">
          <input type="checkbox" name="answer" value="${i}" class="checkbox-custom">
          <span>${a.text}</span>
        </label>
      `).join('')}
      <button id="nextBtn" type="button" disabled>Suivant</button>
      <div style="margin-top:18px;text-align:right;font-size:1.05em;color:#6777a7;">${index+1} / ${questions.length}</div>
    </form>
  `;

  // Sélection unique avec checkboxes custom
  const checkboxes = quizDiv.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', function() {
      checkboxes.forEach(other => { if (other !== cb) other.checked = false; });
      document.getElementById('nextBtn').disabled = !cb.checked;
    });
  });

  document.getElementById('nextBtn').onclick = function() {
    let selectedIndex = -1;
    checkboxes.forEach((cb, idx) => { if (cb.checked) selectedIndex = idx; });
    if (selectedIndex !== -1) {
      answers[index] = q.answers[selectedIndex].value;
      score += q.answers[selectedIndex].value;
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
    <div style="
      background:${profil.color};
      border:2.5px solid ${profil.border};
      border-radius:15px;
      box-shadow:0 2px 12px #e1e2ea;
      margin:20px 0 0 0;
      padding:36px 20px 30px 20px;
      max-width:650px;
      margin-left:auto;margin-right:auto;
    ">
      <div class="profil-title" style="color:${profil.border};font-size:1.25em;margin-bottom:19px;">${profil.title}</div>
      ${profil.explanation}
      <div style="text-align:center;">
        <button style="margin-top:30px;" onclick="window.location.reload()">🔄 Recommencer le questionnaire</button>
      </div>
    </div>
    <div style="margin-top:23px;color:#909090;font-size:1em;text-align:center;">
      Score final : <b>${score}</b> / 7
    </div>
  `;
}

window.onload = function() {
  showQuestion(current);
};
