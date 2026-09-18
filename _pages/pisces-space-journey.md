---
layout: splash
title: "Pisces: Space Journey"
permalink: /projects/pisces-space-journey/
description: "Pisces: Space Journey is a browser space shooter built with vanilla HTML, CSS, JavaScript, PixiJS, and a modular zodiac sigil system."
---

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">

<style>
.page__inner-wrap{max-width:1400px!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0 20px!important;}
.pisces-grid{display:grid;grid-template-columns:240px minmax(0,1fr) 270px;gap:24px;margin:28px 0 50px;align-items:start;}
.pisces-box{background:rgba(10,7,20,.82);backdrop-filter:blur(20px);border:1px solid rgba(201,162,39,.22);border-radius:16px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.45),inset 0 1px 0 rgba(201,162,39,.08);position:relative;}
.pisces-box::before{content:'';position:absolute;top:0;left:10%;right:10%;height:1px;background:linear-gradient(to right,transparent,rgba(240,200,74,.4),transparent);}
.pisces-sidebar{position:sticky;top:100px;max-height:85vh;overflow-y:auto;}
.pisces-sidebar::-webkit-scrollbar{width:4px;}
.pisces-sidebar::-webkit-scrollbar-thumb{background:rgba(201,162,39,.35);border-radius:10px;}
.pisces-back{display:flex;align-items:center;gap:10px;color:#c9a227!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-weight:700;font-size:1rem;letter-spacing:.05em;margin-bottom:24px;transition:.3s;}
.pisces-back:hover{color:#f0c84a!important;transform:translateX(-5px);text-shadow:0 0 10px rgba(201,162,39,.5);}
.pisces-author{text-align:center;border-bottom:1px solid rgba(201,162,39,.15);padding-bottom:18px;margin-bottom:18px;}
.pisces-author img{width:80px;height:80px;border-radius:50%;border:2px solid #c9a227;object-fit:cover;box-shadow:0 0 14px rgba(201,162,39,.35);}
.pisces-author h3{margin:10px 0 0;font-family:'Cinzel Decorative',serif!important;font-size:.85rem!important;color:#f0c84a!important;text-shadow:0 0 12px rgba(201,162,39,.4)!important;}
.pisces-toc-title{color:#c9a227!important;font-family:'Cormorant Garamond',serif!important;font-size:.95rem!important;font-weight:700!important;margin-bottom:14px;text-transform:uppercase;letter-spacing:.15em;opacity:.75;}
.pisces-toc{list-style:none;padding:0;margin:0;}
.pisces-toc li{margin-bottom:10px;}
.pisces-toc a{color:rgba(255,248,235,.72)!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-size:.93rem;transition:.2s;display:block;}
.pisces-toc a:hover{color:#f0c84a!important;padding-left:5px;}
.pisces-main{color:rgba(240,230,208,.85);line-height:1.85;min-width:0;}
.pisces-main h1{font-family:'Cinzel Decorative',serif!important;font-size:1.35rem!important;color:#f0c84a!important;text-shadow:0 0 18px rgba(201,162,39,.4)!important;border-bottom:1px solid rgba(201,162,39,.22);padding-bottom:14px;margin-top:0;}
.pisces-main h2{color:#f0c84a!important;font-family:'Cinzel Decorative',serif!important;font-size:1rem!important;letter-spacing:.04em;margin:36px 0 12px!important;}
.pisces-main h3{color:#79c7ff!important;font-family:'Cormorant Garamond',serif!important;font-size:1.18rem!important;font-weight:700!important;margin:28px 0 10px!important;}
.pisces-main p,.pisces-main ul{margin-bottom:14px;}
.pisces-main ul{padding-left:20px;}
.pisces-main li{margin-bottom:8px;}
.pisces-main strong{color:#faeab1!important;}
.pisces-main em{color:#79c7ff!important;}
.pisces-main code{background:rgba(77,159,255,.12)!important;color:#9dd6ff!important;padding:2px 7px!important;border:1px solid rgba(77,159,255,.25)!important;border-radius:5px!important;font-family:Consolas,monospace!important;font-size:.86em!important;}
.pisces-hook{border-left:3px solid #c9a227;padding:12px 17px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.14rem;color:#f0c84a!important;background:rgba(201,162,39,.06);border-radius:0 8px 8px 0;margin:20px 0;}
.pisces-note{background:rgba(77,159,255,.08);border:1px solid rgba(77,159,255,.24);border-radius:10px;padding:15px 17px;margin:18px 0;color:rgba(240,230,208,.82);}
.pisces-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:18px 0;}
.pisces-card{background:linear-gradient(145deg,rgba(20,35,77,.42),rgba(10,7,20,.5));border:1px solid rgba(201,162,39,.2);border-radius:12px;padding:16px;}
.pisces-card h4{font-family:'Cinzel Decorative',serif!important;font-size:.76rem!important;color:#f0c84a!important;margin:0 0 8px!important;line-height:1.5!important;}
.pisces-card p{margin:0!important;font-family:'Cormorant Garamond',serif;font-style:italic;}
.pisces-sigils{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0;}
.pisces-sigil{padding:12px 14px;border:1px solid rgba(77,159,255,.3);border-radius:10px;background:rgba(77,159,255,.07);}
.pisces-sigil h4{margin:0 0 4px!important;font-family:'Cinzel Decorative',serif!important;font-size:.82rem!important;color:#9dd6ff!important;letter-spacing:.03em;}
.pisces-sigil p{margin:0!important;font-family:'Cormorant Garamond',serif;font-size:.9rem;color:rgba(240,230,208,.78);}
.pisces-figure{margin:22px 0;padding:12px;background:rgba(3,5,16,.55);border:1px solid rgba(201,162,39,.18);border-radius:12px;overflow:auto;}
.pisces-figure svg{display:block;width:100%;min-width:760px;height:auto;}
.pisces-caption{font-family:'Cormorant Garamond',serif;font-style:italic;color:rgba(240,230,208,.62);font-size:.92rem;margin:8px 4px 0;}
.pisces-screenshot-img{display:block;width:100%;margin:18px 0;border:1px solid rgba(201,162,39,.3);border-radius:12px;box-shadow:0 10px 26px rgba(0,0,0,.45);}
.pisces-faq details{background:rgba(255,255,255,.025);border:1px solid rgba(201,162,39,.2);border-radius:9px;padding:0 15px;margin-bottom:10px;}
.pisces-faq summary{cursor:pointer;padding:12px 0;color:#faeab1;font-family:'Cormorant Garamond',serif;font-size:1.04rem;font-weight:600;}
.pisces-faq details p{padding-bottom:12px;margin:0!important;}
.pisces-timeline{list-style:none!important;padding:0!important;margin:20px 0!important;}
.pisces-timeline li{position:relative;padding:0 0 19px 25px;margin:0!important;border-left:1px solid rgba(201,162,39,.35);}
.pisces-timeline li::before{content:'';position:absolute;left:-5px;top:7px;width:9px;height:9px;border-radius:50%;background:#f0c84a;box-shadow:0 0 10px rgba(240,200,74,.7);}
.pisces-timeline li:last-child{padding-bottom:0;border-left-color:transparent;}
.pisces-meta{text-align:center;}
.pisces-cover{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:12px;margin-bottom:12px;box-shadow:0 0 22px rgba(0,0,0,.6),0 0 0 1px rgba(201,162,39,.15);}
.pisces-title{font-family:'Cinzel Decorative',serif!important;font-size:1rem!important;color:#f0c84a!important;text-shadow:0 0 14px rgba(201,162,39,.4)!important;line-height:1.5!important;margin:0 0 14px!important;}
.pisces-tags{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-bottom:16px;}
.pisces-tag{font-family:'Cormorant Garamond',serif;font-size:.82rem;padding:3px 10px;background:rgba(201,162,39,.1);border:1px solid rgba(201,162,39,.3);border-radius:14px;color:#f0c84a!important;}
.pisces-divider{border:0;border-top:1px solid rgba(201,162,39,.2);margin:0 0 15px;}
.pisces-fact{font-family:'Cormorant Garamond',serif;color:rgba(240,230,208,.72);font-style:italic;margin:9px 0!important;}
@media(max-width:1024px){.pisces-grid{grid-template-columns:1fr;}.pisces-sidebar{position:relative;top:0;max-height:none;overflow:visible;}.pisces-cards{grid-template-columns:1fr;}}
@media(max-width:560px){.page__inner-wrap{padding:0 10px!important;}.pisces-box{padding:18px;}.pisces-sigils{grid-template-columns:1fr;}}
</style>

<div class="pisces-grid">

  <aside class="pisces-box pisces-sidebar">
    <a href="/projects/" class="pisces-back">❮ Back to Collection</a>
    <div class="pisces-author">
      <img src="/assets/images/avatar.jpg" alt="Cao Thien An Nguyen">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    <p class="pisces-toc-title">✦ Contents</p>
    <ul class="pisces-toc">
      <li><a href="#the-idea">The Idea</a></li>
      <li><a href="#why-this-stack">Why This Stack</a></li>
      <li><a href="#rookie-mistake">The Rookie Mistake</a></li>
      <li><a href="#architecture">Real Architecture</a></li>
      <li><a href="#sigil-system">The Core Skill System</a></li>
      <li><a href="#betas">What Changed Between the Betas</a></li>
      <li><a href="#screenshots">Screenshots</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#changelog">Changelog</a></li>
    </ul>
  </aside>

  <main class="pisces-box pisces-main">
    <h1>Pisces: Space Journey</h1>

    <blockquote class="pisces-hook">"A browser tab becomes a cockpit: one ship, a field of stars, and twelve zodiac paths that turn every run into a different build."</blockquote>

    <p><strong>Pisces: Space Journey</strong> is a space shooter built with vanilla HTML, CSS, JavaScript, and PixiJS. It runs directly in the browser and is hosted on GitHub Pages, making the game easy to open, play, and share without installation or a backend.</p>

    <h2 id="the-idea">The Idea</h2>
    <p>The idea first took shape in late 2024, nearly a year before the first line of the beta was written. The project began with a simple goal: build a space shooter that could be played immediately from a browser link. As the game grew, the idea expanded beyond moving through space and firing at enemies. The game needed a system that could give players distinct combat directions instead of a single fixed loadout.</p>
    <p>That direction became the zodiac <strong>sigil</strong> system. Each constellation represents an equipable build path, giving Pisces: Space Journey its own core mechanic while leaving room to grow with new sigils, skills, enemies, and bosses.</p>

    <h2 id="why-this-stack">Why HTML, JavaScript, and GitHub Pages</h2>
    <div class="pisces-cards">
      <article class="pisces-card">
        <h4>Runs in the Browser</h4>
        <p>Players can open the game directly without downloading or installing anything.</p>
      </article>
      <article class="pisces-card">
        <h4>Free Deployment</h4>
        <p>GitHub Pages provides a free place to host and share the project.</p>
      </article>
      <article class="pisces-card">
        <h4>No Backend Required</h4>
        <p>The game can be delivered as a front end experience without server infrastructure.</p>
      </article>
      <article class="pisces-card">
        <h4>PixiJS Rendering</h4>
        <p>PixiJS acts as the renderer adapter for drawing the game world and visual effects.</p>
      </article>
    </div>

    <h2 id="rookie-mistake">The Rookie Mistake</h2>
    <p>The first two beta versions were each built as one large HTML file. Everything lived together in an index style file: gameplay logic, rendering, effects, balance, and interface behavior. This was a natural starting point for an early project, but it became difficult to optimize and maintain once the game became larger.</p>

    <div class="pisces-cards">
      <article class="pisces-card">
        <h4>October 2025</h4>
        <p><strong>Space Shooter – Nâng Cấp Toàn Diện</strong></p>
        <p><code>MilkyWayprotecter.html</code> and <code>spacestest101.html</code></p>
        <p>The first beta was later abandoned because its visual effects did not feel right.</p>
      </article>
      <article class="pisces-card">
        <h4>November 2025</h4>
        <p><strong>Space Shooter – Nâng Cấp Toàn Diện (FX &amp; Balance)</strong></p>
        <p><code>Spaceshooterpro.html</code></p>
        <p>The second beta improved effects and balance, but it still carried the limits of a one file structure.</p>
      </article>
    </div>

    <p>When every concern lives in one file, a change in one area can make another harder to understand. Performance work becomes less direct, and adding a boss or a new sigil becomes harder than it needs to be. The project eventually required a more deliberate architecture.</p>

    <h2 id="architecture">From One File to a Real Architecture</h2>
    <p>In March 2026, the game was refactored into a modular structure. The first Git commit for this stage was titled <strong>Code game Space Shooter chia file</strong>, meaning the game code was split into files. The project has continued to develop from that point and now has more than 600 commits.</p>
    <p>The modular design separates runtime setup, combat simulation, rendering, and static delivery. This makes the game easier to navigate and easier to extend when adding new enemies, bosses, and zodiac builds.</p>

    <div class="pisces-figure">
      <svg viewBox="0 0 920 780" role="img" aria-label="Pisces Space Journey architecture diagram">
        <defs>
          <linearGradient id="layerGold" x1="0" x2="1">
            <stop offset="0%" stop-color="#2d2309"/>
            <stop offset="100%" stop-color="#0e173c"/>
          </linearGradient>
          <linearGradient id="nodeBlue" x1="0" x2="1">
            <stop offset="0%" stop-color="#0e3157"/>
            <stop offset="100%" stop-color="#16245c"/>
          </linearGradient>
          <marker id="archArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f0c84a"/>
          </marker>
        </defs>

        <rect width="920" height="780" rx="16" fill="#080612"/>
        <text x="460" y="34" text-anchor="middle" fill="#f0c84a" font-family="Cinzel Decorative, serif" font-size="20">Pisces: Space Journey Architecture</text>

        <rect x="36" y="58" width="848" height="128" rx="14" fill="url(#layerGold)" stroke="rgba(240,200,74,.6)" stroke-width="1.2"/>
        <text x="62" y="86" fill="#f0c84a" font-family="Cinzel Decorative, serif" font-size="15">Browser Runtime</text>
        <rect x="62" y="105" width="138" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="131" y="128" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="16">index.html</text>
        <text x="131" y="147" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="13">entry point</text>
        <rect x="218" y="105" width="138" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="287" y="128" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="16">main.js</text>
        <text x="287" y="147" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="13">game loop</text>
        <rect x="374" y="105" width="118" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="433" y="136" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="16">input.js</text>
        <rect x="510" y="105" width="118" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="569" y="136" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="16">config.js</text>
        <rect x="646" y="105" width="118" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="705" y="136" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="16">audio.js</text>

        <line x1="460" y1="186" x2="460" y2="214" stroke="#f0c84a" stroke-width="2" marker-end="url(#archArrow)"/>

        <rect x="36" y="222" width="848" height="202" rx="14" fill="#10162f" stroke="rgba(121,199,255,.65)" stroke-width="1.2"/>
        <text x="62" y="250" fill="#79c7ff" font-family="Cinzel Decorative, serif" font-size="15">Simulation &amp; Combat</text>
        <rect x="62" y="270" width="170" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="147" y="299" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">entities/core.js</text>
        <rect x="248" y="270" width="170" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="333" y="299" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">entities/goliath.js</text>
        <rect x="434" y="270" width="170" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="519" y="299" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">entities/misc-enemies.js</text>
        <rect x="620" y="270" width="200" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="720" y="299" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">skills/misc-mechanics.js</text>
        <rect x="154" y="340" width="160" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="234" y="369" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">sigils/core.js</text>
        <rect x="336" y="340" width="160" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="416" y="369" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">yuusha-party.js</text>
        <rect x="518" y="340" width="160" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="598" y="369" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">match-stats.js</text>

        <line x1="460" y1="424" x2="460" y2="452" stroke="#f0c84a" stroke-width="2" marker-end="url(#archArrow)"/>

        <rect x="36" y="460" width="848" height="152" rx="14" fill="#111635" stroke="rgba(121,199,255,.65)" stroke-width="1.2"/>
        <text x="62" y="488" fill="#79c7ff" font-family="Cinzel Decorative, serif" font-size="15">Rendering &amp; UI</text>
        <rect x="62" y="510" width="150" height="48" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="137" y="540" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">pixi-renderer.js</text>
        <rect x="228" y="510" width="140" height="48" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="298" y="540" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/core.js</text>
        <rect x="384" y="510" width="140" height="48" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="454" y="540" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/player.js</text>
        <rect x="540" y="510" width="180" height="48" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="630" y="540" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/enemy-common.js</text>
        <rect x="736" y="510" width="100" height="48" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="786" y="540" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">style.css</text>

        <line x1="460" y1="612" x2="460" y2="640" stroke="#f0c84a" stroke-width="2" marker-end="url(#archArrow)"/>

        <rect x="36" y="648" width="848" height="96" rx="14" fill="#20200d" stroke="rgba(240,200,74,.6)" stroke-width="1.2"/>
        <text x="62" y="676" fill="#f0c84a" font-family="Cinzel Decorative, serif" font-size="15">Static Delivery</text>
        <rect x="206" y="687" width="120" height="34" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="266" y="710" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">sw.js</text>
        <rect x="346" y="687" width="120" height="34" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="406" y="710" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">guide.html</text>
        <rect x="486" y="687" width="180" height="34" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="576" y="710" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">image and audio assets</text>
      </svg>
      <p class="pisces-caption">The three files named core.js remain distinct in the codebase: entities/core.js, sigils/core.js, and render/core.js.</p>
    </div>

    <h2 id="sigil-system">The Core Skill System</h2>
    <p>The zodiac sigil system is the defining mechanic of Pisces: Space Journey. Each sign is an equipable sigil that gives the character its own build direction, drawing on a distinct combat theme instead of decorative naming.</p>

    <div class="pisces-sigils">
      <div class="pisces-sigil"><h4>Aries · Gate of Babylon</h4><p>Landed hits summon piercing blade fans and phantom spear strikes.</p></div>
      <div class="pisces-sigil"><h4>Taurus · Yuusha Party</h4><p>Tank build that banks squad and self-soaked damage into an absorb meter.</p></div>
      <div class="pisces-sigil"><h4>Gemini · Shadow Twin</h4><p>Spawns a phantom twin ship that fires mirrored volleys of piercing plasma.</p></div>
      <div class="pisces-sigil"><h4>Cancer · Lunar Aegis</h4><p>Sentinel-based protection: regenerating shields, evade, and a whirlpool pull-burst.</p></div>
      <div class="pisces-sigil"><h4>Leo</h4><p>Opens each wave with a full-field freeze paired with a damage buff.</p></div>
      <div class="pisces-sigil"><h4>Virgo · Forest Guardian</h4><p>Boosts critical strikes and stacks debuffs for follow-up damage amplification.</p></div>
      <div class="pisces-sigil"><h4>Libra · Blood Arrow</h4><p>Charges Skill A into a bankable release of piercing, exploding arrows.</p></div>
      <div class="pisces-sigil"><h4>Scorpio · Resurrection</h4><p>Grants bonus lives on pick and accelerates the life-gain rate.</p></div>
      <div class="pisces-sigil"><h4>Sagittarius · Twin Blades</h4><p>Boomerang and arc-blade barrages that slow and pull enemies in.</p></div>
      <div class="pisces-sigil"><h4>Capricorn · Compound Interest</h4><p>Each kill compounds a stacking global damage bonus.</p></div>
      <div class="pisces-sigil"><h4>Aquarius · Chain Lightning</h4><p>Area slow and damage-over-time pulse while Skill G is active or charged.</p></div>
      <div class="pisces-sigil"><h4>Pisces · Dream Realm</h4><p>Negates incoming damage for a window, then detonates marked enemies for a delayed burst.</p></div>
    </div>

    <p>This structure also supports future work. New sigils can be developed as their own build paths, while enemy and boss behavior can remain separated in the combat modules.</p>

    <h2 id="betas">What Changed Between the Betas</h2>
    <div class="pisces-cards">
      <article class="pisces-card">
        <h4>Beta One</h4>
        <p><strong>Space Shooter – Nâng Cấp Toàn Diện</strong> was created in October 2025. Its visual effects did not match the direction the project needed, so the version was left behind.</p>
      </article>
      <article class="pisces-card">
        <h4>Beta Two</h4>
        <p><strong>Space Shooter – Nâng Cấp Toàn Diện (FX &amp; Balance)</strong> was created in November 2025, improving both effects and balance while still using a single HTML file.</p>
      </article>
    </div>

    <div class="pisces-cards">
      <figure class="pisces-card" style="padding:0;overflow:hidden;">
        <img src="/assets/images/pisces-beta1-screenshot.png" alt="Beta One gameplay screenshot" style="display:block;width:100%;">
        <figcaption class="pisces-caption" style="margin:8px 12px 12px;">Beta One: the abandoned VFX pass.</figcaption>
      </figure>
      <figure class="pisces-card" style="padding:0;overflow:hidden;">
        <img src="/assets/images/pisces-beta2-screenshot.png" alt="Beta Two gameplay screenshot" style="display:block;width:100%;">
        <figcaption class="pisces-caption" style="margin:8px 12px 12px;">Beta Two: the FX and Balance pass that replaced it.</figcaption>
      </figure>
    </div>

    <div class="pisces-note">
      <strong>The important shift was not only visual.</strong> The later modular refactor made the game easier to reason about, optimize, and extend than either one file beta.
    </div>

    <h2 id="screenshots">Screenshots</h2>

    <img src="/assets/images/pisces-screenshot-gameplay.png" alt="Gameplay scene with the player ship, enemies, and PixiJS visual effects" class="pisces-screenshot-img">

    <img src="/assets/images/pisces-screenshot-sigils.png" alt="Zodiac sigil selection interface showing several constellation build options" class="pisces-screenshot-img">

    <img src="/assets/images/pisces-screenshot-boss.png" alt="Boss encounter against the Goliath enemy" class="pisces-screenshot-img">

    <h2 id="faq">FAQ</h2>
    <section class="pisces-faq">
      <details>
        <summary>Can I play Pisces: Space Journey on mobile?</summary>
        <p>The game runs in a browser. This case study does not claim a dedicated mobile interface, so the experience may vary by device and browser.</p>
      </details>
      <details>
        <summary>Do I need to download anything?</summary>
        <p>No. The game is hosted on GitHub Pages and is designed to run directly from a browser link.</p>
      </details>
      <details>
        <summary>What technology does the game use?</summary>
        <p>The project uses vanilla HTML, CSS, and JavaScript, with PixiJS used as the rendering adapter.</p>
      </details>
      <details>
        <summary>Can a new sigil be added?</summary>
        <p>Yes. The modular architecture was created to make expansion easier, including new zodiac sigils, skills, enemies, and bosses.</p>
      </details>
      <details>
        <summary>Where is player data stored?</summary>
        <p>This case study does not document a specific player data storage implementation.</p>
      </details>
      <details>
        <summary>Is the project still evolving?</summary>
        <p>Yes. The project has continued to develop since the March 2026 modular refactor and has accumulated more than 600 commits.</p>
      </details>
    </section>

    <h2 id="changelog">Changelog</h2>
    <ul class="pisces-timeline">
      <li><strong>Late 2024:</strong> The idea for a browser space shooter with a zodiac sigil build system first took shape.</li>
      <li><strong>October 2025:</strong> First beta, <em>Space Shooter – Nâng Cấp Toàn Diện</em>, created as a single HTML file.</li>
      <li><strong>November 2025:</strong> Second beta, <em>Space Shooter – Nâng Cấp Toàn Diện (FX &amp; Balance)</em>, improves effects and balance.</li>
      <li><strong>March 2026:</strong> The game is split into a modular multi file architecture.</li>
      <li><strong>Current:</strong> Continued development passes 600 commits, with modular systems for combat, rendering, skills, sigils, audio, input, and offline delivery.</li>
    </ul>
  </main>

  <aside class="pisces-box pisces-sidebar pisces-meta">
    <img src="/assets/images/pisces-space-journey-cover.png" alt="Pisces Space Journey cover artwork" class="pisces-cover">
    <h2 class="pisces-title">Pisces:<br>Space Journey</h2>
    <div class="pisces-tags">
      <span class="pisces-tag">HTML</span>
      <span class="pisces-tag">CSS</span>
      <span class="pisces-tag">JavaScript</span>
      <span class="pisces-tag">PixiJS</span>
      <span class="pisces-tag">GitHub Pages</span>
      <span class="pisces-tag">PWA</span>
    </div>
    <hr class="pisces-divider">
    <p class="pisces-fact"><strong>Genre:</strong> Space Shooter</p>
    <p class="pisces-fact"><strong>Core mechanic:</strong> 12 Zodiac Sigils</p>
    <p class="pisces-fact"><strong>First beta:</strong> October 2025</p>
    <p class="pisces-fact"><strong>Modular refactor:</strong> March 2026</p>
  </aside>

</div>
