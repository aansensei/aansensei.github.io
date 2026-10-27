---
layout: splash
title: "Pisces: Space Journey"
permalink: /projects/pisces-space-journey/
description: "Play free in your browser: a space shooter with 15 sigils, nine bosses and elites, and offline play. Built with vanilla JavaScript and PixiJS."
header:
  og_image: /assets/images/pisces-space-journey-og-2026-10.jpg
  og_image_alt: "Egregor and the player ship above a violet void in Pisces: Space Journey"
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
.pisces-card-wide{grid-column:1/-1;}
.pisces-tier{display:block;margin:0 0 6px;font-family:'Cormorant Garamond',serif;font-style:normal;font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;color:#79c7ff;}
.pisces-card ul{margin:8px 0 0;padding-left:18px;}
.pisces-card li{margin-bottom:4px;font-family:'Cormorant Garamond',serif;font-style:italic;}
.pisces-sigils{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0;}
.pisces-sigil{padding:12px 14px;border:1px solid rgba(77,159,255,.3);border-radius:10px;background:rgba(77,159,255,.07);}
.pisces-sigil h4{margin:0 0 4px!important;font-family:'Cinzel Decorative',serif!important;font-size:.82rem!important;color:#9dd6ff!important;letter-spacing:.03em;}
.pisces-sigil p{margin:0!important;font-family:'Cormorant Garamond',serif;font-size:.9rem;color:rgba(240,230,208,.78);}
.pisces-sigil p+p{margin-top:6px!important;}
.pisces-sigil strong{color:#faeab1!important;}
.pisces-sigil .pisces-origin{font-style:italic;color:rgba(157,214,255,.85);}
.pisces-figure{margin:22px 0;padding:12px;background:rgba(3,5,16,.55);border:1px solid rgba(201,162,39,.18);border-radius:12px;overflow:auto;}
.pisces-figure svg{display:block;width:100%;min-width:760px;height:auto;}
.pisces-caption{font-family:'Cormorant Garamond',serif;font-style:italic;color:rgba(240,230,208,.62);font-size:.92rem;margin:8px 4px 0;}
.pisces-screenshot-img{display:block;width:100%;height:auto;margin:18px 0 0;border:1px solid rgba(201,162,39,.3);border-radius:12px;box-shadow:0 10px 26px rgba(0,0,0,.45);}
.pisces-faq details{background:rgba(255,255,255,.025);border:1px solid rgba(201,162,39,.2);border-radius:9px;padding:0 15px;margin-bottom:10px;}
.pisces-faq summary{cursor:pointer;padding:12px 0;color:#faeab1;font-family:'Cormorant Garamond',serif;font-size:1.04rem;font-weight:600;}
.pisces-faq details p{padding-bottom:12px;margin:0!important;}
.pisces-timeline{list-style:none!important;padding:0!important;margin:20px 0!important;}
.pisces-timeline li{position:relative;padding:0 0 19px 25px;margin:0!important;border-left:1px solid rgba(201,162,39,.35);}
.pisces-timeline li::before{content:'';position:absolute;left:-5px;top:7px;width:9px;height:9px;border-radius:50%;background:#f0c84a;box-shadow:0 0 10px rgba(240,200,74,.7);}
.pisces-timeline li:last-child{padding-bottom:0;border-left-color:transparent;}
.pisces-meta{text-align:center;}
.pisces-cover{width:100%;height:auto;aspect-ratio:1/1;object-fit:cover;border-radius:12px;margin-bottom:12px;box-shadow:0 0 22px rgba(0,0,0,.6),0 0 0 1px rgba(201,162,39,.15);}
.pisces-title{font-family:'Cinzel Decorative',serif!important;font-size:1rem!important;color:#f0c84a!important;text-shadow:0 0 14px rgba(201,162,39,.4)!important;line-height:1.5!important;margin:0 0 14px!important;}
.pisces-tags{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-bottom:16px;}
.pisces-tag{font-family:'Cormorant Garamond',serif;font-size:.82rem;padding:3px 10px;background:rgba(201,162,39,.1);border:1px solid rgba(201,162,39,.3);border-radius:14px;color:#f0c84a!important;}
.pisces-divider{border:0;border-top:1px solid rgba(201,162,39,.2);margin:0 0 15px;}
.pisces-actions{display:flex;flex-direction:column;gap:12px;}
.pisces-actions .btn-action{position:relative;overflow:hidden;display:flex!important;align-items:center;justify-content:center;gap:9px;width:100%;box-sizing:border-box;margin:0;padding:12px 18px;border-radius:999px;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-weight:700;font-size:15px;line-height:1.2;letter-spacing:.03em;white-space:nowrap;color:#fff!important;transition:transform .3s,box-shadow .3s,background .3s,border-color .3s;}
.pisces-actions .btn-action i{flex-shrink:0;font-size:14px;}
.pisces-actions .btn-action::after{content:'';position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(105deg,transparent,rgba(255,255,255,.4),transparent);transform:skewX(-20deg);pointer-events:none;transition:left .6s ease;}
.pisces-actions .btn-action:hover::after{left:130%;}
.pisces-actions .btn-live{background:linear-gradient(135deg,#1e40af,#0891b2);border:1px solid rgba(147,213,255,.5);box-shadow:0 6px 18px rgba(8,145,178,.4),inset 0 1px 0 rgba(255,255,255,.25);}
.pisces-actions .btn-live:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(8,145,178,.65),inset 0 1px 0 rgba(255,255,255,.3);}
.pisces-actions .btn-git{background:rgba(201,162,39,.08);border:1px solid rgba(201,162,39,.45);color:#f0c84a!important;}
.pisces-actions .btn-git:hover{background:rgba(201,162,39,.18);border-color:#f0c84a;transform:translateY(-3px);box-shadow:0 8px 20px rgba(201,162,39,.3);}
@media(max-width:1024px){.pisces-grid{grid-template-columns:1fr;}.pisces-sidebar{position:relative;top:0;max-height:none;overflow:visible;}.pisces-cards{grid-template-columns:1fr;}}
@media(max-width:560px){.page__inner-wrap{padding:0 10px!important;}.pisces-box{padding:18px;}.pisces-sigils{grid-template-columns:1fr;}}
</style>

<div class="pisces-grid">

  <aside class="pisces-box pisces-sidebar">
    <a href="/projects/" class="pisces-back"><i class="fas fa-arrow-left"></i>Back to Collection</a>
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
      <li><a href="#bosses">Bosses and Elites</a></li>
      <li><a href="#systems">Game Systems</a></li>
      <li><a href="#testing">Testing and Performance</a></li>
      <li><a href="#betas">What Changed Between the Betas</a></li>
      <li><a href="#screenshots">Screenshots</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#changelog">Changelog</a></li>
    </ul>
  </aside>

  <main class="pisces-box pisces-main">
    <h1>Pisces: Space Journey</h1>

    <blockquote class="pisces-hook">"A browser tab becomes a cockpit: one ship, a field of stars, and fifteen sigils that turn every run into a different build."</blockquote>

    <p><strong>Pisces: Space Journey</strong> is a space shooter built with vanilla HTML, CSS, JavaScript, and PixiJS. It runs directly in the browser and is hosted on GitHub Pages, making the game easy to open, play, and share without installation or a backend.</p>

    <h2 id="the-idea">The Idea</h2>
    <p>The idea first took shape in late 2024, and the first beta was coded a couple of months later while still in high school. The project began with a simple goal: build a space shooter that could be played immediately from a browser link. As the game grew, the idea expanded beyond moving through space and firing at enemies. The game needed a system that could give players distinct combat directions instead of a single fixed loadout.</p>
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
        <h4>January 2025</h4>
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
    <p>In March 2026, the game was refactored into a modular structure. The first Git commit for this stage was titled <strong>Code game Space Shooter chia file</strong>, meaning the game code was split into files. The project has continued to develop from that point and now has more than 800 commits, 84 JavaScript files, and about 70,000 lines of code, including the bundled PixiJS library.</p>
    <p>The modular design separates runtime setup, combat simulation, rendering, and static delivery. This makes the game easier to navigate and easier to extend when adding new enemies, bosses, and zodiac builds.</p>

    <div class="pisces-figure">
      <svg viewBox="0 0 920 800" role="img" aria-label="Pisces Space Journey architecture diagram">
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

        <rect width="920" height="800" rx="16" fill="#080612"/>
        <text x="460" y="34" text-anchor="middle" fill="#f0c84a" font-family="Cinzel Decorative, serif" font-size="20">Pisces: Space Journey Architecture</text>

        <rect x="36" y="58" width="848" height="108" rx="14" fill="url(#layerGold)" stroke="rgba(240,200,74,.6)" stroke-width="1.2"/>
        <text x="62" y="86" fill="#f0c84a" font-family="Cinzel Decorative, serif" font-size="15">Browser Runtime</text>
        <rect x="62" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="116" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">index.html</text>
        <text x="116" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">entry and UI</text>
        <rect x="176" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="230" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">main.js</text>
        <text x="230" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">game loop</text>
        <rect x="290" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="344" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">input.js</text>
        <text x="344" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">keys and touch</text>
        <rect x="404" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="458" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">config.js</text>
        <text x="458" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">settings</text>
        <rect x="518" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="572" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">audio.js</text>
        <text x="572" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">sfx and music</text>
        <rect x="632" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="686" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">background.js</text>
        <text x="686" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">parallax sky</text>
        <rect x="746" y="98" width="108" height="54" rx="8" fill="url(#nodeBlue)" stroke="#79c7ff"/>
        <text x="800" y="121.22" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">recap.js</text>
        <text x="800" y="140.12" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">Voyage Recap</text>

        <line x1="460" y1="166" x2="460" y2="194" stroke="#f0c84a" stroke-width="2" marker-end="url(#archArrow)"/>

        <rect x="36" y="202" width="848" height="176" rx="14" fill="#10162f" stroke="rgba(121,199,255,.65)" stroke-width="1.2"/>
        <text x="62" y="230" fill="#79c7ff" font-family="Cinzel Decorative, serif" font-size="15">Simulation &amp; Combat</text>
        <rect x="62" y="248" width="250" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="187" y="267.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">entities/core.js</text>
        <text x="187" y="283.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">shared enemy logic</text>
        <rect x="335" y="248" width="250" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="460" y="267.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">entities/*.js</text>
        <text x="460" y="283.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">bosses, elites, sentinels</text>
        <rect x="608" y="248" width="250" height="46" rx="8" fill="#122653" stroke="#4d9fff"/>
        <text x="733" y="267.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">skills/*.js</text>
        <text x="733" y="283.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">18 skill modules</text>
        <rect x="62" y="310" width="184" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="154" y="329.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">sigils/core.js</text>
        <text x="154" y="345.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">picker and meters</text>
        <rect x="266" y="310" width="184" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="358" y="329.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">sigils/*.js</text>
        <text x="358" y="345.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">15 sigil definitions</text>
        <rect x="470" y="310" width="184" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="562" y="329.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">timeline-distortion.js</text>
        <text x="562" y="345.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">boss wave anomalies</text>
        <rect x="674" y="310" width="184" height="46" rx="8" fill="#123f5e" stroke="#52c9b9"/>
        <text x="766" y="329.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">yuusha-party.js</text>
        <text x="766" y="345.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">Taurus squad</text>

        <line x1="460" y1="378" x2="460" y2="406" stroke="#f0c84a" stroke-width="2" marker-end="url(#archArrow)"/>

        <rect x="36" y="414" width="848" height="176" rx="14" fill="#111635" stroke="rgba(121,199,255,.65)" stroke-width="1.2"/>
        <text x="62" y="442" fill="#79c7ff" font-family="Cinzel Decorative, serif" font-size="15">Rendering &amp; UI</text>
        <rect x="62" y="460" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="154" y="479.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">pixi-renderer.js</text>
        <text x="154" y="495.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">PixiJS adapter</text>
        <rect x="266" y="460" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="358" y="479.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/core.js</text>
        <text x="358" y="495.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">shared drawing</text>
        <rect x="470" y="460" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="562" y="479.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/player.js</text>
        <text x="562" y="495.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">ship and shield</text>
        <rect x="674" y="460" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="766" y="479.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/fx.js</text>
        <text x="766" y="495.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">effects</text>
        <rect x="62" y="522" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="154" y="541.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/enemy-*.js</text>
        <text x="154" y="557.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">10 enemy renderers</text>
        <rect x="266" y="522" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="358" y="541.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/sigil-*.js</text>
        <text x="358" y="557.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">6 sigil scenes</text>
        <rect x="470" y="522" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="562" y="541.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/skill-*.js</text>
        <text x="562" y="557.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">skills and buttons</text>
        <rect x="674" y="522" width="184" height="46" rx="8" fill="#17255c" stroke="#4d9fff"/>
        <text x="766" y="541.78" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">render/kanade-*.js</text>
        <text x="766" y="557.88" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="12.5">cutscene and face</text>

        <line x1="460" y1="590" x2="460" y2="618" stroke="#f0c84a" stroke-width="2" marker-end="url(#archArrow)"/>

        <rect x="36" y="626" width="848" height="104" rx="14" fill="#20200d" stroke="rgba(240,200,74,.6)" stroke-width="1.2"/>
        <text x="62" y="654" fill="#f0c84a" font-family="Cinzel Decorative, serif" font-size="15">Static Delivery</text>
        <rect x="62" y="670" width="120" height="40" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="122" y="695" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">sw.js</text>
        <rect x="197" y="670" width="120" height="40" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="257" y="695" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">offline.js</text>
        <rect x="332" y="670" width="120" height="40" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="392" y="695" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">manifest.json</text>
        <rect x="467" y="670" width="120" height="40" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="527" y="695" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">guide.html</text>
        <rect x="602" y="670" width="120" height="40" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="662" y="695" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">css/*.css</text>
        <rect x="737" y="670" width="120" height="40" rx="8" fill="#3a3210" stroke="#c9a227"/>
        <text x="797" y="695" text-anchor="middle" fill="#f4ead8" font-family="Cormorant Garamond, serif" font-size="15">assets</text>

        <text x="460" y="762" text-anchor="middle" fill="#9dd6ff" font-family="Cormorant Garamond, serif" font-size="15">84 JavaScript files, about 70,000 lines, 148 sound effects, 23 music tracks</text>
      </svg>
      <p class="pisces-caption">The three files named core.js remain distinct in the codebase: entities/core.js, sigils/core.js, and render/core.js.</p>
    </div>

    <h2 id="sigil-system">The Core Skill System</h2>
    <p>The sigil system is the defining mechanic of Pisces: Space Journey. Each sigil gives the ship its own build direction and carries two blessings, so every run can be pushed toward a different style of play instead of a single fixed loadout.</p>
    <p>The roster now holds <strong>fifteen sigils</strong>: the twelve Western zodiac signs, plus three drawn from the Eastern animal zodiac, Great Sage, Dawn Herald, and Umbral Serpent. The summaries below follow the in-game descriptions.</p>

    <div class="pisces-sigils">
      <div class="pisces-sigil"><h4>Aries · Fire</h4><p><strong>Gate of Babylon.</strong> Ally hits can open gates that fire 14 piercing blades in a fan.</p><p><strong>Enuma Elish.</strong> Every 30 ally hits, a phantom hurls a spear through the strongest enemy's line for heavy true damage.</p></div>
      <div class="pisces-sigil"><h4>Taurus · Earth</h4><p><strong>Yuusha Party.</strong> Summons a squad of four Sentinels (Tank, Support, Marksman, Mage) that take hits meant for you and return 5 seconds after falling.</p><p><strong>Squad Synergy.</strong> Every squad role fights: blade sweeps, healing, piercing arrows, and arcane zones.</p></div>
      <div class="pisces-sigil"><h4>Gemini · Air</h4><p><strong>Shadow Twin.</strong> Every 10th ally hit calls a phantom twin ship that fires three volleys of piercing plasma orbs.</p><p><strong>Mirror Laser.</strong> The Overload Laser gains two mirror beams and extra damage.</p></div>
      <div class="pisces-sigil"><h4>Cancer · Water</h4><p><strong>Lunar Aegis.</strong> Stronger Sentinel protection, and a killer whale finishes any enemy at 8% HP or below.</p><p><strong>Tidal Flow.</strong> Sentinels regenerate and return if all fall, and a tide meter summons whirlpools that drag enemies in.</p></div>
      <div class="pisces-sigil"><h4>Leo · Fire</h4><p><strong>Lion's Roar.</strong> Hits apply a stacking Burn, and a Burning enemy that dies spreads it to up to six nearby enemies.</p><p><strong>Divine Fate.</strong> Each wave starts with every enemy petrified for 5 seconds and taking more damage. Burning kills fill a Fate meter that petrifies the field again.</p></div>
      <div class="pisces-sigil"><h4>Virgo · Earth</h4><p><strong>Forest Guardian.</strong> Every 6th auto volley crits for triple damage with Vulnerability, root, and silence, and a vine wrapped log sweeps the screen when five or more enemies are present.</p><p><strong>Circuit Engineer.</strong> Tesla damage rises 30%, destroyed Coils refund Skill G charge, and debuffed enemies take 25% more damage.</p></div>
      <div class="pisces-sigil"><h4>Libra · Blood Sorcery</h4><p><strong>Blood Arrow.</strong> Skill A banks volleys of five piercing arrows and fires everything banked once a target is in sight. Arrows explode and apply Vulnerability.</p><p><strong>Astral Pierce.</strong> Skill A orbs pierce through their target to the screen edge, with larger size and more damage.</p></div>
      <div class="pisces-sigil"><h4>Scorpio · Water</h4><p><strong>Resurrection.</strong> Gain 4 lives immediately (up to 12) and earn an extra life every 300,000 points.</p><p><strong>Death Mark.</strong> Damage rises as enemies lose HP, up to +65% at 20% HP or below, and enemies at 5% HP are struck down by lightning.</p></div>
      <div class="pisces-sigil"><h4>Sagittarius · Fire</h4><p><strong>Twin Blades.</strong> Spirit slashes fire extra blades, boomerangs can multiply, and Skill F throws two boomerangs.</p><p><strong>Arctic Chill.</strong> Boomerangs and arc slashes often slow enemies by 30% and pull them in.</p></div>
      <div class="pisces-sigil"><h4>Capricorn · Earth</h4><p><strong>Compound Interest.</strong> Each kill adds a stacking damage bonus, up to +40%, and every five stacks add ally fire rate.</p><p><strong>Mountainfall.</strong> A full Ley meter drops a mountain on the densest group, then leaves rock walls that stop every enemy bullet, beam, and body for 4 seconds.</p></div>
      <div class="pisces-sigil"><h4>Aquarius · Air</h4><p><strong>Chain Lightning.</strong> Tesla damage over time arcs to a nearby enemy, and Skill G charges 35% faster.</p><p><strong>Magnetic Field.</strong> While Skill G is active or fully charged, enemies within 300px are slowed 30% and take damage every second.</p></div>
      <div class="pisces-sigil"><h4>Pisces · Water</h4><p><strong>Dream Realm.</strong> Shift grants 2.5 seconds of immunity and marks every enemy, which then burst for part of the damage they took.</p><p><strong>Cycle of Flow.</strong> Kills and movement cut skill cooldowns, and at 12 Flow points bubbles form a fish that swims through enemies and stuns each one.</p></div>
      <div class="pisces-sigil"><h4>Great Sage · Earth</h4><p class="pisces-origin">Monkey (Than)</p><p><strong>Ransacked Treasury.</strong> Skill F becomes the Ruyi Jingu Bang. Killing an Elite or stronger steals its gem, and F then unleashes a copy of that enemy's signature attack.</p><p><strong>72 Transformations.</strong> While holding three different gems, each stolen attack hits 1.65 times as hard.</p></div>
      <div class="pisces-sigil"><h4>Dawn Herald · Metal</h4><p class="pisces-origin">Rooster (Dau)</p><p><strong>Daybreak Clarion.</strong> Every 10 seconds the rooster crows: a ring of light erases enemy bullets, shoves enemies back, and marks them to take more damage and lose evade.</p><p><strong>Starfall Needles.</strong> Erased bullets return as homing golden needles, seven star needles pin the strongest enemies, and enemy skill shots the ring touches return to their caster.</p></div>
      <div class="pisces-sigil"><h4>Umbral Serpent · Venomancy</h4><p class="pisces-origin">Snake (Ty)</p><p><strong>Umbral Devour.</strong> A 10 second charge releases four bites and four piercing shards on the next bullet contact, even through armor or barriers.</p><p><strong>Serpent Array.</strong> Skill S opens a seal that pulls enemies in, then erupts, while ten serpents hunt for 8 seconds and every fifth bite stacks Venom.</p></div>
    </div>

    <p>New sigils are built as their own build paths, while enemy and boss behavior stays separated in the combat modules. That separation is what let the roster grow from twelve signs to fifteen sigils without reworking the rest of the game.</p>

    <h2 id="bosses">Bosses and Elites</h2>
    <p>Enemies are grouped into tiers: the lesser Apostles, then Abnormal, Elite, and Dominator enemies, with Goliath as a Digiform boss that appears on every fifth wave. Each has a signature mechanic, summarized here from the in-game Guide.</p>

    <div class="pisces-cards">
      <article class="pisces-card pisces-card-wide">
        <h4>Egregor</h4>
        <span class="pisces-tier">Elite</span>
        <p>A psychic parasite that was rebuilt for the latest update.</p>
        <ul>
          <li><strong>Collective Mind:</strong> ten tentacles intercept most hits, and each lost tentacle heals and strengthens the body.</li>
          <li><strong>Mind Link:</strong> nearby enemy deaths feed rage stacks that make Egregor faster and tougher.</li>
          <li><strong>Null Slash:</strong> a 180 degree sweep that tears open a cosmic rift for 1.8 seconds, with deeper space at higher rage.</li>
          <li><strong>Psychic Tempest:</strong> a planted tentacle locks up to three targets, then giant hooked tentacles erupt from portals beneath them.</li>
        </ul>
      </article>
      <article class="pisces-card">
        <h4>Goliath</h4>
        <span class="pisces-tier">Digiform</span>
        <p>Arrives as an invulnerable Alpha that feeds on the wave, then transforms into its True Form. Fracture Step teleports it, Unbroken Will revives it once, and Absolute Verdict fires a piercing orb that can cost the player five lives.</p>
      </article>
      <article class="pisces-card">
        <h4>Leviathan</h4>
        <span class="pisces-tier">Dominator</span>
        <p>All for One keeps it behind an Iron Body shield until a kill quota is met. Herd Leader buffs every other enemy, Perseverance is a full 360 degree sweeping laser, and Last Rites locks nine wing plates onto targets at 1 HP.</p>
      </article>
      <article class="pisces-card">
        <h4>Dargruel</h4>
        <span class="pisces-tier">Dominator</span>
        <p>Abyssal Chains root and silence the player, and a darkened chain can cost a life. Demon Gift heals the horde at set health thresholds, and Maou Haki at 50% HP sends a screen wide shockwave that clears friendly projectiles.</p>
      </article>
      <article class="pisces-card">
        <h4>Marchosias</h4>
        <span class="pisces-tier">Elite</span>
        <p>A rotating 90 degree Arc Barrier with its own health pool. Hits on the barrier queue Swords, a fourth sword makes the barrier self detonate, and on death it splits into three Minion Robots.</p>
      </article>
      <article class="pisces-card">
        <h4>Raphael</h4>
        <span class="pisces-tier">Elite, the Wisdom King</span>
        <p>Custos Aeternus nullifies its first 20 hits while Support Aura heals and shields other enemies. Once Custos breaks, Wisdom King raises its evade, and every 80 hits landed while Custos was up fire a piercing Wisdom Orb.</p>
      </article>
      <article class="pisces-card">
        <h4>Uriel</h4>
        <span class="pisces-tier">Abnormal, the Covenant King</span>
        <p>Covenant King grants every other living enemy CC immunity and Iron Body layers. Uriel starts at 99% evade that each landed hit wears down, vanishes with Camouflage, throws a piercing Holy Sword, and leaves a barrier when it dies.</p>
      </article>
      <article class="pisces-card">
        <h4>Veilshroud</h4>
        <span class="pisces-tier">Abnormal</span>
        <p>Slips into a Phantom state with 99% damage reduction and turns the damage it absorbs into a shield. When it dies, a portal opens and births about ten Apostles before collapsing.</p>
      </article>
      <article class="pisces-card">
        <h4>Thaelis</h4>
        <span class="pisces-tier">Abnormal</span>
        <p>At zero HP it collapses into an untargetable Cocoon guarded by four Guards. Defeat enough Guards in time and it is gone for good, otherwise it climbs back out with permanent buffs. Its shots split into six homing bullets.</p>
      </article>
    </div>

    <h2 id="systems">Game Systems</h2>
    <div class="pisces-cards">
      <article class="pisces-card">
        <h4>Timeline Distortion</h4>
        <p>Every fifth wave is a boss wave. It opens with a cutscene where time stops, the Administrator Kanade summons Goliath, and she casts a paired anomaly on the fight: one half favors you, one half favors the enemy. The four pairs are Stack Overflow, Spacetime Flow, Administrator's Favor, and Adaptive Counter, and a pair never repeats back to back.</p>
      </article>
      <article class="pisces-card">
        <h4>Voyage Recap</h4>
        <p>Replaces the Game Over screen with a full flight log: score, wave, what shot you down, the sigils you chose in order, damage dealt and taken by source, and a battle timeline. A share image can be saved as a portrait or landscape card, with an optional callsign.</p>
      </article>
      <article class="pisces-card">
        <h4>Walpurgis</h4>
        <p>Every five waves, all enemies permanently gain a stack: more Max HP, more evade up to a cap, flat damage reduction, and stronger healing and shields. Enemies already on screen are rescaled at once, so late waves keep pushing back.</p>
      </article>
      <article class="pisces-card">
        <h4>Combat Scaling Rebalance</h4>
        <p>Every hostile attack and ally skill was moved onto one shared basis, either the player's ATK or the target's own Max HP or lost HP, instead of scattered flat numbers. Enemy damage reduction, healing, and shield caps were retuned, and a DPS and time to kill checking tool was added to the debug console.</p>
      </article>
      <article class="pisces-card">
        <h4>Kanade Cutscene</h4>
        <p>The first boss wave a player reaches always plays Kanade's cutscene. After that first viewing it can be skipped, while the Distortion still applies. Her frozen world has its own piece of music, Fermata.</p>
      </article>
      <article class="pisces-card">
        <h4>Offline Play and PWA</h4>
        <p>A service worker serves the game from cache, and Settings can download a Basic package (about 66 MB) or a Full package that adds every music track (about 219 MB). The game can also be installed like an app.</p>
      </article>
      <article class="pisces-card pisces-card-wide">
        <h4>The Guide</h4>
        <p>A separate Guide page documents the sigils, skills, enemies, combat rules, and the full update log. The enemy cards include demos that run the real game renderers, and the Guide is available in English and Vietnamese.</p>
      </article>
    </div>

    <h2 id="testing">Testing and Performance</h2>
    <p>The repository includes headless browser scripts that drive the real game in Chrome through Playwright. They load the production scripts and replace the clock with a virtual game clock, so a fight can be stepped frame by frame and the same result repeats on every run. Some of them also time the update and draw steps under fixed loads, for example with 80 enemies and 60 bullets on screen.</p>
    <p>Performance work shows up in the update log as concrete changes: five graphics levels from High to Performance, switches in Advanced Graphics for glow, trails, and flashes, cached sprites and fixed particle pools for heavy effects, and heavy artwork built while the game is idle. Egregor's rift art is now prepared before it ever appears, which removed a freeze in its first fight.</p>

    <h2 id="betas">What Changed Between the Betas</h2>
    <div class="pisces-cards">
      <article class="pisces-card">
        <h4>Beta One</h4>
        <p><strong>Space Shooter – Nâng Cấp Toàn Diện</strong> was created in January 2025, while still in high school. Its visual effects did not match the direction the project needed, so the version was left behind.</p>
      </article>
      <article class="pisces-card">
        <h4>Beta Two</h4>
        <p><strong>Space Shooter – Nâng Cấp Toàn Diện (FX &amp; Balance)</strong> was created in November 2025, improving both effects and balance while still using a single HTML file.</p>
      </article>
    </div>

    <div class="pisces-cards">
      <figure class="pisces-card" style="padding:0;overflow:hidden;">
        <img src="/assets/images/pisces-beta1-screenshot.png" alt="Beta One gameplay screenshot" width="1917" height="897" loading="lazy" style="display:block;width:100%;height:auto;">
        <figcaption class="pisces-caption" style="margin:8px 12px 12px;">Beta One: the abandoned VFX pass.</figcaption>
      </figure>
      <figure class="pisces-card" style="padding:0;overflow:hidden;">
        <img src="/assets/images/pisces-beta2-screenshot.png" alt="Beta Two gameplay screenshot" width="1917" height="907" loading="lazy" style="display:block;width:100%;height:auto;">
        <figcaption class="pisces-caption" style="margin:8px 12px 12px;">Beta Two: the FX and Balance pass that replaced it.</figcaption>
      </figure>
    </div>

    <div class="pisces-note">
      <strong>The important shift was not only visual.</strong> The later modular refactor made the game easier to reason about, optimize, and extend than either one file beta.
    </div>

    <h2 id="screenshots">Screenshots</h2>

    <picture>
      <source srcset="/assets/images/pisces-screenshot-gameplay-2026-10.webp" type="image/webp">
      <img src="/assets/images/pisces-screenshot-gameplay-2026-10.png" alt="Fight against Egregor with a cosmic rift from Null Slash, Psychic Tempest tentacles rising from portals, and the Umbral Serpent sigil in play" class="pisces-screenshot-img" width="1917" height="852" loading="lazy">
    </picture>
    <p class="pisces-caption">A fight against Egregor: Null Slash leaves a cosmic rift across the arena, Psychic Tempest tentacles rise from portals, and the Umbral Serpent sigil hunts with its serpents.</p>

    <img src="/assets/images/pisces-screenshot-sigils.png" alt="Zodiac sigil selection interface showing several constellation build options" class="pisces-screenshot-img" width="1917" height="907" loading="lazy">

    <img src="/assets/images/pisces-screenshot-boss.png" alt="Boss encounter against the Goliath enemy" class="pisces-screenshot-img" width="1917" height="902" loading="lazy">

    <h2 id="faq">FAQ</h2>
    <section class="pisces-faq">
      <details>
        <summary>Can I play Pisces: Space Journey on mobile?</summary>
        <p>Yes, with limits. The game has touch controls with an on-screen joystick and skill buttons, a landscape HUD for phones, and its own performance tier for phones, where enemies and bosses are drawn smaller in landscape so they cover less of the screen. It is still a demanding browser game, so the experience can differ by device and browser.</p>
      </details>
      <details>
        <summary>Do I need to download anything?</summary>
        <p>No. The game is hosted on GitHub Pages and runs directly from a browser link. Optional offline packages can be downloaded from Settings.</p>
      </details>
      <details>
        <summary>Can I play offline?</summary>
        <p>Yes. The game is a progressive web app with a service worker. In Settings you can download a Basic package (about 66 MB, the app shell and every sound effect) or a Full package (about 219 MB, which adds every music track), and the game then runs without a connection.</p>
      </details>
      <details>
        <summary>Is it free?</summary>
        <p>Yes. It is free to play in the browser with no account, and the source code is available on GitHub under the MIT license.</p>
      </details>
      <details>
        <summary>What technology does the game use?</summary>
        <p>The project uses vanilla HTML, CSS, and JavaScript, with PixiJS bundled as the rendering adapter and a service worker for offline play.</p>
      </details>
      <details>
        <summary>Can a new sigil be added?</summary>
        <p>Yes. The modular architecture was created to make expansion easier, and it has already carried the roster from the twelve zodiac signs to fifteen sigils with Great Sage, Dawn Herald, and Umbral Serpent.</p>
      </details>
      <details>
        <summary>Where is player data stored?</summary>
        <p>Only settings are stored, locally in your browser through localStorage: audio volumes and chosen music, language, graphics and background options, the PC or Mobile choice, the callsign for the Voyage Recap card, and flags such as whether the Kanade cutscene was seen or skipped. There are no accounts and no backend, and the offline packages live in the browser's cache storage.</p>
      </details>
      <details>
        <summary>Is the project still evolving?</summary>
        <p>Yes. The project has continued to develop since the March 2026 modular refactor and has accumulated more than 800 commits.</p>
      </details>
    </section>

    <h2 id="changelog">Changelog</h2>
    <ul class="pisces-timeline">
      <li><strong>Late 2024:</strong> The idea for a browser space shooter with a zodiac sigil build system first took shape.</li>
      <li><strong>January 25, 2025:</strong> First beta, <em>Space Shooter – Nâng Cấp Toàn Diện</em>, created as a single HTML file while still in high school.</li>
      <li><strong>November 2025:</strong> Second beta, <em>Space Shooter – Nâng Cấp Toàn Diện (FX &amp; Balance)</em>, improves effects and balance.</li>
      <li><strong>March 12, 2026:</strong> The game is split into a modular multi file architecture, starting with the commit <em>Code game Space Shooter chia file</em>.</li>
      <li><strong>September 10 to 11, 2026 (v6.7.0):</strong> Uriel, the Covenant King, joins the roster as a new Abnormal tier boss.</li>
      <li><strong>September 15 to 16, 2026 (v6.8.0):</strong> Combat Scaling Rebalance puts every hostile attack and ally skill on one shared damage basis.</li>
      <li><strong>September 25 to 30, 2026 (v6.9.0):</strong> Timeline Distortion arrives: Kanade opens every boss wave, summons Goliath, and imposes a paired anomaly on the fight.</li>
      <li><strong>October 12, 2026 (v6.9.3):</strong> Dawn Herald, a new Metal sigil, joins the roster.</li>
      <li><strong>October 19, 2026 (v6.9.4):</strong> Capricorn is rebuilt around Compound Interest and Mountainfall, and the Voyage Recap replaces the Game Over screen.</li>
      <li><strong>October 23, 2026 (v6.9.5):</strong> The Umbral Serpent sigil arrives, and Egregor is rebuilt with Psychic Tempest and cosmic Null Slash rifts.</li>
      <li><strong>Current:</strong> More than 800 commits, fifteen sigils, and modular systems for combat, rendering, skills, sigils, audio, input, and offline delivery.</li>
    </ul>
  </main>

  <aside class="pisces-box pisces-sidebar pisces-meta">
    <img src="/assets/images/pisces-space-journey-cover-2026-10-square.webp" alt="Pisces Space Journey cover artwork showing the player ship facing Egregor" class="pisces-cover" width="793" height="793">
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
    <div class="pisces-actions">
      <a href="https://aansensei.dev/space-shooter/" target="_blank" class="btn-action btn-live"><i class="fas fa-rocket"></i><span>Initiate Hyperjump</span></a>
      <a href="https://github.com/aansensei/space-shooter" target="_blank" class="btn-action btn-git"><i class="fab fa-github"></i><span>Source Code</span></a>
    </div>
  </aside>

</div>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"VideoGame","name":"Pisces: Space Journey","description":"A free browser space shooter with 15 sigils, nine bosses and elites, and offline play, built with vanilla JavaScript and PixiJS.","url":"https://aansensei.dev/projects/pisces-space-journey/","image":"https://aansensei.dev/assets/images/pisces-space-journey-og-2026-10.jpg","genre":"Shooter","gamePlatform":"Web browser","applicationCategory":"Game","operatingSystem":"Any","inLanguage":["en","vi"],"author":{"@type":"Person","name":"Cao Thien An Nguyen"},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}
</script>
