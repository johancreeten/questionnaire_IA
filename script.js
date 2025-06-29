const questions = [
  {
    text: "🧐 Vous venez d'utiliser un outil d'IA pour rédiger un résumé complexe. Quelques heures plus tard, un collègue vous demande une info clé de ce résumé.",
    answers: [
      { text: "Je me souviens facilement de l'information précise, comme si je l'avais écrite moi-même.", value: 1 },
      { text: "J'ai du mal à me souvenir des détails, il faut que je relise ou consulte l'IA.", value: 0 }
    ]
  },
  {
    text: "👏 Vous avez créé une présentation avec l'aide de l'IA. Quand on vous félicite, vous vous demandez si c'est vraiment votre travail…",
    answers: [
      { text: "Non, je me sens fier/fière, c'est avant tout mon œuvre !", value: 1 },
      { text: "Oui, je me sens moins propriétaire, l'IA a fait beaucoup.", value: 0 }
    ]
  },
  {
    text: "🧑‍💼 Vous rédigez un document important et utilisez l’IA pour générer des ébauches ou sections entières.",
    answers: [
      { text: "Je supervise, affine et dirige vraiment le travail de l’IA.", value: 1 },
      { text: "Je laisse l’IA faire presque tout, je ne fais que corriger.", value: 0 }
    ]
  },
  {
    text: "💡 On attend de vous une idée créative ou innovante (campagne, concept…).",
    answers: [
      { text: "Je demande directement à l’IA des idées toutes faites.", value: 0 },
      { text: "J’ai mes propres idées et j’utilise l’IA pour organiser.", value: 1 }
    ]
  },
  {
    text: "🤩 L’IA propose une solution qui colle parfaitement à ce que vous attendiez pour une tâche.",
    answers: [
      { text: "Bluffé(e), je montre tout de suite le résultat à mes collègues !", value: 0 },
      { text: "Je préfère d'abord vérifier et tester le résultat, on ne sait jamais.", value: 1 }
    ]
  },
  {
    text: "🔎 Vous prenez à bras le corps un problème d’organisation de longue date dans votre service grâce à l’IA.",
    answers: [
      { text: "Je demande la solution la plus efficace à l’IA et je l’applique direct.", value: 0 },
      { text: "J’analyse moi-même, l’IA ne sert qu’à compléter mon analyse.", value: 1 }
    ]
  },
  {
    text: "⏰ Grosse charge de travail : l’IA vous fait gagner un temps précieux pour rédiger.",
    answers: [
      { text: "Je profite du temps gagné pour réfléchir plus loin et améliorer mon travail.", value: 1 },
      { text: "Je passe vite à la tâche suivante, priorité à l’efficacité !", value: 0 }
    ]
  }
];

