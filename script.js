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

cconst profils = [
  // 0-2 points : Explorateur Insouciant
  {
    title: "L'Explorateur Insouciant de l'IA",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:2em; font-weight:700; margin-bottom:14px; color:#c62828; text-align:center;">
        L'Explorateur Insouciant de l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:18px; text-align:justify;">
        <b>Description :</b><br>
        Vous avez tendance à vous appuyer fortement sur les outils d'IA, que vous considérez souvent comme un substitut direct à l'effort cognitif personnel. Vous privilégiez la vitesse et la commodité, ce qui peut malheureusement entraîner une réduction de votre engagement critique et une dépendance à long terme vis-à-vis de l'outil. Vous êtes ainsi plus susceptible de succomber à la "paresse métacognitive" en déléguant vos responsabilités intellectuelles à l'IA.
      </div>
      <div style="font-size:1.16em; margin-bottom:18px; text-align:justify;">
        <b>Points d'attention :</b>
        <ul style="margin-top:8px; margin-bottom:8px;">
          <li><b>Offload cognitif</b> : Vous déléguez facilement des tâches cognitives à l'IA, ce qui peut vous amener à éviter un raisonnement analytique approfondi. <br><span style="color:#c62828;">Exemple : vous copiez une réponse IA sans jamais reformuler avec vos mots ou vérifier sa logique.</span></li>
          <li><b>Mémoire et rappel</b> : Cette forte reliance sur l’IA peut nuire à votre capacité à vous souvenir ou à citer des informations issues de votre propre travail. <br><span style="color:#c62828;">Exemple : impossible de réexpliquer le contenu d’un texte généré par IA même juste après l’avoir utilisé.</span></li>
          <li><b>Faible sentiment d'appropriation</b> : Vous pouvez ressentir un sentiment d'appartenance fragmenté vis-à-vis du travail produit avec l'IA. <br><span style="color:#c62828;">Exemple : vous hésitez à signer un rapport rédigé à partir de ChatGPT, car il ne “vous ressemble” pas.</span></li>
          <li><b>Pensée homogène</b> : Vos contenus peuvent manquer d’originalité et se caler sur les réponses types de l’IA. <br><span style="color:#c62828;">Exemple : vos emails ou rapports reprennent toujours les mêmes formulations générées.</span></li>
          <li><b>Confiance excessive en l'IA</b> : Vous faites confiance sans vérifier ni remettre en question l’information produite. <br><span style="color:#c62828;">Exemple : vous recopiez une date ou un chiffre proposé par l’IA sans la comparer à une source fiable.</span></li>
        </ul>
      </div>
      <div style="font-size:1.16em; margin-bottom:0px; text-align:justify;">
        <b>Pistes d'amélioration :</b>
        <ul style="margin-top:8px;">
          <li><b>Vérification active</b> : Recoupez systématiquement les informations générées par l’IA avec des sources fiables. <br><span style="color:#c62828;">Exemple : tapez une affirmation clé sur Google ou dans un ouvrage avant de la réutiliser.</span></li>
          <li><b>Développer votre expertise personnelle</b> : Cherchez à comprendre le raisonnement derrière chaque solution proposée. <br><span style="color:#c62828;">Exemple : si l’IA suggère une structure de plan, essayez d’expliquer pourquoi elle est pertinente avant de la reprendre.</span></li>
          <li><b>Orientation active de l’IA</b> : Jouez un vrai rôle de superviseur. <br><span style="color:#c62828;">Exemple : donnez des consignes précises (“rends le texte plus synthétique” ou “utilise le vocabulaire technique de mon secteur”).</span></li>
          <li><b>Équilibrer efficacité et réflexion</b> : Prenez le temps de revenir sur le texte généré pour l’améliorer ou l’approfondir. <br><span style="color:#c62828;">Exemple : ajoutez au moins une idée personnelle à chaque texte produit avec l’IA.</span></li>
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
      <div style="font-size:2em; font-weight:700; margin-bottom:14px; color:#1976d2; text-align:center;">
        Le Stratège de l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:18px; text-align:justify;">
        <b>Description :</b><br>
        Vous adoptez une approche nuancée, en utilisant l’IA comme un outil de soutien pour accroître votre efficacité sans sacrifier votre engagement cognitif. Vous reconnaissez les avantages de l’IA pour la productivité et vous pouvez vous sentir partiellement propriétaire du travail, même si vous avez parfois des doutes sur votre propre valeur ajoutée.
      </div>
      <div style="font-size:1.16em; margin-bottom:18px; text-align:justify;">
        <b>Points d'attention :</b>
        <ul style="margin-top:8px; margin-bottom:8px;">
          <li><b>Offload modéré</b> : Vous pouvez parfois sous-estimer la réflexion nécessaire pour certaines tâches, surtout en mode “copier-coller”. <br><span style="color:#1976d2;">Exemple : vous acceptez la proposition de structure de l’IA sans y apporter d’ajustement.</span></li>
          <li><b>Propriété partagée</b> : Vous ressentez une propriété partielle du travail. <br><span style="color:#1976d2;">Exemple : vous signez un rapport IA sans y apporter votre style, car il répond déjà “au cahier des charges”.</span></li>
          <li><b>Concentration sur l'intégration</b> : L’effort est déplacé vers l’adaptation du contenu IA à vos besoins, parfois au détriment de la création. <br><span style="color:#1976d2;">Exemple : vous reformulez les paragraphes IA, mais sans remettre en cause la structure globale.</span></li>
          <li><b>Biais de recherche</b> : L’IA peut vous ramener les réponses les plus courantes ou “SEO”. <br><span style="color:#1976d2;">Exemple : vous retrouvez dans votre texte des phrases toutes faites qu’on voit souvent en ligne.</span></li>
        </ul>
      </div>
      <div style="font-size:1.16em; margin-bottom:0px; text-align:justify;">
        <b>Pistes d'amélioration :</b>
        <ul style="margin-top:8px;">
          <li><b>Affinez vos prompts</b> : Apprenez à demander des réponses plus personnalisées ou originales à l’IA. <br><span style="color:#1976d2;">Exemple : demandez “Peux-tu développer avec des exemples issus du monde associatif ?”</span></li>
          <li><b>Personnalisez le contenu</b> : Ne vous contentez pas du résultat brut, ajoutez votre style, un exemple ou une anecdote personnelle. <br><span style="color:#1976d2;">Exemple : modifiez la conclusion IA pour inclure une expérience vécue.</span></li>
          <li><b>Diversifiez vos sources</b> : Consultez d’autres points de vue (livres, experts, collègues) en plus de l’IA. <br><span style="color:#1976d2;">Exemple : confrontez la réponse IA à une publication scientifique ou à une discussion avec un collègue.</span></li>
          <li><b>Évaluez la logique interne</b> : Relisez pour vérifier la cohérence globale et la pertinence. <br><span style="color:#1976d2;">Exemple : posez-vous la question “est-ce que l’argument tient la route du début à la fin ?”</span></li>
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
      <div style="font-size:2em; font-weight:700; margin-bottom:14px; color:#388e3c; text-align:center;">
        Le Maître de l'Esprit Critique Augmenté par l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:18px; text-align:justify;">
        <b>Description :</b><br>
        Vous démontrez un engagement cognitif élevé et un vrai sens de l’autonomie. Vous percevez l’IA comme un levier pour approfondir votre réflexion et générer des idées originales, tout en gardant le contrôle et la responsabilité du résultat. Votre confiance en vos compétences et votre sens du recul sont des atouts majeurs.
      </div>
      <div style="font-size:1.16em; margin-bottom:18px; text-align:justify;">
        <b>Points d'attention :</b>
        <ul style="margin-top:8px; margin-bottom:8px;">
          <li><b>Maintenir l'engagement</b> : Ne relâchez pas votre vigilance même quand l’IA semble “tout faire bien”. <br><span style="color:#388e3c;">Exemple : vous lisez attentivement chaque réponse IA avant de l’adopter, même si elle paraît parfaite.</span></li>
          <li><b>Évaluer la pertinence</b> : Questionnez la nuance ou la contextualisation des réponses IA. <br><span style="color:#388e3c;">Exemple : vous corrigez une généralité IA en l’illustrant par un cas local ou une exception concrète.</span></li>
          <li><b>Entretenir vos compétences</b> : Continuez à exercer vos propres capacités d’analyse et de créativité pour ne pas perdre la main. <br><span style="color:#388e3c;">Exemple : vous rédigez une partie du texte sans IA avant de comparer avec sa version.</span></li>
          <li><b>Détecter le style IA</b> : Restez attentif aux tournures “génériques” ou stéréotypées produites par l’outil. <br><span style="color:#388e3c;">Exemple : vous réécrivez une phrase trop lisse ou banale générée par l’IA pour y injecter votre style.</span></li>
        </ul>
      </div>
      <div style="font-size:1.16em; margin-bottom:0px; text-align:justify;">
        <b>Pistes d'amélioration :</b>
        <ul style="margin-top:8px;">
          <li><b>Utilisation hybride stratégique</b> : Utilisez l’IA pour l’exploration ou la structuration, mais revenez au travail “manuel” pour les idées centrales. <br><span style="color:#388e3c;">Exemple : laissez l’IA générer un plan, puis remplissez chaque partie de votre main.</span></li>
          <li><b>Renforcez vos réseaux neuronaux</b> : Variez les modes d'apprentissage et de réflexion. <br><span style="color:#388e3c;">Exemple : alternez lecture, écriture sans IA et brainstorming à l’ancienne.</span></li>
          <li><b>Misez sur la créativité</b> : Ajoutez toujours une touche personnelle ou inattendue. <br><span style="color:#388e3c;">Exemple : glissez une anecdote, une image ou une métaphore originale dans le texte final.</span></li>
          <li><b>Devenez un “expert IA”</b> : Cherchez à comprendre les mécanismes, les limites et les biais de l’outil. <br><span style="color:#388e3c;">Exemple : explorez les paramètres avancés de ChatGPT ou lisez un article sur l’éthique de l’IA.</span></li>
        </ul>
      </div>
    `
  }
];


let current = -1;
let score = 0;
let answers = [];

function render() {
  // Slide d'intro ou progression
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
    if (score >= 5) profil = profils[2];
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
        <div style="margin-top:30px; font-size:0.97em; color:#666; max-width:650px; margin-left:auto; margin-right:auto; line-height:1.48;">
          <hr style="margin:18px 0 10px 0; border:none; border-top:1px solid #e0e0e0;">
          <div style="font-size:1em; margin-bottom:6px;">
            <b>Ce questionnaire a été créé par <a href="https://www.linkedin.com/in/johan-creeten" target="_blank" style="color:#3973a5;text-decoration:underline;">Johan Creeten</a></b>
          </div>
          <div style="margin-bottom:3px;">
            <b>Sources :</b>
            <ul style="margin:7px 0 0 16px;padding:0;">
              <li>Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X.-H., Beresnitzky, A. V., Braunstein, I., &amp; Maes, P. (2025). Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task. Prépublication (probablement arXiv:2506.08872v1), MIT Media Lab, MIT, Wellesley College, Mass. College of Art and Design (MassArt).</li>
              <li>Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., &amp; Wilson, N. (2025). The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers. Dans CHI Conference on Human Factors in Computing Systems (CHI ’25), 26 avril – 1er mai 2025, Yokohama, Japon. ACM. DOI : 10.1145/3706598.3713778.</li>
              <li>Gerlich, M. (2025). AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking. Societies, 15(1), 6. DOI : 10.3390/soc15010006</li>
            </ul>
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
