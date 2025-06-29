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
  // Profil 0 : Explorateur Insouciant
  {
    title: "L'Explorateur Insouciant de l'IA",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:2em; font-weight:700; margin-bottom:18px; color:#c62828; text-align:center;">
        L'Explorateur Insouciant de l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:24px; text-align:justify;">
        <b>Description :</b><br>
        Vous avez tendance à vous appuyer fortement sur les outils d'IA, les considérant souvent comme un substitut direct à l'effort cognitif personnel. Vous privilégiez la vitesse et la commodité, ce qui peut malheureusement entraîner une réduction de l'engagement critique et une dépendance à long terme vis-à-vis de l'outil. Ce profil est plus susceptible de succomber à la "paresse métacognitive" en déléguant des responsabilités intellectuelles à l'IA.
      </div>
      <div style="
        background: #fff5f5;
        border: 1.5px solid #f4cccc;
        border-radius: 11px;
        padding: 19px 16px 14px 16px;
        margin-bottom:24px;">
        <div style="font-size:1.13em; font-weight:700; color:#b22020; margin-bottom:10px;">
          ⚠️ Points d'attention
        </div>
        <ul style="margin-top:6px;">
          <li>
            <b>Offload cognitif et "paresse métacognitive"</b> : Ce profil est très susceptible de déléguer des tâches cognitives à l'IA, ce qui peut lui faire contourner un raisonnement analytique profond. Cette dépendance peut entraîner une forme de "paresse métacognitive", où les responsabilités cognitives et métacognitives sont transférées à l'IA, ce qui entrave sa capacité d'auto-régulation et son engagement profond avec le matériel.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous copiez une réponse IA sans jamais reformuler avec vos mots ou vérifier sa logique.
            </div>
          </li>
          <li>
            <b>Mémoire et rappel altérés</b> : La forte reliance sur une IA peut considérablement nuire à la capacité de se souvenir ou de citer des informations issues de son propre travail, même celles produites quelques minutes auparavant. Son cerveau pourrait s'engager moins profondément dans les processus de mémoire, traitant l'information générée par l'outil de manière plus passive.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : impossible de réexpliquer le contenu d’un texte généré par IA même juste après l’avoir utilisé.
            </div>
          </li>
          <li>
            <b>Faible sentiment d'appropriation</b> : L'utilisateur peut ressentir un sentiment d'appartenance fragmenté, voire absent, vis-à-vis du travail produit avec l'IA, attribuant une part significative, voire la majorité, du crédit à l'outil.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous hésitez à signer un rapport rédigé à partir de ChatGPT, car il ne “vous ressemble” pas.
            </div>
          </li>
          <li>
            <b>Pensée homogène et biaisée</b> : Les contenus qu'il produit peuvent être statistiquement homogènes au sein d'un même sujet et manquer de déviation par rapport aux réponses par défaut de l'IA, avec un biais vers des formes de langage courantes et des réponses moins originales.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vos emails ou rapports reprennent toujours les mêmes formulations générées.
            </div>
          </li>
          <li>
            <b>Confiance excessive en l'IA</b> : Une confiance élevée dans la capacité de l'IA à effectuer la tâche est fortement associée à moins de pensée critique et à une sous-estimation de la nécessité de vérifier les informations.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous recopiez une date ou un chiffre proposé par l’IA sans la comparer à une source fiable.
            </div>
          </li>
        </ul>
      </div>
      <div style="
        background: #f7fbf6;
        border: 1.5px solid #d0eadc;
        border-radius: 11px;
        padding: 19px 16px 14px 16px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:10px;">
          💡 Pistes d'améliorations
        </div>
        <ul style="margin-top:6px;">
          <li>
            <b>Pratiquer la vérification active</b> : Toujours vérifier et recouper les informations générées par l'IA avec des sources externes fiables, même pour des tâches simples. Développer un scepticisme sain face à l'output.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : tapez une affirmation clé sur Google ou dans un ouvrage avant de la réutiliser.
            </div>
          </li>
          <li>
            <b>Développer l'expertise personnelle</b> : Chercher à comprendre les principes sous-jacents des solutions offertes par l'IA, plutôt que de simplement les copier ou les appliquer sans réflexion. Se poser la question : "Comment aurais-je fait sans l'IA ?".
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : si l’IA suggère une structure de plan, essayez d’expliquer pourquoi elle est pertinente avant de la reprendre.
            </div>
          </li>
          <li>
            <b>Engager une "stewardship" active</b> : Passer d'une exécution passive à un rôle de supervision et d'orientation active de l'IA, en affinant et en personnalisant les résultats. Interagir avec l'IA comme avec un assistant junior qui a besoin d'être guidé.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : donnez des consignes précises (“rends le texte plus synthétique” ou “utilise le vocabulaire technique de mon secteur”).
            </div>
          </li>
          <li>
            <b>Équilibrer l'efficacité et l'engagement</b> : Utiliser le temps gagné par l'IA pour une réflexion plus approfondie, pour améliorer la qualité du travail ou pour explorer de nouvelles idées, plutôt que de passer immédiatement à la tâche suivante.
            <div style="color:#c62828;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : ajoutez au moins une idée personnelle à chaque texte produit avec l’IA.
            </div>
          </li>
        </ul>
      </div>
    `
  },
  // Profil 1 : Stratège de l'IA
  {
    title: "Le Stratège de l'IA",
    color: "#e3f2fd",
    border: "#1976d2",
    explanation: `
      <div style="font-size:2em; font-weight:700; margin-bottom:18px; color:#1976d2; text-align:center;">
        Le Stratège de l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:24px; text-align:justify;">
        <b>Description :</b><br>
        Vous adoptez une approche plus nuancée, utilisant l'IA comme un outil de soutien pour accroître votre efficacité sans nécessairement sacrifier complètement votre engagement cognitif. Vous reconnaissez les avantages de l'IA pour la productivité et pouvez vous sentir partiellement propriétaire du travail, mais vous pouvez encore avoir des angles morts concernant la profondeur de votre réflexion critique ou votre propre confiance en vos capacités à effectuer la tâche sans l'outil.
      </div>
      <div style="
        background: #f3f8fe;
        border: 1.5px solid #b3d1f5;
        border-radius: 11px;
        padding: 19px 16px 14px 16px;
        margin-bottom:24px;">
        <div style="font-size:1.13em; font-weight:700; color:#2176c1; margin-bottom:10px;">
          ⚠️ Points d'attention
        </div>
        <ul style="margin-top:6px;">
          <li>
            <b>Offload modéré mais persistant</b> : Bien que vous puissiez vous engager davantage que l'utilisateur dépendant, il peut arriver de sous-estimer la profondeur de l'engagement cognitif nécessaire pour certaines tâches, menant à une forme de "paresse" ou à un manque de stimulation mentale pour la résolution de problèmes indépendante.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous acceptez la proposition de structure de l’IA sans y apporter d’ajustement.
            </div>
          </li>
          <li>
            <b>Propriété partagée et intégration</b> : Vous pouvez ressentir une propriété partielle du travail, reconnaissant l'apport de l'IA tout en y ajoutant votre touche personnelle. Cela peut être un bon équilibre, mais vous devez veiller à ne pas vous contenter du minimum.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous signez un rapport IA sans y apporter votre style, car il répond déjà “au cahier des charges”.
            </div>
          </li>
          <li>
            <b>Concentration sur l'intégration</b> : L'effort est déplacé de la résolution de problèmes à l'intégration des réponses de l'IA, ce qui peut encore nécessiter une adaptation substantielle pour aligner le contenu généré avec des directives spécifiques.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous reformulez les paragraphes IA, mais sans remettre en cause la structure globale.
            </div>
          </li>
          <li>
            <b>Biais potentiel des moteurs de recherche</b> : Si vous utilisez des moteurs de recherche en parallèle, vous pouvez être susceptible aux "bulles de filtre" et au contenu optimisé pour le référencement, ce qui peut influencer le vocabulaire et les concepts de vos écrits.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous retrouvez dans votre texte des phrases toutes faites qu’on voit souvent en ligne.
            </div>
          </li>
        </ul>
      </div>
      <div style="
        background: #f4fafd;
        border: 1.5px solid #bee1f2;
        border-radius: 11px;
        padding: 19px 16px 14px 16px;">
        <div style="font-size:1.13em; font-weight:700; color:#1976d2; margin-bottom:10px;">
          💡 Pistes d'améliorations
        </div>
        <ul style="margin-top:6px;">
          <li>
            <b>Affiner les invites (prompts)</b> : Développer des compétences avancées en ingénierie d'invites pour guider plus précisément l'IA et obtenir des résultats plus personnalisés et moins génériques. L'objectif est d'orienter l'IA, pas de la laisser prendre les rênes.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : demandez “Peux-tu développer avec des exemples issus du monde associatif ?”.
            </div>
          </li>
          <li>
            <b>Intégration critique et personnalisation</b> : Ne pas se contenter de copier-coller, mais éditer et retravailler activement le contenu généré par l'IA pour y ajouter une touche personnelle, un style unique et s'assurer qu'il correspond parfaitement aux objectifs et à votre propre voix.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : modifiez la conclusion IA pour inclure une expérience vécue.
            </div>
          </li>
          <li>
            <b>Diversifier les sources de pensée</b> : Ne pas se fier uniquement à l'IA ou aux premiers résultats de recherche, mais explorer une gamme plus large de perspectives et de ressources (y compris la réflexion personnelle et l'interaction humaine) pour enrichir votre compréhension et vos idées.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : confrontez la réponse IA à une publication scientifique ou à une discussion avec un collègue.
            </div>
          </li>
          <li>
            <b>Évaluer la logique interne</b> : Au-delà de la simple vérification factuelle, s'attarder sur la cohérence, la pertinence et la logique interne des arguments ou des structures proposées par l'IA.
            <div style="color:#1976d2;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : posez-vous la question “est-ce que l’argument tient la route du début à la fin ?”.
            </div>
          </li>
        </ul>
      </div>
    `
  },
  // Profil 2 : Maître de l'Esprit Critique
  {
    title: "Le Maître de l'Esprit Critique Augmenté par l'IA",
    color: "#e7fbe7",
    border: "#388e3c",
    explanation: `
      <div style="font-size:2em; font-weight:700; margin-bottom:18px; color:#388e3c; text-align:center;">
        Le Maître de l'Esprit Critique Augmenté par l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:24px; text-align:justify;">
        <b>Description :</b><br>
        Vous démontrez un niveau élevé d'engagement cognitif, de pensée critique et d'autonomie. Vous percevez l'IA comme un outil d'augmentation de vos propres capacités, en l'utilisant stratégiquement pour approfondir votre compréhension et générer des idées originales, tout en maintenant un sens aigu de la propriété et de la responsabilité de votre travail. Votre confiance en vos propres compétences vous pousse à davantage d'engagement critique.
      </div>
      <div style="
        background: #eefbee;
        border: 1.5px solid #b9e9c7;
        border-radius: 11px;
        padding: 19px 16px 14px 16px;
        margin-bottom:24px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:10px;">
          ⚠️ Points d'attention
        </div>
        <ul style="margin-top:6px;">
          <li>
            <b>Maintenir l'engagement profond</b> : Même avec des compétences critiques solides, vous devez rester vigilant face à la tentation de la "facilité" qui pourrait réduire l'engagement profond et l'automatisation de schémas cognitifs robustes.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous lisez attentivement chaque réponse IA avant de l’adopter, même si elle paraît parfaite.
            </div>
          </li>
          <li>
            <b>Évaluation constante de la pertinence</b> : S'assurer que l'IA ne renforce pas des biais existants ou ne fournit pas d'informations qui, bien que correctes, manquent de nuance ou de pertinence contextuelle.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous corrigez une généralité IA en l’illustrant par un cas local ou une exception concrète.
            </div>
          </li>
          <li>
            <b>Éviter l'atrophie des compétences</b> : Veillez à ce que l'utilisation de l'IA ne conduise pas à une "atrophie des compétences" dans des tâches comme le brainstorming et la résolution de problèmes, en maintenant un exercice actif des circuits neuronaux pour le contrôle exécutif et la génération d'idées.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous rédigez une partie du texte sans IA avant de comparer avec sa version.
            </div>
          </li>
          <li>
            <b>Détecter le "style IA"</b> : Continuez à développer une capacité à identifier les éléments stylistiques homogènes et génériques souvent présents dans les contenus générés par l'IA, même si l'IA s'améliore.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : vous réécrivez une phrase trop lisse ou banale générée par l’IA pour y injecter votre style.
            </div>
          </li>
        </ul>
      </div>
      <div style="
        background: #f7fcf6;
        border: 1.5px solid #c1f0cb;
        border-radius: 11px;
        padding: 19px 16px 14px 16px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:10px;">
          💡 Pistes d'améliorations
        </div>
        <ul style="margin-top:6px;">
          <li>
            <b>Utilisation hybride stratégique</b> : Intégrer l'IA pour les aspects routiniers, les phases exploratoires initiales ou le scaffolding, mais toujours revenir à l'effort cognitif auto-dirigé pour les processus fondamentaux comme la génération d'idées, l'organisation et la révision critique.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : laissez l’IA générer un plan, puis remplissez chaque partie de votre main.
            </div>
          </li>
          <li>
            <b>Renforcer les réseaux neuronaux</b> : Participer à des activités qui exercent activement les réseaux cérébraux associés à la planification, au langage et au contrôle attentionnel, en alternant les phases d'apprentissage avec et sans IA. Cela permet de développer des réseaux robustes.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : alternez lecture, écriture sans IA et brainstorming à l’ancienne.
            </div>
          </li>
          <li>
            <b>Mettre l'accent sur l'originalité et la profondeur</b> : Chercher délibérément à injecter de la personnalité, de la créativité et des nuances personnelles dans les contenus produits, allant au-delà de la perfection objective ou de la simple conformité.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : glissez une anecdote, une image ou une métaphore originale dans le texte final.
            </div>
          </li>
          <li>
            <b>Devenir un "expert" de l'IA</b> : Comprendre non seulement comment utiliser l'IA, mais aussi ses mécanismes internes, ses limites et ses biais potentiels, pour mieux la "stewarder" (superviser) et la remettre en question, devenant un partenaire éclairé et responsable.
            <div style="color:#388e3c;font-size:0.97em;margin:6px 0 12px 0;padding-left:18px;">
              Exemple : explorez les paramètres avancés de ChatGPT ou lisez un article sur l’éthique de l’IA.
            </div>
          </li>
        </ul>
      </div>
    `
  }
];

let current = -1;
let score = 0;
let answers = [];

function render() {
  let progressBar = document.getElementById('progress-bar');
  if (current === -1) {
    progressBar.style.display = 'none';
    document.getElementById('app').innerHTML = `
      <h1 style="margin-bottom:10px; color:#1846a1; font-weight:700;">
  🕵️ Quel genre d’utilisateur d’IA êtes-vous&nbsp;?
