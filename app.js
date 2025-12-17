console.log("app.js chargé");

// Configuration du test : 6 questions par thème
// image: "img/placeholder.png" est un champ que tu peux changer pour chaque réponse.
const config = {
  themes: [
    { key: "cleanliness", label: "Propreté" },
    { key: "playstyle",   label: "Style de jeu" },
    { key: "rage",        label: "Rage" },
    { key: "kindness",    label: "Bienveillance" },
    { key: "intellect",   label: "Intelligence" },
  ],
  questions: {
    cleanliness: [
      {
        text: "Après une session classée, tu ranges ton stick/manette…",
        answers: [
          { label: "Toujours, ptite lingette et tout dans le bueno.", delta:+3, image:"img/arcade.png" },
          { label: "De temps en temps, quand j’y pense.",             delta: +1, image:"img/pocket2.png" },
          { label: "Jamais, il traîne par terre comme une Xiaoyu en AOP.", delta:-1, image:"img/jamais.png" },
          { label: "Renifler la manette fait des chip damages.",         delta:-3, image:"img/sthall.png" },
        ],
      },
      {
        text: "Ton setup ressemble plutôt à…",
        answers: [
          { label: "Mainstage de l'evo c'est carré.", delta:+3, image:"img/clean.png" },
		  { label: "Juste ce qu'il faut je range bien mon bureau après chaque session",                        delta: +1, image:"img/setup.gif" },
          { label: "Un peu le bazar tu connais...",   delta: 0, image:"img/unpeu.png" },
          { label: "Mouchoires, rhum banane ou tout autre chose qui n'a rien a faire ici.", delta:-1, image:"img/rhum.png" },
          { label: "Setup balcon du DUC Mathieu Ayatsuji Rosfield après une livraison de Zakil prime.",   delta:-3, image:"img/bordel.png" },
        ],
      },
      {
        text: "Tu as combien d'heures de jeu",
        answers: [
          { label: "250 ou moins, c'est mignon.",                        delta:+3, image:"img/chibi.png" },
          { label: "500 ou moins, encore sauvable.",                     delta:+2, image:"img/franky.png" },
          { label: "T'as passé les 1000, humain investi bientôt perdu.", delta: 0, image:"img/fabrice.png" },
          { label: "T'as passé les 2000, personne ténébreuse.",          delta:-1, image:"img/kazmoche.png" },
          { label: "T'as passé les 3000, mage noir + chômage.",          delta:-3, image:"img/nsm.png" },
        ],
      },
      {
        text: "Votre plus longue session de ranked a durée :",
        answers: [
          { label: "Moins d'une heure.",     delta:+3, image:"img/happy.png" },
		  { label: "Plus de 2 heures mais avec des pauses",                        delta: +1, image:"img/pause.gif" },
          { label: "2 heures sans pause",            delta: 0, image:"img/john.png" },
          { label: "Environ 3 ou 4 heures.", delta:-1, image:"img/34.png" },
          { label: "6 heures ou plus.",      delta:-3, image:"img/6h.png" },
        ],
      },
      {
        text: "Après une session Tekken votre chambre sent :",
        answers: [
          { label: "La brise fraîche du matin.", delta:+3, image:"img/rosée.png" },
		  { label: "Tu n'as pas oublié d'aérer c'est propre",                        delta: +1, image:"img/wind.gif" },
          { label: "Ça sent le meuble.",         delta: 0, image:"img/meuble.png" },
          { label: "Ça sent le saucifflard.",    delta:-1, image:"img/sifflard.png" },
          { label: "Relant aberrant de tacos 3 viandes compo merguez tenders cordon bleu sauce biggy brazil.", delta:-3, image:"img/triple.gif" },
        ],
      },
      {
        text: "En event offline ta présence :",
        answers: [
          { label: "Est radieuse, tu embellis l'évènement.", delta:+3, image:"img/fabio.png" },
		  { label: "T'as fait un effort sur ton style et ta skincare",                        delta: +1, image:"img/beau.gif" },
          { label: "T'es là quoi c'est tout.",               delta: 0, image:"img/pocket.png" },
          { label: "Les gens appliquent les gestes barrières avec toi.", delta:-1, image:"img/barrière.png" },
          { label: "Tu sens le main Azucena ^^.",            delta:-3, image:"img/azu.png" },
        ],
      },
    ],

    playstyle: [
      {
        text: "En ranked, ton style c’est plutôt…",
        answers: [
          { label: "Neutral propre, whiff punish, observation de l'adversaire.", delta:+3, image:"img/knee.png" },
		  { label: "Façon de jouer unique, combo artiste",                        delta: +2, image:"img/sdf.gif" },
          { label: "Un petit hopkick piffé par çi par là.",                    delta: 0, image:"img/naja.png" },
          { label: "Full spam snake edge / hopkick / gimmicks.",               delta:-2, image:"img/xia.gif" },
          { label: "Setup macabre a base d'imblocable comme Chad-Muerte Prime.",  delta:-3, image:"img/patrick.png" },
        ],
      },
      {
        text: "Qu'en est-il de votre défense ?",
        answers: [
          { label: "De 80 à 100, le mur.",                                      delta:+3, image:"img/lmur.gif" },
          { label: "De 60 à 80, bloquer ne me dérange pas !",                   delta:+2, image:"img/placeholder.png" },
          { label: "De 40 à 60, se fait counter hit launch 3x par round...",    delta:-1, image:"img/luffy.png" },
          { label: "De 20 à 40, I'm not holding back - Leroy Smith tu connais lahuiss.", delta:-2, image:"img/lkiler.png" },
          { label: "De 0 à 20, si t'es pas nouveau, qu'est-ce que tu fous?!?",  delta:-3, image:"img/joker.png" },
        ],
      },
      {
        text: "Combien de personnages maîtrisez vous ?",
        answers: [
          { label: "Tous, il sort quand Mokujin bordel???", delta:+3, image:"img/mokujin.png" },
          { label: "Je peux jouer plusieurs archétypes, un peu touche à tout.", delta:+2, image:"img/respect.png" },
          { label: "Je maîtrise qu'un seul archétype, si y'a pas d'electric ça dégage !", delta:+1, image:"img/mishimas.png" },
          { label: "Loyaliste, je reste fidèle Doryah !",                        delta: 0, image:"img/salute.png" },
		  { label: "Je change tous le temps je n'en maîtrise aucun...",                        delta: -3, image:"img/gmt.gif" },
        ],
      },
      {
        text: "Votre niveau d'execution vous permet de :",
        answers: [
          { label: "TJU et PEWGF en détente.",                                     delta:+3, image:"img/pewgf.png" },
          { label: "Les staple combos optimisés ne me font pas peur.",             delta:+2, image:"img/hpchad.png" },
          { label: "Pas de dingueries flashy mais efficace, je peux te step df2.", delta:+1, image:"img/carré.png" },
          { label: "Je sais launch punish un hellsweep à mon prime.",              delta: 0, image:"img/spedrun.gif" },
          { label: "Je joue en spécial style, le raptor combo de Hwoarang (4,4,4,4) est trop difficile pour moi.", delta:-3, image:"img/5dgt.png" },
        ],
      },
      {
        text: "Vous passez la majorité de votre temps sur le jeu à :",
        answers: [
          { label: "Faire des tournois.",                delta:+3, image:"img/ftl.png" },
          { label: "Training / lab.",                    delta: +2, image:"img/lab.png" },
		  { label: "Session chill avec les copains",                        delta: +1, image:"img/frd.gif" },
          { label: "Full ranked en mode cerveau off.",  delta:-1, image:"img/brainoff.png" },
          { label: "Traîner dans le lounge a faire du tekken-ball.", delta:-3, image:"img/purplejin.png" },
        ],
      },
      {
        text: "Quand tu mènes 2 rounds à 0 :",
        answers: [
          { label: "Tu restes sérieux, tu joues propre jusqu'au bout.", delta:+3, image:"img/serieux.png" },
		  { label: "Tu te méfies que l'adversaire change complètement de style (il va bourrer comme un sac)",                        delta: +1, image:"img/mash.gif" },
          { label: "Tu te permets un peu de freestyle.",                delta: 0, image:"img/freestyle.png" },
          { label: "Tu troll avec des strings et des lows unsafe.",     delta:-1, image:"img/kirby54.png" },
          { label: "Tu full taunt / ki-charge / teabag.",               delta:-3, image:"img/kii.png" },
        ],
      },
    ],

    rage: [
      {
        text: "Quand tu te fais perfects 3 fois d’affilée…",
        answers: [
          { label: "Tu restes calme, et tu lock in pour le prochain match.", delta:+3, image:"img/lock.gif" },
          { label: "Tu souffles fort, mais tu continues.",                  delta: +1, image:"img/blow.png" },
		  { label: "Tu dis que ton adversaire est nul a chier et qu'il a chatté",                        delta: 0, image:"img/naz.gif" },
          { label: "Tu hurles IRL.",                                        delta:-1, image:"img/cri.png" },
          { label: "Gros plug du seigneur.",                                 delta:-3, image:"img/plug.png" },
        ],
      },
      {
        text: "Quelle est ta réaction face à une ki-charge ?",
        answers: [
          { label: "Haha, intéressant hâte d'en découdre !",                                 delta:+3, image:"img/omoshiroi.png" },
		  { label: "J'ai... Perdu ?",                        delta: +1, image:"img/aom.gif" },
          { label: "Il veut quoi ce suce mange gauffre ?",                                   delta: 0, image:"img/dosmg.png" },
          { label: "Insulte + cancel.",                                                       delta:-1, image:"img/allerftg.png" },
          { label: "Ah ouais tu ki tcharge ? Que des toxics... Signalement + joueur bloqué", delta:-3, image:"img/fark.png" },
        ],
      },
      {
        text: "Est-ce que tu joues Bryan ou Kazuya ?",
        answers: [
          { label: "Oui je main un des deux ^^", delta:-3, image:"img/superchad.png" },
		  { label: "Non ils me gavent à parler de la difficulté de leur perso alors qu'ils sont pas si dur",                        delta: -1, image:"img/yap.gif" },
          { label: "J'ai déjà essayé de les jouer.", delta: 0, image:"img/angdem.png" },
		  { label: "Non mais gros respect aux main Kaz/Bryan",                        delta: +1, image:"img/res.gif" },
          { label: "Jamais je ne suis pas raciste.",  delta:+3, image:"img/son.gif" },
        ],
      },
      {
        text: "As-tu déjà tellement ragé que ton entourage t'a fait une remarque à ce sujet ?",
        answers: [
          { label: "Oui", delta:-3, image:"img/guts.png" },
		  { label: "J'ai capté que je criais donc je me suis calmé pour eviter ça",                        delta: +1, image:"img/mew.gif" },
          { label: "Non", delta:+3, image:"img/zen.png" },
        ],
      },
      {
        text: "Quelle est votre nombre de joueurs bloqués ?",
        answers: [
          { label: "Zéro, je n'ai pas d'ennemis.",                   delta:+3, image:"img/thorfin.png" },
		  { label: "Les cheaters ou pluggers seulement",                        delta: +1, image:"img/cheat.gif" },
          { label: "Quelques joueurs Law 2 barres 8 frames de rollback.", delta: 0, image:"img/ehh.png" },
          { label: "J'ai bloqué beaucoup de gens par peur qu'ils me 3 zéro sec.", delta:-1, image:"img/above.png" },
          { label: "J'ai déjà complété le blockédex plusieurs fois.", delta:-3, image:"img/blockedex.png" },
        ],
      },
      {
        text: "En ayant un beef avec un joueur j'ai déjà :",
        answers: [
          { label: "Calmé le jeu, on est là pour rigoler et prendre du plaisir !", delta:+3, image:"img/madara.png" },
		  { label: "C'est quoi ton problème, c'est quoi ton.. Qu'est-ce que je t'ai fait ?",                        delta: +1, image:"img/pblm.gif" },
          { label: "Je le ping et je lui envoi Gg ^^",                             delta: 0, image:"img/gg.png" },
          { label: "Petit recadrage textuel y'a pas le choix.",                    delta:-1, image:"img/type.png" },
          { label: "Insulte de masse + demande de FT immédiate.",                  delta:-3, image:"img/doi.png" },
        ],
      },
    ],

    kindness: [
      {
        text: "Après un combat serré, tu…",
        answers: [
          { label: "Rematch let's go on aime les combats compliqués !", delta:+3, image:"img/mcgregor.gif" },
          { label: "Rien de spécial, tu rematch.",               delta: +1, image:"img/cat.png" },
          { label: "Tu envoies un message de sel/tilt.",            delta:-1, image:"img/rb.gif" },
          { label: "Ft1.",                                        delta:-2, image:"img/pant.gif" },
          { label: "Bloqué.",                                     delta:-3, image:"img/block.gif" },
        ],
      },
      {
        text: "Un nouveau joueur te contacte tu :",
        answers: [
          { label: "Le prend sous ton aile et fait de lui un GOAT.", delta:+3, image:"img/allm.png" },
          { label: "T'acceptes un ft + quelques conseils.",         delta:+1, image:"img/coach.gif" },
          { label: "Désolé j'ai pas le temps fratello.",            delta:-1, image:"img/stop.png" },
          { label: "Tu lui fait payer pour tes conseils.",          delta:-3, image:"img/money.png" },
        ],
      },
      {
        text: "Ton ami est tilté en vocal tu lui dit :",
        answers: [
          { label: "Arrête toi là c'est pour ton bien. Tu t'es bien débrouillé.", delta:+3, image:"img/kirua.gif" },
          { label: "Tu veux vraiment continuer ?",                               delta: +1, image:"img/rock.gif" },
          { label: "Tu peux pas rester en négatif quand même.",                  delta:-1, image:"img/hypocrite.png" },
          { label: "GG pour le Tekken Emperor ! (Il était Tekken God avant de lancer)", delta:-3, image:"img/tyson.png" },
        ],
      },
      {
        text: "Pour la communauté tu as déjà :",
        answers: [
          { label: "Organisé un évènement spécial et rassembler des joueurs.", delta:+3, image:"img/arslan.gif" },
          { label: "Organisé un FT entre deux joueurs.",                       delta: 0, image:"img/orga.png" },
		  { label: "Créé quelque chose en lien avec le jeu (image, montage, affiche).", delta: +1, image:"img/test1.png" },
          { label: "Rejoint un tournoi et DQ",                                delta:-1, image:"img/run.png" },
          { label: "Ramené un de tes amis sur le jeu",                        delta:-3, image:"img/pacte.png" },
        ],
      },
      {
        text: "Ton adversaire est AFK en début de round tu :",
        answers: [
          { label: "Attends qu'il revienne, on n'est pas pressé.", delta:+3, image:"img/respe.png" },
          { label: "10sc de pitié après ça lui casses les jambes.", delta: +1, image:"img/hwoa.png" },
          { label: "Imblocable dès que tu as remarqué",             delta:-3, image:"img/fravappe.png" },
        ],
      },
      {
        text: "Quand tu gagnes 3-0 :",
        answers: [
          { label: "Tu proposes le rematch, c'était stylé.", delta:+3, image:"img/muscle.png" },
          { label: "Tu rematch, c'est des free points",          delta: +1, image:"img/krabs.png" },
          { label: "Tu tea-bag / ki charge avant de quitter.", delta:-3, image:"img/L.png" },
          { label: "Trop faible pour toi il ne mérite pas le rematch",      delta:-2, image:"img/lion.png" },
        ],
      },
    ],

    intellect: [
      {
        text: "Avant de tryhard un personnage, tu…",
        answers: [
          { label: "Lis la frame data et regardes des guides.", delta:+3, image:"img/data.png" },
          { label: "Regardes juste un ou deux combos sur YouTube.", delta: +1, image:"img/MJ.gif" },
          { label: "Tu aprends les flowcharts et les douilles.",  delta:-1, image:"img/farfa.png" },
          { label: "Spécial Style",                               delta:-3, image:"img/bob.png" },
        ],
      },
      {
        text: "Le B3 de Hwoarang est :",
        answers: [
          { label: "Un move launch punissable",              delta:+3, image:"img/monkboost.png" },
          { label: "Punissable ?",                           delta: +1, image:"img/monk.png" },
          { label: "Safe on block",                              delta:-1, image:"img/damss.png" },
          { label: "Tu veux parler de la Left Plasma Blade ? C'est +5 on block", delta:-3, image:"img/ultra.png" },
        ],
      },
      {
        text: "Tu te fais laver par un matchup que tu ne connais pas tu :",
        answers: [
          { label: "Fonces en rediff voir tes erreurs.",             delta:+3, image:"img/etude.png" },
          { label: "Rematch sans prise de tête, je vais peut-être m'adapter", delta: +1, image:"img/whatever.png" },
          { label: "Piff rage art",                                    delta:-1, image:"img/pifra.png" },
          { label: "Faut nerf ce coup broken ! (Tu parles du down2,3 de Law)", delta:-3, image:"img/pleure.png" },
        ],
      },
      {
        text: "Pour toi la frame data c'est :",
        answers: [
          { label: "Tu sais quand duck et step parfaitement, quel beau gosse (coucou Mathieu)", delta:+3, image:"img/trophy.gif" },
          { label: "Incontournable tu connais tous les moves launch punissable",                delta: +2, image:"img/clever.png" },
          { label: "Laborieux, big flemme d'apprendre",                                        delta:-1, image:"img/flemme.png" },
          { label: "Hopkick en -14.",                                                            delta:-3, image:"img/interdite.png" },
        ],
      },
      {
        text: "L'adversaire abuse d'un knowledge check tu :",
        answers: [
          { label: "Reconnais la douille et tu t'adaptes",             delta:+3, image:"img/fig.gif" },
          { label: "Trouves une solution aproximative (Djab)",      delta: +1, image:"img/improve.gif" },
          { label: "N'arrêtes pas de la graille comme un gros neuille.",    delta:-3, image:"img/taunt2.gif" },
        ],
      },
      {
        text: "Quand un nouveau patch sort :",
        answers: [
          { label: "Tu lis les patch notes en détail.", delta:+3, image:"img/learn.gif" },
		  { label: "Le boug qui a fait le site ne joue pas au jeu car il n'est pas patché", delta: +1, image:"img/note.png" },
          { label: "Tu regardes juste une vidéo résumé.", delta: +1, image:"img/watching.gif" },
          { label: "Tu découvres tout en ranked, surprise.", delta:-3, image:"img/neil.gif" },
        ],
      },
    ],
  }
};


