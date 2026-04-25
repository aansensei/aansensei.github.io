---
layout: single
title: "My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

<a href="https://aansensei.github.io/space-shooter/" target="_blank" class="egg-rocket" title="Secret Area">🚀</a>

<style>
.page__title{font-family:'Cinzel Decorative',serif!important;color:#f0c84a!important;}
.egg-rocket{float:right;margin-top:-65px;margin-right:10px;font-size:1.8rem;text-decoration:none!important;transition:all .3s cubic-bezier(.175,.885,.32,1.275);position:relative;z-index:50;}
.egg-rocket:hover{transform:scale(1.3) translateY(-5px) rotate(15deg);filter:drop-shadow(0 0 14px rgba(201,162,39,.9));}

.bookshelf{display:flex;flex-wrap:wrap;gap:48px;justify-content:center;padding:52px 22px 62px;perspective:2500px;background-color:#0e0b26!important;background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.015) 0px,rgba(255,255,255,.015) 1px,transparent 1px,transparent 40px),linear-gradient(160deg,#160f34 0%,#0c0820 50%,#1a1240 100%)!important;border:12px solid rgba(201,162,39,.2)!important;border-bottom:20px solid rgba(4,2,14,.96)!important;border-radius:8px;box-shadow:inset 0 0 80px rgba(0,0,0,.65),inset 0 -4px 20px rgba(201,162,39,.04),0 18px 48px rgba(0,0,0,.6),0 0 0 1px rgba(201,162,39,.07)!important;position:relative;}
.bookshelf::after{content:'';position:absolute;bottom:-20px;left:-12px;right:-12px;height:8px;background:linear-gradient(to bottom,rgba(4,2,14,.96),rgba(2,1,10,1));border-radius:0 0 6px 6px;}

.book-container{width:210px;height:360px;position:relative;z-index:1;cursor:pointer;transition:transform .4s ease,filter .4s ease;}
.book-container:hover{z-index:50;transform:translateY(-12px) scale(1.03);filter:drop-shadow(0 20px 30px rgba(0,0,0,.7));}
.book{position:relative;width:100%;height:100%;transform-style:preserve-3d;}

.front-cover{position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:left center;transition:transform .85s cubic-bezier(.25,1,.5,1);z-index:20;border-radius:6px 16px 16px 6px;transform-style:preserve-3d;backface-visibility:visible;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:20px 16px;border:1px solid rgba(255,255,255,.12);box-shadow:inset 6px 0 16px rgba(0,0,0,.45),4px 6px 18px rgba(0,0,0,.5);}
.front-cover::before{content:'';position:absolute;left:0;top:0;bottom:0;width:16px;background:linear-gradient(to right,rgba(0,0,0,.55),rgba(0,0,0,.15));border-radius:6px 0 0 6px;z-index:21;}
.book-container:hover .front-cover{transform:rotateY(-178deg);pointer-events:none;}

.book-1 .front-cover{background:linear-gradient(160deg,#0a1520,#112840,#1a3a55);}
.book-2 .front-cover{background:linear-gradient(145deg,#2d0035,#6a0080,#00b4cc);border:1.5px solid #00e5ff;box-shadow:4px 6px 20px rgba(114,9,183,.7),0 0 18px rgba(0,229,255,.3),inset 6px 0 16px rgba(0,0,0,.5);}
.book-3 .front-cover{background:linear-gradient(160deg,#1a0010,#7b1040,#c9477a);}

/* ── BOOK-3: back of front cover shows dashboard + skills on hover ── */
.book-3 .front-cover { position: relative; }

.book-3 .cover-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #1a0010;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden;
  transform: scaleX(-1);
  opacity: 0;
  transition: none;
  pointer-events: none;
}
.book-3.book-container:hover .cover-back {
  opacity: 1;
  transition: opacity 0.25s ease 0.35s;
}
.book-3.book-container:hover .cover-content {
  opacity: 0;
  transition: none;
}

.btn-story-rose{background:linear-gradient(135deg,#c9477a,#7b1040);box-shadow:0 0 12px rgba(201,71,122,.55);}
.book-4 .front-cover{background:linear-gradient(160deg,#0e0e0e,#252525,#3a3a3a);}
.book-4 .cover-content h3{font-size:.78rem!important;}

/* ── BOOK-4: cover-back with skills on hover ── */
.book-4 .front-cover { position: relative; }

.book-4 .cover-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #111111;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden;
  transform: scaleX(-1);
  opacity: 0;
  transition: none;
  pointer-events: none;
}
.book-4.book-container:hover .cover-back {
  opacity: 1;
  transition: opacity 0.25s ease 0.35s;
}
.book-4.book-container:hover .cover-content {
  opacity: 0;
  transition: none;
}

.cover-content{backface-visibility:hidden;width:100%;}
.cover-content::before{content:'✦';display:block;color:rgba(201,162,39,.55);font-size:.68rem;margin-bottom:10px;letter-spacing:.3em;}
.cover-content h3{font-family:'Cinzel Decorative',serif!important;font-size:.98rem!important;font-weight:700!important;color:#fff!important;text-shadow:0 0 12px rgba(255,255,255,.7)!important;margin-bottom:10px!important;border-bottom:1px solid rgba(255,255,255,.25)!important;padding-bottom:8px!important;line-height:1.25!important;pointer-events:none!important;word-break:break-word!important;}
.cover-content p{font-family:'Cormorant Garamond',serif!important;font-style:italic!important;font-size:.9rem!important;color:rgba(255,255,255,.8)!important;line-height:1.45!important;margin:0!important;text-shadow:none!important;}

.inside-pages{position:absolute;top:0;left:0;width:98%;height:98%;background:linear-gradient(to right,#ddd5c0,#f7f2ea)!important;z-index:10;border-radius:4px 14px 14px 4px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;text-align:center;border:1px solid #c8bfa8;box-shadow:inset 10px 0 22px rgba(0,0,0,.12);}
.inside-pages i{font-size:2rem!important;margin-bottom:10px;}
.inside-pages h4{font-family:'Cormorant Garamond',serif!important;font-size:1.1rem!important;color:#1a1008!important;font-weight:700!important;text-shadow:none!important;pointer-events:none!important;margin:5px 0!important;}
.inside-pages p,.inside-pages small{color:#4a3a28!important;font-family:'Cormorant Garamond',serif!important;font-size:.88rem!important;font-style:italic!important;margin:0!important;text-shadow:none!important;}
.pub-badge{font-family:'Cinzel Decorative',serif!important;font-size:.95rem!important;color:#1a0080!important;font-weight:900!important;font-style:normal!important;pointer-events:none!important;}

.btn-view-story{display:inline-flex;align-items:center;gap:7px;padding:8px 20px;margin-top:12px;color:#fff!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-weight:700;font-size:.9rem;letter-spacing:.05em;border-radius:22px;cursor:pointer!important;position:relative;z-index:9999!important;pointer-events:auto!important;border:none;outline:none;transition:filter .3s,transform .3s;}
.btn-view-story:hover{filter:brightness(1.2);transform:scale(1.05);}
.btn-story-blue{background:linear-gradient(135deg,#2a9d8f,#0e4f8f);box-shadow:0 0 12px rgba(42,157,143,.55);}
.btn-story-neon{background:linear-gradient(135deg,#c94f7c,#6a00c0);box-shadow:0 0 12px rgba(201,79,124,.55);}
.btn-story-dark{background:linear-gradient(135deg,#2a2a2a,#111);box-shadow:0 0 10px rgba(201,162,39,.3);border:1px solid rgba(201,162,39,.25);}
.coming-badge{display:inline-block;padding:5px 13px;margin-top:11px;background:rgba(201,162,39,.15);border:1px dashed rgba(201,162,39,.4);border-radius:18px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;color:#c9a227!important;pointer-events:none;}

@media(max-width:640px){
  .bookshelf{gap:28px;padding:32px 12px 42px;}
  .book-container{width:155px;height:260px;}
  .book-container:hover{transform:translateX(72px) translateY(-12px) scale(1.03);}
  .inside-pages{padding:10px 8px;overflow:hidden;}
  .inside-pages i{font-size:1.3rem!important;margin-bottom:4px;}
  .inside-pages h4{font-size:.82rem!important;margin:3px 0!important;}
  .inside-pages p,.inside-pages small{font-size:.72rem!important;}
  .btn-view-story{font-size:.75rem;padding:5px 12px;margin-top:7px;}
  .pub-badge{font-size:.78rem!important;}
}

/* ── BOOK-1: back of front cover shows graph + skills on hover ── */
.book-1 .front-cover { position: relative; }

.book-1 .cover-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #0e1a25;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden;
  transform: scaleX(-1);
  opacity: 0;
  transition: none; /* instant when closing */
  pointer-events: none;
}
.book-1.book-container:hover .cover-back {
  opacity: 1;
  transition: opacity 0.25s ease 0.35s; /* fade in after flip starts */
}
.book-1.book-container:hover .cover-content {
  opacity: 0;
  transition: none;
}
.cover-back-graph {
  margin: 8px 8px 5px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,.18);
  overflow: hidden;
  background: #0a1520;
  height: 50%;
  flex-shrink: 0;
}
.cover-back-graph img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.cover-back-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 5px 8px 8px;
}
.cover-back-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: .58rem;
  padding: 1px 5px;
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  color: #c9a227 !important;
}
</style>

<div class="bookshelf">

  <div class="book-container book-1 reveal-item" data-url="/projects/tech-layoffs/" data-bg="linear-gradient(160deg,#0a1520,#1a3a55)" data-title="Tech Layoffs Analysis">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content"><h3>Tech Layoffs Analysis</h3><p>How macro-economic indicators shape global tech layoff waves</p></div>
        <div class="cover-back">
          <div class="cover-back-graph">
            <img src="/assets/images/dashboard_preview.png" alt="Dashboard">
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Python</span>
            <span class="cover-back-tag">Pandas</span>
            <span class="cover-back-tag">Scikit-Learn</span>
            <span class="cover-back-tag">SQLite</span>
            <span class="cover-back-tag">FRED API</span>
            <span class="cover-back-tag">yfinance</span>
            <span class="cover-back-tag">Streamlit</span>
            <span class="cover-back-tag">Tableau</span>
            <span class="cover-back-tag">Matplotlib</span>
            <span class="cover-back-tag">Seaborn</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <h4>Data Story &amp; Dashboard</h4>
        <p>End-to-end analysis predicting tech layoff trends using Random Forest &amp; macro indicators (GDP, CPI, rates)</p>
        <button class="btn-view-story btn-story-blue" onclick="openBookCard(this)">✦ Read the Tale</button>
      </div>
    </div>
  </div>

  <div class="book-container book-2 reveal-item" data-url="/projects/semiconductor-hr/" data-bg="linear-gradient(145deg,#2d0035,#6a0080,#00b4cc)" data-title="Semiconductor HR">
    <div class="book">
      <div class="front-cover"><div class="cover-content"><h3>Semiconductor HR Research</h3><p>Vietnam's workforce crisis &amp; lessons from TSMC Taiwan</p></div></div>
      <div class="inside-pages">
        <span class="pub-badge">IRJEMS</span>
        <i class="fas fa-microchip" style="color:#7209b7;margin-bottom:8px;"></i>
        <h4>Vol 3, Issue 8 (2024)</h4>
        <p>Peer-reviewed publication</p>
        <button class="btn-view-story btn-story-neon" onclick="openBookCard(this)">✦ Read the Tale</button>
      </div>
    </div>
  </div>

  <div class="book-container book-3 reveal-item" data-url="/projects/shadow-rent/" data-bg="linear-gradient(160deg,#1a0010,#7b1040,#c9477a)" data-title="Shadow Rent Index">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content"><h3>Shadow Rent Index</h3><p>Real-time housing inflation oracle for the rental market</p></div>
        <div class="cover-back">
          <div class="cover-back-graph">
            <img src="/assets/images/shadow-dashboard.png" alt="Dashboard">
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Python</span>
            <span class="cover-back-tag">SQL</span>
            <span class="cover-back-tag">Selenium</span>
            <span class="cover-back-tag">PostgreSQL</span>
            <span class="cover-back-tag">Pandas</span>
            <span class="cover-back-tag">Regex</span>
            <span class="cover-back-tag">Streamlit</span>
            <span class="cover-back-tag">Plotly</span>
            <span class="cover-back-tag">Mapbox</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-home" style="color:#c9477a;"></i>
        <h4>Data Story &amp; Dashboard</h4>
        <p>Automated ETL pipeline scraping live Madison rental listings to track housing inflation 6–9 months ahead of CPI</p>
        <button class="btn-view-story btn-story-rose" onclick="openBookCard(this)">✦ Read the Tale</button>
      </div>
    </div>
  </div>

  <div class="book-container book-4 reveal-item">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content"><h3>Shrinkflation Detective</h3><p>Uncovering the hidden inflation that CPI never reports</p></div>
        <div class="cover-back">
          <div class="cover-back-graph" style="display:flex;align-items:center;justify-content:center;background:#111111;">
            <span style="font-size:2.8rem;">🔍</span>
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Python</span>
            <span class="cover-back-tag">SQL</span>
            <span class="cover-back-tag">Kroger API</span>
            <span class="cover-back-tag">FRED API</span>
            <span class="cover-back-tag">Pandas</span>
            <span class="cover-back-tag">PostgreSQL</span>
            <span class="cover-back-tag">SQLAlchemy</span>
            <span class="cover-back-tag">Statsmodels</span>
            <span class="cover-back-tag">Streamlit</span>
            <span class="cover-back-tag">Plotly</span>
            <span class="cover-back-tag">GitHub Actions</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-search" style="color:#888;"></i>
        <h4>Shrinkflation Detective</h4>
        <p>Tracking per unit price shifts across 500 grocery SKUs to expose the inflation channel CPI misses</p>
        <button class="btn-view-story btn-story-dark" onclick="window.location.href='/under-construction.html'">✦ Read the Tale</button>
      </div>
    </div>
  </div>

</div>

<!-- Shared book overlay -->
<script>
function openBookCard(btn) {
  var c = btn.closest('.book-container');
  if (!c || !c.dataset.url) return;
  // simulate event at book center
  var r = c.getBoundingClientRect();
  var fakeEvent = {clientX: r.left+r.width/2, clientY: r.top+r.height/2, preventDefault:function(){}};
  anBookOpen(c.dataset.url, c.dataset.bg, c.dataset.title, fakeEvent);
}
window.addEventListener('pageshow',function(){
  document.body.style.overflow='';
  var ov=document.getElementById('an-overlay');
  var bk=document.getElementById('an-book');
  if(ov){ov.style.opacity='0';ov.style.pointerEvents='none';}
  if(bk)anBookReset(bk);
});
</script>

<style>
#an-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(2,1,10,.97);backdrop-filter:blur(20px);z-index:999999;display:block;opacity:0;pointer-events:none;transition:opacity .25s;perspective:1400px;}
#an-book{width:220px;height:340px;position:absolute;top:50%;left:50%;transform-style:preserve-3d;transform:translate(-50%,-50%) scale(0);}
.ab-layer{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:5px 14px 14px 5px;transform-origin:left center;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.4,0,.2,1);}
#ab-back{background:#06031a;transform:translateZ(-6px);z-index:1;}
#ab-p1{background:linear-gradient(to left,#cec6ae,#eae4d4);border:1px solid #c5bcaa;transform:translateZ(-4px);z-index:2;}
#ab-p2{background:linear-gradient(to right,#d5cdb8,#ede8dc);border:1px solid #c5bcaa;transform:translateZ(-2px);z-index:3;}
#ab-p3{background:linear-gradient(to left,#d2cabc,#e8e4d8);border:1px solid #c5bcaa;transform:translateZ(0);z-index:4;}
#ab-front{border:1px solid rgba(201,162,39,.4);box-shadow:0 0 32px rgba(0,0,0,.7),0 0 22px rgba(201,162,39,.4);display:flex;align-items:center;justify-content:center;text-align:center;padding:22px;transform:translateZ(2px);z-index:5;}
#ab-front h3{color:#fff!important;font-family:'Cinzel Decorative',serif!important;font-size:1.25rem!important;text-shadow:0 0 16px rgba(255,255,255,.8)!important;margin:0!important;pointer-events:none!important;line-height:1.4!important;}
</style>
<div id="an-overlay">
  <div id="an-book">
    <div id="ab-back" class="ab-layer"></div>
    <div id="ab-p1"   class="ab-layer"></div>
    <div id="ab-p2"   class="ab-layer"></div>
    <div id="ab-p3"   class="ab-layer"></div>
    <div id="ab-front" class="ab-layer"><h3 id="ab-title"></h3></div>
  </div>
</div>
<script>
window.addEventListener('pageshow',function(){
  document.body.style.overflow='';
  var ov=document.getElementById('an-overlay'),bk=document.getElementById('an-book');
  if(ov){ov.style.opacity='0';ov.style.pointerEvents='none';}
  if(bk&&typeof anBookReset==='function')anBookReset(bk);
});
</script>