</h1>
      <div class="subtitle" style="margin-bottom:18px; font-size:1.35em; color:#111; line-height:1.15;">
        7 questions-clés pour révéler votre niveau et booster vos usages&nbsp;!
      </div>
      <div style="font-size:1.07em; margin-bottom:16px; color:#111; text-align:justify; line-height:1.45;">
        Testez-vous en 2 minutes et découvrez des conseils personnalisés pour progresser et mieux utiliser l’intelligence artificielle au quotidien.<br><br>
        Pour un résultat fiable, répondez en toute franchise à chaque question.<br>
        Le masculin employé dans ce questionnaire l'est à titre épicène, pour simplifier la lecture.
      </div>
      <button id="startBtn">Commencer</button>
      <div style="margin-top:40px; margin-bottom:10px; font-size:0.86em; color:#888; text-align:center;">
        Créé par <a href="https://www.linkedin.com/in/johan-creeten" target="_blank" style="color:#3773ad;">Johan Creeten</a> &nbsp; | &nbsp; <span style="color:#bbb;">CC BY 2.0</span>
      </div>
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
          letter-spacing:0.5px;">
          ${percent}%
        </span>
      </div>
    `;
  }

  if (current < questions.length) {
    const q = questions[current];
    document.getElementById('app').innerHTML = `
      <img src="${q.img}" alt="" class="question-illustration" loading="lazy" width="700" height="400">
      <div class="question-text">${q.text}</div>
      <div class="choice-row">
        ${q.answers.map((a, i) => `
          <div class="choice-block" data-index="${i}">${a.text.replace(/^a\)\s*/i, '').replace(/^b\)\s*/i, '')}</div>
        `).join('')}
      </div>
      <button id="nextBtn" type="button" disabled>Suivant</button>
      <div style="margin-top:35px; margin-bottom:0; font-size:0.84em; color:#aaa; text-align:center;">
        Créé par <a href="https://www.linkedin.com/in/johan-creeten" target="_blank" style="color:#3773ad;">Johan Creeten</a> &nbsp; | &nbsp; <span style="color:#bbb;">CC BY 2.0</span>
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

  if (current === questions.length) {
    progressBar.style.display = 'none';
    const percentScore = Math.round((score / questions.length) * 100);
    let profil;
    if (score >= 5) profil = profils[2];
    else if (score >= 3) profil = profils[1];
    else profil = profils[0];
    let scoreColor = profil.border;

    document.getElementById('app').innerHTML = `
      <div id="result">
        <div style="text-align:center; margin-bottom:24px;">
          <span style="
            display:inline-block;
            font-size:2.4em;
            font-weight:700;
            color:${scoreColor};
            margin-bottom:7px;
            letter-spacing:1px;
          ">${percentScore}%</span>
          <div style="font-size:1.09em; color:#444; margin-top:3px;">de maîtrise IA</div>
        </div>
        <div style="
          background:${profil.color};
          border:2.5px solid ${profil.border};
          border-radius:15px;
          box-shadow:0 2px 12px #e1e2ea;
          margin:10px 0 0 0;
          padding:38px 24px 28px 24px;
          max-width:700px;
          margin-left:auto;margin-right:auto;
        ">
          ${profil.explanation}
          <div style="text-align:center;">
            <button style="margin-top:32px;" onclick="window.location.reload()">🔄 Recommencer le questionnaire</button>
          </div>
        </div>
        <div style="margin-top:36px; font-size:0.99em; color:#666; max-width:700px; margin-left:auto; margin-right:auto; line-height:1.52; text-align:left;">
          <hr style="margin:18px 0 14px 0; border:none; border-top:1px solid #e0e0e0;">
          <div style="font-size:1em; margin-bottom:10px;">
            <b>Ce questionnaire a été créé par <a href="https://www.linkedin.com/in/johan-creeten" target="_blank" style="color:#3973a5;text-decoration:underline;">Johan Creeten</a></b>
            <span style="color:#bbb; font-size:0.96em; margin-left:7px;">CC BY 2.0</span>
          </div>
          <b>Sources :</b>
          <div style="margin:10px 0 0 0; padding:0; text-align:left;">
            <div style="margin-bottom:16px;">
              Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X.-H., Beresnitzky, A. V., Braunstein, I., &amp; Maes, P. (2025). <i>Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task.</i> Prépublication (probablement arXiv:2506.08872v1), MIT Media Lab, MIT, Wellesley College, Mass. College of Art and Design (MassArt).
            </div>
            <div style="margin-bottom:16px;">
              Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., &amp; Wilson, N. (2025). <i>The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers.</i> Dans CHI Conference on Human Factors in Computing Systems (CHI ’25), 26 avril – 1er mai 2025, Yokohama, Japon. ACM. DOI : 10.1145/3706598.3713778.
            </div>
            <div>
              Gerlich, M. (2025). <i>AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking.</i> Societies, 15(1), 6. DOI : 10.3390/soc15010006
            </div>
          </div>
        </div>
        <div style="margin-top:28px; margin-bottom:0; font-size:0.84em; color:#aaa; text-align:center;">
          Créé par <a href="https://www.linkedin.com/in/johan-creeten" target="_blank" style="color:#3773ad;">Johan Creeten</a> &nbsp; | &nbsp; <span style="color:#bbb;">CC BY 2.0</span>
        </div>
      </div>
    `;
  }
}

window.onload = function() {
  current = -1;
  render();
};