// État du quiz
let state = {
  themeIndex: 0,
  questionIndex: 0,
  scores: {
    cleanliness: 0,
    playstyle: 0,
    rage: 0,
    kindness: 0,
    intellect: 0,
  },
  answerCounts: {
    cleanliness: 0,
    playstyle: 0,
    rage: 0,
    kindness: 0,
    intellect: 0,
  }
};
const questionBoxEl = document.getElementById("question-box");
const questionTitleEl = document.getElementById("question-title");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const statsTextEl = document.getElementById("stats-text");
const globalDescEl = document.getElementById("global-description");

function getCurrentTheme() {
  return config.themes[state.themeIndex];
}

function getCurrentQuestion() {
  const theme = getCurrentTheme();
  return config.questions[theme.key][state.questionIndex];
}

function showQuestion() {
  const theme = getCurrentTheme();
  // reset classes de thème
questionBoxEl.classList.remove(
  "theme-cleanliness",
  "theme-playstyle",
  "theme-rage",
  "theme-kindness",
  "theme-intellect"
);

// appliquer la classe du thème courant
questionBoxEl.classList.add(`theme-${theme.key}`);
  const q = getCurrentQuestion();

  questionTitleEl.textContent = `Thème : ${theme.label}`;
  questionTextEl.textContent = q.text;

  answersEl.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");

    const content = document.createElement("div");
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.justifyContent = "space-between"; // texte à gauche, image à droite
    content.style.gap = "10px";
    content.style.width = "100%";

    const span = document.createElement("span");
    span.textContent = answer.label;
    // pour éviter que le texte se tasse trop :
    span.style.flex = "1";
    content.appendChild(span);

    if (answer.image) {
      const img = document.createElement("img");
      img.src = answer.image;
      img.alt = "";
      img.style.maxHeight = "150px";   // ta nouvelle taille
      img.style.borderRadius = "4px";
      content.appendChild(img);
    }

    btn.appendChild(content);

    btn.addEventListener("click", () => {
      applyAnswer(theme.key, answer.delta);
      nextQuestion();
    });

    answersEl.appendChild(btn);
  });

  const totalQuestionsPerTheme = config.questions[theme.key].length;
  const globalIndex =
    state.themeIndex * totalQuestionsPerTheme + state.questionIndex + 1;
  const totalQuestions =
    totalQuestionsPerTheme * config.themes.length;

  progressEl.textContent = `Question ${globalIndex}/${totalQuestions}`;
}


