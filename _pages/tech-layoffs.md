---
layout: splash
title: "Tech Layoffs Analysis"
permalink: /projects/tech-layoffs/
---

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet">

<style>
.page__inner-wrap{max-width:1400px!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0 20px!important;}
.project-grid{display:grid;grid-template-columns:240px 1fr 270px;gap:24px;margin-top:28px;margin-bottom:50px;align-items:start;}
.glass-box{background:rgba(6,4,22,.6);backdrop-filter:blur(20px);border:1px solid rgba(201,162,39,.2);border-radius:16px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,162,39,.08);position:relative;}
.glass-box::before{content:'';position:absolute;top:0;left:10%;right:10%;height:1px;background:linear-gradient(to right,transparent,rgba(201,162,39,.35),transparent);}

.col-left{position:sticky;top:100px;max-height:85vh;overflow-y:auto;}
.col-left::-webkit-scrollbar{width:4px;}
.col-left::-webkit-scrollbar-thumb{background:rgba(201,162,39,.3);border-radius:10px;}

.back-btn{display:flex;align-items:center;gap:10px;color:#c9a227!important;text-decoration:none!important;font-weight:700;font-family:'Cormorant Garamond',serif;font-size:1rem;letter-spacing:.05em;margin-bottom:24px;transition:.3s;cursor:pointer;}
.back-btn:hover{color:#f0c84a!important;transform:translateX(-5px);text-shadow:0 0 10px rgba(201,162,39,.5);}

.author-box{text-align:center;border-bottom:1px solid rgba(201,162,39,.15);padding-bottom:18px;margin-bottom:18px;}
.author-box img{width:80px;height:80px;border-radius:50%;border:2px solid #c9a227;object-fit:cover;box-shadow:0 0 14px rgba(201,162,39,.35);}
.author-box h3{margin:10px 0 0;font-family:'Cinzel Decorative',serif!important;font-size:.85rem!important;color:#f0c84a!important;text-shadow:0 0 12px rgba(201,162,39,.4)!important;}

.toc-title{color:#c9a227!important;font-family:'Cormorant Garamond',serif!important;font-size:.95rem!important;font-weight:700!important;margin-bottom:14px;text-transform:uppercase;letter-spacing:.15em;opacity:.75;}
.toc-list{list-style:none;padding:0;margin:0;}
.toc-list li{margin-bottom:10px;}
.toc-list a{color:rgba(255,248,235,.7)!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-size:.93rem;transition:.2s;display:block;}
.toc-list a:hover{color:#f0c84a!important;padding-left:5px;}

.col-main{min-height:800px;color:rgba(240,230,208,.9);line-height:1.85;}
.col-main h1{font-family:'Cinzel Decorative',serif!important;font-size:1.25rem!important;color:#f0c84a!important;text-shadow:0 0 18px rgba(201,162,39,.4)!important;border-bottom:1px solid rgba(201,162,39,.2);padding-bottom:14px;margin-top:0;}
.col-main h2,.col-main h3{color:#52c9b9!important;font-family:'Cormorant Garamond',serif!important;font-size:1.15rem!important;font-weight:700!important;margin-top:28px;margin-bottom:10px;}
.col-main img{border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,.5),0 0 0 1px rgba(201,162,39,.1);margin:18px 0;max-width:100%;display:block;}
.col-main blockquote{border-left:3px solid #c9a227;padding:10px 15px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:#f0c84a!important;background:rgba(201,162,39,.06);border-radius:0 8px 8px 0;margin:18px 0;text-shadow:none!important;}
.col-main p,.col-main ul,.col-main ol{margin-bottom:14px;}
.col-main ul{padding-left:20px;}.col-main li{margin-bottom:8px;}
.col-main strong{color:#faeab1!important;}.col-main em{color:#52c9b9!important;font-style:italic;}

.col-right{position:sticky;top:100px;text-align:center;}
.cover-img{width:100%;border-radius:12px;margin-bottom:8px;box-shadow:0 0 22px rgba(0,0,0,.6),0 0 0 1px rgba(201,162,39,.12);}
.proj-title{font-family:'Cinzel Decorative',serif!important;font-size:1.05rem!important;color:#f0c84a!important;text-shadow:0 0 14px rgba(201,162,39,.4)!important;margin-bottom:18px;line-height:1.4;}
.btn-action{display:block;width:100%;padding:11px;border-radius:28px;margin-bottom:11px;text-decoration:none!important;font-weight:700;font-family:'Cormorant Garamond',serif;font-size:.97rem;letter-spacing:.05em;transition:all .3s;color:#fff!important;}
.btn-live{background:linear-gradient(135deg,#2a9d8f,#0e4f8f);box-shadow:0 4px 14px rgba(42,157,143,.4);}
.btn-live:hover{transform:translateY(-3px);box-shadow:0 0 20px rgba(42,157,143,.7);}
.btn-git{background:rgba(201,162,39,.1);border:1px solid rgba(201,162,39,.3);}
.btn-git:hover{background:rgba(201,162,39,.2);border-color:#c9a227;transform:translateY(-3px);box-shadow:0 4px 14px rgba(201,162,39,.3);}

@media(max-width:1024px){.project-grid{grid-template-columns:1fr;}.col-left,.col-right{position:relative;top:0;max-height:none;overflow:visible;}}
</style>

<div class="project-grid">

  <div class="glass-box col-left">
    <a href="/projects/" class="back-btn" >❮ Back to Collection</a>
    <div class="author-box">
      <img src="/assets/images/avatar.jpg" alt="Avatar">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    <p class="toc-title">🌙 Contents</p>
    <ul class="toc-list">
      <li><a href="#executive-summary">Executive Summary</a></li>
      <li><a href="#1-ideation">1. Ideation &amp; Motivation</a></li>
      <li><a href="#2-data-selection">2. Data Selection</a></li>
      <li><a href="#3-methodology">3. Methodology</a></li>
      <li><a href="#4-key-results">4. Key Results</a></li>
      <li><a href="#5-conclusion">5. Conclusion</a></li>
      <li><a href="#6-future-directions">6. Future Directions</a></li>
    </ul>
  </div>

  <div class="glass-box col-main">
    <h1>Global Tech Layoffs &amp; Macro-Economics Analysis</h1>

    <h3 id="executive-summary">Executive Summary: The Discovery Journey</h3>
    <blockquote>"I started with a simple hypothesis: Interest rates kill jobs. But the data told a different story."</blockquote>
    <p>My investigation went through 3 emotional stages:</p>
    <ol>
      <li><strong>The Assumption:</strong> I believed stock crashes caused immediate layoffs.<br>
      <em>*Discovery:</em> Data showed a consistent <strong>3-month lag</strong>.</li>
      <li><strong>The Confusion:</strong> My Rational Model predicted 10k layoffs in 2025, but reality hit 24k.<br>
      <em>*The Pivot:</em> I realized Economic Data wasn't enough.</li>
      <li><strong>The Realization:</strong> The missing variable was <strong>Human Psychology</strong> (Herd Mentality).<br>
      <em>*Result:</em> I pivoted from a pure technical analysis to a behavioral economics study.</li>
    </ol>

    <h3 id="1-ideation">1. Ideation &amp; Motivation</h3>
    <p>The genesis of this project came from a simple yet troubling observation: In early 2025, despite many tech giants reporting stable profits, thousands of employees were being laid off. As a double major in <strong>Data Science and Economics</strong>, I wanted to investigate whether these layoffs were purely operational necessities or strategic reactions to financial market pressure. I aimed to build a bridge between <strong>Macroeconomic Theory</strong> (The Fed) and <strong>Microeconomic Reality</strong> (The Employee).</p>

    <h3 id="2-data-selection">2. Data Selection Strategy</h3>
    <p>To build a holistic view, I curated three distinct datasets:</p>
    <ul>
      <li><strong>Macro Level:</strong> I chose <strong>FRED (Federal Reserve Economic Data)</strong> for Interest Rates and CPI because it is the "gold standard" for economic reliability.</li>
      <li><strong>Market Level:</strong> I used <strong>Yahoo Finance (yfinance)</strong> to track stock prices of Big Tech companies (MAMAA), serving as a proxy for shareholder sentiment.</li>
      <li><strong>Labor Level:</strong> I utilized <strong>Layoffs.fyi</strong>, a crowdsourced database, to get granular, company-specific layoff numbers.</li>
    </ul>

    <img src="/assets/images/top_industries_layoffs.png" alt="Top Industries">
    <p><em>Figure 1: Sector Vulnerability Analysis (SQL Aggregation). The data reveals that Retail and Consumer sectors—most sensitive to inflation and interest rates—suffered the highest volume of layoffs, validating the connection to macro-economic shifts.</em></p>

    <h3 id="3-methodology">3. Methodology &amp; Hypothesis</h3>
    <p>My core hypothesis was the <strong>"Lagged Transmission Theory"</strong>: <em>Economic shocks do not cause immediate layoffs; there is a delay while management assesses the damage.</em></p>
    <ul>
      <li><strong>Hypothesis:</strong> Stock market crashes precede layoffs by exactly one fiscal quarter (3 months).</li>
      <li><strong>Execution:</strong>
        <ol>
          <li><strong>Cleaning:</strong> I standardized daily stock data and monthly economic data into a unified time series.</li>
          <li><strong>Feature Engineering:</strong> This was the most critical step. I created <strong>Lagged Variables (t-1, t-2, t-3)</strong> to test if past stock returns predict future layoffs.</li>
          <li><strong>Modeling:</strong> I compared Linear Regression vs. <strong>Random Forest</strong> to capture non-linear patterns.</li>
        </ol>
      </li>
    </ul>

    <img src="/assets/images/advanced_recession_analysis.png" alt="Perfect Storm Chart">
    <p><em>Figure 2: "The Perfect Storm" (Dual-Axis Analysis). The blue line represents Meta's stock price, and the grey bars represent layoffs. Visual inspection confirms the hypothesis: a stock crash at month (t) is consistently followed by a layoff spike at month (t+3).</em></p>

    <h3 id="4-key-results">4. Key Results &amp; Critical Findings</h3>
    <ul>
      <li><strong>The "3-Month Rule":</strong> The data confirmed my hypothesis. A statistically significant correlation exists between a stock price drop at month t and a layoff spike at month t+3.</li>
      <li><strong>Feature Importance:</strong> The Machine Learning model independently validated the economic theory. As shown below, the model ranked "Lagged Stock Returns" and "Interest Rates" as the most critical predictors for layoffs.</li>
    </ul>

    <img src="/assets/images/feature_importance.png" alt="Feature Importance">
    <p><em>Figure 3: Random Forest Feature Importance. The model identifies 'Interest Rate' and 'Lagged Returns' as the primary drivers of layoffs, outweighing other factors.</em></p>

    <ul>
      <li><strong>The "Social Contagion" Discovery:</strong> While my Machine Learning model correctly predicted the <em>rising trend</em> of layoffs in 2025, it underestimated the <em>magnitude</em> (predicting ~10k vs. actual ~24k).
        <ul>
          <li><em>Insight:</em> This suggests that the 2025 spike was driven by <strong>Herd Mentality</strong>. Companies laid off workers not just for financial reasons, but to mimic competitors.</li>
        </ul>
      </li>
    </ul>

    <img src="/assets/images/model_prediction_comparison.png" alt="Prediction vs Reality">
    <p><em>Figure 4: Forecast vs. Reality. The Green line (ML Prediction) captures the upward trend but fails to reach the peak of the Black line (Actual). This gap represents the "Psychological Factor" or Social Contagion that standard economic models miss.</em></p>

    <h3 id="5-conclusion">5. Conclusion</h3>
    <p>This project has been a <strong>transformative journey</strong> for me as a student exploring the intersection of <strong>numbers and human behavior</strong>. While the <strong>Random Forest model</strong> identified the patterns, the unexplained gap in the <strong>2025 data</strong> helped me ultilize the true power of <strong>social contagion</strong>. It proved that behind every data point lies a story of <strong>collective psychology</strong> that no algorithm can fully capture. This experience has deeply reinforced my belief that <strong>Data Science provides the "What" but Economics provides the "Why"</strong>. Moving forward, I am more inspired than ever to look <strong>beyond the code</strong> to find the heart of every story.</p>

    <h3 id="6-future-directions">6. Future Directions</h3>
    <p>To further refine this analysis, future iterations of this project should focus on:</p>
    <ul>
      <li><strong>Sentiment Analysis (NLP):</strong> Integrating news sentiment data (via GDELT or Financial Times APIs) to quantify the "Social Contagion" factor directly.</li>
      <li><strong>Granular Sector Analysis:</strong> Breaking down layoffs by specific roles (e.g., HR vs. Engineering) to see which departments are leading indicators of recession.</li>
    </ul>
  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/dashboard_preview.png" alt="Dashboard" class="cover-img">
    <h2 class="proj-title">Tech Layoffs Dashboard</h2>
    <div class="proj-skills">
      <span class="proj-skill">Python</span>
      <span class="proj-skill">Pandas</span>
      <span class="proj-skill">Scikit-Learn</span>
      <span class="proj-skill">NumPy</span>
      <span class="proj-skill">SQLite</span>
      <span class="proj-skill">FRED API</span>
      <span class="proj-skill">yfinance</span>
      <span class="proj-skill">Streamlit</span>
      <span class="proj-skill">Tableau</span>
      <span class="proj-skill">Matplotlib</span>
      <span class="proj-skill">Seaborn</span>
    </div>
    <hr class="proj-divider">
    <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-action btn-live"><i class="fas fa-chart-line"></i> View Live App</a>
    <a href="https://github.com/aansensei/Tech_Layoff_Project" target="_blank" class="btn-action btn-git"><i class="fab fa-github"></i> Source Code</a>
  </div>

</div>

<style>
/* Local overlay styles (fallback) */
#an-book-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(2,1,10,.97);backdrop-filter:blur(18px);z-index:999999;display:block;opacity:0;pointer-events:none;transition:opacity .3s;perspective:1200px;}
.an-book{width:220px;height:340px;position:absolute;top:50%;left:50%;transform-style:preserve-3d;}
.an-book-back,.an-book-p1,.an-book-p2,.an-book-p3,.an-book-front{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:5px 14px 14px 5px;transform-origin:left center;transform-style:preserve-3d;transition:transform 1s cubic-bezier(.25,1,.5,1);}
.an-book-back{background:#06031a;transform:translateZ(-6px);}
.an-book-p1{background:linear-gradient(to left,#d0c8b0,#ede8d8);border:1px solid #ccc;transform:translateZ(-4px);}
.an-book-p2{background:linear-gradient(to right,#d8d0bc,#f0ece0);border:1px solid #ccc;transform:translateZ(-2px);}
.an-book-p3{background:linear-gradient(to left,#d4ccbc,#ece8e0);border:1px solid #ccc;transform:translateZ(0);}
.an-book-front{border:1px solid rgba(201,162,39,.35);box-shadow:0 0 30px rgba(0,0,0,.6),0 0 20px rgba(201,162,39,.4);display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;transform:translateZ(2px);}
.an-book-front h3{color:#fff!important;font-family:'Cinzel Decorative',serif!important;font-size:1.3rem!important;text-shadow:0 0 14px rgba(255,255,255,.7)!important;margin:0!important;pointer-events:none!important;}
</style>

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
.proj-skills{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px;justify-content:center;}
.proj-skill{font-family:'Cormorant Garamond',serif;font-size:.8rem;padding:3px 10px;background:rgba(201,162,39,.1);border:1px solid rgba(201,162,39,.3);border-radius:14px;color:#c9a227!important;}
.proj-divider{border:none;border-top:1px solid rgba(201,162,39,.2);margin:0 0 14px;}
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
