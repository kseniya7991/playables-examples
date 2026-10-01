// ───────────────────────────────────────────────────────────────
//  Portfolio config — edit texts, contacts and the games list here.
//  To add a game: copy its built folder (dist) into /games/<slug>/,
//  put a cover into /assets/covers/<slug>.webp and add an entry below.
// ───────────────────────────────────────────────────────────────
window.PORTFOLIO = {
  author: "Kseniya Stoichykava",
  role: { en: "Playable Ads Developer", ru: "Разработчик Playable Ads" },
  intro: {
    en: "HTML5 playable ads and mini-games for mobile: game mechanics, Spine animation, sound and single-file builds ready for ad networks. Pick any game below — every one is fully interactive.",
    ru: "HTML5 playable-реклама и мини-игры под мобильные устройства: игровые механики, Spine-анимация, звук и сборка в один файл под рекламные сети. Выберите игру ниже — все они полностью интерактивны.",
  },
  // Leave a value empty ("") to hide the link
  contacts: {
    email: "",
    telegram: "",
    github: "https://github.com/kseniya-st",
    linkedin: "",
  },
  games: [
    {
      slug: "tropicana",
      title: "Tropicana",
      genre: { en: "Crash game", ru: "Crash-игра" },
      orientation: "portrait",
      stack: ["PixiJS 8", "Spine", "@pixi/sound", "Vite"],
      desc: {
        en: "Tropical crash game: the multiplier grows while the character flies over the islands and dives underwater. Spine characters, layered parallax scenes, dual bet panel with auto-bet and auto-cashout.",
        ru: "Тропическая crash-игра: множитель растёт, пока персонаж летит над островами и ныряет под воду. Spine-персонажи, многослойные parallax-сцены, двойная панель ставок с автоставкой и автокэшаутом.",
      },
    },
    {
      slug: "tower-rush",
      title: "Tower Rush",
      genre: { en: "Building / risk game", ru: "Строительство / риск" },
      orientation: "portrait",
      stack: ["PixiJS 8", "Spine", "GSAP", "Howler", "Vite"],
      desc: {
        en: "Stack floors with a crane to grow the tower and the win — cash out before it collapses. Spine effects, GSAP tweens, smoke particles, sound sprites.",
        ru: "Ставь этажи краном, чтобы башня и выигрыш росли, — и забирай деньги, пока она не рухнула. Spine-эффекты, GSAP-анимации, частицы дыма, звуковые спрайты.",
      },
    },
    {
      slug: "goose-bang",
      title: "Goose Bang",
      genre: { en: "Shooting game", ru: "Тир / охота" },
      orientation: "portrait",
      stack: ["PixiJS 8", "Spine", "Howler", "Vite"],
      desc: {
        en: "Hunting-themed shooter: aim the rifle and hit the goose for a multiplier. Spine-animated goose and rifle, parallax landscape, audio sprite.",
        ru: "Игра-охота: прицелься и попади в гуся, чтобы получить множитель. Spine-анимация гуся и ружья, parallax-пейзаж, аудиоспрайт.",
      },
    },
    {
      slug: "crime-empire",
      title: "Crime Empire",
      genre: { en: "Crash game", ru: "Crash-игра" },
      orientation: "portrait",
      stack: ["JavaScript", "HTML / CSS"],
      desc: {
        en: "Rooftop crash game: the robber jumps across the city while the multiplier climbs. Vanilla JS, no engine — lightweight DOM/CSS animation, two independent bets, music.",
        ru: "Crash-игра на крышах: грабитель прыгает по городу, пока растёт множитель. Чистый JS без движка — лёгкая DOM/CSS-анимация, две независимые ставки, музыка.",
      },
    },
    {
      slug: "balloon",
      title: "Balloon Explosion",
      genre: { en: "Pick game", ru: "Pick-игра" },
      orientation: "portrait",
      stack: ["JavaScript", "HTML / CSS"],
      desc: {
        en: "Pop the balloons to reveal multipliers from ×1.5 to ×64. Physics-like floating balloons, win popups and bet selector — all in vanilla JS.",
        ru: "Лопай шарики и открывай множители от ×1.5 до ×64. «Плавающие» шарики, попапы выигрыша и выбор ставки — всё на чистом JS.",
      },
    },
  ],
};

// ── i18n helpers (shared by both pages) ──
(function () {
  const KEY = "pf-lang";
  let lang = "en";
  try {
    lang = localStorage.getItem(KEY) || ((navigator.language || "").startsWith("ru") ? "ru" : "en");
  } catch (e) {}
  window.pfLang = () => lang;
  window.pfT = (v) => (v && typeof v === "object" ? v[lang] ?? v.en : v);
  window.pfSetLang = (l) => {
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    document.dispatchEvent(new Event("pf-lang"));
  };
  document.documentElement.lang = lang;
})();