function applyAnswer(themeKey, delta) {
  state.scores[themeKey] += delta;
  state.answerCounts[themeKey] += 1;
}

function nextQuestion() {
  const theme = getCurrentTheme();
  const questionsForTheme = config.questions[theme.key];

  if (state.questionIndex < questionsForTheme.length - 1) {
    state.questionIndex += 1;
  } else {
    state.themeIndex += 1;
    state.questionIndex = 0;
  }

  if (state.themeIndex >= config.themes.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
}

function finishQuiz() {
  document.getElementById("quiz").style.display = "none";
  resultEl.style.display = "block";

  const labels = [];
  const data = [];
  let statsText = [];

  const themeScores25 = {};  // nouveau

  config.themes.forEach(theme => {
    const key = theme.key;
    const count = state.answerCounts[key] || 1;
    const avg = state.scores[key] / count; // moyenne brute [-3 ; +3]

    const minVal = -3;
    const maxVal = 3;
    const score25 = ((avg - minVal) / (maxVal - minVal)) * 25;

    labels.push(theme.label);
    data.push(score25);
    statsText.push(`${theme.label} : ${score25.toFixed(1)}/25`);

    themeScores25[key] = score25; // on garde le score du thème
  });

  statsTextEl.textContent = statsText.join(" | ");

  const globalAverage25 =
    data.reduce((sum, val) => sum + val, 0) / data.length;

  const globalDescription = buildGlobalDescription(themeScores25, globalAverage25);

  globalDescEl.innerHTML =
  "Score global : " + globalAverage25.toFixed(1) + "/25<br>" + globalDescription;


  renderRadarChart(labels, data);
}


let chartInstance = null;

function renderRadarChart(labels, data) {
  const ctx = document.getElementById("statsChart");

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Stats moyennes Tekken 8 (/25)",
          data: data,
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
          pointBorderColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: "#444" },
          grid: { color: "#444" },
          suggestedMin: 0,
          suggestedMax: 25,
          ticks: { display: true, color: "#ccc" },
          pointLabels: { color: "#fff" },
        },
      },
      plugins: {
        legend: { labels: { color: "#fff" } },
      },
    },
  });
}

