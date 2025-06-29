const questions = [
  {
    text: "🤔 Vous venez d'utiliser un outil d'IA pour rédiger un résumé détaillé d'un document complexe. Quelques heures plus tard, un collègue vous demande une information clé de ce résumé.",
    img: "IMG/question1.jpg",
    answers: [
      { text: "Vous vous souvenez facilement de la phrase exacte ou de l'information précise, comme si vous l'aviez écrite vous-même.", value: 1 },
      { text: "Vous avez du mal à vous souvenir des détails exacts et vous auriez besoin de consulter à nouveau le résumé ou l'IA.", value: 0 }
    ]
  },
  {
    text: "👤 Vous avez créé une présentation avec l'aide substantielle d'une IA. Lorsque quelqu'un vous félicite pour votre travail, vous vous demandez à quel point le travail est réellement le vôtre ?",
    img: "IMG/question2.jpg",
    answers: [
      { text: "Non, vous ressentez un fort sentiment d'appropriation et de fierté pour l'ensemble du travail, considérant que l'IA n'était qu'un outil à votre service, votre touche personnelle ayant primé sur l'apport de l'IA.", value: 1 },
      { text: "Oui, vous avez un sentiment d'appartenance faible, attribuant une part significative, voire la majorité, du travail à l'IA (par exemple, vous pensez « c'est surtout l'IA qui a tout fait, j'ai juste peaufiné »), percevant l'œuvre comme moins originale.", value: 0 }
    ]
  },
  {
    text: "📝 Vous êtes en train de rédiger un document important et décidez d'utiliser une IA pour générer les premières ébauches ou des sections entières.",
    img: "IMG/question3.jpg",
    answers: [
      { text: "Votre rôle principal passe de l'exécution de l'écriture à la supervision, à la direction et à l'affinage constant du résultat de l'IA. Par exemple, en posant des questions de clarification, en demandant des reformulations spécifiques, en guidant l'IA vers des sources de données précises.", value: 1 },
      { text: "Vous laissez l'IA s'occuper de la majeure partie de la rédaction et vous la percevez comme un substitut majeur à votre travail d'exécution. Les activités d'analyse, de synthèse et d'évaluation exigent maintenant moins d'effort grâce à l’IA.", value: 0 }
    ]
  },
  {
    text: "🎨 On vous demande de produire une idée particulièrement créative ou innovante, par exemple, un concept pour une nouvelle campagne de publicité.",
    img: "IMG/question4.jpg",
    answers: [
      { text: "Vous utilisez l'IA pour générer des idées ou des ébauches (par exemple, en demandant à l'IA des slogans publicitaires), ce qui vous permet d’atteindre rapidement le but demandé.", value: 0 },
      { text: "Vous avez déjà une grande partie du projet en tête et vous demandez à l’IA d’organiser vos idées. Cela vous permet de garder votre idée de départ mais cela vous prend plus de temps.", value: 1 }
    ]
  },
  {
    text: "✨ Extraordinaire ! L'IA produit un résultat qui correspond parfaitement à ce que vous attendiez pour une tâche, par exemple, une proposition de solution pour un problème récurrent. Vous êtes très satisfait.",
    img: "IMG/question5.jpg",
    answers: [
      { text: "Vous êtes bluffé par la puissance de l’IA, sa fluidité d’interaction et vous vous empressez de montrer aux collègues ce que l’IA a produit comme réponse.", value: 0 },
      { text: "Vous préférez évaluer le résultat d’abord en le mettant à l’épreuve même si cela prend plus de temps. Sait-on jamais que l’IA se serait trompée. Personne n’est infaillible après tout.", value: 1 }
    ]
  },
  {
    text: "🔍 Vous rencontrez un problème d’organisation depuis très longtemps dans le service où vous travaillez et vous décidez de prendre le problème à bras le corps avec l’aide de l’IA.",
    img: "IMG/question6.jpg",
    answers: [
      { text: "Vous demandez à l'IA une solution qui soit la plus efficace possible, puis vous vous concentrez sur la manière de l'intégrer directement dans votre processus de travail.", value: 0 },
      { text: "Vous analysez le problème en profondeur par vous-même, en utilisant l'IA uniquement pour obtenir des perspectives ou des informations complémentaires.", value: 1 }
    ]
  },
  {
    text: "⏳ Vous avez une charge de travail très élevée, et l'IA vous permet de générer rapidement des ébauches de documents, vous faisant gagner un temps précieux.",
    img: "IMG/question7.jpg",
    answers: [
      { text: "Vous utilisez le temps gagné pour une réflexion sur d'autres aspects du projet et pour vous assurer de la qualité supérieure du travail.", value: 1 },
      { text: "Vous appréciez le gain de temps et vous vous concentrez sur l'achèvement rapide de la tâche, sans nécessairement approfondir d'autres aspects.", value: 0 }
    ]
  }
];