const profils = [
  {
    // Profil le moins bon : EN ROUGE
    title: "Profil IA Assisté·e / Dépendant·e 😬",
    condition: score => score <= 2,
    color: "#ffeded",
    border: "#e53935",
    explanation: `
      <p style="margin-bottom:18px;">
        <b>Vous laissez l’IA penser, mémoriser et décider pour vous.</b>
        Dans votre quotidien, l’IA est devenue une sorte de “pilote automatique” : elle rédige, structure, synthétise, parfois sans que vous relisiez attentivement ni questionniez le résultat.
      </p>
      <p style="margin-bottom:18px;">
        Cela peut sembler confortable sur le moment, mais à terme, cela fragilise votre mémoire, votre esprit critique et votre capacité à défendre vos idées.  
        <b>Votre créativité et votre autonomie peuvent s’atrophier.</b>
      </p>
      <p style="font-weight:bold;">Conseils personnalisés pour vous :</p>
      <ul style="text-align:left; margin-bottom:20px;">
        <li>Essayez de reformuler chaque réponse de l’IA à votre façon, même brièvement.</li>
        <li>Prenez le temps de <b>vérifier</b> ce que propose l’IA : un clic de plus, une erreur de moins !</li>
        <li>Faites confiance à vos intuitions : osez d’abord réfléchir seul·e, puis seulement confronter votre point de vue à l’IA.</li>
      </ul>
      <p style="color:#b71c1c;"><b>Astuce :</b> Réservez-vous une tâche par jour “100% sans IA” pour muscler votre autonomie, comme on entretient un muscle !</p>
    `
  },
  {
    // Profil moyen : EN BLEU
    title: "Profil IA Collaboratif / Équilibré 🤝",
    condition: score => score <= 4,
    color: "#e3f2fd",
    border: "#1976d2",
    explanation: `
      <p style="margin-bottom:18px;">
        <b>Bravo : vous savez tirer profit de l’IA… sans pour autant lui déléguer toute votre réflexion !</b>
      </p>
      <p style="margin-bottom:18px;">
        Vous gagnez du temps, exploitez la puissance de l’IA pour la production et l’organisation, mais vous gardez globalement la main sur les choix et la vérification. Parfois, vous faites totalement confiance ; parfois, vous vérifiez ou retravaillez : c’est l’équilibre d’un·e utilisateur·trice “malin·e”.
      </p>
      <p style="font-weight:bold;">Conseils pour progresser encore :</p>
      <ul style="text-align:left; margin-bottom:20px;">
        <li>Réinvestissez une partie du temps gagné pour <b>apprendre de nouvelles choses</b> (pas seulement boucler vos tâches plus vite).</li>
        <li>Challengez régulièrement les réponses de l’IA, surtout si elles vous paraissent “parfaites”.</li>
        <li>Discutez avec d’autres de vos usages de l’IA, pour enrichir vos méthodes !</li>
      </ul>
      <p style="color:#1a237e;"><b>Astuce :</b> Testez de nouvelles formes d’IA (générateurs d’images, d’audio…) pour diversifier vos réflexes et sortir du “pilotage automatique”.</p>
    `
  },
  {
    // Profil le meilleur : EN VERT
    title: "Profil IA Autonome / Esprit critique 🏆",
    condition: score => score <= 7,
    color: "#e7fbe7",
    border: "#388e3c",
    explanation: `
      <p style="margin-bottom:18px;">
        <b>Félicitations ! Vous utilisez l’IA comme un·e vrai·e pro : elle ne remplace jamais votre réflexion, elle l’amplifie.</b>
      </p>
      <p style="margin-bottom:18px;">
        Vous vérifiez, vous recoupez, vous restez créatif·ve, et vous n’hésitez pas à remettre en question les suggestions de l’IA.  
        Vous faites de chaque interaction un apprentissage : c’est vous qui décidez, pas la machine !
      </p>
      <p style="font-weight:bold;">Conseils pour garder le cap :</p>
      <ul style="text-align:left; margin-bottom:20px;">
        <li>Partagez vos méthodes avec votre équipe : devenez un·e ambassadeur·rice d’une IA responsable !</li>
        <li>Gardez votre curiosité vivante, explorez des IA d’autres domaines (créativité, analyse, organisation, etc.).</li>
        <li>Faites des pauses régulières pour laisser émerger vos propres idées avant de consulter l’IA.</li>
      </ul>
      <p style="color:#176634;"><b>Astuce :</b> Notez chaque semaine ce que l’IA vous a permis d’apprendre… et ce que vous avez appris SANS elle. Le combo est imbattable !</p>
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
    <div class="question-text" style="font-size:1.21em; margin-bottom:28px;">${q.text}</div>
    <form id="answers-form">
      ${q.answers.map((a, i) => `
        <label class="checkbox-label">
          <input type="checkbox" name="answer" value="${i}" class="checkbox-custom">
          <span>${a.text}</span>
        </label>
      `).join('')}
      <button id="nextBtn" type="button" disabled>Suivant</button>
      <div style="margin-top:20px;text-align:right;font-size:1.06em;color:#6777a7;">${index+1} / ${questions.length}</div>
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
      border:2.7px solid ${profil.border};
      border-radius:18px;
      box-shadow:0 2px 18px #e1e2ea;
      margin:18px 0 0 0;
      padding:34px 24px 30px 24px;
      max-width:650px;
      margin-left:auto;margin-right:auto;
    ">
      <div class="profil-title" style="color:${profil.border};font-size:1.3em;margin-bottom:19px;">${profil.title}</div>
      ${profil.explanation}
      <div style="text-align:center;">
        <button style="margin-top:32px;" onclick="window.location.reload()">🔄 Recommencer le questionnaire</button>
      </div>
    </div>
    <div style="margin-top:25px;color:#909090;font-size:1em;text-align:center;">
      Score final : <b>${score}</b> / 7
    </div>
  `;
}

window.onload = function() {
  showQuestion(current);
};
