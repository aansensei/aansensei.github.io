---
layout: splash
title: "Shadow Rent Index"
permalink: /projects/shadow-rent/
---

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet">

<style>
.page__inner-wrap{max-width:1400px!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0 20px!important;}
.project-grid{display:grid;grid-template-columns:240px 1fr 270px;gap:24px;margin-top:28px;margin-bottom:50px;align-items:start;}
.glass-box{background:rgba(6,4,22,.6);backdrop-filter:blur(20px);border:1px solid rgba(201,71,122,.2);border-radius:16px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,71,122,.08);position:relative;}
.glass-box::before{content:'';position:absolute;top:0;left:10%;right:10%;height:1px;background:linear-gradient(to right,transparent,rgba(201,71,122,.35),transparent);}

.col-left{position:sticky;top:100px;max-height:85vh;overflow-y:auto;}
.col-left::-webkit-scrollbar{width:4px;}
.col-left::-webkit-scrollbar-thumb{background:rgba(201,71,122,.3);border-radius:10px;}

.back-btn{display:flex;align-items:center;gap:10px;color:#c9477a!important;text-decoration:none!important;font-weight:700;font-family:'Cormorant Garamond',serif;font-size:1rem;letter-spacing:.05em;margin-bottom:24px;transition:.3s;cursor:pointer;}
.back-btn:hover{color:#f07aa0!important;transform:translateX(-5px);text-shadow:0 0 10px rgba(201,71,122,.5);}

.author-box{text-align:center;border-bottom:1px solid rgba(201,71,122,.15);padding-bottom:18px;margin-bottom:18px;}
.author-box img{width:80px;height:80px;border-radius:50%;border:2px solid #c9477a;object-fit:cover;box-shadow:0 0 14px rgba(201,71,122,.35);}
.author-box h3{margin:10px 0 0;font-family:'Cinzel Decorative',serif!important;font-size:.85rem!important;color:#f07aa0!important;text-shadow:0 0 12px rgba(201,71,122,.4)!important;}

.toc-title{color:#c9477a!important;font-family:'Cormorant Garamond',serif!important;font-size:.95rem!important;font-weight:700!important;margin-bottom:14px;text-transform:uppercase;letter-spacing:.15em;opacity:.75;}
.toc-list{list-style:none;padding:0;margin:0;}
.toc-list li{margin-bottom:10px;}
.toc-list a{color:rgba(255,248,235,.7)!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-size:.93rem;transition:.2s;display:block;}
.toc-list a:hover{color:#f07aa0!important;padding-left:5px;}

.col-main{min-height:800px;color:rgba(240,230,208,.9);line-height:1.85;}
.col-main h1{font-family:'Cinzel Decorative',serif!important;font-size:1.25rem!important;color:#f07aa0!important;text-shadow:0 0 18px rgba(201,71,122,.4)!important;border-bottom:1px solid rgba(201,71,122,.2);padding-bottom:14px;margin-top:0;}
.col-main h2,.col-main h3{color:#52c9b9!important;font-family:'Cormorant Garamond',serif!important;font-size:1.15rem!important;font-weight:700!important;margin-top:28px;margin-bottom:10px;}
.col-main img{border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,.5),0 0 0 1px rgba(201,71,122,.1);margin:18px 0;max-width:100%;display:block;}
.col-main blockquote{border-left:3px solid #c9477a;padding:10px 15px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:#f07aa0!important;background:rgba(201,71,122,.06);border-radius:0 8px 8px 0;margin:18px 0;text-shadow:none!important;}
.col-main p,.col-main ul,.col-main ol{margin-bottom:14px;}
.col-main ul{padding-left:20px;}.col-main li{margin-bottom:8px;}
.col-main strong{color:#faeab1!important;}.col-main em{color:#52c9b9!important;font-style:italic;}
.col-main code{font-family:'Courier New',monospace;font-size:.88em;padding:2px 7px;background:rgba(201,71,122,.15);border:1px solid rgba(201,71,122,.35);border-radius:6px;color:#f07aa0!important;}

.col-right{position:sticky;top:100px;text-align:center;}
.cover-img{width:100%;border-radius:12px;margin-bottom:8px;box-shadow:0 0 22px rgba(0,0,0,.6),0 0 0 1px rgba(201,71,122,.12);}
.proj-title{font-family:'Cinzel Decorative',serif!important;font-size:1.05rem!important;color:#f07aa0!important;text-shadow:0 0 14px rgba(201,71,122,.4)!important;margin-bottom:18px;line-height:1.4;}
.btn-action{display:block;width:100%;padding:11px;border-radius:28px;margin-bottom:11px;text-decoration:none!important;font-weight:700;font-family:'Cormorant Garamond',serif;font-size:.97rem;letter-spacing:.05em;transition:all .3s;color:#fff!important;}
.btn-live{background:linear-gradient(135deg,#c9477a,#7b1040);box-shadow:0 4px 14px rgba(201,71,122,.4);}
.btn-live:hover{transform:translateY(-3px);box-shadow:0 0 20px rgba(201,71,122,.7);}
.btn-git{background:rgba(201,71,122,.1);border:1px solid rgba(201,71,122,.3);}
.btn-git:hover{background:rgba(201,71,122,.2);border-color:#c9477a;transform:translateY(-3px);box-shadow:0 4px 14px rgba(201,71,122,.3);}
.proj-skills{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px;justify-content:center;}
.proj-skill{font-family:'Cormorant Garamond',serif;font-size:.8rem;padding:3px 10px;background:rgba(201,71,122,.1);border:1px solid rgba(201,71,122,.3);border-radius:14px;color:#f07aa0!important;}
.proj-divider{border:none;border-top:1px solid rgba(201,71,122,.2);margin:0 0 14px;}

@media(max-width:1024px){.project-grid{grid-template-columns:1fr;}.col-left,.col-right{position:relative;top:0;max-height:none;overflow:visible;}}
</style>

<div class="project-grid">

  <div class="glass-box col-left">
    <a href="/projects/" class="back-btn">❮ Back to Collection</a>
    <div class="author-box">
      <img src="/assets/images/avatar.jpg" alt="Avatar">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    <p class="toc-title">🌙 Contents</p>
    <ul class="toc-list">
      <li><a href="#executive-summary">Executive Summary</a></li>
      <li><a href="#1-motivation">1. The Motivation</a></li>
      <li><a href="#2-pipeline">2. ETL Pipeline Design</a></li>
      <li><a href="#3-challenges">3. Scraping Challenges</a></li>
      <li><a href="#4-solutions">4. Engineering Solutions</a></li>
      <li><a href="#5-result">5. The End Result</a></li>
      <li><a href="#6-future">6. Future Directions</a></li>
    </ul>
  </div>

  <div class="glass-box col-main">
    <h1>Shadow Rent Index: Real-Time Housing Inflation Oracle</h1>

    <img src="/assets/images/shadow-dashboard.png" alt="Shadow Rent Index Dashboard">

    <h3 id="executive-summary">Executive Summary</h3>
    <blockquote>"Official inflation data looks in the rearview mirror. I wanted to build something that looks out the windshield."</blockquote>
    <p>The Shadow Rent Index is a fully automated, end-to-end data engineering project that tracks real-time rental spot prices in Madison, WI. It cuts through the 6 to 9 month lag baked into the government's official CPI shelter component. Every Sunday morning, a stealth ETL bot wakes up, scrapes hundreds of active listings, cleans the data, and loads everything into a PostgreSQL database. A Streamlit dashboard then shows interactive maps, neighborhood price averages, and supply levels, all pulled from current market prices and not year-old leases.</p>

    <h3 id="1-motivation">1. The Motivation: A Macroeconomic Blindspot</h3>
    <p>In my macroeconomics class, I learned that <strong>Shelter Cost makes up roughly one-third of the U.S. Consumer Price Index (CPI)</strong>. But here is the catch: the Bureau of Labor Statistics calculates this number using <strong>existing lease agreements</strong>. That means rent prices that were locked in a year ago are still shaping what the government calls "today's inflation." The result is a structural lag of <strong>6 to 9 months</strong>.</p>
    <p>Living in <strong>Madison, WI</strong>, a fast-growing college town, I kept noticing a gap between what the news was saying and what my friends and I were actually experiencing. Official reports said inflation was cooling down, but landlords around campus were raising rents. Traditional economic indicators felt completely disconnected from real life. As a student studying <strong>Data Science and Economics</strong>, I wanted to try building something that could close that gap.</p>
    <ul>
      <li><strong>The Problem:</strong> CPI shelter data lags the real rental market by 6 to 9 months because it relies on existing leases instead of current asking prices.</li>
      <li><strong>The Hypothesis:</strong> Spot prices from active rental listings are a more sensitive and up-to-date signal of housing inflation.</li>
      <li><strong>The Goal:</strong> Build an automated pipeline that collects those spot prices every week and visualizes them in a live dashboard.</li>
    </ul>

    <h3 id="2-pipeline">2. ETL Pipeline Design</h3>
    <p>I designed the project around a classic <strong>Extract, Transform, Load (ETL)</strong> architecture. Each stage has a clear job to do:</p>
    <ol>
      <li><strong>Extract:</strong> A Python scraper goes out every Sunday and pulls active rental listings from major real estate websites.</li>
      <li><strong>Transform:</strong> A Pandas pipeline cleans the raw text, normalizes fields, and validates everything using Regular Expressions.</li>
      <li><strong>Load:</strong> The clean records get appended to a <strong>PostgreSQL</strong> database via SQLAlchemy, slowly building up a historical timeline.</li>
      <li><strong>Visualize:</strong> A <strong>Streamlit</strong> web app reads from the database and renders interactive Plotly Mapbox maps and price charts.</li>
    </ol>
    <p>On paper, the plan looked straightforward. In practice, just the Extract step alone forced me to completely rethink my approach three separate times.</p>

    <h3 id="3-challenges">3. Challenges: Web Scraping Reality</h3>
    <p>Major real estate platforms are built to block scrapers, and I found that out the hard way. Here is what went wrong at the start:</p>
    <ul>
      <li><strong>Dynamic DOM Manipulation:</strong> I built my first scraper with <strong>BeautifulSoup4</strong>, targeting specific HTML class names to grab prices and bedroom counts. It broke almost immediately. The site renders content through JavaScript and constantly shuffles its CSS class names, so any selectors I wrote became outdated within days.</li>
      <li><strong>Anti-Bot Security:</strong> Cloudflare and similar systems kept detecting my requests, blocking my IP, and throwing CAPTCHAs at me. The standard Python <code>requests</code> library was getting fingerprinted and rejected before I could pull a single listing.</li>
      <li><strong>Data Quality Failures:</strong> Even on the rare occasions I got through the security layer, the shifting page layout would cause my parser to grab the wrong field. Instead of a bedroom count, I would sometimes get the square footage, which gave me hilarious results like a "2,850 bedroom" apartment.</li>
    </ul>
    <blockquote>"Every time I thought I had a stable scraper, the website would change something and break it all over again."</blockquote>

    <h3 id="4-solutions">4. Engineering Solutions</h3>
    <p>Each problem needed its own fix. Here is how I worked through them:</p>

    <p><strong>Getting Past the Anti-Bot Wall: Stealth Browser Automation</strong></p>
    <p>I switched from the basic Python <code>requests</code> library to <strong>undetected-chromedriver</strong>, which spins up a headless Chrome browser that behaves much more like a real human user. It handles JavaScript rendering, sends realistic browser headers, and does not trip the same detection systems. I also added sleep intervals between page loads so the bot paces itself and does not overwhelm the server.</p>

    <p><strong>Fixing Fragile Selectors: Regex-Based Parsing</strong></p>
    <p>Instead of relying on HTML class names that keep changing, I switched to pulling the raw text content out of each listing block and using <strong>Regular Expressions</strong> to search for patterns. Prices almost always have a dollar sign followed by digits. Bedroom counts almost always end with the word "Bed." These text patterns are much more stable than CSS class names, so even when the website developers update their front-end code, the scraper keeps working.</p>

    <p><strong>Cleaning Up the Messy Data: Multi-Layer Validation</strong></p>
    <p>To prevent bad data from sneaking through, I added validation at two separate points:</p>
    <ul>
      <li><strong>Transform phase:</strong> The Pandas pipeline converts raw strings to proper numeric types, drops any rows with null or out-of-range values, and enforces schema rules before anything touches the database.</li>
      <li><strong>Query phase:</strong> The Streamlit app runs an additional SQL filter (<code>WHERE bedrooms &lt; 20</code>) as a final safety check, so even if a weird record somehow made it into the database, it will not show up on the dashboard.</li>
    </ul>

    <h3 id="5-result">5. The End Result: My Weekend Bot</h3>
    <p>In the end, I managed to build a fully automated system using <strong>Windows Task Scheduler</strong>. Now, every Sunday morning while I am still asleep, my stealth bot wakes up, quietly navigates the rental market, collects hundreds of active Madison listings, cleans the data, and safely tucks it into my <strong>PostgreSQL</strong> database.</p>
    <p>My <strong>Streamlit</strong> dashboard then reads this fresh data to show an interactive map, average neighborhood prices, and supply levels. By tracking real-time spot prices instead of old leases, the <strong>Shadow Rent Oracle</strong> serves as a sensitive, up-to-date tracker for housing affordability. It was a fantastic learning experience that proved to me how powerful live data can be, and honestly, it is pretty cool to have a robot doing the heavy lifting while I enjoy my weekend!</p>

    <h3 id="6-future">6. Future Directions</h3>
    <p>Right now the system only covers Madison and pulls from a single platform. There are a few directions I would like to take it next:</p>
    <ul>
      <li><strong>Multi-City Expansion:</strong> Run the same pipeline for other university towns like Ann Arbor, Austin, and Boulder to build a comparative national index.</li>
      <li><strong>Multi-Platform Aggregation:</strong> Pull data from additional listing sources to reduce any bias from relying on just one website.</li>
      <li><strong>CPI Comparison Layer:</strong> Add an overlay in the dashboard that shows the Shadow Rent Index against official BLS CPI shelter data side by side, so users can see the lag with their own eyes.</li>
      <li><strong>Predictive Modeling:</strong> Use the growing historical dataset to train a forecasting model that tries to predict next month's average rent based on current supply and pricing trends.</li>
      <li><strong>Cloud Deployment:</strong> Move the scheduler off my local machine and onto something like AWS Lambda so the pipeline does not depend on my computer being on.</li>
    </ul>
  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/shadow-dashboard.png" alt="Shadow Rent Dashboard" class="cover-img">
    <h2 class="proj-title">Shadow Rent Index</h2>
    <div class="proj-skills">
      <span class="proj-skill">Python</span>
      <span class="proj-skill">SQL</span>
      <span class="proj-skill">Selenium</span>
      <span class="proj-skill">undetected-chromedriver</span>
      <span class="proj-skill">BeautifulSoup4</span>
      <span class="proj-skill">Pandas</span>
      <span class="proj-skill">Regex</span>
      <span class="proj-skill">PostgreSQL</span>
      <span class="proj-skill">SQLAlchemy</span>
      <span class="proj-skill">psycopg2</span>
      <span class="proj-skill">Streamlit</span>
      <span class="proj-skill">Plotly Express</span>
      <span class="proj-skill">Mapbox</span>
      <span class="proj-skill">Batch Scripting</span>
      <span class="proj-skill">Windows Task Scheduler</span>
    </div>
    <hr class="proj-divider">
    <a href="https://shadow-rent-index-ncta.streamlit.app/" target="_blank" class="btn-action btn-live"><i class="fas fa-chart-line"></i> Live Dashboard</a>
    <a href="https://github.com/aansensei/shadow-rent-index" target="_blank" class="btn-action btn-git"><i class="fab fa-github"></i> View Source Code</a>
  </div>

</div>

<style>
#an-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(2,1,10,.97);backdrop-filter:blur(20px);z-index:999999;display:block;opacity:0;pointer-events:none;transition:opacity .25s;perspective:1400px;}
#an-book{width:220px;height:340px;position:absolute;top:50%;left:50%;transform-style:preserve-3d;transform:translate(-50%,-50%) scale(0);}
.ab-layer{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:5px 14px 14px 5px;transform-origin:left center;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.4,0,.2,1);}
#ab-back{background:#06031a;transform:translateZ(-6px);z-index:1;}
#ab-p1{background:linear-gradient(to left,#cec6ae,#eae4d4);border:1px solid #c5bcaa;transform:translateZ(-4px);z-index:2;}
#ab-p2{background:linear-gradient(to right,#d5cdb8,#ede8dc);border:1px solid #c5bcaa;transform:translateZ(-2px);z-index:3;}
#ab-p3{background:linear-gradient(to left,#d2cabc,#e8e4d8);border:1px solid #c5bcaa;transform:translateZ(0);z-index:4;}
#ab-front{border:1px solid rgba(201,71,122,.4);box-shadow:0 0 32px rgba(0,0,0,.7),0 0 22px rgba(201,71,122,.4);display:flex;align-items:center;justify-content:center;text-align:center;padding:22px;transform:translateZ(2px);z-index:5;}
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