function buildGlobalDescription(themeScores25, globalAvg) {
  const parts = [];

  // Propreté
  const clean = themeScores25.cleanliness;
  let cleanText;
  if (clean >= 21) {
    cleanText = "Hygiène impeccable fidèle disciple de Fabio Lanzoni.";
  } else if (clean >= 14) {
    cleanText = "Globalement propre, même si quelques boissons traînent entre deux sessions tu es normal.";
  } else if (clean >= 7) {
    cleanText = "Ton environnement commence à sentir le zgeg.";
  } else {
    cleanText = "Ton environnement pue tout simplement sa grand mère.";
  }
  parts.push(`<span class="desc-cleanliness">${cleanText}</span>`);

  // Style de jeu
  const play = themeScores25.playstyle;
  let playText;
  if (play >= 21) {
    playText = "Ton style de jeu est clean, neutral carré comme le nord de la Corée.";
  } else if (play >= 14) {
    playText = "Style correct, mélange de neutral et de petits piffs assumés.";
  } else if (play >= 7) {
    playText = "Tu vis dangereusement entre gimmicks et snake edge douteux.";
  } else {
    playText = "Tout est potentiellement hopkickable, imblocables et nutellable, même Chad Muerte est choqué devant ton jeu.";
  }
  parts.push(`<span class="desc-playstyle">${playText}</span>`);

  // Rage
  const rage = themeScores25.rage;
  let rageText;
  if (rage >= 21) {
    rageText = "Mental d’acier, même après 3 perfects, très belle b*te.";
  } else if (rage >= 14) {
    rageText = "Tu tilt un peu, mais que contre le jeu donc ça va le kho bendero.";
  } else if (rage >= 7) {
    rageText = "Le sel commence à couler, le blocklist chauffe vite.";
  } else {
    rageText = "MisterJeux est un moine à côté de toi, plugs, insultes et blockédex complété plusieurs fois.";
  }
  parts.push(`<span class="desc-rage">${rageText}</span>`);

  // Bienveillance
  const kind = themeScores25.kindness;
  let kindText;
  if (kind >= 21) {
    kindText = "Bienveillance max, tu coaches les nouveaux et tu fais vivre la commu, tié un bon.";
  } else if (kind >= 14) {
    kindText = "Plutôt chill, parfois taquin mais rarement méchant.";
  } else if (kind >= 7) {
    kindText = "Tu fanes gentillement les cavouilles.";
  } else {
    kindText = "T'es un gros clébard.";
  }
  parts.push(`<span class="desc-kindness">${kindText}</span>`);

  // Intelligence
  const intel = themeScores25.intellect;
  let intelText;
  if (intel >= 21) {
    intelText = "Arslan Ash a appris le korean back dash pour te fuir";
  } else if (intel >= 14) {
    intelText = "Bon sens du jeu, tu connais les fondamentaux, tu ne te fais pas mix par Mathieu avec son 4,4.";
  } else if (intel >= 7) {
    intelText = "Tu te fais frametrap par Mathieu, 19 ans, équipier polyvalent chez McDo.";
  } else {
    intelText = "T'arrives comme SDM dans son bolide allemand t'es fort pour dire de la merde, pas pour jouer à Tekken";
  }
  parts.push(`<span class="desc-intellect">${intelText}</span>`);

  // Score global
  let globalTag;
  if (globalAvg >= 21) {
    globalTag = "Tu es un joueur complet, redoutable mais clean, un bijou de la communauté.";
  } else if (globalAvg >= 15) {
    globalTag = "Tu fais parler de toi, en bien ou en mal, on te connait pour ta \"spéciale\" postule chez les Suce Mange Gauffre.  ";
  } else if (globalAvg >= 7) {
    globalTag = "Tu es un peu guez, on donne ton nom pour un move nul.";
  } else {
    globalTag = "Tu es le fond de cuve, ta présence flingue l'ambiance en 10frames.";
  }
  parts.push(`<span class="desc-global">${globalTag}</span>`);

  // Chaque description sur sa propre ligne
  return parts.join("<br>");
}




// Initialisation
showQuestion();
