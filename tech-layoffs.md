---
layout: splash
title: "Tech Layoffs Analysis"
permalink: /projects/tech-layoffs/
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- ÉP THEME XÓA NỀN TRẮNG ĐỂ THẤY VAN GOGH --- */
  .page__inner-wrap {
    max-width: 1400px !important; 
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 20px !important;
  }
  
  /* --- GRID 3 CỘT --- */
  .project-grid {
    display: grid;
    grid-template-columns: 250px 1fr 280px; 
    gap: 25px;
    margin-top: 30px;
    margin-bottom: 50px;
    align-items: start;
  }

  /* --- HIỆU ỨNG KÍNH MỜ --- */
  .glass-box {
    background: rgba(10, 25, 47, 0.65);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  /* --- CỘT TRÁI --- */
  .col-left { position: sticky; top: 100px; }
  
  .back-btn { 
    display: flex; align-items: center; gap: 10px; color: #00e5ff; 
    text-decoration: none; font-weight: bold; margin-bottom: 25px; transition: 0.3s; 
    cursor: pointer;
  }
  .back-btn:hover { color: #fff; transform: translateX(-5px); text-decoration: none;}
  
  .author-box { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 20px; }
  .author-box img { width: 90px; height: 90px; border-radius: 50%; border: 2px solid #00e5ff; object-fit: cover; box-shadow: 0 0 15px rgba(0,229,255,0.4); }
  .author-box h3 { margin: 10px 0 0; color: #fff; font-family: 'Playfair Display', serif; font-size: 1.2rem; }
  
  .toc-title { color: #f72585; font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
  .toc-list { list-style: none; padding: 0; margin: 0; }
  .toc-list li { margin-bottom: 12px; }
  .toc-list a { color: #e6f1ff; text-decoration: none; font-size: 0.95rem; transition: 0.2s; }
  .toc-list a:hover { color: #00e5ff; padding-left: 5px; }

  /* --- CỘT GIỮA --- */
  .col-main { min-height: 800px; color: #e6f1ff; line-height: 1.8; }
  .col-main h1 { font-family: 'Playfair Display', serif; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-top: 0; }
  .col-main h2, .col-main h3 { color: #00e5ff; font-family: 'Playfair Display', serif; margin-top: 30px; }
  .col-main img { border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); margin: 20px 0; max-width: 100%; display: block; }
  .col-main blockquote { border-left: 4px solid #00e5ff; padding-left: 15px; font-style: italic; color: #a0c4ff; background: rgba(0, 229, 255, 0.05); border-radius: 0 8px 8px 0; margin: 20px 0;}

  /* --- CỘT PHẢI --- */
  .col-right { position: sticky; top: 100px; text-align: center; }
  .cover-img { width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
  .proj-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #fff; margin-bottom: 25px; text-shadow: 0 0 10px rgba(0,229,255,0.4); }
  
  .btn-action { 
    display: block; width: 100%; padding: 12px; border-radius: 30px; margin-bottom: 15px; 
    text-decoration: none !important; font-weight: bold; transition: all 0.3s; color: #fff !important; 
  }
  .btn-live { background: linear-gradient(45deg, #d32f2f, #f44336); box-shadow: 0 4px 15px rgba(211,47,47,0.4); }
  .btn-live:hover { background: linear-gradient(45deg, #f44336, #ff7961); transform: translateY(-3px); }
  
  .btn-git { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(5px); }
  .btn-git:hover { background: #00e5ff; color: #000 !important; transform: translateY(-3px); box-shadow: 0 4px 15px rgba(0,229,255,0.4); border-color: transparent;}

  /* ======================================================= */
  /* MÀN HÌNH CHUYỂN CẢNH (ĐÓNG SÁCH 3D CSS)                 */
  /* ======================================================= */
  #book-transition-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(10, 25, 47, 0.98); backdrop-filter: blur(15px);
    z-index: 999999; display: flex; justify-content: center; align-items: center;
    opacity: 0; pointer-events: none; transition: opacity 0.5s;
    perspective: 1500px;
  }

  .book-3d-wrapper {
    width: 230px; height: 380px; position: relative; transform-style: preserve-3d;
    transform: rotateX(0deg) scale(3.5) translateY(20px); 
    transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1); 
  }
  .book-3d-wrapper.zoom-out {
    transform: rotateX(10deg) scale(0.6); 
  }

  .book-3d-cover-front, .book-3d-cover-back, .book-3d-page {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    border-radius: 8px 18px 18px 8px; transform-origin: left center;
    transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1); transform-style: preserve-3d;
  }

  .book-3d-cover-back { background: #111; z-index: 1; transform: translateZ(-10px); }
  
  .book-3d-cover-front {
    z-index: 10;
    background: linear-gradient(135deg, #09141d 0%, #1c3a4a 100%); 
    border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 0 30px rgba(0,0,0,0.5);
    transform: rotateY(-160deg); 
  }

  .book-3d-page { background: #f5f5f5; border: 1px solid #ccc; z-index: 5; }
  
  .book-3d-page:nth-child(2) { transform: rotateY(-150deg); transition-delay: 0.1s; }
  .book-3d-page:nth-child(3) { transform: rotateY(-140deg); transition-delay: 0.2s; }
  .book-3d-page:nth-child(4) { transform: rotateY(-130deg); transition-delay: 0.3s; }
  .book-3d-page:nth-child(5) { transform: rotateY(-120deg); transition-delay: 0.4s; background: #fff;}

  .book-3d-wrapper.close .book-3d-cover-front { transform: rotateY(0deg); }
  .book-3d-wrapper.close .book-3d-page { transform: rotateY(0deg); transition-delay: 0s; }

  /* Mobile Responsive */
  @media (max-width: 1024px) {
    .project-grid { grid-template-columns: 1fr; }
    .col-left, .col-right { position: relative; top: 0; }
  }
</style>

<div class="project-grid">

  <div class="glass-box col-left">
    <a href="/projects/" class="back-btn" onclick="triggerBookClose('/projects/', event)"><i class="fas fa-arrow-left"></i> Back to Collection</a>
    
    <div class="author-box">
      <img src="/assets/images/avatar.jpg" alt="Avatar">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    
    <h4 class="toc-title"><i class="fas fa-list-ul"></i> Table of Contents</h4>
    <ul class="toc-list">
      <li><a href="#executive-summary-the-discovery-journey">Executive Summary</a></li>
      <li><a href="#1-ideation--motivation">1. Ideation & Motivation</a></li>
      <li><a href="#2-data-selection-strategy">2. Data Selection</a></li>
      <li><a href="#3-methodology--hypothesis">3. Methodology</a></li>
      <li><a href="#4-key-results--critical-findings">4. Key Results</a></li>
      <li><a href="#5-conclusion">5. Conclusion</a></li>
      <li><a href="#6-future-directions">6. Future Directions</a></li>
    </ul>
  </div>

  <div class="glass-box col-main" markdown="1">

# Global Tech Layoffs & Macro-Economics Analysis

### Executive Summary: The Discovery Journey
> "I started with a simple hypothesis: Interest rates kill jobs. But the data told a different story."

My investigation went through 3 emotional stages:
1.  **The Assumption:** I believed stock crashes caused immediate layoffs.
    * *Discovery:* Data showed a consistent **3-month lag**.
2.  **The Confusion:** My Rational Model predicted 10k layoffs in 2025, but reality hit 24k.
    * *The Pivot:* I realized Economic Data wasn't enough.
3.  **The Realization:** The missing variable was **Human Psychology** (Herd Mentality).
    * *Result:* I pivoted from a pure technical analysis to a behavioral economics study.

### 1. Ideation & Motivation
The genesis of this project came from a simple yet troubling observation: In early 2025, despite many tech giants reporting stable profits, thousands of employees were being laid off. As a double major in **Data Science and Economics**, I wanted to investigate whether these layoffs were purely operational necessities or strategic reactions to financial market pressure. I aimed to build a bridge between **Macroeconomic Theory** (The Fed) and **Microeconomic Reality** (The Employee).

### 2. Data Selection Strategy
To build a holistic view, I curated three distinct datasets:
* **Macro Level:** I chose **FRED (Federal Reserve Economic Data)** for Interest Rates and CPI because it is the "gold standard" for economic reliability.
* **Market Level:** I used **Yahoo Finance (yfinance)** to track stock prices of Big Tech companies (MAMAA), serving as a proxy for shareholder sentiment.
* **Labor Level:** I utilized **Layoffs.fyi**, a crowdsourced database, to get granular, company-specific layoff numbers.

![Top Industries](/assets/images/top_industries_layoffs.png)
*Figure 1: Sector Vulnerability Analysis (SQL Aggregation). The data reveals that Retail and Consumer sectors—most sensitive to inflation and interest rates—suffered the highest volume of layoffs, validating the connection to macro-economic shifts.*

### 3. Methodology & Hypothesis
My core hypothesis was the **"Lagged Transmission Theory"**: *Economic shocks do not cause immediate layoffs; there is a delay while management assesses the damage.*

* **Hypothesis:** Stock market crashes precede layoffs by exactly one fiscal quarter (3 months).
* **Execution:**
    1.  **Cleaning:** I standardized daily stock data and monthly economic data into a unified time series.
    2.  **Feature Engineering:** This was the most critical step. I created **Lagged Variables (t-1, t-2, t-3)** to test if past stock returns predict future layoffs.
    3.  **Modeling:** I compared Linear Regression vs. **Random Forest** to capture non-linear patterns.

![Perfect Storm Chart](/assets/images/advanced_recession_analysis.png)
*Figure 2: "The Perfect Storm" (Dual-Axis Analysis). The blue line represents Meta's stock price, and the grey bars represent layoffs. Visual inspection confirms the hypothesis: a stock crash at month (t) is consistently followed by a layoff spike at month (t+3).*

### 4. Key Results & Critical Findings
* **The "3-Month Rule":** The data confirmed my hypothesis. A statistically significant correlation exists between a stock price drop at month t and a layoff spike at month t+3.
* **Feature Importance:** The Machine Learning model independently validated the economic theory. As shown below, the model ranked "Lagged Stock Returns" and "Interest Rates" as the most critical predictors for layoffs.

![Feature Importance](/assets/images/feature_importance.png)
*Figure 3: Random Forest Feature Importance. The model identifies 'Interest Rate' and 'Lagged Returns' as the primary drivers of layoffs, outweighing other factors.*

* **The "Social Contagion" Discovery:** While my Machine Learning model correctly predicted the *rising trend* of layoffs in 2025, it underestimated the *magnitude* (predicting ~10k vs. actual ~24k).
    * *Insight:* This suggests that the 2025 spike was driven by **Herd Mentality**. Companies laid off workers not just for financial reasons, but to mimic competitors.

![Prediction vs Reality](/assets/images/model_prediction_comparison.png)
*Figure 4: Forecast vs. Reality. The Green line (ML Prediction) captures the upward trend but fails to reach the peak of the Black line (Actual). This gap represents the "Psychological Factor" or Social Contagion that standard economic models miss.*

### 5. Conclusion
This project has been a **transformative journey** for me as a student exploring the intersection of **numbers and human behavior**. While the **Random Forest model** identified the patterns, the unexplained gap in the **2025 data** helped me ultilize the true power of **social contagion**. It proved that behind every data point lies a story of **collective psychology** that no algorithm can fully capture. This experience has deeply reinforced my belief that **Data Science provides the "What" but Economics provides the "Why"**. Moving forward, I am more inspired than ever to look **beyond the code** to find the heart of every story.

### 6. Future Directions
To further refine this analysis, future iterations of this project should focus on:
* **Sentiment Analysis (NLP):** Integrating news sentiment data (via GDELT or Financial Times APIs) to quantify the "Social Contagion" factor directly.
* **Granular Sector Analysis:** Breaking down layoffs by specific roles (e.g., HR vs. Engineering) to see which departments are leading indicators of recession.

  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/dashboard_preview.png" alt="Tableau Dashboard" class="cover-img">
    
    <h2 class="proj-title">Tech Layoffs Dashboard</h2>
    
    <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-action btn-live"><i class="fas fa-chart-line"></i> View Live App</a>
    <a href="https://github.com/aansensei/Tech_Layoff_Project" target="_blank" class="btn-action btn-git"><i class="fab fa-github"></i> Source Code</a>
  </div>

</div>

<div id="book-transition-overlay">
  <div class="book-3d-wrapper" id="book-3d">
    <div class="book-3d-cover-back"></div>
    <div class="book-3d-page"></div>
    <div class="book-3d-page"></div>
    <div class="book-3d-page"></div>
    <div class="book-3d-page"></div>
    <div class="book-3d-cover-front"></div>
  </div>
</div>

<script>
  function triggerBookClose(url, event) {
    event.preventDefault();
    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');

    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';

    setTimeout(() => {
      book.classList.add('close');
      book.classList.add('zoom-out');
    }, 100);

    setTimeout(() => {
      window.location.href = url;
    }, 1600);
  }
</script>