const profils = [
  // 0-2 points : Explorateur Insouciant
  {
    title: "L'Explorateur Insouciant de l'IA",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:1.13em; margin-bottom:18px; text-align:justify;">
        <b>Description :</b><br>
        Vous avez tendance à vous appuyer fortement sur les outils d'IA, que vous considérez souvent comme un substitut direct à l'effort cognitif personnel. Vous privilégiez la vitesse et la commodité, ce qui peut malheureusement entraîner une réduction de votre engagement critique et une dépendance à long terme vis-à-vis de l'outil. Vous êtes ainsi plus susceptible de succomber à la "paresse métacognitive" en déléguant vos responsabilités intellectuelles à l'IA.
      </div>
      <div style="margin-bottom:13px; text-align:justify;">
        <b>Points d'attention contextualisés :</b>
        <ul style="margin-top:6px;">
          <li>• <b>Offload cognitif et "paresse métacognitive"</b> : Vous déléguez facilement des tâches cognitives à l'IA, ce qui peut vous amener à contourner un raisonnement analytique profond. Cette dépendance peut entraîner une forme de "paresse métacognitive", où vos responsabilités cognitives et métacognitives sont transférées à l'IA, ce qui freine votre capacité d'auto-régulation et votre engagement profond avec le matériel.</li>
          <li>• <b>Mémoire et rappel altérés</b> : Cette forte reliance sur l’IA peut nuire à votre capacité à vous souvenir ou à citer des informations issues de votre propre travail, même celles produites récemment. Votre cerveau risque de s’engager moins profondément dans les processus de mémoire, traitant l’information générée par l’outil de manière plus passive.</li>
          <li>• <b>Faible sentiment d'appropriation</b> : Vous pouvez ressentir un sentiment d'appartenance fragmenté, voire absent, vis-à-vis du travail produit avec l'IA, attribuant une part significative, voire la majorité, du crédit à l'outil.</li>
          <li>• <b>Pensée homogène et biaisée</b> : Vos contenus peuvent être statistiquement homogènes et manquer de déviation par rapport aux réponses par défaut de l'IA, avec un biais vers des formes de langage courantes et des réponses moins originales.</li>
          <li>• <b>Confiance excessive en l'IA</b> : Une confiance élevée dans la capacité de l'IA à effectuer la tâche est souvent associée à moins de pensée critique et à une sous-estimation de la nécessité de vérifier les informations.</li>
        </ul>
      </div>
      <div style="margin-bottom:13px; text-align:justify;">
        <b>Pistes d'améliorations contextualisées :</b>
        <ul style="margin-top:6px;">
          <li>• <b>Pratiquez la vérification active</b> : Vérifiez et recoupez systématiquement les informations générées par l’IA avec des sources externes fiables, même pour des tâches simples. Développez un scepticisme sain face aux suggestions de l’outil.</li>
          <li>• <b>Développez votre expertise personnelle</b> : Cherchez à comprendre les principes sous-jacents des solutions offertes par l’IA, plutôt que de simplement les copier ou les appliquer sans réflexion. Posez-vous la question : « Comment aurais-je fait sans l’IA ? »</li>
          <li>• <b>Engagez une "stewardship" active</b> : Passez d’une exécution passive à un rôle de supervision et d’orientation active de l’IA, en affinant et personnalisant les résultats. Interagissez avec l’IA comme avec un assistant junior qui a besoin d’être guidé.</li>
          <li>• <b>Équilibrez efficacité et engagement</b> : Utilisez le temps gagné grâce à l’IA pour réfléchir plus en profondeur, améliorer la qualité de votre travail ou explorer de nouvelles idées, plutôt que de passer immédiatement à la tâche suivante.</li>
        </ul>
      </div>
    `
  },
  // 3-4 points : Le Stratège de l'IA
  {
    title: "Le Stratège de l'IA",
    color: "#e3f2fd",
    border: "#1976d2",
    explanation: `
      <div style="font-size:1.13em; margin-bottom:18px; text-align:justify;">
        <b>Description :</b><br>
        Vous adoptez une approche plus nuancée, en utilisant l’IA comme un outil de soutien pour accroître votre efficacité sans sacrifier complètement votre engagement cognitif. Vous reconnaissez les avantages de l’IA pour la productivité et vous pouvez vous sentir partiellement propriétaire du travail. Cependant, il peut encore subsister des angles morts concernant la profondeur de votre réflexion critique ou la confiance en vos capacités à effectuer la tâche sans l’outil.
      </div>
      <div style="margin-bottom:13px; text-align:justify;">
        <b>Points d'attention contextualisés :</b>
        <ul style="margin-top:6px;">
          <li>• <b>Offload modéré mais persistant</b> : Même si vous vous engagez plus que l’utilisateur dépendant, vous pouvez parfois sous-estimer la profondeur de l’engagement cognitif nécessaire pour certaines tâches, menant à une forme de "paresse" ou à un manque de stimulation pour la résolution de problèmes indépendante.</li>
          <li>• <b>Propriété partagée et intégration</b> : Vous ressentez une propriété partielle du travail, reconnaissant l’apport de l’IA tout en y ajoutant votre touche personnelle. Cet équilibre est positif, mais veillez à ne pas vous contenter du minimum.</li>
          <li>• <b>Concentration sur l'intégration</b> : L’effort est déplacé de la résolution de problèmes à l’intégration des réponses de l’IA, ce qui peut nécessiter une adaptation pour aligner le contenu généré avec vos directives spécifiques.</li>
          <li>• <b>Biais potentiel des moteurs de recherche</b> : Si vous utilisez des moteurs de recherche en parallèle, vous pouvez être sensible aux "bulles de filtre" et au contenu optimisé pour le référencement, ce qui influence le vocabulaire et les concepts de vos écrits.</li>
        </ul>
      </div>
      <div style="margin-bottom:13px; text-align:justify;">
        <b>Pistes d'améliorations contextualisées :</b>
        <ul style="margin-top:6px;">
          <li>• <b>Affinez vos prompts</b> : Développez des compétences avancées en ingénierie d'invites pour guider plus précisément l’IA et obtenir des résultats personnalisés et moins génériques. L’objectif est d’orienter l’IA, pas de la laisser prendre les rênes.</li>
          <li>• <b>Intégrez de manière critique et personnalisez</b> : Ne vous contentez pas de copier-coller, mais éditez et retravaillez activement le contenu généré par l’IA pour y ajouter votre style unique et garantir la cohérence avec vos objectifs.</li>
          <li>• <b>Diversifiez vos sources de pensée</b> : Ne vous fiez pas uniquement à l’IA ou aux premiers résultats de recherche. Explorez d’autres perspectives, ressources et sollicitez la réflexion personnelle et l’interaction humaine pour enrichir vos idées.</li>
          <li>• <b>Évaluez la logique interne</b> : Allez au-delà de la simple vérification factuelle : analysez la cohérence, la pertinence et la logique interne des arguments ou des structures proposées par l’IA.</li>
        </ul>
      </div>
    `
  },
  // 5-7 points : Le Maître de l'Esprit Critique Augmenté par l'IA
  {
    title: "Le Maître de l'Esprit Critique Augmenté par l'IA",
    color: "#e7fbe7",
    border: "#388e3c",
    explanation: `
      <div style="font-size:1.13em; margin-bottom:18px; text-align:justify;">
        <b>Description :</b><br>
        Vous démontrez un niveau élevé d'engagement cognitif, de pensée critique et d'autonomie. Vous percevez l’IA comme un outil d’augmentation de vos propres capacités, en l’utilisant stratégiquement pour approfondir votre compréhension et générer des idées originales, tout en maintenant un sens aigu de la propriété et de la responsabilité de votre travail. Votre confiance en vos compétences vous pousse à toujours plus d’engagement critique.
      </div>
      <div style="margin-bottom:13px; text-align:justify;">
        <b>Points d'attention contextualisés :</b>
        <ul style="margin-top:6px;">
          <li>• <b>Maintenez un engagement profond</b> : Même avec des compétences critiques solides, restez vigilant face à la tentation de la facilité qui pourrait réduire votre engagement profond et l’automatisation de schémas cognitifs robustes.</li>
          <li>• <b>Évaluez constamment la pertinence</b> : Assurez-vous que l’IA ne renforce pas des biais existants ou ne fournisse pas des informations certes correctes, mais sans nuance ou pertinence contextuelle.</li>
          <li>• <b>Évitez l'atrophie des compétences</b> : Veillez à ce que l’utilisation de l’IA ne conduise pas à une atrophie de vos compétences pour le brainstorming ou la résolution de problèmes, en continuant à exercer activement votre réflexion et votre créativité.</li>
          <li>• <b>Détectez le "style IA"</b> : Continuez à cultiver votre capacité à repérer les éléments stylistiques homogènes et génériques typiques des contenus générés par l’IA, même si l’outil progresse.</li>
        </ul>
      </div>
      <div style="margin-bottom:13px; text-align:justify;">
        <b>Pistes d'améliorations contextualisées :</b>
        <ul style="margin-top:6px;">
          <li>• <b>Optez pour une utilisation hybride stratégique</b> : Intégrez l’IA pour les aspects routiniers, les phases exploratoires ou le scaffolding, mais revenez toujours à l’effort cognitif auto-dirigé pour les tâches fondamentales comme la génération d’idées, l’organisation et la révision critique.</li>
          <li>• <b>Renforcez vos réseaux neuronaux</b> : Participez à des activités qui sollicitent activement vos circuits de planification, de langage et d’attention, en alternant les phases d’apprentissage avec et sans IA.</li>
          <li>• <b>Misez sur l’originalité et la profondeur</b> : Cherchez délibérément à injecter votre personnalité, créativité et nuance dans les contenus produits, en allant au-delà de la perfection ou de la conformité.</li>
          <li>• <b>Devenez un "expert" de l'IA</b> : Cherchez à comprendre non seulement comment utiliser l’IA, mais aussi ses mécanismes internes, ses limites et ses biais potentiels, pour mieux la superviser et la questionner, devenant ainsi un partenaire éclairé et responsable.</li>
        </ul>
      </div>
    `
  }
];


let current = -1;
let score = 0;
let answers = [];

function render() {
  // Barre de progression
  let progressBar = document.getElementById('progress-bar');
  if (current === -1) {
    progressBar.style.display = 'none';
    document.getElementById('app').innerHTML = `
      <h1 style="margin-bottom:10px;">Quel genre d’utilisateur d’IA êtes-vous&nbsp;?</h1>
      <div class="subtitle" style="margin-bottom:18px; font-size:1.35em; color:#111; line-height:1.15;">
        7 questions-clés pour révéler votre niveau et booster vos usages&nbsp;!
      </div>
      <div style="font-size:1.07em; margin-bottom:16px; color:#111; text-align:justify; line-height:1.45;">
        Testez-vous en 2 minutes et découvrez des conseils personnalisés pour progresser et mieux utiliser l’intelligence artificielle au quotidien.<br><br>
        Pour un résultat fiable, répondez en toute franchise à chaque question.<br>
        Le masculin employé dans ce questionnaire l'est à titre épicène, pour simplifier la lecture.
      </div>
      <button id="startBtn">Commencer</button>
    `;
    document.getElementById('startBtn').onclick = () => {
      current = 0; score = 0; answers = [];
      render();
    }
    return;
  } else {
    progressBar.style.display = '';
    const percent = Math.round((current / questions.length) * 100);
    progressBar.innerHTML = `
      <div id="progress-bar-inner" style="width:${percent}%;position:relative;">
        <span style="
          position:absolute;
          left:0; right:0; top:0; bottom:0;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-weight:bold;
          font-size:1.05em;
          text-shadow: 0 1px 2px #222, 0 0 4px #388e3c99;
          letter-spacing:0.5px;
          ">
          ${percent}%
        </span>
      </div>
    `;
  }

  // Questions
  if (current < questions.length) {
    const q = questions[current];
    document.getElementById('app').innerHTML = `
      <img src="${q.img}" alt="" class="question-illustration" loading="lazy">
      <div class="question-text">${q.text}</div>
      <div class="choice-row">
        ${q.answers.map((a, i) => `
          <div class="choice-block" data-index="${i}">${a.text.replace(/^a\)\s*/i, '').replace(/^b\)\s*/i, '')}</div>
        `).join('')}
      </div>
      <button id="nextBtn" type="button" disabled>Suivant</button>
      <div style="margin-top:15px;text-align:right;font-size:1.04em;color:#6777a7;">
        ${current+1} / ${questions.length}
      </div>
    `;

    let selected = null;
    const cards = document.querySelectorAll('.choice-block');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        selected = parseInt(this.getAttribute('data-index'));
        document.getElementById('nextBtn').disabled = false;
      });
    });

    document.getElementById('nextBtn').onclick = function() {
      if (selected !== null) {
        answers[current] = q.answers[selected].value;
        score += q.answers[selected].value;
        current++;
        render();
      }
    }
    return;
  }

  // Résultat final
  if (current === questions.length) {
    // On masque la barre de progression
    progressBar.style.display = 'none';

    // Calcul du score en pourcentage
    const percentScore = Math.round((score / questions.length) * 100);
    let profil;
    if (score >= 6) profil = profils[2];
    else if (score >= 3) profil = profils[1];
    else profil = profils[0];
    let scoreColor = profil.border;

    document.getElementById('app').innerHTML = `
      <div id="result">
        <div style="text-align:center; margin-bottom:20px;">
          <span style="
            display:inline-block;
            font-size:2.3em;
            font-weight:700;
            color:${scoreColor};
            margin-bottom:5px;
            letter-spacing:1px;
          ">${percentScore}%</span>
          <div style="font-size:1.06em; color:#444; margin-top:2px;">de maîtrise IA</div>
        </div>
        <div style="
          background:${profil.color};
          border:2.5px solid ${profil.border};
          border-radius:15px;
          box-shadow:0 2px 12px #e1e2ea;
          margin:8px 0 0 0;
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
      </div>
    `;
  }
}

window.onload = function() {
  current = -1;
  render();
}
